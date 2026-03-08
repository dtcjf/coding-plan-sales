import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Coding Plan 对比 | 主流AI编程助手订阅对比',
  description:
    '对比 Claude Pro、ChatGPT Plus、GitHub Copilot、Cursor Pro 等主流AI编程助手的性能、额度、价格和功能。找到最适合你的Coding Plan。',
  keywords: [
    'Coding Plan',
    'AI编程助手',
    'Claude Pro',
    'ChatGPT Plus',
    'GitHub Copilot',
    'Cursor',
    '编程工具对比',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
