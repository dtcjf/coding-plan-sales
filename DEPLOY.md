# 部署指南

## 项目构建状态

✅ **构建成功** - 所有文件已生成到 `dist/` 目录

```
dist/
├── _next/              # Next.js 静态资源
├── index.html          # 首页
└── ...                 # 其他静态文件
```

## 部署选项

### 选项 1: Vercel (推荐)

Vercel 是 Next.js 的官方托管平台，提供最佳性能和体验。

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 登录 Vercel
vercel login

# 3. 部署
vercel --prod
```

或者通过 Git 部署：
1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署

### 选项 2: Netlify

```bash
# 1. 安装 Netlify CLI
npm i -g netlify-cli

# 2. 部署
netlify deploy --prod --dir=dist
```

或者拖拽部署：
1. 访问 https://app.netlify.com/drop
2. 拖拽 `dist/` 文件夹
3. 自动部署完成

### 选项 3: Cloudflare Pages

```bash
# 使用 Wrangler CLI
npx wrangler pages deploy dist
```

### 选项 4: GitHub Pages

```bash
# 1. 安装 gh-pages
npm i -D gh-pages

# 2. 添加脚本到 package.json
# "deploy": "gh-pages -d dist"

# 3. 部署
npm run deploy
```

### 选项 5: 自有服务器/静态托管

```bash
# 将 dist/ 目录上传到任何静态文件服务器
# 例如: Nginx, Apache, AWS S3, etc.

# 示例: 使用 Python 快速预览
python3 -m http.server 8000 --directory dist
```

## 更新推广链接

部署前，请更新推广链接：

1. 打开 `src/data/plans.ts`
2. 将每个方案的 `affiliateLink` 替换为你的真实推广链接
3. 重新构建: `npm run build`
4. 重新部署

## 自定义域名

### Vercel
1. 在项目设置中添加自定义域名
2. 按照指引配置 DNS

### Netlify
1. 在 Domain settings 中添加自定义域名
2. 配置 DNS 记录

### Cloudflare Pages
1. 在 Custom domains 中添加域名
2. Cloudflare 会自动配置

## 监控和分析

建议添加以下工具：

1. **Google Analytics** - 流量分析
2. **Google Search Console** - SEO 监控
3. **Vercel Analytics** - 性能监控 (如部署在 Vercel)

## 故障排除

### 构建失败
```bash
# 清理缓存
rm -rf node_modules .next dist
npm install
npm run build
```

### 部署后页面空白
- 检查 `next.config.js` 中的 `basePath` 配置
- 确认静态资源路径正确

### 样式丢失
- 确保 `dist/` 目录包含所有必要文件
- 检查 `_next/static` 目录是否存在

## 支持与反馈

如有问题，请：
1. 检查 README.md 中的常见问题
2. 查看 Next.js 官方文档
3. 提交 Issue 到项目仓库

---

**当前构建状态**: ✅ 成功
**构建时间**: 2024
**输出目录**: `dist/`
**总大小**: ~1.1MB
