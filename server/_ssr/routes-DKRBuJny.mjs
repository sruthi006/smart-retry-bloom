import { r as useQuery, s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as LoadingBlock, d as formatPct, i as KpiCard, l as formatInr, n as EmptyBlock, o as PageHeader, r as ErrorBlock, s as Panel, u as formatNumber } from "./format-C6bmXaSy.mjs";
import { i as dashboardQuery, r as confidenceQuery } from "./queries-Bhk5U8lR.mjs";
import { n as ComparisonBarChart, r as RecoveryRateChart } from "./charts-C4e4AtYs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DKRBuJny.js
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	const dashboard = useQuery(dashboardQuery);
	const confidence = useQuery(confidenceQuery);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Command center",
				title: "Recover revenue lost to failed payments",
				description: "Smart Retry scores every failed payment, picks the retry moment with the highest calibrated success probability, and stops low-confidence retries. All figures below come from a synthetic policy simulation."
			}),
			dashboard.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingBlock, { rows: 4 }),
			dashboard.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBlock, {
				message: "Could not load dashboard metrics.",
				onRetry: () => dashboard.refetch()
			}),
			dashboard.data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Data Source",
					description: "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Source:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: dashboard.data.dataset_source === "upload" ? "Selected uploaded CSV" : "Validated demo evaluation dataset"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Model:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: "Existing trained model (not retrained)"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Available metrics:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: dashboard.data.outcome_data_available ? "Observed-outcome policy comparison" : "Inference recommendations"
								})]
							})
						]
					})
				}),
				!dashboard.data.outcome_data_available && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Outcome metrics unavailable",
					description: dashboard.data.outcome_unavailable_message ?? "This dataset contains inference inputs only."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
							label: "Failed payments",
							value: formatNumber(dashboard.data.total_failed_transactions),
							sub: `${formatNumber(dashboard.data.eligible_transactions)} eligible for retry`,
							tone: "sky"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
							label: dashboard.data.outcome_data_available ? "Fixed schedule recovered" : "Recommendations processed",
							value: dashboard.data.outcome_data_available ? formatInr(dashboard.data.fixed_recovered_inr) : formatNumber(dashboard.data.eligible_transactions),
							sub: dashboard.data.outcome_data_available ? "Baseline policy" : "Eligible for Smart Retry",
							tone: "peach"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
							label: dashboard.data.outcome_data_available ? "Smart Retry recovered" : "Outcome data",
							value: dashboard.data.outcome_data_available ? formatInr(dashboard.data.smart_recovered_inr) : "Unavailable",
							sub: dashboard.data.outcome_data_available ? "AI-timed bounded retries" : "No observed retry outcomes",
							tone: "mint"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
							label: dashboard.data.outcome_data_available ? "Incremental revenue" : "Model",
							value: dashboard.data.outcome_data_available ? formatInr(dashboard.data.incremental_recovered_inr) : "Unchanged",
							sub: dashboard.data.outcome_data_available ? `${formatPct(dashboard.data.recovered_value_lift_percent, 1)} lift` : "Existing trained model",
							tone: "lavender"
						})
					]
				}),
				dashboard.data.outcome_data_available && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 xl:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Recovered revenue by strategy",
						description: "Simulated recovered value, fixed schedule vs Smart Retry.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComparisonBarChart, { data: [{
							label: "Recovered value",
							fixed: dashboard.data.fixed_recovered_inr,
							smart: dashboard.data.smart_recovered_inr
						}] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Recovery rate by strategy",
						description: "Share of eligible failed payments recovered.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecoveryRateChart, { data: [{
							label: "Recovery rate",
							fixed: dashboard.data.fixed_recovery_rate * 100,
							smart: dashboard.data.smart_recovery_rate * 100
						}] })
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Confidence-tier behaviour",
				description: !dashboard.data?.outcome_data_available ? "Recommendation counts are available, but confidence-tier revenue impact requires observed outcomes." : confidence.data?.tiers.length ? `High-confidence retries are the main driver of the uplift; low-confidence cases are held back by the bounded policy.` : "How the agent behaves across confidence tiers.",
				children: [
					confidence.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingBlock, { rows: 3 }),
					confidence.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBlock, {
						message: "Could not load confidence tiers.",
						onRetry: () => confidence.refetch()
					}),
					!dashboard.data?.outcome_data_available && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyBlock, { message: "Confidence-tier revenue metrics are unavailable for inference-only data." }),
					dashboard.data?.outcome_data_available && confidence.data && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-3",
						children: confidence.data.tiers.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-semibold text-foreground",
									children: [t.smart_retry_confidence.toLowerCase(), " confidence"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: [formatNumber(t.eligible_transactions), " transactions"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-display text-xl font-semibold text-foreground",
									children: formatInr(t.incremental_inr)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "incremental vs baseline"
								})
							]
						}, t.smart_retry_confidence))
					})
				]
			})
		]
	});
}
//#endregion
export { Index as component };
