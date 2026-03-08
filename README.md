# Coding Plan 对比网站

一个用于对比主流 AI 编程助手订阅计划（Coding Plans）的 Next.js 网站。帮助用户比较不同平台的价格、功能、使用额度等，并通过推广链接赚取佣金。

## 功能特性

- **6 个主流 Coding Plan 对比**：Claude Pro、ChatGPT Plus、GitHub Copilot、Cursor Pro、Windsurf、Tabnine Pro
- **详细的对比表格**：价格、请求额度、Token 额度、上下文长度等
- **推广链接支持**：每个方案都包含推广链接位，支持赚取佣金
- **响应式设计**：完美适配桌面端和移动端
- **SEO 优化**：完整的 Meta 标签和结构化数据

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **构建输出**: 静态导出 (Static Export)

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 3. 构建生产版本

```bash
npm run build
```

构建后的文件位于 `dist/` 目录，可直接部署到任何静态托管服务。

## 项目结构

```
.
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # 根布局
│   │   ├── page.tsx           # 首页
│   │   └── globals.css        # 全局样式
│   ├── components/            # React 组件
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PlanCard.tsx
│   │   └── ComparisonTable.tsx
│   ├── data/
│   │   └── plans.ts           # Coding Plan 数据
│   └── types/
│       └── index.ts           # TypeScript 类型定义
├── dist/                      # 构建输出 (自动生成)
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 自定义配置

### 添加新的 Coding Plan

编辑 `src/data/plans.ts`，按照现有格式添加新的方案数据：

```typescript
{
  id: 'your-plan-id',
  name: 'Plan Name',
  provider: 'Company Name',
  pricing: {
    monthly: 20,
    yearly: 200,
    currency: 'USD',
  },
  limits: {
    requestsPerMonth: -1,  // -1 表示无限
    tokensPerMonth: -1,
    maxContextLength: 128000,
  },
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  models: ['model-1', 'model-2'],
  affiliateLink: 'https://your-affiliate-link.com',
  affiliateCommission: 'Commission description',
}
```

### 更新推广链接

在 `src/data/plans.ts` 中，将每个方案的 `affiliateLink` 替换为你自己的推广链接。

## 部署

### 部署到 Vercel

```bash
npm i -g vercel
vercel
```

### 部署到 Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### 部署到 GitHub Pages

```bash
npm run build
# 将 dist 目录推送到 gh-pages 分支
```

## License

MIT License
