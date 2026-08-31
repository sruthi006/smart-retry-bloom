import { n as api } from "./client-C3Myktu5.mjs";
import { n as queryOptions } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/queries-Bhk5U8lR.js
var dashboardQuery = queryOptions({
	queryKey: ["dashboard"],
	queryFn: api.getDashboard
});
var businessImpactQuery = queryOptions({
	queryKey: ["business-impact"],
	queryFn: api.getBusinessImpact
});
var recoveryBreakdownQuery = (dimension) => queryOptions({
	queryKey: ["recovery-breakdown", dimension],
	queryFn: () => api.getRecoveryBreakdown(dimension),
	enabled: !!dimension
});
var retryDistributionQuery = queryOptions({
	queryKey: ["retry-distribution"],
	queryFn: api.getRetryDistribution
});
var confidenceQuery = queryOptions({
	queryKey: ["confidence"],
	queryFn: api.getConfidence
});
var auditQuery = (transactionId) => queryOptions({
	queryKey: ["audit", transactionId],
	queryFn: () => api.getAudit(transactionId),
	enabled: !!transactionId
});
var transactionsQuery = queryOptions({
	queryKey: ["transactions"],
	queryFn: () => api.getTransactions(1, 25)
});
//#endregion
export { recoveryBreakdownQuery as a, dashboardQuery as i, businessImpactQuery as n, retryDistributionQuery as o, confidenceQuery as r, transactionsQuery as s, auditQuery as t };
