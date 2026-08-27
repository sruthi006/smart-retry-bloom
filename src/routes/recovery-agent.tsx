import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  ConfidencePill,
  ErrorBlock,
  LoadingBlock,
  PageHeader,
  Panel,
  ResultPill,
} from "@/components/app/primitives";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api/client";
import { transactionsQuery } from "@/lib/api/queries";
import type { PredictResponse, SimulateResponse, TransactionContext } from "@/lib/api/types";
import { formatInr, formatPct, formatTimestamp } from "@/lib/format";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/recovery-agent")({
  head: () => ({
    meta: [
      { title: "Recovery Agent — Smart Retry" },
      {
        name: "description",
        content:
          "Pick a failed payment and watch the agent check eligibility, score retry windows, recommend a time and run a bounded simulated retry.",
      },
      { property: "og:title", content: "Recovery Agent — Smart Retry" },
      {
        property: "og:description",
        content:
          "Score retry windows, recommend the best retry time and run a bounded simulated recovery action.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecoveryAgent,
});

function RecoveryAgent() {
  const transactions = useQuery(transactionsQuery);
  const [selected, setSelected] = useState<TransactionContext | null>(null);
  const [prediction, setPrediction] = useState<PredictResponse | null>(null);
  const [outcome, setOutcome] = useState<SimulateResponse | null>(null);

  const predict = useMutation({
    mutationFn: (ctx: TransactionContext) => api.predict(ctx),
    onSuccess: (data) => {
      setPrediction(data);
      setOutcome(null);
    },
    onError: () => toast.error("Prediction request failed."),
  });

  const simulate = useMutation({
    mutationFn: ({ ctx, pred }: { ctx: TransactionContext; pred: PredictResponse }) =>
      api.simulate(ctx, pred),
    onSuccess: (data) => setOutcome(data),
    onError: () => toast.error("Simulated retry failed."),
  });

  function choose(ctx: TransactionContext) {
    setSelected(ctx);
    setPrediction(null);
    setOutcome(null);
    predict.mutate(ctx);
  }

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Recovery agent"
        title="Analyze a failed payment"
        description="Select a failed transaction to see eligibility, scored retry windows, the recommended retry time, and a bounded simulated recovery action."
      />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
        <Panel title="Failed payments" description="Synthetic queue of recoverable failures.">
          {transactions.isLoading && <LoadingBlock rows={6} />}
          {transactions.isError && (
            <ErrorBlock
              message="Could not load transactions."
              onRetry={() => transactions.refetch()}
            />
          )}
          <div className="space-y-2">
            {transactions.data?.transactions.map((t) => (
              <button
                key={t.transaction_id}
                type="button"
                onClick={() => choose(t)}
                className={cn(
                  "w-full rounded-xl border border-border bg-card p-3 text-left transition-colors hover:bg-accent",
                  selected?.transaction_id === t.transaction_id && "border-primary bg-accent",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {t.transaction_id}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {formatInr(t.amount_inr)}
                  </span>
                </div>
                <p className="mt-1 text-xs text-foreground">{t.decline_reason}</p>
                <p className="text-[11px] text-muted-foreground">
                  {t.payment_method} · {formatTimestamp(t.failed_at)}
                </p>
              </button>
            ))}
          </div>
        </Panel>

        <div className="space-y-6">
          {!selected && (
            <Panel>
              <p className="text-sm text-muted-foreground">
                Select a failed payment to run the recovery workflow.
              </p>
            </Panel>
          )}

          {selected && predict.isPending && (
            <Panel title="Analyzing">
              <LoadingBlock rows={4} />
            </Panel>
          )}

          {selected && prediction && (
            <>
              <Panel
                title="Recommendation"
                description={prediction.context_summary}
                action={<ConfidencePill tier={prediction.confidence_tier} />}
              >
                <div className="grid gap-4 sm:grid-cols-3">
                  <Stat label="Eligibility" value={prediction.eligible ? "Eligible" : "Not eligible"} />
                  <Stat label="Recommended retry" value={prediction.recommended_offset_label} />
                  <Stat
                    label="Calibrated probability"
                    value={formatPct(prediction.calibrated_probability * 100, 1)}
                  />
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  {prediction.eligibility_reason}
                </p>
              </Panel>

              <Panel
                title="Scored retry windows"
                description="Calibrated success probability for each candidate retry time."
              >
                <div className="space-y-2">
                  {prediction.candidates.map((c) => {
                    const best = c.offset_label === prediction.recommended_offset_label;
                    return (
                      <div key={c.offset_label} className="flex items-center gap-3">
                        <span className="w-10 text-xs text-muted-foreground">{c.offset_label}</span>
                        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                          <div
                            className={cn("h-full rounded-full", best ? "bg-primary" : "bg-sky")}
                            style={{ width: `${Math.round(c.probability * 100)}%` }}
                          />
                        </div>
                        <span className="w-14 text-right text-xs text-foreground">
                          {formatPct(c.probability * 100, 1)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Panel>

              <Panel
                title="Bounded recovery action"
                description="A single simulated retry attempt. No live payment gateway is contacted."
              >
                <Button
                  onClick={() => simulate.mutate({ ctx: selected, pred: prediction })}
                  disabled={simulate.isPending}
                >
                  {simulate.isPending ? "Running simulation…" : "Run simulated retry"}
                </Button>

                {outcome && (
                  <div className="mt-5 rounded-xl border border-border bg-card p-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <ResultPill result={outcome.result} />
                      <span className="text-xs text-muted-foreground">
                        {formatTimestamp(outcome.executed_at)}
                      </span>
                      <span className="ml-auto text-sm font-semibold text-foreground">
                        {formatInr(outcome.recovered_amount_inr)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{outcome.message}</p>
                  </div>
                )}
              </Panel>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">{label}</p>
      <p className="mt-2 text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}
