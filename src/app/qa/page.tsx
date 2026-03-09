'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: '什么是 Coding Plan？',
    answer: 'Coding Plan 是 AI 公司推出的编程订阅服务，按月或按年付费获取 AI 编程助手的使用权限。相比按量计费的 API 方式，Coding Plan 通常提供更高的使用额度和更稳定的服务，适合高频使用的开发者。',
  },
  {
    question: 'Coding Plan 和 API 有什么区别？',
    answer: 'Coding Plan 是订阅制服务，通常按月/年付费，不限制请求次数或提供很高额度；API 是按调用量计费。总体来说，Coding Plan 更适合高频使用的开发者，API 更适合低频或测试场景。',
  },
  {
    question: '个人开发者适合 Coding Plan 吗？',
    answer: '适合。如果你每天都需要使用 AI 辅助编程，Coding Plan 的订阅制通常比按量付费更划算。各平台的个人版价格从免费到 ¥50/月不等，可以根据需求选择。',
  },
  {
    question: 'MiniMax、Moonshot、智谱哪家强？',
    answer: '三家各有优势：MiniMax M2.5 在 SWE-bench 表现最佳（75.8%），GLM-5 在 LM Arena 排名最高（第8名），Kimi K2.5 支持原生多模态和超长上下文（200K tokens）。建议根据具体使用场景选择。',
  },
  {
    question: '云厂商的 Coding Plan 和 AI 公司的有什么区别？',
    answer: 'AI 公司（如 MiniMax、智谱）自研模型，价格更有优势；云厂商（如阿里云、腾讯云）通常集成多模型，可选择性更丰富。云厂商的优势在于生态整合，企业已有云服务的情况下使用更方便。',
  },
  {
    question: '免费版和付费版有什么区别？',
    answer: '免费版通常有额度限制（如每日请求次数、并发数等），功能也可能受限。付费版提供更高额度、更多模型选择，更快响应速度和企业级支持。',
  },
  {
    question: 'LM Arena 排名可信吗？',
    answer: 'LM Arena 是基于人类真实投票的 A/B 对比评测平台，样本量大、统计结果可信。它主要反映模型在真实编程任务中的人类偏好，是重要的参考指标。',
  },
  {
    question: 'SWE-bench 分数代表什么？',
    answer: 'SWE-bench Verified 基于真实 GitHub Issue 测试，评估模型修复实际 bug 的能力。分数越高，代表模型解决真实软件工程问题的能力越强。',
  },
  {
    question: '上下文长度重要吗？',
    answer: '重要。更长的上下文意味着可以处理更大的代码文件或同时理解更多文件。对于大型项目开发，建议选择 128K tokens 以上的产品。',
  },
  {
    question: 'Coding Plan 支持哪些 IDE？',
    answer: '主流 Coding Plan 都支持 VS Code、JetBrains 全家桶（IntelliJ IDEA、PyCharm 等）、Visual Studio 等主流 IDE。部分还支持 Vim/Neovim、Cursor、Windsurf 等。',
  },
  {
    question: '可以同时使用多个 Coding Plan 吗？',
    answer: '可以。很多开发者会根据不同场景使用多个产品，比如日常开发用 Kimi（长文本），复杂 bug 修复用 MiniMax（SWE-bench 分数最高）。',
  },
  {
    question: '企业购买有什么优惠？',
    answer: '大多数平台都提供企业版，通常有更高额度、专属客服、私有化部署等增值服务。企业版通常 100 人起购，具体价格需要联系销售。',
  },
];

export default function QAPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <HelpCircle className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              常见问题
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              关于 AI Coding Plan 的常见问题解答
            </p>
          </div>
        </section>

        {/* Q&A Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                    </div>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="pl-8 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              还没有找到答案？
            </h2>
            <p className="text-gray-600 mb-6">
              联系告诉我们你的问题，我们会尽快回复
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              联系客服
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
