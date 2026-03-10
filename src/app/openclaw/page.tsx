'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Terminal, Copy, Check, ExternalLink, BookOpen, Code, Play } from 'lucide-react';
import { useState } from 'react';

const providers = [
  {
    name: 'MiniMax',
    logo: '/logos/minimax.ico',
    baseUrl: 'https://api.minimax.chat/v1',
    apiKeyFormat: 'sk-xxx...',
    docsUrl: 'https://platform.minimaxi.com/docs/llms.txt',
    steps: [
      '访问 MiniMax 开放平台 (platform.minimaxi.com)',
      '注册账号并完成实名认证',
      '在左侧菜单「账户管理」→「API Key」中创建密钥',
      '复制并妥善保存 API Key（创建后只显示一次）',
    ],
    models: [
      { id: 'MiniMax-M2.5', name: 'M2.5 主模型', context: '200K', recommended: true },
      { id: 'MiniMax-M2.5-highspeed', name: 'M2.5 高速版', context: '200K', recommended: true },
      { id: 'MiniMax-M2.1', name: 'M2.1', context: '100K' },
    ],
    configExample: `{
  "models": {
    "providers": {
      "minimax": {
        "apiKey": "\${MINIMAX_API_KEY}",
        "baseUrl": "https://api.minimax.chat/v1"
      }
    }
  }
}`,
    testCommand: `curl https://api.minimax.chat/v1/chat/completions \\
  -H "Authorization: Bearer \$MINIMAX_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "MiniMax-M2.5",
    "messages": [{"role": "user", "content": "你好"}],
    "max_tokens": 100
  }'`,
  },
  {
    name: 'Moonshot AI',
    logo: '/logos/moonshot.ico',
    baseUrl: 'https://api.moonshot.cn/v1',
    apiKeyFormat: 'sk-xxx...',
    docsUrl: 'https://platform.moonshot.cn/',
    steps: [
      '访问 Moonshot AI 开放平台 (platform.moonshot.cn)',
      '使用微信或手机号注册账号',
      '完成实名认证（赠送 15 元免费额度）',
      '在左侧菜单「API Key」中创建密钥',
      '复制并妥善保存 API Key',
    ],
    models: [
      { id: 'kimi-k2.5', name: 'Kimi K2.5', context: '128K', recommended: true },
      { id: 'moonshot-v1-8k', name: 'Moonshot V1 8K', context: '8K' },
      { id: 'moonshot-v1-32k', name: 'Moonshot V1 32K', context: '32K' },
      { id: 'moonshot-v1-128k', name: 'Moonshot V1 128K', context: '128K' },
    ],
    configExample: `{
  "models": {
    "providers": {
      "moonshot": {
        "apiKey": "\${MOONSHOT_API_KEY}",
        "baseUrl": "https://api.moonshot.cn/v1"
      }
    }
  }
}`,
    testCommand: `curl https://api.moonshot.cn/v1/chat/completions \\
  -H "Authorization: Bearer \$MOONSHOT_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "kimi-k2.5",
    "messages": [{"role": "user", "content": "你好"}],
    "max_tokens": 100
  }'`,
  },
  {
    name: '智谱 GLM',
    logo: '/logos/zhipuai.svg',
    baseUrl: 'https://open.bigmodel.cn/api/paas/v4',
    apiKeyFormat: 'xxx...',
    docsUrl: 'https://docs.bigmodel.cn/cn/guide/develop/',
    steps: [
      '访问智谱 AI 开放平台 (open.bigmodel.cn)',
      '注册账号并完成实名认证',
      '新用户可获得 100 万 token 免费体验包',
      '在左侧菜单「API Keys」中创建密钥',
      '复制并妥善保存 API Key',
    ],
    models: [
      { id: 'glm-4-flash', name: 'GLM-4 Flash', context: '128K', recommended: true },
      { id: 'glm-4', name: 'GLM-4', context: '128K' },
      { id: 'glm-4-plus', name: 'GLM-4 Plus', context: '128K' },
      { id: 'glm-4.7', name: 'GLM-4.7', context: '128K', recommended: true },
      { id: 'glm-4-flashx', name: 'GLM-4 FlashX', context: '1M' },
      { id: 'glm-zero-preview', name: 'GLM-Zero 预览版', context: '128K' },
    ],
    codingModels: [
      { id: 'glm-4.7', name: 'GLM-4.7 编程版', context: '128K', recommended: true },
    ],
    configExample: `{
  "models": {
    "providers": {
      "zhipuai": {
        "apiKey": "\${ZHIPUAI_API_KEY}",
        "baseUrl": "https://open.bigmodel.cn/api/paas/v4"
      }
    }
  }
}`,
    testCommand: `curl https://open.bigmodel.cn/api/paas/v4/chat/completions \\
  -H "Authorization: Bearer \$ZHIPUAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "glm-4-flash",
    "messages": [{"role": "user", "content": "你好"}],
    "max_tokens": 100
  }'`,
  },
  {
    name: '阿里云百炼',
    baseUrl: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    apiKeyFormat: 'sk-sp-xxx...',
    docsUrl: 'https://help.aliyun.com/zh/model-studio/developer-reference/compatibility-of-openai-with-dashscope',
    promoUrl: 'https://www.aliyun.com/activity/ecs/clawdbot?userCode=wl0iwyve',
    steps: [
      '访问阿里云百炼控制台 (bailian.console.aliyun.com)',
      '使用阿里云账号登录，如无账号需先注册',
      '完成实名认证（首次开通需授权）',
      '在右上角「API-KEY」中创建密钥',
      '复制并妥善保存 API Key',
    ],
    models: [
      { id: 'qwen-plus', name: 'Qwen Plus', context: '32K' },
      { id: 'qwen-turbo', name: 'Qwen Turbo', context: '8K' },
      { id: 'qwen-max', name: 'Qwen Max', context: '8K' },
      { id: 'qwen2.5-coder-32b-instruct', name: 'Qwen2.5 Coder 32B', context: '32K', recommended: true },
      { id: 'qwen2.5-plus', name: 'Qwen2.5 Plus', context: '128K', recommended: true },
    ],
    configExample: `{
  "models": {
    "providers": {
      "dashscope": {
        "apiKey": "\${DASHSCOPE_API_KEY}",
        "baseUrl": "https://dashscope.aliyuncs.com/compatible-mode/v1"
      }
    }
  }
}`,
    testCommand: `curl https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions \\
  -H "Authorization: Bearer \$DASHSCOPE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen-plus",
    "messages": [{"role": "user", "content": "你好"}],
    "max_tokens": 100
  }'`,
  },
  {
    name: '火山引擎',
    baseUrl: 'https://ark.cn-beijing.volces.com/api/v3',
    apiKeyFormat: 'xxx...',
    docsUrl: 'https://www.volcengine.com/docs/82379',
    steps: [
      '访问火山引擎控制台 (console.volcengine.com)',
      '注册账号并完成实名认证（赠送 50 万 tokens）',
      '在顶部导航选择「火山方舟」',
      '在左侧「API Key 管理」中创建密钥',
      '在左侧「在线推理」中创建接入点',
      '记录接入点 ID（如 deepseek-r1-250120）',
    ],
    models: [
      { id: 'doubao-pro-32k', name: '豆包 Pro 32K', context: '32K' },
      { id: 'doubao-pro-4k', name: '豆包 Pro 4K', context: '4K' },
      { id: 'deepseek-r1-250120', name: 'DeepSeek R1', context: '64K', recommended: true },
      { id: 'deepseek-v3-250121', name: 'DeepSeek V3', context: '64K', recommended: true },
      { id: 'kimi-k2.5', name: 'Kimi K2.5', context: '128K' },
    ],
    configExample: `{
  "models": {
    "providers": {
      "volcengine": {
        "apiKey": "\${VOLCENGINE_API_KEY}",
        "baseUrl": "https://ark.cn-beijing.volces.com/api/v3"
      }
    }
  }
}`,
    testCommand: `curl https://ark.cn-beijing.volces.com/api/v3/chat/completions \\
  -H "Authorization: Bearer \$VOLCENGINE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "deepseek-r1-250120",
    "messages": [{"role": "user", "content": "你好"}],
    "max_tokens": 100
  }'`,
  },
  {
    name: '腾讯云',
    baseUrl: 'https://hunyuan.tencentcloudapi.com/v3',
    apiKeyFormat: 'sk-sp-xxx...',
    docsUrl: 'https://cloud.tencent.com/document/product/1772',
    steps: [
      '访问腾讯云控制台 (cloud.tencent.com)',
      '注册账号并完成实名认证',
      '在左侧「API Key 管理」中创建密钥',
      '记录 SecretId 和 SecretKey',
    ],
    models: [
      { id: 'hunyuan-pro-32k', name: 'Hunyuan Pro 32K', context: '32K', recommended: true },
      { id: 'hunyuan-standard', name: 'Hunyuan Standard', context: '16K' },
      { id: 'hunyuan-t1', name: 'Hunyuan T1', context: '128K', recommended: true },
    ],
    configExample: `{
  "models": {
    "providers": {
      "tencent": {
        "apiKey": "\${TENCENT_SECRET_ID}:\${TENCENT_SECRET_KEY}",
        "baseUrl": "https://hunyuan.tencentcloudapi.com/v3"
      }
    }
  }
}`,
    testCommand: `# 腾讯云需要使用签名认证，具体请参考官方文档`,
  },
];

