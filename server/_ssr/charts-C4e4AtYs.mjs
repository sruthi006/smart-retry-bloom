import { s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as formatPct, l as formatInr, u as formatNumber } from "./format-C6bmXaSy.mjs";
import { a as Line, c as Cell, d as Legend, i as XAxis, l as ResponsiveContainer, n as BarChart, o as CartesianGrid, r as YAxis, s as Bar, t as ComposedChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/charts-C4e4AtYs.js
var import_jsx_runtime = require_jsx_runtime();
var axis = {
	stroke: "var(--muted-foreground)",
	fontSize: 11,
	tickLine: false,
	axisLine: false
};
var tooltipStyle = {
	borderRadius: 12,
	border: "1px solid var(--border)",
	background: "var(--card)",
	boxShadow: "var(--shadow-soft)",
	fontSize: 12,
	color: "var(--foreground)"
};
function ComparisonBarChart({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
		width: "100%",
		height: 300,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
			data,
			margin: {
				top: 8,
				right: 8,
				left: 8,
				bottom: 0
			},
			barGap: 8,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
					vertical: false,
					stroke: "var(--border)",
					strokeDasharray: "3 6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "label",
					...axis
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					...axis,
					tickFormatter: (v) => formatInr(v),
					width: 62
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
					cursor: { fill: "var(--muted)" },
					contentStyle: tooltipStyle,
					formatter: (v) => formatInr(v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
					iconType: "circle",
					wrapperStyle: {
						fontSize: 12,
						paddingTop: 12
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "fixed",
					name: "Fixed Schedule",
					fill: "var(--sky)",
					radius: [
						8,
						8,
						0,
						0
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "smart",
					name: "Smart Retry",
					fill: "var(--periwinkle)",
					radius: [
						8,
						8,
						0,
						0
					]
				})
			]
		})
	});
}
function BreakdownChart({ rows, height = 320 }) {
	const data = rows.map((r) => ({
		label: r.label,
		fixed: r.fixed_schedule_inr,
		smart: r.smart_retry_inr
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
		width: "100%",
		height,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
			data,
			layout: "vertical",
			margin: {
				top: 4,
				right: 16,
				left: 8,
				bottom: 0
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
					horizontal: false,
					stroke: "var(--border)",
					strokeDasharray: "3 6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					type: "number",
					...axis,
					tickFormatter: (v) => formatInr(v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					type: "category",
					dataKey: "label",
					...axis,
					width: 132
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
					cursor: { fill: "var(--muted)" },
					contentStyle: tooltipStyle,
					formatter: (v) => formatInr(v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
					iconType: "circle",
					wrapperStyle: {
						fontSize: 12,
						paddingTop: 8
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "fixed",
					name: "Fixed Schedule",
					fill: "var(--sky)",
					radius: [
						0,
						6,
						6,
						0
					],
					barSize: 10
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "smart",
					name: "Smart Retry",
					fill: "var(--periwinkle)",
					radius: [
						0,
						6,
						6,
						0
					],
					barSize: 10
				})
			]
		})
	});
}
function RecoveryRateChart({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
		width: "100%",
		height: 280,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
			data,
			margin: {
				top: 8,
				right: 8,
				left: 0,
				bottom: 0
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
					vertical: false,
					stroke: "var(--border)",
					strokeDasharray: "3 6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "label",
					...axis
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					...axis,
					tickFormatter: (v) => `${v}%`,
					width: 44
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
					cursor: { fill: "var(--muted)" },
					contentStyle: tooltipStyle,
					formatter: (v) => formatPct(Number(v), 1)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
					iconType: "circle",
					wrapperStyle: {
						fontSize: 12,
						paddingTop: 12
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "fixed",
					name: "Fixed Schedule rate",
					fill: "var(--peach)",
					radius: [
						8,
						8,
						0,
						0
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "smart",
					name: "Smart Retry rate",
					fill: "var(--mint)",
					radius: [
						8,
						8,
						0,
						0
					]
				})
			]
		})
	});
}
function RetryDistributionChart({ buckets }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
		width: "100%",
		height: 300,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
			data: buckets,
			margin: {
				top: 8,
				right: 8,
				left: 0,
				bottom: 0
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
					vertical: false,
					stroke: "var(--border)",
					strokeDasharray: "3 6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "offset_label",
					...axis
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					yAxisId: "left",
					...axis,
					width: 52,
					tickFormatter: (v) => formatNumber(v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					yAxisId: "right",
					orientation: "right",
					...axis,
					width: 44,
					tickFormatter: (v) => `${v}%`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
					contentStyle: tooltipStyle,
					cursor: { fill: "var(--muted)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
					iconType: "circle",
					wrapperStyle: {
						fontSize: 12,
						paddingTop: 12
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					yAxisId: "left",
					dataKey: "selected_count",
					name: "Times selected",
					radius: [
						8,
						8,
						0,
						0
					],
					fill: "var(--lavender)",
					children: buckets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: b.selected_count >= Math.max(...buckets.map((x) => x.selected_count)) ? "var(--periwinkle)" : "var(--lavender)" }, b.offset_label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
					yAxisId: "right",
					type: "monotone",
					dataKey: "recovery_rate_pct",
					name: "Recovery rate",
					stroke: "var(--mint)",
					strokeWidth: 2.5,
					dot: {
						r: 3,
						fill: "var(--mint)",
						strokeWidth: 0
					}
				})
			]
		})
	});
}
//#endregion
export { RetryDistributionChart as i, ComparisonBarChart as n, RecoveryRateChart as r, BreakdownChart as t };
