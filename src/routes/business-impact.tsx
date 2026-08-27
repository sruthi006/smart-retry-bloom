import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { BreakdownChart, RetryDistributionChart } from "@/components/app/charts";
import { ErrorBlock, KpiCard, LoadingBlock, PageHeader, Panel } from "@/components/app/primitives";
import {
  businessImpactQuery,
  recoveryBreakdownQuery,
  retryDistributionQuery,
} from "@/lib/api/queries";
import { formatInr, formatPct } from "@/lib/format";

export const Route = createFileRoute("/business-impact")({
  head: () => ({
    meta: [
      { title: "Business Impact — Smart Retry" },
      {
        name: "description",
        content:
          "Simulated revenue impact of AI-timed payment retries: incremental revenue, lift, and breakdowns by decline reason, method and amount band.",
      },
      { property: "og:title", content: "Business Impact — Smart Retry" },
      {
        property: "og:description",
        content:
          "Simulated revenue impact of AI-timed payment retries, with breakdowns by decline reason, payment method and amount band.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BusinessImpact,
});

function BusinessImpact() {
  const impact = useQuery(businessImpactQuery);
  const breakdown = useQuery(recoveryBreakdownQuery);
  const distribution = useQuery(retryDistributionQuery);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Business impact"
        title="What smarter retry timing is worth"
        description="Side-by-side simulated outcomes for a fixed retry schedule and the Smart Retry policy."
      />

      {impact.isLoading && <LoadingBlock rows={4} />}
      {impact.isError && (
        <ErrorBlock message="Could not load business impact." onRetry={() => impact.refetch()} />
      )}
      {impact.data && (
        <>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <KpiCard
              label="Fixed schedule"
              value={formatInr(impact.data.fixed_schedule_inr)}
              sub={`${formatPct(impact.data.fixed_schedule_rate_pct, 1)} recovery rate`}
              tone="peach"
            />
            <KpiCard
              label="Smart Retry"
              value={formatInr(impact.data.smart_retry_inr)}
              sub={`${formatPct(impact.data.smart_retry_rate_pct, 1)} recovery rate`}
              tone="mint"
            />
            <KpiCard
              label="Incremental revenue"
              value={formatInr(impact.data.incremental_inr)}
              tone="lavender"
            />
            <KpiCard label="Lift" value={formatPct(impact.data.lift_pct, 1)} tone="sky" />
          </div>
          <p className="text-xs text-muted-foreground">{impact.data.methodology_note}</p>
        </>
      )}

      <div className="grid gap-6 xl:grid-cols-2">
        <Panel title="By decline reason" description="Recovered value per failure category.">
          {breakdown.isLoading && <LoadingBlock rows={4} />}
          {breakdown.isError && (
            <ErrorBlock message="Could not load breakdown." onRetry={() => breakdown.refetch()} />
          )}
          {breakdown.data && <BreakdownChart rows={breakdown.data.by_decline_reason} />}
        </Panel>
        <Panel title="By payment method" description="Recovered value per instrument type.">
          {breakdown.data && <BreakdownChart rows={breakdown.data.by_payment_method} height={280} />}
        </Panel>
        <Panel title="By amount band" description="Recovered value per ticket size.">
          {breakdown.data && <BreakdownChart rows={breakdown.data.by_amount_band} height={280} />}
        </Panel>
        <Panel
          title="Selected retry timing"
          description="How often each retry offset is chosen, and how it performs."
        >
          {distribution.isLoading && <LoadingBlock rows={4} />}
          {distribution.isError && (
            <ErrorBlock
              message="Could not load retry distribution."
              onRetry={() => distribution.refetch()}
            />
          )}
          {distribution.data && <RetryDistributionChart buckets={distribution.data.buckets} />}
        </Panel>
      </div>
    </div>
  );
}
