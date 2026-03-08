'use client';

import { CodingPlan } from '@/types';
import { X, ExternalLink, Check } from 'lucide-react';

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
          {/* 定价方案表格 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">定价方案</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-xs font-semibold text-gray-500 uppercase">档位</th>
                    <th className="text-left py-2 text-xs font-semibold text-gray-500 uppercase">可用模型</th>
                    <th className="text-center py-2 text-xs font-semibold text-gray-500 uppercase">上下文</th>
                    <th className="text-center py-2 text-xs font-semibold text-gray-500 uppercase">请求/月</th>
                    <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase">月付</th>
                    <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase">年付</th>
                  </tr>
                </thead>
                <tbody>
                  {plan.pricingTiers?.map((tier, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0">
                      <td className="py-3 text-gray-900 font-medium">
                        {tier.name}
                        {tier.description && <span className="text-gray-900 text-xs ml-1">({tier.description})</span>}
                      </td>
                      <td className="py-3 text-gray-600">
                        {tier.models?.join(', ')}
                      </td>
                      <td className="py-3 text-center text-gray-600">
                        {tier.contextWindow || '-'}
                      </td>
                      <td className="py-3 text-center text-gray-600">
                        {tier.requestsPerMonth === -1 ? '无限' : formatNumber(tier.requestsPerMonth || 0)}
                      </td>
                      <td className="py-3 text-right font-semibold text-gray-900">¥{tier.monthly}</td>
                      <td className="py-3 text-right font-semibold text-gray-900">¥{tier.yearly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 性价比分析 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">性价比分析</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-blue-600">
                  ¥{plan.pricingTiers?.[0]?.monthly || plan.pricing.monthly}
                </p>
                <p className="text-sm text-gray-600">入门门槛</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-green-600">
                  {plan.modelSpecs?.params || '-'}
                </p>
                <p className="text-sm text-gray-600">参数量</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-purple-600">
                  {plan.modelSpecs?.context || formatNumber(plan.limits.maxContextLength)}
                </p>
                <p className="text-sm text-gray-600">上下文</p>
              </div>
            </div>
          </div>

          {/* 功能列表 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">核心功能</h3>
            <ul className="grid grid-cols-2 gap-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
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
