'use client';

import { useState } from 'react';
import { CodingPlan } from '@/types';
import { Check, ExternalLink, Cpu, MessageSquare, Image } from 'lucide-react';
import { PlanModal } from './PlanModal';

interface PlanCardProps {
  plan: CodingPlan;
}

const providerLogos: Record<string, string> = {
  'MiniMax': '/logos/minimax.ico',
  'Moonshot AI': '/logos/moonshot.ico',
  '智谱': '/logos/zhipuai.svg',
  'Cursor': '/logos/cursor.png',
  'Codeium': '/logos/windsurf.ico',
  'Tabnine': '/logos/tabnine.svg',
};

export function PlanCard({ plan }: PlanCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatPrice = (price: number, currency: string = 'USD') => {
    if (price === 0) return '免费';
    if (currency === 'CNY') return `¥${price}`;
    return `$${price}`;
  };

  const formatNumber = (num: number) => {
    if (num === -1) return '无限';
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="card flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            {providerLogos[plan.provider] && (
              <img
                src={providerLogos[plan.provider]}
                alt={plan.provider}
                className="w-5 h-5"
              />
            )}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                {plan.provider}
              </p>
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
            </div>
          </div>
          {plan.affiliateCommission && (
            <span className="badge bg-green-100 text-green-800">
              推广赚佣
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-gray-400">低至</span>
          <span className="text-3xl font-bold text-gray-900">
            {formatPrice(plan.pricing.monthly, plan.pricing.currency)}
          </span>
          <span className="text-gray-500">/月</span>
          {plan.pricing.tier && (
            <span className="text-sm bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
              {plan.pricing.tier}
            </span>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-4 bg-gray-50 grid grid-cols-3 gap-4">
        <div className="text-center">
          <Cpu className="w-4 h-4 text-yellow-500 mx-auto mb-1" />
          <p className="text-xs text-gray-500">参数量</p>
          <p className={`font-semibold text-xs ${plan.modelSpecs?.highlightParams ? 'text-red-600' : 'text-gray-900'}`}>
            {plan.modelSpecs?.params || '-'}
          </p>
        </div>
        <div className="text-center">
          <MessageSquare className="w-4 h-4 text-blue-500 mx-auto mb-1" />
          <p className="text-xs text-gray-500">上下文</p>
          <p className={`font-semibold text-xs ${plan.modelSpecs?.highlightContext ? 'text-red-600' : 'text-gray-900'}`}>
            {plan.modelSpecs?.context || formatNumber(plan.limits.maxContextLength)}
          </p>
        </div>
        <div className="text-center">
          <Image className="w-4 h-4 text-green-500 mx-auto mb-1" />
          <p className="text-xs text-gray-500">多模态</p>
          <p className={`font-semibold text-xs ${plan.modelSpecs?.highlightMultimodal ? 'text-red-600' : 'text-gray-900'}`}>
            {plan.modelSpecs?.multimodal ? '是' : '否'}
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="p-6 flex-grow">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">定价方案</h4>
        {plan.pricingTiers && plan.pricingTiers.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-xs font-semibold text-gray-500 uppercase">档位</th>
                  <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase">月付</th>
                  <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase">年付</th>
                </tr>
              </thead>
              <tbody>
                {plan.pricingTiers.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="py-2 text-gray-900 font-medium">
                      {tier.name}
                      {tier.description && <span className="text-gray-900 text-xs ml-1">({tier.description})</span>}
                    </td>
                    <td className="text-right py-2 font-semibold text-gray-900">¥{tier.monthly}</td>
                    <td className="text-right py-2 font-semibold text-gray-900">¥{tier.yearly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <ul className="space-y-2">
            {plan.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
            {plan.features.length > 4 && (
              <li className="text-sm text-gray-400">
                +{plan.features.length - 4} 更多功能
              </li>
            )}
          </ul>
        )}
      </div>

      {/* CTA */}
      <div className="p-6 border-t border-gray-100">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center w-full btn-primary group"
        >
          <span>查看详情</span>
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
        </button>
        {plan.affiliateCommission && (
          <p className="text-xs text-center text-gray-400 mt-2">
            通过此链接注册，支持我们持续维护本站
          </p>
        )}
      </div>

      {/* Modal */}
      <PlanModal
        plan={plan}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
