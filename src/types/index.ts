export interface CodingPlan {
  id: string;
  name: string;
  provider: string;
  logo?: string;
  pricing: {
    monthly: number;
    yearly: number;
    currency: string;
  };
  limits: {
    requestsPerMonth: number;
    tokensPerMonth: number;
    maxContextLength: number;
  };
  features: string[];
  models: string[];
  affiliateLink?: string;
  affiliateCommission?: string;
  notes?: string;
}

export interface ComparisonFilter {
  providers: string[];
  maxPrice: number;
  minRequests: number;
  features: string[];
}

export type SortField = 'price' | 'requests' | 'tokens' | 'context';
export type SortOrder = 'asc' | 'desc';
