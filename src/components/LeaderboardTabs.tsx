'use client';

import { useState } from 'react';
import {
  lmArenaCodingData,
  sweBenchVerifiedData,
  organizationColors,
} from '@/data/leaderboard';
import { Trophy, ExternalLink, Code2, Terminal } from 'lucide-react';

export function LeaderboardTabs() {
  const [activeTab, setActiveTab] = useState<'lma' | 'swe'>('lma');

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          onClick={() => setActiveTab('lma')}
          className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl transition-all duration-200 ${
            activeTab === 'lma'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          <Code2 className="h-5 w-5" />
          <div className="text-left">
            <div className="font-semibold">LM Arena</div>
            <div
              className={`text-xs ${
                activeTab === 'lma' ? 'text-blue-100' : 'text-gray-500'
              }`}
            >
              人类偏好评测
            </div>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('swe')}
          className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl transition-all duration-200 ${
            activeTab === 'swe'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          <Terminal className="h-5 w-5" />
          <div className="text-left">
            <div className="font-semibold">SWE-bench Verified</div>
            <div
              className={`text-xs ${
                activeTab === 'swe' ? 'text-purple-100' : 'text-gray-500'
              }`}
            >
              真实 Bug 修复能力
            </div>
          </div>
        </button>
      </div>

      {/* LM Arena Table */}
      {activeTab === 'lma' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    排名
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    模型
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    机构
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Arena Score
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    95% CI
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    投票数
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {lmArenaCodingData.map((model, index) => (
                  <tr
                    key={model.model}
                    className={`hover:bg-gray-50 transition-colors ${
                      index < 3 ? 'bg-yellow-50/30' : ''
                    }`}
                  >
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        {index === 0 && (
                          <Trophy className="h-5 w-5 text-yellow-500 mr-1" />
                        )}
                        {index === 1 && (
                          <span className="text-gray-400 font-bold mr-1">
                            🥈
                          </span>
                        )}
                        {index === 2 && (
                          <span className="text-amber-600 font-bold mr-1">
                            🥉
                          </span>
                        )}
                        <span
                          className={`font-semibold ${
                            index < 3
                              ? 'text-gray-900'
                              : 'text-gray-600'
                          }`}
                        >
                          #{model.rank}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="font-medium text-gray-900">
                        {model.model}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          organizationColors[model.organization] ||
                          'bg-gray-100 text-gray-800 border-gray-200'
                        }`}
                      >
                        {model.organization}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-right">
                      <span className="font-bold text-gray-900">
                        {model.arenaScore}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-center">
                      <span className="text-sm text-gray-500">
                        {model['95CI']}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-right">
                      <span className="text-sm text-gray-600">
                        {model.votes.toLocaleString()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 text-sm text-gray-500">
            数据来源：{' '}
            <a
              href="https://chat.lmsys.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center"
            >
              LMSYS Chatbot Arena
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
            <span className="mx-2">|</span>
            数据更新时间：2024年12月
          </div>
        </div>
      )}

      {/* SWE-bench Table */}
      {activeTab === 'swe' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    排名
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    模型
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    机构
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    类型
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Pass@1
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    解决数/总数
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    日期
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sweBenchVerifiedData.map((model, index) => (
                  <tr
                    key={model.model}
                    className={`hover:bg-gray-50 transition-colors ${
                      index < 3 ? 'bg-purple-50/30' : ''
                    }`}
                  >
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        {index === 0 && (
                          <Trophy className="h-5 w-5 text-yellow-500 mr-1" />
                        )}
                        {index === 1 && (
                          <span className="text-gray-400 font-bold mr-1">
                            🥈
                          </span>
                        )}
                        {index === 2 && (
                          <span className="text-amber-600 font-bold mr-1">
                            🥉
                          </span>
                        )}
                        <span
                          className={`font-semibold ${
                            index < 3
                              ? 'text-gray-900'
                              : 'text-gray-600'
                          }`}
                        >
                          #{model.rank}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="font-medium text-gray-900">
                        {model.model}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          organizationColors[model.organization] ||
                          'bg-gray-100 text-gray-800 border-gray-200'
                        }`}
                      >
                        {model.organization}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-center">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          model.type === 'open'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {model.type === 'open' ? '开源' : '闭源'}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2">
                        <span className="font-bold text-gray-900">
                          {model.passRate.toFixed(1)}%
                        </span>
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-600 rounded-full"
                            style={{ width: `${model.passRate}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-right">
                      <span className="text-sm text-gray-600">
                        {model.solvedInstances}/{model.totalInstances}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-center">
                      <span className="text-sm text-gray-500">
                        {model.date}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 text-sm text-gray-500">
            数据来源：{' '}
            <a
              href="https://www.swebench.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 inline-flex items-center"
            >
              SWE-bench Official
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
            <span className="mx-2">|</span>
            基于 500 个真实 GitHub Issue 的编程任务评测
          </div>
        </div>
      )}

      {/* Summary Stats */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
          <div className="text-2xl font-bold text-blue-900">10+</div>
          <div className="text-sm text-blue-700">主流模型对比</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
          <div className="text-2xl font-bold text-purple-900">500</div>
          <div className="text-sm text-purple-700">SWE-bench 测试集</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
          <div className="text-2xl font-bold text-green-900">实时</div>
          <div className="text-sm text-green-700">数据定期更新</div>
        </div>
      </div>
    </div>
  );
}
