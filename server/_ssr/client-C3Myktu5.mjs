import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/client-C3Myktu5.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var FIXED = 1693e4;
var SMART = 2402e4;
var INCREMENTAL = 709e4;
var LIFT = 41.87;
var mockDashboard = {
	currency: "INR",
	simulation: true,
	kpis: {
		total_failed_payments: 48260,
		eligible_for_recovery: 39884,
		fixed_schedule_recovered_inr: FIXED,
		smart_retry_recovered_inr: SMART,
		incremental_revenue_inr: INCREMENTAL,
		recovery_lift_pct: LIFT
	},
	strategies: [{
		strategy: "fixed_schedule",
		label: "Fixed Schedule",
		recovered_inr: FIXED,
		recovery_rate_pct: 31.4,
		recovered_transactions: 12524
	}, {
		strategy: "smart_retry",
		label: "Smart Retry",
		recovered_inr: SMART,
		recovery_rate_pct: 43.6,
		recovered_transactions: 17389
	}]
};
var mockBusinessImpact = {
	fixed_schedule_inr: FIXED,
	smart_retry_inr: SMART,
	incremental_inr: INCREMENTAL,
	lift_pct: LIFT,
	fixed_schedule_rate_pct: 31.4,
	smart_retry_rate_pct: 43.6,
	methodology_note: "Results are from a synthetic-data policy simulation and are not production payment performance."
};
var mockBreakdown = {
	by_decline_reason: [
		{
			key: "insufficient_funds",
			label: "Insufficient Funds",
			fixed_schedule_inr: 512e4,
			smart_retry_inr: 846e4,
			fixed_schedule_rate_pct: 27.8,
			smart_retry_rate_pct: 45.1
		},
		{
			key: "issuer_declined",
			label: "Issuer Declined",
			fixed_schedule_inr: 364e4,
			smart_retry_inr: 502e4,
			fixed_schedule_rate_pct: 29.6,
			smart_retry_rate_pct: 40.2
		},
		{
			key: "network_timeout",
			label: "Network Timeout",
			fixed_schedule_inr: 298e4,
			smart_retry_inr: 431e4,
			fixed_schedule_rate_pct: 38.4,
			smart_retry_rate_pct: 52.6
		},
		{
			key: "risk_hold",
			label: "Risk Hold",
			fixed_schedule_inr: 241e4,
			smart_retry_inr: 318e4,
			fixed_schedule_rate_pct: 24.1,
			smart_retry_rate_pct: 31.8
		},
		{
			key: "expired_instrument",
			label: "Expired Instrument",
			fixed_schedule_inr: 158e4,
			smart_retry_inr: 192e4,
			fixed_schedule_rate_pct: 14.2,
			smart_retry_rate_pct: 17.4
		},
		{
			key: "authentication_failed",
			label: "Authentication Failed",
			fixed_schedule_inr: 12e5,
			smart_retry_inr: 113e4,
			fixed_schedule_rate_pct: 18.9,
			smart_retry_rate_pct: 18.1
		}
	],
	by_payment_method: [
		{
			key: "upi",
			label: "UPI",
			fixed_schedule_inr: 589e4,
			smart_retry_inr: 892e4,
			fixed_schedule_rate_pct: 34.2,
			smart_retry_rate_pct: 49.8
		},
		{
			key: "credit_card",
			label: "Credit Card",
			fixed_schedule_inr: 462e4,
			smart_retry_inr: 641e4,
			fixed_schedule_rate_pct: 30.8,
			smart_retry_rate_pct: 42.3
		},
		{
			key: "debit_card",
			label: "Debit Card",
			fixed_schedule_inr: 331e4,
			smart_retry_inr: 458e4,
			fixed_schedule_rate_pct: 28.6,
			smart_retry_rate_pct: 39.5
		},
		{
			key: "netbanking",
			label: "Netbanking",
			fixed_schedule_inr: 204e4,
			smart_retry_inr: 292e4,
			fixed_schedule_rate_pct: 26.4,
			smart_retry_rate_pct: 36.7
		},
		{
			key: "wallet",
			label: "Wallet",
			fixed_schedule_inr: 107e4,
			smart_retry_inr: 119e4,
			fixed_schedule_rate_pct: 31.1,
			smart_retry_rate_pct: 34
		}
	],
	by_amount_band: [
		{
			key: "0_500",
			label: "₹0 – ₹500",
			fixed_schedule_inr: 98e4,
			smart_retry_inr: 124e4,
			fixed_schedule_rate_pct: 36.4,
			smart_retry_rate_pct: 45.9
		},
		{
			key: "500_2k",
			label: "₹500 – ₹2K",
			fixed_schedule_inr: 264e4,
			smart_retry_inr: 378e4,
			fixed_schedule_rate_pct: 34.1,
			smart_retry_rate_pct: 46.8
		},
		{
			key: "2k_10k",
			label: "₹2K – ₹10K",
			fixed_schedule_inr: 532e4,
			smart_retry_inr: 791e4,
			fixed_schedule_rate_pct: 32.5,
			smart_retry_rate_pct: 45.2
		},
		{
			key: "10k_50k",
			label: "₹10K – ₹50K",
			fixed_schedule_inr: 518e4,
			smart_retry_inr: 746e4,
			fixed_schedule_rate_pct: 29.8,
			smart_retry_rate_pct: 41.6
		},
		{
			key: "50k_plus",
			label: "₹50K+",
			fixed_schedule_inr: 281e4,
			smart_retry_inr: 363e4,
			fixed_schedule_rate_pct: 24.7,
			smart_retry_rate_pct: 33.1
		}
	]
};
var mockRetryDistribution = { buckets: [
	{
		offset_label: "15m",
		offset_minutes: 15,
		selected_count: 1820,
		recovery_rate_pct: 31.2
	},
	{
		offset_label: "30m",
		offset_minutes: 30,
		selected_count: 2460,
		recovery_rate_pct: 34.8
	},
	{
		offset_label: "1h",
		offset_minutes: 60,
		selected_count: 4910,
		recovery_rate_pct: 40.1
	},
	{
		offset_label: "2h",
		offset_minutes: 120,
		selected_count: 8240,
		recovery_rate_pct: 48.6
	},
	{
		offset_label: "6h",
		offset_minutes: 360,
		selected_count: 6780,
		recovery_rate_pct: 46.2
	},
	{
		offset_label: "12h",
		offset_minutes: 720,
		selected_count: 5120,
		recovery_rate_pct: 43.7
	},
	{
		offset_label: "24h",
		offset_minutes: 1440,
		selected_count: 6340,
		recovery_rate_pct: 45.4
	},
	{
		offset_label: "48h",
		offset_minutes: 2880,
		selected_count: 2640,
		recovery_rate_pct: 36.9
	},
	{
		offset_label: "72h",
		offset_minutes: 4320,
		selected_count: 1574,
		recovery_rate_pct: 29.5
	}
] };
var mockConfidence = {
	insight: "Low-confidence recommendations should be bounded or stopped.",
	tiers: [
		{
			tier: "high",
			label: "High",
			transactions: 18420,
			fixed_schedule_inr: 894e4,
			smart_retry_inr: 1694e4,
			incremental_inr: 8e6
		},
		{
			tier: "medium",
			label: "Medium",
			transactions: 13180,
			fixed_schedule_inr: 512e4,
			smart_retry_inr: 677e4,
			incremental_inr: 165e4
		},
		{
			tier: "low",
			label: "Low",
			transactions: 8284,
			fixed_schedule_inr: 287e4,
			smart_retry_inr: 31e4,
			incremental_inr: -256e4
		}
	]
};
var DECLINE_REASONS = [
	"Insufficient Funds",
	"Issuer Declined",
	"Network Timeout",
	"Risk Hold",
	"Expired Instrument",
	"Authentication Failed"
];
var METHODS = [
	"UPI",
	"Credit Card",
	"Debit Card",
	"Netbanking",
	"Wallet"
];
function seeded(n) {
	const x = Math.sin(n * 12.9898) * 43758.5453;
	return x - Math.floor(x);
}
var mockTransactionsResponse = { transactions: Array.from({ length: 14 }, (_, i) => {
	const r = seeded(i + 1);
	const base = (/* @__PURE__ */ new Date("2026-08-26T09:00:00Z")).getTime();
	return {
		transaction_id: `TXN-${(48210 + i * 37).toString()}`,
		amount_inr: Math.round((400 + r * 46e3) / 10) * 10,
		decline_reason: DECLINE_REASONS[i % DECLINE_REASONS.length],
		payment_method: METHODS[i * 3 % METHODS.length],
		failed_at: (/* @__PURE__ */ new Date(base - i * 47 * 6e4)).toISOString(),
		customer_prior_failures: Math.floor(r * 5),
		customer_prior_recoveries: Math.floor(seeded(i + 50) * 4),
		customer_tenure_days: 30 + Math.floor(seeded(i + 90) * 900)
	};
}) };
var OFFSETS = [
	["15m", 15],
	["30m", 30],
	["1h", 60],
	["2h", 120],
	["6h", 360],
	["12h", 720],
	["24h", 1440],
	["48h", 2880],
	["72h", 4320]
];
function mockPredict(ctx) {
	const seedBase = ctx.transaction_id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
	const candidates = OFFSETS.map(([label, minutes], i) => {
		const shape = Math.exp(-Math.pow(Math.log(minutes / 150), 2) / 1.9);
		const noise = seeded(seedBase + i) * .12;
		const penalty = ctx.decline_reason === "Expired Instrument" ? .45 : 1;
		return {
			offset_label: label,
			offset_minutes: minutes,
			probability: Math.min(.94, Math.max(.04, (shape * .68 + noise) * penalty))
		};
	});
	const best = candidates.reduce((a, b) => b.probability > a.probability ? b : a);
	const eligible = ctx.decline_reason !== "Expired Instrument" && ctx.customer_prior_failures < 5;
	const p = best.probability;
	const tier = p >= .6 ? "high" : p >= .35 ? "medium" : "low";
	return {
		transaction_id: ctx.transaction_id,
		eligible,
		eligibility_reason: eligible ? "Within retry budget, instrument is valid and no risk block applies." : "Instrument or retry budget makes this payment ineligible for automated retry.",
		recommended_offset_label: best.offset_label,
		recommended_offset_minutes: best.offset_minutes,
		calibrated_probability: p,
		confidence_tier: tier,
		context_summary: `${ctx.decline_reason} on ${ctx.payment_method}. Customer has ${ctx.customer_prior_recoveries} prior recoveries across ${ctx.customer_prior_failures} prior failures over ${ctx.customer_tenure_days} days of tenure.`,
		candidates
	};
}
function mockSimulate(ctx, prediction) {
	const recovered = prediction.eligible && prediction.confidence_tier !== "low" ? prediction.calibrated_probability > .4 : false;
	return {
		transaction_id: ctx.transaction_id,
		executed_at: (/* @__PURE__ */ new Date()).toISOString(),
		simulated: true,
		result: recovered ? "recovered" : "stopped",
		recovered_amount_inr: recovered ? ctx.amount_inr : 0,
		message: recovered ? `Simulated retry at ${prediction.recommended_offset_label} recovered the payment.` : "Simulated workflow stopped — bounded policy prevented a low-value retry."
	};
}
var STEPS = [
	"Payment Failed",
	"Retry Eligibility Checked",
	"Candidate Retry Times Scored",
	"AI Recommendation Generated",
	"Confidence Evaluated",
	"Bounded Retry Action"
];
var mockAudit = { records: Array.from({ length: 22 }, (_, i) => {
	const r = seeded(i + 7);
	const tier = r > .62 ? "high" : r > .3 ? "medium" : "low";
	const result = tier === "low" ? r > .18 ? "stopped" : "failed" : r > .42 ? "recovered" : "stopped";
	const amount = Math.round((600 + r * 42e3) / 10) * 10;
	const offset = OFFSETS[Math.floor(r * OFFSETS.length)][0];
	const base = (/* @__PURE__ */ new Date("2026-08-26T13:40:00Z")).getTime() - i * 26 * 6e4;
	return {
		id: `EVT-${9100 + i}`,
		transaction_id: `TXN-${48210 + i % 14 * 37}`,
		timestamp: new Date(base).toISOString(),
		decline_reason: DECLINE_REASONS[i % DECLINE_REASONS.length],
		selected_offset_label: offset,
		confidence_tier: tier,
		result,
		recovered_amount_inr: result === "recovered" ? amount : 0,
		events: [...STEPS.map((step, s) => ({
			step,
			timestamp: new Date(base + s * 9e4).toISOString(),
			detail: s === 1 ? "Eligible — within bounded retry budget" : s === 2 ? "9 candidate retry offsets scored" : s === 3 ? `Recommended retry in ${offset}` : s === 4 ? `${tier} confidence tier` : s === 5 ? "Single bounded simulated retry attempt" : "Payment failed at gateway (simulated)"
		})), {
			step: result === "recovered" ? "Payment Recovered" : "Workflow Stopped",
			timestamp: new Date(base + 54e4).toISOString(),
			detail: result === "recovered" ? "Simulated recovery completed" : "Bounded policy stopped further retries"
		}]
	};
}) };
var API_BASE_URL = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_API_BASE_URL": "http://127.0.0.1:8000"
}["VITE_API_BASE_URL"]?.replace(/\/$/, "") ?? "";
var USING_MOCK_DATA = API_BASE_URL === "";
var ENDPOINTS = {
	dashboard: "/api/dashboard",
	businessImpact: "/api/business-impact",
	recoveryBreakdown: "/api/recovery-breakdown",
	retryDistribution: "/api/retry-distribution",
	confidence: "/api/confidence",
	audit: "/api/audit",
	transactions: "/api/transactions",
	predict: "/api/predict",
	simulate: "/api/simulate"
};
var ApiError = class extends Error {
	status;
	constructor(message, status) {
		super(message);
		this.name = "ApiError";
		this.status = status;
	}
};
function normalizePaymentMethod(value) {
	const method = (value ?? "").trim();
	if (method === "Netbanking") return "Net Banking";
	return method || "Credit Card";
}
function transactionToPredictionRequest(ctx) {
	const failedAt = new Date(ctx.failed_at ?? (/* @__PURE__ */ new Date()).toISOString());
	const priorFailures = Number(ctx.customer_prior_failures ?? 0);
	const priorRecoveries = Number(ctx.customer_prior_recoveries ?? 0);
	const successRate = priorFailures + priorRecoveries > 0 ? Math.min(1, Math.max(0, priorRecoveries / (priorFailures + priorRecoveries))) : .5;
	return {
		amount_inr: Number(ctx.amount_inr ?? 0),
		decline_reason: String(ctx.decline_reason ?? ""),
		payment_method: normalizePaymentMethod(ctx.payment_method),
		hour_of_day: Number.isNaN(failedAt.getHours()) ? 12 : failedAt.getHours(),
		day_of_month: Number.isNaN(failedAt.getDate()) ? 1 : failedAt.getDate(),
		day_of_week: Number.isNaN(failedAt.getDay()) ? 1 : failedAt.getDay(),
		customer_previous_success_rate: successRate,
		customer_previous_failure_count: priorFailures,
		days_since_last_successful_payment: Number(ctx.customer_tenure_days ?? 0) / 30
	};
}
async function request(path, fallback, init) {
	if (USING_MOCK_DATA) {
		await new Promise((r) => setTimeout(r, 260));
		return fallback();
	}
	const res = await fetch(`${API_BASE_URL}${path}`, {
		headers: { "Content-Type": "application/json" },
		...init
	});
	if (!res.ok) throw new ApiError(`Request to ${path} failed (${res.status})`, res.status);
	return await res.json();
}
var api = {
	getDashboard: () => request(ENDPOINTS.dashboard, () => mockDashboard),
	getBusinessImpact: () => request(ENDPOINTS.businessImpact, () => mockBusinessImpact),
	getRecoveryBreakdown: (dimension) => request(`${ENDPOINTS.recoveryBreakdown}?dimension=${encodeURIComponent(dimension)}`, () => mockBreakdown),
	getRetryDistribution: () => request(ENDPOINTS.retryDistribution, () => mockRetryDistribution),
	getConfidence: () => request(ENDPOINTS.confidence, () => mockConfidence),
	getAudit: (transactionId) => request(`${ENDPOINTS.audit}?transaction_id=${encodeURIComponent(transactionId)}`, () => mockAudit),
	getTransactions: (page = 1, pageSize = 25) => request(`/api/transactions?page=${page}&page_size=${pageSize}`, () => mockTransactionsResponse),
	predict: (ctx) => request(ENDPOINTS.predict, () => mockPredict(ctx), {
		method: "POST",
		body: JSON.stringify(transactionToPredictionRequest(ctx))
	}),
	simulate: (ctx) => request(ENDPOINTS.simulate, () => mockSimulate(ctx, mockPredict(ctx)), {
		method: "POST",
		body: JSON.stringify({
			...transactionToPredictionRequest(ctx),
			transaction_id: ctx.transaction_id ?? `txn-${Date.now()}`
		})
	}),
	validateCsv: async (file) => {
		if (USING_MOCK_DATA) return {
			valid: true,
			record_count: 1e3,
			errors: [],
			warnings: []
		};
		const formData = new FormData();
		formData.append("file", file);
		const res = await fetch(`${API_BASE_URL}/api/inference/validate-csv`, {
			method: "POST",
			body: formData
		});
		if (!res.ok) throw new ApiError(`CSV validation failed (${res.status})`, res.status);
		return await res.json();
	},
	uploadAndInfer: async (file) => {
		if (USING_MOCK_DATA) return {
			dataset_source: "upload",
			total_records: 1e3,
			eligible_records: 850,
			processed_records: 850,
			failed_records: 0,
			eligible_by_confidence: {
				High: 340,
				Medium: 425,
				Low: 85
			},
			avg_selected_retry_hours: 12.5,
			results: [],
			errors: []
		};
		const formData = new FormData();
		formData.append("file", file);
		const res = await fetch(`${API_BASE_URL}/api/inference/upload`, {
			method: "POST",
			body: formData
		});
		if (!res.ok) {
			const error = await res.text();
			throw new ApiError(`Upload failed (${res.status}): ${error}`, res.status);
		}
		return await res.json();
	},
	loadDemoDataset: async () => {
		if (USING_MOCK_DATA) return {
			dataset_source: "demo",
			total_records: 1e5,
			eligible_records: 85e3,
			processed_records: 85e3,
			failed_records: 0,
			eligible_by_confidence: {
				High: 34e3,
				Medium: 42500,
				Low: 8500
			},
			avg_selected_retry_hours: 12.5,
			results: [],
			errors: []
		};
		return request("/api/inference/demo", async () => ({
			dataset_source: "demo",
			total_records: 0,
			eligible_records: 0,
			processed_records: 0,
			failed_records: 0,
			eligible_by_confidence: {},
			results: [],
			errors: ["Demo endpoint unavailable"]
		}));
	}
};
function normalizeBreakdownRows(data) {
	if (!data?.items) return [];
	return data.items.map((item) => {
		const key = String(item.decline_reason ?? item.payment_method ?? item.amount_band ?? item.key ?? "");
		const valueMap = item;
		return {
			key,
			label: key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
			fixed_schedule_inr: Number(valueMap.baseline_recovered_inr ?? valueMap.fixed_schedule_inr ?? 0),
			smart_retry_inr: Number(valueMap.smart_retry_recovered_inr ?? valueMap.smart_retry_inr ?? 0),
			fixed_schedule_rate_pct: Number(valueMap.baseline_recovery_rate ?? valueMap.fixed_schedule_rate_pct ?? 0) * 100,
			smart_retry_rate_pct: Number(valueMap.smart_retry_recovery_rate ?? valueMap.smart_retry_rate_pct ?? 0) * 100
		};
	});
}
function normalizeRetryDistribution(data) {
	if (!data?.distribution) return [];
	return data.distribution.map((item) => ({
		offset_label: `${item.selected_retry_hours}h`,
		offset_minutes: Math.round(Number(item.selected_retry_hours) * 60),
		selected_count: Number(item.eligible_transactions ?? 0),
		recovery_rate_pct: Number(item.smart_retry_recovery_rate ?? 0) * 100
	}));
}
//#endregion
export { normalizeRetryDistribution as a, normalizeBreakdownRows as i, api as n, cn as r, USING_MOCK_DATA as t };
