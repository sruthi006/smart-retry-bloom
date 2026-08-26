// Centralized API client. All backend URLs live here — never in components.
// Point the frontend at the FastAPI service with VITE_API_BASE_URL.

import {
  mockAudit,
  mockBreakdown,
  mockBusinessImpact,
  mockConfidence,
  mockDashboard,
  mockPredict,
  mockRetryDistribution,
  mockSimulate,
  mockTransactionsResponse,
} from "./mock";
import type {
  AuditResponse,
  BusinessImpactResponse,
  ConfidenceResponse,
  DashboardResponse,
  PredictResponse,
  RecoveryBreakdownResponse,
  RetryDistributionResponse,
  SimulateResponse,
  TransactionContext,
  TransactionsResponse,
} from "./types";

export const API_BASE_URL: string =
  (import.meta.env["VITE_API_BASE_URL"] as string | undefined)?.replace(/\/$/, "") ?? "";

export const USING_MOCK_DATA = API_BASE_URL === "";

export const ENDPOINTS = {
  dashboard: "/api/dashboard",
  businessImpact: "/api/business-impact",
  recoveryBreakdown: "/api/recovery-breakdown",
  retryDistribution: "/api/retry-distribution",
  confidence: "/api/confidence",
  audit: "/api/audit",
  transactions: "/api/transactions",
  predict: "/api/predict",
  simulate: "/api/simulate",
} as const;

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function request<T>(
  path: string,
  fallback: () => T | Promise<T>,
  init?: RequestInit,
): Promise<T> {
  if (USING_MOCK_DATA) {
    await new Promise((r) => setTimeout(r, 260));
    return fallback();
  }

  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });

  if (!res.ok) {
    throw new ApiError(`Request to ${path} failed (${res.status})`, res.status);
  }
  return (await res.json()) as T;
}

export const api = {
  getDashboard: () => request<DashboardResponse>(ENDPOINTS.dashboard, () => mockDashboard),
  getBusinessImpact: () =>
    request<BusinessImpactResponse>(ENDPOINTS.businessImpact, () => mockBusinessImpact),
  getRecoveryBreakdown: () =>
    request<RecoveryBreakdownResponse>(ENDPOINTS.recoveryBreakdown, () => mockBreakdown),
  getRetryDistribution: () =>
    request<RetryDistributionResponse>(ENDPOINTS.retryDistribution, () => mockRetryDistribution),
  getConfidence: () => request<ConfidenceResponse>(ENDPOINTS.confidence, () => mockConfidence),
  getAudit: () => request<AuditResponse>(ENDPOINTS.audit, () => mockAudit),
  getTransactions: () =>
    request<TransactionsResponse>(ENDPOINTS.transactions, () => mockTransactionsResponse),
  predict: (ctx: TransactionContext) =>
    request<PredictResponse>(ENDPOINTS.predict, () => mockPredict(ctx), {
      method: "POST",
      body: JSON.stringify(ctx),
    }),
  simulate: (ctx: TransactionContext, prediction: PredictResponse) =>
    request<SimulateResponse>(ENDPOINTS.simulate, () => mockSimulate(ctx, prediction), {
      method: "POST",
      body: JSON.stringify({ transaction: ctx, prediction }),
    }),
};
