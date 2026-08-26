import { queryOptions } from "@tanstack/react-query";
import { api } from "./client";

export const dashboardQuery = queryOptions({
  queryKey: ["dashboard"],
  queryFn: api.getDashboard,
});

export const businessImpactQuery = queryOptions({
  queryKey: ["business-impact"],
  queryFn: api.getBusinessImpact,
});

export const recoveryBreakdownQuery = queryOptions({
  queryKey: ["recovery-breakdown"],
  queryFn: api.getRecoveryBreakdown,
});

export const retryDistributionQuery = queryOptions({
  queryKey: ["retry-distribution"],
  queryFn: api.getRetryDistribution,
});

export const confidenceQuery = queryOptions({
  queryKey: ["confidence"],
  queryFn: api.getConfidence,
});

export const auditQuery = queryOptions({
  queryKey: ["audit"],
  queryFn: api.getAudit,
});

export const transactionsQuery = queryOptions({
  queryKey: ["transactions"],
  queryFn: api.getTransactions,
});
