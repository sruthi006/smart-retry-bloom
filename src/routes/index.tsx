import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ComparisonBarChart, RecoveryRateChart } from "@/components/app/charts";
import {
  ErrorBlock,
  KpiCard,
  LoadingBlock,
  PageHeader,
  Panel,
} from "@/components/app/primitives";
import { dashboardQuery, confidenceQuery } from "@/lib/api/queries";
import { formatInr, formatNumber, formatPct } from "@/lib/format";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Retry — AI Revenue Recovery Command Center" },
      {
        name: "description",
        content:
          "Simulated command center comparing fixed-schedule retries with AI-timed Smart Retry recovery on failed payments.",
      },
      { property: "og:title", content: "Smart Retry — AI Revenue Recovery Command Center" },
      {
        property: "og:description",
        content:
          "Simulated command center comparing fixed-schedule retries with AI-timed Smart Retry recovery on failed payments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const dashboard = useQuery(dashboardQuery);
  const confidence = useQuery(confidenceQuery);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Command center"
        title="Recover revenue lost to failed payments"
        description="Smart Retry scores every failed payment, picks the retry moment with the highest calibrated success probability, and stops low-confidence retries. All figures below come from a synthetic policy simulation."
      />

      {dashboard.isLoading && <LoadingBlock rows={4} />}
      {dashboard.isError && (
        <ErrorBlock message="Could not load dashboard metrics." onRetry={() => dashboard.refetch()} />
      )}

      {dashboard.data && (
        <>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <KpiCard
              label="Failed payments"
              value={formatNumber(dashboard.data.kpis.total_failed_payments)}
              sub={`${formatNumber(dashboard.data.kpis.eligible_for_recovery)} eligible for retry`}
              tone="sky"
            />
            <KpiCard
              label="Fixed schedule recovered"
              value={formatInr(dashboard.data.kpis.fixed_schedule_recovered_inr)}
              sub="Baseline policy"
              tone="peach"
            />
            <KpiCard
              label="Smart Retry recovered"
              value={formatInr(dashboard.data.kpis.smart_retry_recovered_inr)}
              sub="AI-timed bounded retries"
              tone="mint"
            />
            <KpiCard
              label="Incremental revenue"
              value={formatInr(dashboard.data.kpis.incremental_revenue_inr)}
              sub={`${formatPct(dashboard.data.kpis.recovery_lift_pct, 1)} lift`}
              tone="lavender"
            />
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <Panel
              title="Recovered revenue by strategy"
              description="Simulated recovered value, fixed schedule vs Smart Retry."
            >
              <ComparisonBarChart
                data={[
                  {
                    label: "Recovered value",
                    fixed: dashboard.data.kpis.fixed_schedule_recovered_inr,
                    smart: dashboard.data.kpis.smart_retry_recovered_inr,
                  },
                ]}
              />
            </Panel>
            <Panel
              title="Recovery rate by strategy"
              description="Share of eligible failed payments recovered."
            >
              <RecoveryRateChart
                data={[
                  {
                    label: "Recovery rate",
                    fixed: dashboard.data.strategies[0]?.recovery_rate_pct ?? 0,
                    smart: dashboard.data.strategies[1]?.recovery_rate_pct ?? 0,
                  },
                ]}
              />
            </Panel>
          </div>
        </>
      )}

      <Panel
        title="Confidence-tier behaviour"
        description={confidence.data?.insight ?? "How the agent behaves across confidence tiers."}
      >
        {confidence.isLoading && <LoadingBlock rows={3} />}
        {confidence.isError && (
          <ErrorBlock message="Could not load confidence tiers." onRetry={() => confidence.refetch()} />
        )}
        {confidence.data && (
          <div className="grid gap-4 sm:grid-cols-3">
            {confidence.data.tiers.map((t) => (
              <div key={t.tier} className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm font-semibold text-foreground">{t.label} confidence</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {formatNumber(t.transactions)} transactions
                </p>
                <p className="mt-3 font-display text-xl font-semibold text-foreground">
                  {formatInr(t.incremental_inr)}
                </p>
                <p className="text-xs text-muted-foreground">incremental vs baseline</p>
              </div>
            ))}
          </div>
        )}
      </Panel>
    </div>
  );
}
