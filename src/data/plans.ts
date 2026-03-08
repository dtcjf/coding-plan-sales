import { CodingPlan } from '@/types';

export const codingPlans: CodingPlan[] = [
  {
    id: 'claude-pro',
    name: 'Claude Pro',
    provider: 'Anthropic',
    pricing: {
      monthly: 20,
      yearly: 200,
      currency: 'USD',
    },
    limits: {
      requestsPerMonth: -1,
      tokensPerMonth: -1,
      maxContextLength: 200000,
    },
    features: [
      'Unlimited Claude 3.5 Sonnet messages',
      '5x higher rate limits',
      'Early access to new features',
      'Priority bandwidth',
    ],
    models: ['claude-3-5-sonnet-20241022', 'claude-3-opus-20240229', 'claude-3-haiku-20240307'],
    affiliateLink: 'https://www.anthropic.com/claude-pro',
    affiliateCommission: 'Subscription based',
  },
  {
    id: 'openai-chatgpt-plus',
    name: 'ChatGPT Plus',
    provider: 'OpenAI',
    pricing: {
      monthly: 20,
      yearly: 240,
      currency: 'USD',
    },
    limits: {
      requestsPerMonth: -1,
      tokensPerMonth: -1,
      maxContextLength: 128000,
    },
    features: [
      'GPT-4, GPT-4o access',
      'Browse with Bing',
      'DALL·E image generation',
      'Advanced data analysis',
      'Custom GPTs',
    ],
    models: ['gpt-4o', 'gpt-4-turbo', 'gpt-4', 'gpt-3.5-turbo'],
    affiliateLink: 'https://openai.com/chatgpt',
    affiliateCommission: 'N/A - No affiliate program',
  },
  {
    id: 'github-copilot-pro',
    name: 'GitHub Copilot Pro',
    provider: 'GitHub',
    pricing: {
      monthly: 19,
      yearly: 190,
      currency: 'USD',
    },
    limits: {
      requestsPerMonth: -1,
      tokensPerMonth: -1,
      maxContextLength: 8192,
    },
    features: [
      'AI code completions',
      'Chat in IDE (Copilot Chat)',
      'GitHub Copilot Workspace',
      'Pull request summaries',
      'Code explanations',
    ],
    models: ['gpt-4', 'custom-copilot-model'],
    affiliateLink: 'https://github.com/features/copilot',
    affiliateCommission: 'Referral program available',
  },
  {
    id: 'cursor-pro',
    name: 'Cursor Pro',
    provider: 'Cursor',
    pricing: {
      monthly: 20,
      yearly: 192,
      currency: 'USD',
    },
    limits: {
      requestsPerMonth: 500,
      tokensPerMonth: -1,
      maxContextLength: 200000,
    },
    features: [
      'GPT-4, Claude 3.5 Sonnet, cursor-small',
      '500 fast requests/month',
      'Unlimited slow requests',
      'Composer for prototyping',
      'Tab-based predictions',
    ],
    models: ['gpt-4o', 'claude-3.5-sonnet', 'cursor-small'],
    affiliateLink: 'https://cursor.com',
    affiliateCommission: '20% recurring for 12 months',
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    provider: 'Codeium',
    pricing: {
      monthly: 12,
      yearly: 120,
      currency: 'USD',
    },
    limits: {
      requestsPerMonth: -1,
      tokensPerMonth: -1,
      maxContextLength: 128000,
    },
    features: [
      'Cascade AI agent',
      'Full-context awareness',
      'Multiple AI models',
      'IDE integration',
      'Supercomplete suggestions',
    ],
    models: ['gpt-4o', 'claude-3.5-sonnet', 'gemini-pro'],
    affiliateLink: 'https://codeium.com/windsurf',
    affiliateCommission: 'Available via partner program',
  },
  {
    id: 'tabnine-pro',
    name: 'Tabnine Pro',
    provider: 'Tabnine',
    pricing: {
      monthly: 12,
      yearly: 120,
      currency: 'USD',
    },
    limits: {
      requestsPerMonth: -1,
      tokensPerMonth: -1,
      maxContextLength: 8192,
    },
    features: [
      'Whole-line completions',
      'Full-function completions',
      'Natural language to code',
      'Private model training',
      'Enterprise security',
    ],
    models: ['tabnine-custom-model', 'gpt-4'],
    affiliateLink: 'https://www.tabnine.com',
    affiliateCommission: 'Affiliate program available',
  },
];

export const providers = [...new Set(codingPlans.map((plan) => plan.provider))];

export const allFeatures = [
  ...new Set(codingPlans.flatMap((plan) => plan.features)),
];
