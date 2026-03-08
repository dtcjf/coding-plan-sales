import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeaderboardTabs } from '@/components/LeaderboardTabs';
import { Trophy, BarChart3, Info } from 'lucide-react';

export const metadata = {
  title: 'AI 模型 Coding 能力排行榜 | Coding Plan 对比',
  description:
    '查看 AI 模型编程能力排行榜，包括 LM Arena Coding Leaderboard 和 SWE-bench Verified 跑分结果。',
};

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Trophy className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI 模型 Coding 能力排行榜
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              基于 LM Arena 和 SWE-bench Verified 的权威评测数据
            </p>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 px-4 bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p>
                  <strong>LM Arena</strong>：基于人类偏好的众包评测平台，通过 A/B
                  测试比较模型在真实编程任务中的表现。
                </p>
                <p>
                  <strong>SWE-bench Verified</strong>：基于真实 GitHub Issue
                  的编程评测基准，测试模型解决实际软件工程问题的能力。
                </p>
                <p className="text-xs text-gray-500">
                  数据更新时间：2024年12月 | 数据来源：LMSYS Chatbot Arena &
                  SWE-bench
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leaderboard Tabs */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <LeaderboardTabs />
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <BarChart3 className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                评测方法说明
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                了解我们如何评估和比较不同 AI 模型的编程能力
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  LM Arena 评测
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 基于真实用户的 A/B 对比测试</li>
                  <li>• 评测代码质量、可读性和实用性</li>
                  <li>• 涵盖多种编程语言和任务类型</li>
                  <li>• 样本量大，统计结果可信度高</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  SWE-bench Verified
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 基于真实 GitHub Issue 的测试集</li>
                  <li>• 验证模型修复实际 bug 的能力</li>
                  <li>• 包含代码理解、定位和修改能力</li>
                  <li>• 通过单元测试验证解决方案正确性</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
