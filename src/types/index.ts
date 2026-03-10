export interface PricingTier {
  name: string;
  monthly: number;
  quarterly?: number;
  yearly: number;
  originalMonthly?: number;
  originalQuarterly?: number;
  originalYearly?: number;
  description?: string;
  models?: string[];
  requestsPerMonth?: number;
  requestsPerWeek?: number;
  promptsPer5Hours?: number | string;
  tokensPerMonth?: number;
  maxContextLength?: number;
  contextWindow?: string;
  speed?: string;
}

export interface CodingPlan {
  id: string;
  name: string;
  provider: string;
  logo?: string;
  pricing: {
    monthly: number;
    yearly: number;
    originalMonthly?: number;
    originalYearly?: number;
    currency: string;
    tier?: string;
  };
  pricingTiers?: PricingTier[];
  limits: {
    requestsPerMonth: number;
    tokensPerMonth: number;
    maxContextLength: number;
    promptsPer5Hours?: string;
  };
  modelSpecs?: {
    params: string;
    context: string;
    multimodal: boolean;
    highlightParams?: boolean;
    highlightContext?: boolean;
    highlightMultimodal?: boolean;
  };
  features: string[];
  models: string[];
  affiliateLink?: string;
  affiliateCommission?: string;
  notes?: {
    modelIntro?: string;
    performance?: string;
    price?: string;
    enterprise?: string;
    subscribe?: string;
  };
  benchmark?: {
    lmArenaRank?: string;
    lmArenaUrl?: string;
    sweBenchVerified?: string;
  };
  badge?: {
    text: string;
    variant: 'success' | 'warning' | 'info' | 'danger';
  };
  discount?: {
    text: string;
    percentage?: number;
  };
}

export interface ComparisonFilter {
  providers: string[];
  maxPrice: number;
  minRequests: number;
  features: string[];
}

export type SortField = 'price' | 'requests' | 'tokens' | 'context';
export type SortOrder = 'asc' | 'desc';
