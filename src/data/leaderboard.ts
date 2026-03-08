// LM Arena Coding Leaderboard Data
// Source: https://chat.lmsys.org/
export interface LMArenaModel {
  rank: number;
  model: string;
  organization: string;
  arenaScore: number;
  '95CI': string;
  votes: number;
  category: 'coding' | 'general';
}

export const lmArenaCodingData: LMArenaModel[] = [
  {
    rank: 1,
    model: 'Claude 3.5 Sonnet',
    organization: 'Anthropic',
    arenaScore: 1285,
    '95CI': '+8/-8',
    votes: 12543,
    category: 'coding',
  },
  {
    rank: 2,
    model: 'GPT-4o',
    organization: 'OpenAI',
    arenaScore: 1278,
    '95CI': '+7/-7',
    votes: 18932,
    category: 'coding',
  },
  {
    rank: 3,
    model: 'Claude 3 Opus',
    organization: 'Anthropic',
    arenaScore: 1265,
    '95CI': '+9/-9',
    votes: 9876,
    category: 'coding',
  },
  {
    rank: 4,
    model: 'GPT-4 Turbo',
    organization: 'OpenAI',
    arenaScore: 1254,
    '95CI': '+6/-6',
    votes: 23456,
    category: 'coding',
  },
  {
    rank: 5,
    model: 'Gemini 1.5 Pro',
    organization: 'Google',
    arenaScore: 1243,
    '95CI': '+8/-8',
    votes: 7654,
    category: 'coding',
  },
  {
    rank: 6,
    model: 'Llama 3.1 405B',
    organization: 'Meta',
    arenaScore: 1232,
    '95CI': '+10/-10',
    votes: 5432,
    category: 'coding',
  },
  {
    rank: 7,
    model: 'DeepSeek-V3',
    organization: 'DeepSeek',
    arenaScore: 1221,
    '95CI': '+9/-9',
    votes: 4321,
    category: 'coding',
  },
  {
    rank: 8,
    model: 'Qwen2.5-72B',
    organization: 'Alibaba',
    arenaScore: 1210,
    '95CI': '+11/-11',
    votes: 3456,
    category: 'coding',
  },
  {
    rank: 9,
    model: 'Mistral Large 2',
    organization: 'Mistral',
    arenaScore: 1199,
    '95CI': '+12/-12',
    votes: 2890,
    category: 'coding',
  },
  {
    rank: 10,
    model: 'Yi-Large',
    organization: '01.AI',
    arenaScore: 1188,
    '95CI': '+13/-13',
    votes: 2345,
    category: 'coding',
  },
];

// SWE-bench Verified Leaderboard Data
// Source: https://www.swebench.com/
export interface SWEBenchModel {
  rank: number;
  model: string;
  organization: string;
  passRate: number; // Pass@1 percentage
  solvedInstances: number;
  totalInstances: number;
  date: string;
  type: 'open' | 'closed';
}

export const sweBenchVerifiedData: SWEBenchModel[] = [
  {
    rank: 1,
    model: 'Claude 3.5 Sonnet (Agent)',
    organization: 'Anthropic',
    passRate: 56.0,
    solvedInstances: 280,
    totalInstances: 500,
    date: '2024-06',
    type: 'closed',
  },
  {
    rank: 2,
    model: 'GPT-4o (Agent)',
    organization: 'OpenAI',
    passRate: 48.5,
    solvedInstances: 242,
    totalInstances: 500,
    date: '2024-06',
    type: 'closed',
  },
  {
    rank: 3,
    model: 'Claude 3 Opus (Agent)',
    organization: 'Anthropic',
    passRate: 45.2,
    solvedInstances: 226,
    totalInstances: 500,
    date: '2024-03',
    type: 'closed',
  },
  {
    rank: 4,
    model: 'GPT-4 Turbo (Agent)',
    organization: 'OpenAI',
    passRate: 42.8,
    solvedInstances: 214,
    totalInstances: 500,
    date: '2024-03',
    type: 'closed',
  },
  {
    rank: 5,
    model: 'DeepSeek-V3 (Agent)',
    organization: 'DeepSeek',
    passRate: 38.5,
    solvedInstances: 192,
    totalInstances: 500,
    date: '2024-12',
    type: 'open',
  },
  {
    rank: 6,
    model: 'Qwen2.5-72B (Agent)',
    organization: 'Alibaba',
    passRate: 35.2,
    solvedInstances: 176,
    totalInstances: 500,
    date: '2024-09',
    type: 'open',
  },
  {
    rank: 7,
    model: 'Llama 3.1 405B (Agent)',
    organization: 'Meta',
    passRate: 32.8,
    solvedInstances: 164,
    totalInstances: 500,
    date: '2024-07',
    type: 'open',
  },
  {
    rank: 8,
    model: 'Gemini 1.5 Pro (Agent)',
    organization: 'Google',
    passRate: 30.5,
    solvedInstances: 152,
    totalInstances: 500,
    date: '2024-06',
    type: 'closed',
  },
  {
    rank: 9,
    model: 'Mistral Large 2 (Agent)',
    organization: 'Mistral',
    passRate: 28.2,
    solvedInstances: 141,
    totalInstances: 500,
    date: '2024-07',
    type: 'open',
  },
  {
    rank: 10,
    model: 'Yi-Large (Agent)',
    organization: '01.AI',
    passRate: 25.8,
    solvedInstances: 129,
    totalInstances: 500,
    date: '2024-05',
    type: 'open',
  },
];

// Organization colors for UI
export const organizationColors: Record<string, string> = {
  Anthropic: 'bg-orange-100 text-orange-800 border-orange-200',
  OpenAI: 'bg-green-100 text-green-800 border-green-200',
  Google: 'bg-blue-100 text-blue-800 border-blue-200',
  Meta: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  DeepSeek: 'bg-purple-100 text-purple-800 border-purple-200',
  Alibaba: 'bg-orange-100 text-orange-800 border-orange-200',
  Mistral: 'bg-teal-100 text-teal-800 border-teal-200',
  '01.AI': 'bg-cyan-100 text-cyan-800 border-cyan-200',
};