export default function OpenClawPage() {
  const [copiedStep, setCopiedStep] = useState<string | null>(null);
  const [expandedProvider, setExpandedProvider] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Record<string, 'steps' | 'models' | 'config' | 'test'>>({});

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(key);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const toggleTab = (provider: string, tab: 'steps' | 'models' | 'config' | 'test') => {
    setActiveTab(prev => ({
      ...prev,
      [provider]: prev[provider] === tab ? 'steps' : tab
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 to-orange-500 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Terminal className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              接入 OpenClaw 教程
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              OpenClaw 是一个开源的 AI 编程助手，支持连接多种大模型 API，包含 MiniMax、Moonshot、智谱、阿里云百炼、火山引擎等国内提供商。
            </p>
          </div>
        </section>

        {/* Installation Guide */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Code className="w-6 h-6 mr-2 text-blue-600" />
              安装 OpenClaw
            </h2>

            {/* Quick Start */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Play className="w-5 h-5 mr-2 text-green-600" />
                快速开始（推荐）
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {/* macOS / Linux */}
                <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">macOS / Linux</span>
                    <button
                      onClick={() => copyToClipboard('curl -fsSL https://openclaw.ai/install.sh | bash', 'install-mac')}
                      className="text-gray-400 hover:text-white"
                    >
                      {copiedStep === 'install-mac' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <pre className="text-green-400 overflow-x-auto">
                    <code>curl -fsSL https://openclaw.ai/install.sh | bash</code>
                  </pre>
                </div>

                {/* Windows */}
                <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Windows (PowerShell)</span>
                    <button
                      onClick={() => copyToClipboard('iwr -useb https://openclaw.ai/install.ps1 | iex', 'install-win')}
                      className="text-gray-400 hover:text-white"
                    >
                      {copiedStep === 'install-win' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <pre className="text-green-400 overflow-x-auto">
                    <code>iwr -useb https://openclaw.ai/install.ps1 | iex</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Alternative Installation */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">其他安装方式</h3>
              <div className="space-y-3">
                <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-400">npm 全局安装: </span>
                      <span className="text-green-400">npm i -g openclaw</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard('npm i -g openclaw', 'install-npm')}
                      className="text-gray-400 hover:text-white"
                    >
                      {copiedStep === 'install-npm' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-400">Git 克隆安装: </span>
                      <span className="text-green-400">git clone https://github.com/openclaw/openclaw.git && cd openclaw && pnpm install && pnpm run build</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard('git clone https://github.com/openclaw/openclaw.git && cd openclaw && pnpm install && pnpm run build', 'install-git')}
                      className="text-gray-400 hover:text-white"
                    >
                      {copiedStep === 'install-git' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Initialize */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">初始化配置</h4>
              <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-green-400">openclaw onboard</span>
                  <button
                    onClick={() => copyToClipboard('openclaw onboard', 'onboard')}
                    className="text-gray-400 hover:text-white"
                  >
                    {copiedStep === 'onboard' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <p className="mt-2 text-sm text-blue-800">
                运行 <code className="bg-blue-100 px-1.5 py-0.5 rounded">openclaw onboard</code> 启动配置向导，按提示完成 API Key 配置。
              </p>
            </div>
          </div>

          {/* Quick Config */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
              手动配置文件方式
            </h2>
            <p className="text-gray-600 mb-4">
              除了使用 <code className="bg-gray-100 px-2 py-1 rounded">openclaw onboard</code> 向导，你也可以直接编辑配置文件：
            </p>
            <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">配置文件位置: ~/.openclaw/openclaw.json</span>
                <button
                  onClick={() => copyToClipboard('~/.openclaw/openclaw.json', 'config-path')}
                  className="text-gray-400 hover:text-white"
                >
                  {copiedStep === 'config-path' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <pre className="text-green-400 overflow-x-auto">
{`{
  "models": {
    "providers": {
      "custom-provider": {
        "baseUrl": "https://api.example.com/v1",
        "apiKey": "\${API_KEY}",
        "api": "openai-completions",
        "models": [
          {
            "id": "model-id",
            "name": "Model Name",
            "contextWindow": 128000,
            "maxTokens": 32000
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": { "primary": "custom-provider/model-id" }
    }
  }
}`}
              </pre>
            </div>
          </div>

          {/* Provider Guides */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">各平台接入教程</h2>
          <div className="space-y-4">
            {providers.map((provider) => (
              <div
                key={provider.name}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedProvider(expandedProvider === provider.name ? null : provider.name)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">{provider.name[0]}</span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">{provider.name}</h3>
                      <p className="text-sm text-gray-500">Base URL: {provider.baseUrl}</p>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    {expandedProvider === provider.name ? '−' : '+'}
                  </div>
                </button>

                {expandedProvider === provider.name && (
                  <div className="border-t border-gray-200 bg-gray-50">
                    {/* Tab Navigation */}
                    <div className="flex border-b border-gray-200 bg-white px-4">
                      {(['steps', 'models', 'config', 'test'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => toggleTab(provider.name, tab)}
                          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                            activeTab[provider.name] === tab || (!activeTab[provider.name] && tab === 'steps')
                              ? 'border-blue-600 text-blue-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          {tab === 'steps' && '接入步骤'}
                          {tab === 'models' && '可用模型'}
                          {tab === 'config' && '配置示例'}
                          {tab === 'test' && '测试命令'}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                      {/* Steps Tab */}
                      {(activeTab[provider.name] === 'steps' || !activeTab[provider.name]) && (
                        <div className="space-y-3">
                          {provider.steps.map((step, index) => (
                            <div key={index} className="flex items-start">
                              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">
                                {index + 1}
                              </span>
                              <p className="text-gray-700">{step}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Models Tab */}
                      {activeTab[provider.name] === 'models' && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">推荐编程模型</h4>
                          <div className="grid gap-3">
                            {(provider.models || []).map((model) => (
                              <div
                                key={model.id}
                                className={`bg-white rounded-lg p-3 border ${model.recommended ? 'border-green-300 bg-green-50' : 'border-gray-200'}`}
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <span className="font-medium text-gray-900">{model.name}</span>
                                    <span className="text-gray-500 ml-2">({model.id})</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {model.recommended && (
                                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                                        推荐
                                      </span>
                                    )}
                                    <span className="text-sm text-gray-500">上下文: {model.context}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Config Tab */}
                      {activeTab[provider.name] === 'config' && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">OpenClaw 配置示例</h4>
                          <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-400">~/.openclaw/openclaw.json</span>
                              <button
                                onClick={() => copyToClipboard(provider.configExample, `config-${provider.name}`)}
                                className="text-gray-400 hover:text-white"
                              >
                                {copiedStep === `config-${provider.name}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                              </button>
                            </div>
                            <pre className="text-green-400">
                              <code>{provider.configExample}</code>
                            </pre>
                          </div>
                          <p className="mt-3 text-sm text-gray-600">
                            提示：建议使用环境变量引用 API Key，避免明文存储。格式：<code className="bg-gray-100 px-1.5 py-0.5 rounded">${`{VAR_NAME}`}</code>
                          </p>
                        </div>
                      )}

                      {/* Test Tab */}
                      {activeTab[provider.name] === 'test' && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">API 测试命令</h4>
                          <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-400">cURL 测试</span>
                              <button
                                onClick={() => copyToClipboard(provider.testCommand, `test-${provider.name}`)}
                                className="text-gray-400 hover:text-white"
                              >
                                {copiedStep === `test-${provider.name}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                              </button>
                            </div>
                            <pre className="text-green-400 whitespace-pre-wrap">
                              <code>{provider.testCommand}</code>
                            </pre>
                          </div>
                          <p className="mt-3 text-sm text-gray-600">
                            将 <code className="bg-gray-100 px-1.5 py-0.5 rounded">${`{PROVIDER}_API_KEY`}</code> 替换为你实际的 API Key。
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Footer with Docs Link */}
                    <div className="border-t border-gray-200 p-4 bg-white flex flex-wrap gap-4">
                      <a
                        href={provider.docsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700"
                      >
                        查看官方文档
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                      {provider.promoUrl && (
                        <a
                          href={provider.promoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-orange-600 hover:text-orange-700"
                        >
                          享专属优惠
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
