'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Terminal, Copy, Check, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const providers = [
  {
    name: 'MiniMax',
    logo: '/logos/minimax.ico',
    baseUrl: 'https://api.minimax.chat/v1',
    apiKeyFormat: 'sk-xxx...',
    docsUrl: 'https://platform.minimaxi.com/document',
    steps: [
      '访问 MiniMax 开放平台 (platform.minimaxi.com)',
      '注册账号并完成认证',
      '在「账户管理」→「API Key」中创建密钥',
      '将 API Key 配置到 OpenClaw 设置中',
      'Base URL 使用: https://api.minimax.chat/v1',
      '模型选择: MiniMax-M2.5 或 MiniMax-M2.5-highspeed',
    ],
  },
  {
    name: 'Moonshot AI',
    logo: '/logos/moonshot.ico',
    baseUrl: 'https://api.moonshot.cn/v1',
    apiKeyFormat: 'sk-xxx...',
    docsUrl: 'https://platform.moonshot.cn/docs/guide',
    steps: [
      '访问 Kimi 开放平台 (platform.moonshot.cn)',
      '注册账号并完成认证',
      '在「API Key」管理页面创建密钥',
      '将 API Key 配置到 OpenClaw 设置中',
      'Base URL 使用: https://api.moonshot.cn/v1',
      '模型选择: kimi-k2.5 或其他可用模型',
    ],
  },
  {
    name: '智谱 GLM',
    logo: '/logos/zhipuai.svg',
    baseUrl: 'https://open.bigmodel.cn/api/paas/v4',
    apiKeyFormat: 'xxx...',
    docsUrl: 'https://docs.bigmodel.cn/dev/api',
    steps: [
      '访问智谱开放平台 (open.bigmodel.cn)',
      '注册账号并完成认证',
      '在「API Key」管理页面创建密钥',
      '将 API Key 配置到 OpenClaw 设置中',
      'Base URL 使用: https://open.bigmodel.cn/api/paas/v4',
      '模型选择: glm-5 或 glm-4.7',
    ],
  },
  {
    name: '阿里云',
    baseUrl: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    apiKeyFormat: 'sk-sp-xxx...',
    docsUrl: 'https://help.aliyun.com/zh/model-studio/developer-reference/compatibility-of-openai-with-dashscope',
    steps: [
      '访问阿里云百炼平台 (help.aliyun.com/zh/model-studio)',
      '注册账号并完成认证',
      '在「模型广场」→「API Key」中创建密钥',
      '将 API Key 配置到 OpenClaw 设置中',
      'Base URL 使用: https://dashscope.aliyuncs.com/compatible-mode/v1',
      '模型选择: qwen3.5-plus, qwen3-coder-next, kimik2.5, glm-4.7 等',
    ],
  },
  {
    name: '火山引擎',
    baseUrl: 'https://ark.cn-beijing.volces.com/api/v3',
    apiKeyFormat: 'xxx...',
    docsUrl: 'https://www.volcengine.com/docs/82379',
    steps: [
      '访问火山方舟平台 (www.volcengine.com/docs/82379)',
      '注册账号并完成认证',
      '在「API Key」管理页面创建密钥',
      '将 API Key 配置到 OpenClaw 设置中',
      'Base URL 使用: https://ark.cn-beijing.volces.com/api/v3',
      '模型选择: doubao-seed-2.0-code, kimik2.5, glm-4.7 等',
    ],
  },
  {
    name: '腾讯云',
    baseUrl: 'https://hunyuan.tencentcloudapi.com/v3',
    apiKeyFormat: 'sk-sp-xxx...',
    docsUrl: 'https://cloud.tencent.com/document/product/1772',
    steps: [
      '访问腾讯云控制台 (cloud.tencent.com)',
      '注册账号并完成认证',
      '在「API Key」管理页面创建密钥',
      '将 API Key 配置到 OpenClaw 设置中',
      'Base URL 使用对应模型端点',
      '模型选择: Tencent-HY-2.0, Hunyuan-T1 等',
    ],
  },
];

export default function OpenClawPage() {
  const [copiedStep, setCopiedStep] = useState<string | null>(null);
  const [expandedProvider, setExpandedProvider] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(key);
    setTimeout(() => setCopiedStep(null), 2000);
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
              OpenClaw 是一个开源的 AI 编程助手，支持连接多种大模型 API。
            </p>
          </div>
        </section>

        {/* Installation Guide */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">安装 OpenClaw</h2>

            {/* macOS / Linux */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">macOS / Linux</h3>
              <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm">
                <div className="flex items-center justify-between">
                  <pre className="text-green-400 overflow-x-auto">
                    <code>curl -fsSL https://openclaw.ai/install.sh | bash</code>
                  </pre>
                  <button
                    onClick={() => copyToClipboard('curl -fsSL https://openclaw.ai/install.sh | bash', 'install-mac')}
                    className="text-gray-400 hover:text-white ml-4"
                  >
                    {copiedStep === 'install-mac' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Windows */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Windows (PowerShell)</h3>
              <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm">
                <div className="flex items-center justify-between">
                  <pre className="text-green-400 overflow-x-auto">
                    <code>iwr -useb https://openclaw.ai/install.ps1 | iex</code>
                  </pre>
                  <button
                    onClick={() => copyToClipboard('iwr -useb https://openclaw.ai/install.ps1 | iex', 'install-win')}
                    className="text-gray-400 hover:text-white ml-4"
                  >
                    {copiedStep === 'install-win' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-4 text-gray-600 text-sm">
              安装完成后，运行 <code className="bg-gray-100 px-2 py-1 rounded">openclaw</code> 命令启动。
            </p>
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
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <div className="space-y-4">
                      {provider.steps.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">
                            {index + 1}
                          </span>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      ))}

                      <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">配置示例</h4>
                        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400">Model ID</span>
                            <button
                              onClick={() => copyToClipboard(provider.name.toLowerCase().includes('minimax') ? 'MiniMax-M2.5' : provider.name.toLowerCase().includes('moonshot') ? 'kimi-k2.5' : provider.name.toLowerCase().includes('智谱') ? 'glm-5' : 'qwen3.5-plus', `model-${provider.name}`)}
                              className="text-gray-400 hover:text-white"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-green-400">
                            {provider.name.toLowerCase().includes('minimax') ? 'MiniMax-M2.5' :
                             provider.name.toLowerCase().includes('moonshot') ? 'kimi-k2.5' :
                             provider.name.toLowerCase().includes('智谱') ? 'glm-5' :
                             'qwen3.5-plus'}
                          </p>
                        </div>
                      </div>

                      <a
                        href={provider.docsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-4"
                      >
                        查看官方文档
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
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
