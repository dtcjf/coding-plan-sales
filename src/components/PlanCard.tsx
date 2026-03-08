'use client';

import { CodingPlan } from '@/types';
import { Check, ExternalLink, Zap, Coins, Gauge } from 'lucide-react';

interface PlanCardProps {
  plan: CodingPlan;
}

export function PlanCard({ plan }: PlanCardProps) {
  const formatPrice = (price: number) => {
    if (price === 0) return '免费';
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
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">
              {plan.provider}
            </p>
            <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
          </div>
          {plan.affiliateCommission && (
            <span className="badge bg-green-100 text-green-800">
              推广赚佣
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900">
            {formatPrice(plan.pricing.monthly)}
          </span>
          <span className="text-gray-500">/月</span>
          {plan.pricing.yearly < plan.pricing.monthly * 12 && (
            <span className="text-sm text-green-600 ml-2">
              年付更省
            </span>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-4 bg-gray-50 grid grid-cols-3 gap-4">
        <div className="text-center">
          <Zap className="w-4 h-4 text-yellow-500 mx-auto mb-1" />
          <p className="text-xs text-gray-500">月请求</p>
          <p className="font-semibold text-gray-900">
            {formatNumber(plan.limits.requestsPerMonth)}
          </p>
        </div>
        <div className="text-center">
          <Coins className="w-4 h-4 text-blue-500 mx-auto mb-1" />
          <p className="text-xs text-gray-500">Token</p>
          <p className="font-semibold text-gray-900">
            {formatNumber(plan.limits.tokensPerMonth)}
          </p>
        </div>
        <div className="text-center">
          <Gauge className="w-4 h-4 text-green-500 mx-auto mb-1" />
          <p className="text-xs text-gray-500">上下文</p>
          <p className="font-semibold text-gray-900">
            {formatNumber(plan.limits.maxContextLength)}
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="p-6 flex-grow">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">核心功能</h4>
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
      </div>

      {/* CTA */}
      <div className="p-6 border-t border-gray-100">
        <a
          href={plan.affiliateLink || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full btn-primary group"
        >
          <span>查看详情</span>
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
        </a>
        {plan.affiliateCommission && (
          <p className="text-xs text-center text-gray-400 mt-2">
            通过此链接注册，支持我们持续维护本站
          </p>
        )}
      </div>
    </div>
  );
}
