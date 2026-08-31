import { a as normalizeRetryDistribution, i as normalizeBreakdownRows } from "./client-C3Myktu5.mjs";
import { r as useQuery, s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as LoadingBlock, d as formatPct, i as KpiCard, l as formatInr, o as PageHeader, r as ErrorBlock, s as Panel } from "./format-C6bmXaSy.mjs";
import { a as recoveryBreakdownQuery, n as businessImpactQuery, o as retryDistributionQuery } from "./queries-Bhk5U8lR.mjs";
import { i as RetryDistributionChart, t as BreakdownChart } from "./charts-C4e4AtYs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/business-impact-nvZ6gpOi.js
var import_jsx_runtime = require_jsx_runtime();
function BusinessImpact() {
	const impact = useQuery(businessImpactQuery);
	const declineBreakdown = useQuery(recoveryBreakdownQuery("decline_reason"));
	const paymentBreakdown = useQuery(recoveryBreakdownQuery("payment_method"));
	const amountBreakdown = useQuery(recoveryBreakdownQuery("amount_band"));
	const distribution = useQuery(retryDistributionQuery);
	const fixed = impact.data?.fixed_schedule ?? {};
	const smart = impact.data?.smart_retry ?? {};
	const incremental = impact.data?.incremental ?? {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Business impact",
				title: "What smarter retry timing is worth",
				description: "Side-by-side simulated outcomes for a fixed retry schedule and the Smart Retry policy."
			}),
			impact.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingBlock, { rows: 4 }),
			impact.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBlock, {
				message: "Could not load business impact.",
				onRetry: () => impact.refetch()
			}),
			impact.data && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: !impact.data.outcome_data_available ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Outcome metrics unavailable",
				description: impact.data.outcome_unavailable_message ?? impact.data.limitations[0] ?? "The selected dataset contains inference inputs only."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Fixed schedule",
						value: formatInr(Number(fixed.recovered_inr ?? 0)),
						sub: `${formatPct(Number(fixed.recovery_rate ?? 0) * 100, 1)} recovery rate`,
						tone: "peach"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Smart Retry",
						value: formatInr(Number(smart.recovered_inr ?? 0)),
						sub: `${formatPct(Number(smart.recovery_rate ?? 0) * 100, 1)} recovery rate`,
						tone: "mint"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Incremental revenue",
						value: formatInr(Number(incremental.recovered_inr ?? 0)),
						tone: "lavender"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Lift",
						value: formatPct(Number(incremental.recovered_inr_lift_pct ?? 0) * 100, 1),
						tone: "sky"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: impact.data.limitations.length > 0 ? impact.data.limitations[0] : "Results are from the validated synthetic evaluation artifacts."
			})] }) }),
			impact.data?.outcome_data_available && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						title: "By decline reason",
						description: "Recovered value per failure category.",
						children: [
							declineBreakdown.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingBlock, { rows: 4 }),
							declineBreakdown.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBlock, {
								message: "Could not load breakdown.",
								onRetry: () => declineBreakdown.refetch()
							}),
							declineBreakdown.data && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreakdownChart, { rows: normalizeBreakdownRows(declineBreakdown.data) })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "By payment method",
						description: "Recovered value per instrument type.",
						children: paymentBreakdown.data && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreakdownChart, {
							rows: normalizeBreakdownRows(paymentBreakdown.data),
							height: 280
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "By amount band",
						description: "Recovered value per ticket size.",
						children: amountBreakdown.data && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreakdownChart, {
							rows: normalizeBreakdownRows(amountBreakdown.data),
							height: 280
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						title: "Selected retry timing",
						description: "How often each retry offset is chosen, and how it performs.",
						children: [
							distribution.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingBlock, { rows: 4 }),
							distribution.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBlock, {
								message: "Could not load retry distribution.",
								onRetry: () => distribution.refetch()
							}),
							distribution.data && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RetryDistributionChart, { buckets: normalizeRetryDistribution(distribution.data) })
						]
					})
				]
			})
		]
	});
}
//#endregion
export { BusinessImpact as component };
