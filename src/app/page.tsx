import { codingPlans } from '@/data/plans';
import { PlanCard } from '@/components/PlanCard';
import { ComparisonTable } from '@/components/ComparisonTable';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// 分离 AI 公司和云厂商
const aiCompanies = ['MiniMax', 'Moonshot AI', '智谱'];
const cloudProviders = ['阿里云', '火山引擎', '腾讯云'];

const aiCompanyPlans = codingPlans.filter((plan) => aiCompanies.includes(plan.provider));
const cloudProviderPlans = codingPlans.filter((plan) => cloudProviders.includes(plan.provider));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              找到最适合你的 Coding Plan
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              全面对比主流AI编程助手的性能、额度、价格和功能
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#comparison"
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
              >
                查看对比
              </a>
              <a
                href="#plans"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
              >
                浏览方案
              </a>
            </div>
          </div>
        </section>

        {/* AI 公司 Plans Section */}
        <section id="plans" className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                国产「御三家」Coding Plan
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                点击下方卡片查看详情，使用推广链接注册可获得优惠
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiCompanyPlans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        {/* 云厂商 Plans Section */}
        <section id="cloud-plans" className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                云厂商 Coding Plan
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                主流云服务商的 AI 编程助手解决方案
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cloudProviderPlans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <section className="py-12 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Affiliate 声明
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              本站包含的部分链接为推广链接。如果你通过这些链接注册并购买服务，
              我可能会获得一定的佣金。这不会增加你的任何费用，但可以帮助我持续维护和更新这个对比网站。
              所有推荐基于产品实际功能和价值，并非仅基于佣金比例。
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
