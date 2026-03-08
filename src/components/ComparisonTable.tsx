'use client';

import { CodingPlan } from '@/types';
import { ExternalLink } from 'lucide-react';

interface ComparisonTableProps {
  plans: CodingPlan[];
}

export function ComparisonTable({ plans }: ComparisonTableProps) {
  const formatPrice = (price: number) => {
    if (price === 0) return '免费';
    return `$${price}/月`;
  };

  const formatNumber = (num: number) => {
    if (num === -1) return '无限';
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1000px] border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-gray-200 sticky left-0 bg-gray-50 z-10 min-w-[200px]">
              功能/方案
            </th>
            {plans.map((plan) => (
              <th
                key={plan.id}
                className="p-4 text-center border-b-2 border-gray-200 min-w-[180px]"
              >
                <div className="font-bold text-gray-900">{plan.name}</div>
                <div className="text-sm text-gray-500">{plan.provider}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {/* Price */}
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium text-gray-900 sticky left-0 bg-white hover:bg-gray-50">
              月付价格
            </td>
            {plans.map((plan) => (
              <td key={plan.id} className="p-4 text-center">
                <span className="font-semibold text-gray-900">
                  {formatPrice(plan.pricing.monthly)}
                </span>
              </td>
            ))}
          </tr>

          {/* Yearly Price */}
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium text-gray-900 sticky left-0 bg-white hover:bg-gray-50">
              年付价格
            </td>
            {plans.map((plan) => (
              <td key={plan.id} className="p-4 text-center">
                <span className="font-semibold text-gray-900">
                  ${plan.pricing.yearly}/年
                </span>
                {plan.pricing.yearly < plan.pricing.monthly * 12 && (
                  <span className="ml-2 text-xs text-green-600">
                    省
                    {Math.round(
                      (1 - plan.pricing.yearly / (plan.pricing.monthly * 12)) *
                        100
                    )}
                    %
                  </span>
                )}
              </td>
            ))}
          </tr>

          {/* Requests */}
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium text-gray-900 sticky left-0 bg-white hover:bg-gray-50">
              月请求额度
            </td>
            {plans.map((plan) => (
              <td key={plan.id} className="p-4 text-center">
                <span
                  className={`font-semibold ${
                    plan.limits.requestsPerMonth === -1
                      ? 'text-green-600'
                      : 'text-gray-900'
                  }`}
                >
                  {formatNumber(plan.limits.requestsPerMonth)}
                </span>
              </td>
            ))}
          </tr>

          {/* Context */}
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium text-gray-900 sticky left-0 bg-white hover:bg-gray-50">
              最大上下文长度
            </td>
            {plans.map((plan) => (
              <td key={plan.id} className="p-4 text-center">
                <span className="font-semibold text-gray-900">
                  {formatNumber(plan.limits.maxContextLength)} tokens
                </span>
              </td>
            ))}
          </tr>

          {/* Affiliate */}
          <tr className="hover:bg-gray-50 bg-blue-50/50">
            <td className="p-4 font-medium text-gray-900 sticky left-0 bg-blue-50/50">
              推广链接
            </td>
            {plans.map((plan) => (
              <td key={plan.id} className="p-4 text-center">
                {plan.affiliateLink ? (
                  <a
                    href={plan.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    立即注册
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
