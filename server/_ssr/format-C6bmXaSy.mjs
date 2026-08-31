import { r as cn } from "./client-C3Myktu5.mjs";
import { s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as TriangleAlert, s as Inbox } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/format-C6bmXaSy.js
var import_jsx_runtime = require_jsx_runtime();
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-md bg-primary/10", className),
		...props
	});
}
function PageHeader({ eyebrow, title, description, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-end justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-primary",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-3xl font-semibold text-foreground lg:text-[38px]",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2.5 text-sm leading-relaxed text-muted-foreground",
					children: description
				})
			]
		}), actions]
	});
}
function Panel({ title, description, children, className, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("surface p-6", className),
		children: [(title || action) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-5 flex items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-base font-semibold text-foreground",
				children: title
			}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: description
			})] }), action]
		}), children]
	});
}
function KpiCard({ label, value, sub, tone = "neutral" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("surface p-5", {
			neutral: "bg-card",
			mint: "bg-mint-soft",
			lavender: "bg-lavender-soft",
			peach: "bg-peach-soft",
			sky: "bg-sky-soft",
			rose: "bg-rose-soft"
		}[tone]),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-[26px] font-semibold leading-none text-foreground",
				children: value
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted-foreground",
				children: sub
			})
		]
	});
}
function LoadingBlock({ rows = 3, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("space-y-3", className),
		children: Array.from({ length: rows }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-16 w-full rounded-xl" }, i))
	});
}
function ErrorBlock({ message, onRetry }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface flex flex-col items-start gap-3 bg-rose-soft p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2 text-sm font-semibold text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-rose" }), " Couldn't load data"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: message ?? "The recovery API did not respond. Check VITE_API_BASE_URL and try again."
			}),
			onRetry && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onRetry,
				className: "rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium transition-colors hover:bg-accent",
				children: "Retry request"
			})
		]
	});
}
function EmptyBlock({ message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-2 rounded-xl border border-dashed border-border py-12 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "size-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: message
		})]
	});
}
var tierStyles = {
	high: "bg-mint-soft text-foreground",
	medium: "bg-amber-soft text-foreground",
	low: "bg-rose-soft text-foreground"
};
function ConfidencePill({ tier }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[11px] font-medium capitalize", tierStyles[tier]),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", tier === "high" ? "bg-mint" : tier === "medium" ? "bg-amber" : "bg-rose") }),
			tier,
			" confidence"
		]
	});
}
var resultStyles = {
	recovered: "bg-mint-soft",
	stopped: "bg-amber-soft",
	failed: "bg-rose-soft",
	pending: "bg-sky-soft"
};
function ResultPill({ result }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex rounded-full border border-border px-2.5 py-1 text-[11px] font-medium capitalize text-foreground", resultStyles[result]),
		children: result
	});
}
function formatInr(value) {
	if (Math.abs(value) >= 1e6) return `${value < 0 ? "−" : ""}₹${(Math.abs(value) / 1e6).toFixed(2)}M`;
	if (Math.abs(value) >= 1e3) return `${value < 0 ? "−" : ""}₹${(Math.abs(value) / 1e3).toFixed(1)}K`;
	return `${value < 0 ? "−" : ""}₹${Math.abs(value).toFixed(0)}`;
}
function formatNumber(value) {
	return new Intl.NumberFormat("en-IN").format(value);
}
function formatPct(value, digits = 2) {
	return `${value.toFixed(digits)}%`;
}
function formatTimestamp(iso) {
	return new Date(iso).toLocaleString("en-IN", {
		day: "2-digit",
		month: "short",
		hour: "2-digit",
		minute: "2-digit"
	});
}
//#endregion
export { LoadingBlock as a, ResultPill as c, formatPct as d, formatTimestamp as f, KpiCard as i, formatInr as l, EmptyBlock as n, PageHeader as o, ErrorBlock as r, Panel as s, ConfidencePill as t, formatNumber as u };
