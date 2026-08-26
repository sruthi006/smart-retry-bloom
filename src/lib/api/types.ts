// Shared API contract types. These mirror the FastAPI response shapes so the
// mock layer can be swapped for the real backend without touching the UI.

export type ConfidenceTier = "high" | "medium" | "low";
export type RetryResult = "recovered" | "stopped" | "pending" | "failed";

export interface DashboardKpis {
  total_failed_payments: number;
  eligible_for_recovery: number;
  fixed_schedule_recovered_inr: number;
  smart_retry_recovered_inr: number;
  incremental_revenue_inr: number;
  recovery_lift_pct: number;
}

export interface StrategyStats {
  strategy: "fixed_schedule" | "smart_retry";
  label: string;
  recovered_inr: number;
  recovery_rate_pct: number;
  recovered_transactions: number;
}

export interface DashboardResponse {
  kpis: DashboardKpis;
  strategies: StrategyStats[];
  currency: string;
  simulation: boolean;
}

export interface BreakdownRow {
  key: string;
  label: string;
  fixed_schedule_inr: number;
  smart_retry_inr: number;
  fixed_schedule_rate_pct: number;
  smart_retry_rate_pct: number;
}

export interface RecoveryBreakdownResponse {
  by_decline_reason: BreakdownRow[];
  by_payment_method: BreakdownRow[];
  by_amount_band: BreakdownRow[];
}

export interface RetryDistributionBucket {
  offset_label: string;
  offset_minutes: number;
  selected_count: number;
  recovery_rate_pct: number;
}

export interface RetryDistributionResponse {
  buckets: RetryDistributionBucket[];
}

export interface ConfidenceTierStats {
  tier: ConfidenceTier;
  label: string;
  transactions: number;
  fixed_schedule_inr: number;
  smart_retry_inr: number;
  incremental_inr: number;
}

export interface ConfidenceResponse {
  tiers: ConfidenceTierStats[];
  insight: string;
}

export interface BusinessImpactResponse {
  fixed_schedule_inr: number;
  smart_retry_inr: number;
  incremental_inr: number;
  lift_pct: number;
  fixed_schedule_rate_pct: number;
  smart_retry_rate_pct: number;
  methodology_note: string;
}

export interface TransactionContext {
  transaction_id: string;
  amount_inr: number;
  decline_reason: string;
  payment_method: string;
  failed_at: string;
  customer_prior_failures: number;
  customer_prior_recoveries: number;
  customer_tenure_days: number;
}

export interface RetryCandidate {
  offset_label: string;
  offset_minutes: number;
  probability: number;
}

export interface PredictResponse {
  transaction_id: string;
  eligible: boolean;
  eligibility_reason: string;
  recommended_offset_label: string;
  recommended_offset_minutes: number;
  calibrated_probability: number;
  confidence_tier: ConfidenceTier;
  context_summary: string;
  candidates: RetryCandidate[];
}

export interface SimulateResponse {
  transaction_id: string;
  executed_at: string;
  simulated: true;
  result: RetryResult;
  recovered_amount_inr: number;
  message: string;
}

export interface AuditEvent {
  step: string;
  timestamp: string;
  detail: string;
}

export interface AuditRecord {
  id: string;
  transaction_id: string;
  timestamp: string;
  decline_reason: string;
  selected_offset_label: string;
  confidence_tier: ConfidenceTier;
  result: RetryResult;
  recovered_amount_inr: number;
  events: AuditEvent[];
}

export interface AuditResponse {
  records: AuditRecord[];
}

export interface TransactionsResponse {
  transactions: TransactionContext[];
}
