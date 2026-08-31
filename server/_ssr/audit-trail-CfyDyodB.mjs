import { i as __toESM } from "../_runtime.mjs";
import { o as require_react, r as useQuery, s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as LoadingBlock, c as ResultPill, f as formatTimestamp, l as formatInr, n as EmptyBlock, o as PageHeader, r as ErrorBlock, s as Panel, t as ConfidencePill } from "./format-C6bmXaSy.mjs";
import { s as transactionsQuery, t as auditQuery } from "./queries-Bhk5U8lR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/audit-trail-CfyDyodB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuditTrail() {
	const transactions = useQuery(transactionsQuery);
	const transactionId = transactions.data?.items[0]?.transaction_id ?? "TX000001";
	const audit = useQuery(auditQuery(String(transactionId)));
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const auditEvents = audit.data?.events ?? [];
	const summary = auditEvents.length ? [{
		id: audit.data?.transaction_id ?? transactionId,
		transaction_id: audit.data?.transaction_id ?? transactionId,
		decline_reason: "Decision audit",
		selected_offset_label: auditEvents[0]?.selected_retry_hours ?? "n/a",
		confidence_tier: (auditEvents[0]?.confidence_tier ?? "Low").toLowerCase(),
		result: auditEvents.some((event) => event.recovered) ? "recovered" : "stopped",
		recovered_amount_inr: 0,
		timestamp: auditEvents[0]?.timestamp ?? (/* @__PURE__ */ new Date()).toISOString(),
		events: auditEvents.map((event, index) => ({
			step: event.event,
			timestamp: event.timestamp ?? (/* @__PURE__ */ new Date()).toISOString(),
			detail: event.timestamp_note ?? `${event.event} evaluated in the synthetic audit trail.`
		}))
	}] : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Audit trail",
			title: "Every decision is explainable",
			description: "Each simulated retry records the full decision chain so a reviewer can reconstruct why the agent acted."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			title: "Decision records",
			description: "Newest simulated decisions first.",
			children: [
				transactions.isLoading || audit.isLoading && !audit.data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingBlock, { rows: 6 }) : null,
				audit.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBlock, {
					message: "Could not load the audit trail.",
					onRetry: () => audit.refetch()
				}),
				audit.data && summary.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyBlock, { message: "No decision records yet." }),
				summary.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border",
					children: summary.map((record) => {
						const open = openId === record.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpenId(open ? null : record.id),
								className: "flex w-full flex-wrap items-center gap-3 text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs text-muted-foreground",
										children: record.transaction_id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-foreground",
										children: record.decline_reason
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-muted-foreground",
										children: ["retry ", record.selected_offset_label]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidencePill, { tier: record.confidence_tier }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultPill, { result: record.result }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto text-xs text-muted-foreground",
										children: formatTimestamp(record.timestamp)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium text-foreground",
										children: formatInr(record.recovered_amount_inr)
									})
								]
							}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-4 space-y-3 border-l border-border pl-5",
								children: record.events.map((event, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[23px] top-1.5 size-2 rounded-full bg-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-foreground",
											children: event.step
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: event.detail
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground",
											children: formatTimestamp(event.timestamp)
										})
									]
								}, `${record.id}-${i}`))
							})]
						}, record.id);
					})
				})
			]
		})]
	});
}
//#endregion
export { AuditTrail as component };
