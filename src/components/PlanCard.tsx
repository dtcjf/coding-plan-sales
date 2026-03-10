'use client';

import { useState } from 'react';
import { CodingPlan } from '@/types';
import { Check, ExternalLink, Cpu, MessageSquare, Image } from 'lucide-react';
import { PlanModal } from './PlanModal';

interface PlanCardProps {
  plan: CodingPlan;
}

const providerLogos: Record<string, string> = {
  'MiniMax': '/coding-plan-sales/logos/minimax.ico',
  'Moonshot AI': '/coding-plan-sales/logos/moonshot.ico',
  '智谱': '/coding-plan-sales/logos/zhipuai.svg',
  'Cursor': '/coding-plan-sales/logos/cursor.png',
  'Codeium': '/coding-plan-sales/logos/windsurf.ico',
  'Tabnine': '/coding-plan-sales/logos/tabnine.svg',
};

export function PlanCard({ plan }: PlanCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getBadgeStyles = (variant: string) => {
    switch (variant) {
      case 'success':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'danger':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

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
    <>
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
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-gray-500 mb-1">
                  {plan.provider}
                </p>
                {plan.badge && (
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getBadgeStyles(plan.badge.variant)}`}>
                    {plan.badge.text}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-gray-400">低至</span>
          {plan.pricing.originalMonthly ? (
            <>
              <span className="text-3xl font-bold text-red-600">
                {formatPrice(plan.pricing.monthly, plan.pricing.currency)}
              </span>
              <span className="text-lg text-gray-400 line-through">
                {formatPrice(plan.pricing.originalMonthly, plan.pricing.currency)}
              </span>
            </>
          ) : (
            <span className="text-3xl font-bold text-gray-900">
              {formatPrice(plan.pricing.monthly, plan.pricing.currency)}
            </span>
          )}
          <span className="text-gray-500">/月</span>
          {plan.discount && (
            <span className="text-sm bg-red-100 text-red-600 px-2 py-0.5 rounded font-medium">
              {plan.discount.text}
            </span>
          )}
          {plan.pricing.tier && !plan.discount && (
            <span className="text-sm bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
              {plan.pricing.tier}
            </span>
          )}
        </div>
      </div>

      {/* Stats */}
      {['阿里云', '火山引擎', '腾讯云'].includes(plan.provider) ? (
        <div className="px-6 py-4 bg-gray-50">
          <p className="text-xs text-gray-500 mb-2">可调用模型</p>
          <div className="flex flex-wrap gap-1">
            {plan.models?.map((model, index) => {
              // 为不同厂商的模型添加不同颜色标签
              const isQwen = model.includes('Qwen');
              const isKimi = model.includes('Kimi');
              const isGLM = model.includes('GLM');
              const isMiniMax = model.includes('MiniMax');
              const isDoubao = model.includes('Doubao') || model.includes('豆包');
              const isDeepSeek = model.includes('DeepSeek');
              const isHunyuan = model.includes('Tencent') || model.includes('Hunyuan');

              let badgeClass = 'bg-blue-50 text-blue-700 border-blue-200';
              if (isQwen) badgeClass = 'bg-orange-50 text-orange-700 border-orange-200';
              else if (isKimi) badgeClass = 'bg-purple-50 text-purple-700 border-purple-200';
              else if (isGLM) badgeClass = 'bg-cyan-50 text-cyan-700 border-cyan-200';
              else if (isMiniMax) badgeClass = 'bg-yellow-50 text-yellow-700 border-yellow-200';
              else if (isDoubao) badgeClass = 'bg-red-50 text-red-700 border-red-200';
              else if (isDeepSeek) badgeClass = 'bg-emerald-50 text-emerald-700 border-emerald-200';
              else if (isHunyuan) badgeClass = 'bg-blue-50 text-blue-700 border-blue-200';

              return (
                <span
                  key={index}
                  className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${badgeClass}`}
                >
                  {model}
                </span>
              );
            })}
          </div>
        </div>
      ) : (
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
      )}

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
                  {['智谱', '火山引擎'].includes(plan.provider) && (
                    <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase">季付</th>
                  )}
                  {plan.provider !== '火山引擎' && (
                    <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase">年付</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {plan.pricingTiers.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="py-2 text-gray-900 font-medium">
                      {tier.name}
                      {tier.description && <span className="text-gray-900 text-xs ml-1">({tier.description})</span>}
                    </td>
                    <td className="text-right py-2">
                      {tier.originalMonthly ? (
                        <>
                          <span className="font-semibold text-red-600">¥{tier.monthly}</span>
                          <span className="text-gray-400 line-through text-xs ml-1">¥{tier.originalMonthly}</span>
                        </>
                      ) : (
                        <span className="font-semibold text-gray-900">¥{tier.monthly}</span>
                      )}
                    </td>
                    {['智谱', '火山引擎'].includes(plan.provider) && (
                      <td className="text-right py-2">
                        {tier.quarterly ? (
                          tier.originalQuarterly ? (
                            <>
                              <span className="font-semibold text-red-600">¥{tier.quarterly}</span>
                              <span className="text-gray-400 line-through text-xs ml-1">¥{tier.originalQuarterly}</span>
                            </>
                          ) : (
                            <span className="font-semibold text-gray-900">¥{tier.quarterly}</span>
                          )
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    )}
                    {plan.provider !== '火山引擎' && (
                      <td className="text-right py-2">
                        {tier.originalYearly ? (
                          <>
                            <span className="font-semibold text-red-600">¥{tier.yearly}</span>
                            <span className="text-gray-400 line-through text-xs ml-1">¥{tier.originalYearly}</span>
                          </>
                        ) : (
                          <span className="font-semibold text-gray-900">¥{tier.yearly}</span>
                        )}
                      </td>
                    )}
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
      </div>

      {/* Modal - rendered outside the card to avoid overflow clipping */}
    </div>
    {isModalOpen && (
      <PlanModal
        key={plan.id}
        plan={plan}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    )}
    </>
  );
}
