'use client';

import { CodingPlan } from '@/types';
import { X, ExternalLink, Sparkles, Zap, DollarSign, Building2, Calendar, Trophy, Code2, CreditCard } from 'lucide-react';

interface PlanModalProps {
  plan: CodingPlan;
  isOpen: boolean;
  onClose: () => void;
}

export function PlanModal({ plan, isOpen, onClose }: PlanModalProps) {
  if (!isOpen) return null;

  const formatNumber = (num: number) => {
    if (num === -1) return '无限';
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
            <p className="text-gray-500">{plan.provider}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* 性能跑分 */}
          {plan.benchmark && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                性能跑分
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {plan.benchmark.lmArenaRank && (
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200 text-center">
                    <Trophy className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-xs font-medium text-orange-600 uppercase tracking-wide">LM Arena Code 排名</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{plan.benchmark.lmArenaRank}</p>
                    {plan.benchmark.lmArenaUrl && (
                      <a
                        href={plan.benchmark.lmArenaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-orange-500 hover:underline mt-1 inline-block"
                      >
                        查看详情 →
                      </a>
                    )}
                  </div>
                )}
                {plan.benchmark.sweBenchVerified && (
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200 text-center">
                    <Code2 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">SWE-bench Verified</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{plan.benchmark.sweBenchVerified}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 用量限制 */}
          {plan.limits && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Zap className="w-5 h-5 text-orange-600 mr-2" />
                用量限制
              </h3>
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200">
                <p className="text-sm text-gray-800">
                  {plan.limits.promptsPer5Hours && (
                    <span className="font-medium">刷新机制：{plan.limits.promptsPer5Hours}</span>
                  )}
                </p>
              </div>
            </div>
          )}

          {/* 详细说明 */}
          {plan.notes && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                详细说明
              </h3>
              <div className="grid gap-3">
                {plan.notes.modelIntro && (
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">模型介绍</p>
                    <p className="text-sm text-gray-800 leading-relaxed">{plan.notes.modelIntro}</p>
                  </div>
                )}
                {plan.notes.performance && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-500">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1 flex items-center">
                      <Zap className="w-3 h-3 mr-1" /> 性能优势
                    </p>
                    <p className="text-sm text-gray-800 leading-relaxed">{plan.notes.performance}</p>
                  </div>
                )}
                {plan.notes.price && (
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 border-l-4 border-amber-500">
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-wide mb-1 flex items-center">
                      <DollarSign className="w-3 h-3 mr-1" /> 价格优势
                    </p>
                    <p className="text-sm text-gray-800 leading-relaxed">{plan.notes.price}</p>
                  </div>
                )}
                {plan.notes.enterprise && (
                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <p className="text-xs font-bold text-purple-600 uppercase tracking-wide mb-1 flex items-center">
                      <Building2 className="w-3 h-3 mr-1" /> 企业级能力
                    </p>
                    <p className="text-sm text-gray-800 leading-relaxed">{plan.notes.enterprise}</p>
                  </div>
                )}
                {plan.notes.subscribe && (
                  <div className="bg-gradient-to-r from-cyan-50 to-sky-50 rounded-lg p-4 border-l-4 border-cyan-500">
                    <p className="text-xs font-bold text-cyan-600 uppercase tracking-wide mb-1 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" /> 订阅方式
                    </p>
                    <p className="text-sm text-gray-800 leading-relaxed">{plan.notes.subscribe}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 定价方案 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <CreditCard className="w-5 h-5 text-green-600 mr-2" />
              定价方案
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-center py-2 text-xs font-semibold text-gray-500 uppercase">档位</th>
                    {plan.provider === '阿里云' || plan.provider === '火山引擎' || plan.provider === '腾讯云' ? (
                      <>
                        <th className="text-center py-2 text-xs font-semibold text-gray-500 uppercase">用量/5h</th>
                        <th className="text-center py-2 text-xs font-semibold text-gray-500 uppercase">每周</th>
                        <th className="text-center py-2 text-xs font-semibold text-gray-500 uppercase">每月</th>
                      </>
                    ) : (
                      <th className="text-center py-2 text-xs font-semibold text-gray-500 uppercase">用量/5h</th>
                    )}
                    <th className="text-center py-2 text-xs font-semibold text-gray-500 uppercase">月付</th>
                    <th className="text-center py-2 text-xs font-semibold text-gray-500 uppercase">年付</th>
                  </tr>
                </thead>
                <tbody>
                  {plan.pricingTiers?.map((tier, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0">
                      <td className="py-3 text-center text-gray-900 font-medium">
                        {tier.name}
                        {tier.description && <div className="text-gray-500 text-xs mt-1">({tier.description})</div>}
                      </td>
                      {plan.provider === '阿里云' || plan.provider === '火山引擎' || plan.provider === '腾讯云' ? (
                        <>
                          <td className="py-3 text-center text-gray-600">
                            {tier.promptsPer5Hours === -1 ? '无限' : tier.promptsPer5Hours || '-'}
                          </td>
                          <td className="py-3 text-center text-gray-600">
                            {tier.requestsPerWeek ? formatNumber(tier.requestsPerWeek) : '-'}
                          </td>
                          <td className="py-3 text-center text-gray-600">
                            {tier.requestsPerMonth === -1 ? '无限' : tier.requestsPerMonth ? formatNumber(tier.requestsPerMonth) : '-'}
                          </td>
                        </>
                      ) : (
                        <td className="py-3 text-center text-gray-600">
                          {tier.promptsPer5Hours === -1 ? '无限' : tier.promptsPer5Hours || '-'}
                        </td>
                      )}
                      <td className="py-3 text-center font-semibold text-gray-900">¥{tier.monthly}</td>
                      <td className="py-3 text-center font-semibold text-gray-900">¥{tier.yearly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <a
            href={plan.affiliateLink || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full btn-primary group"
            onClick={onClose}
          >
            <span>立刻购买</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </a>
          {plan.affiliateCommission && (
            <p className="text-xs text-center text-gray-400 mt-2">
              通过此链接注册，支持我们持续维护本站
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
