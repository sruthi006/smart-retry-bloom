import { i as __toESM } from "../_runtime.mjs";
import { n as api, r as cn } from "./client-C3Myktu5.mjs";
import { o as require_react, r as useQuery, s as require_jsx_runtime, t as useMutation } from "../_libs/react+tanstack__react-query.mjs";
import { a as LoadingBlock, d as formatPct, l as formatInr, o as PageHeader, r as ErrorBlock, s as Panel, t as ConfidencePill } from "./format-C6bmXaSy.mjs";
import { s as transactionsQuery } from "./queries-Bhk5U8lR.mjs";
import { i as XAxis, l as ResponsiveContainer, n as BarChart, o as CartesianGrid, r as YAxis, s as Bar, u as Tooltip } from "../_libs/recharts+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recovery-agent-BwJIXr6r.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RecoveryAgent() {
	const transactions = useQuery(transactionsQuery);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [prediction, setPrediction] = (0, import_react.useState)(null);
	const predictMutation = useMutation({
		mutationFn: (ctx) => api.predict(ctx),
		onSuccess: (data) => {
			setPrediction(data);
		},
		onError: (error) => {
			toast.error(`Prediction failed: ${error instanceof Error ? error.message : "Unknown error"}`);
			setPrediction(null);
		}
	});
	function choose(ctx) {
		setSelected(ctx);
		setPrediction(null);
		predictMutation.mutate(ctx);
	}
	const chartData = prediction?.candidate_scores.map((score) => ({
		hours: score.candidate_retry_hours,
		probability: (score.calibrated_probability * 100).toFixed(1),
		tier: score.confidence_tier
	})) ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Recovery agent",
			title: "Analyze a failed payment",
			description: "Select a transaction to see how the model scores different retry windows, recommends the best time, and assigns confidence."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 xl:grid-cols-[minmax(0,360px)_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Failed payments",
				description: "Select a transaction to analyze.",
				children: [
					transactions.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingBlock, { rows: 6 }),
					transactions.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBlock, {
						message: "Could not load transactions.",
						onRetry: () => transactions.refetch()
					}),
					transactions.data?.items && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2 max-h-[600px] overflow-y-auto",
						children: transactions.data.items.map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => choose(t),
							className: cn("w-full rounded-xl border border-border bg-card p-3 text-left transition-colors hover:bg-accent", selected?.transaction_id === t.transaction_id && "border-primary bg-accent"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[11px] text-muted-foreground",
										children: t.transaction_id || `TXN_${idx}`
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold text-foreground",
										children: formatInr(t.amount_inr)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-foreground",
									children: t.decline_reason
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: t.payment_method
								})
							]
						}, idx))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					!selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Select a failed payment to see the model's decision."
					}) }),
					selected && predictMutation.isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Analyzing",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingBlock, { rows: 4 })
					}),
					selected && prediction && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Model Decision",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-muted-foreground",
									children: "Eligibility"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-lg font-bold text-foreground",
									children: prediction.eligible ? "✓ Eligible" : "✗ Not eligible"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-muted-foreground",
									children: "Confidence"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidencePill, { tier: prediction.confidence_tier })
								})] })]
							}), prediction.eligible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-muted-foreground",
									children: "Recommended retry offset"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-2xl font-bold text-primary",
									children: [prediction.selected_retry_hours.toFixed(2), "h"]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-muted-foreground",
									children: "Calibrated success probability"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-2xl font-bold text-mint",
									children: formatPct(prediction.calibrated_probability * 100, 1)
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									"The model evaluated 10 candidate retry offsets and selected ",
									prediction.selected_retry_hours.toFixed(2),
									" hours as the time with the highest calibrated success probability."
								]
							})] })]
						})
					}), prediction.eligible && prediction.candidate_scores.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						title: "All candidate retry times",
						description: "Model score for each possible retry offset",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-80",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: chartData,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { strokeDasharray: "3 3" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, { dataKey: "hours" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											formatter: (value) => `${value}%`,
											contentStyle: {
												backgroundColor: "hsl(var(--card))",
												border: "1px solid hsl(var(--border))",
												borderRadius: "0.5rem"
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "probability",
											fill: "hsl(var(--primary))",
											name: "Success probability (%)"
										})
									]
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-2",
							children: prediction.candidate_scores.map((score, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("flex items-center justify-between rounded-lg border border-border p-2", score.candidate_retry_hours === prediction.selected_retry_hours && "border-primary bg-primary/5"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm font-mono font-medium",
										children: [score.candidate_retry_hours.toFixed(2), "h"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: formatPct(score.calibrated_probability * 100, 1)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2",
									children: score.candidate_retry_hours === prediction.selected_retry_hours && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-primary",
										children: "SELECTED"
									})
								})]
							}, idx))
						})]
					})] })
				]
			})]
		})]
	});
}
//#endregion
export { RecoveryAgent as component };
