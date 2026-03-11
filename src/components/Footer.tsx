'use client';

import Link from 'next/link';
import { Code2, Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">
                CodingPlan<span className="text-blue-500">对比</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              全面对比主流AI编程助手的性能、额度、价格和功能，
              帮助你找到最适合的 Coding Plan。
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  方案
                </Link>
              </li>
              <li>
                <Link
                  href="/qa/"
                  className="hover:text-white transition-colors"
                >
                  Q&A
                </Link>
              </li>
              <li>
                <Link href="/leaderboard/" className="hover:text-white transition-colors">
                  排行榜
                </Link>
              </li>
              <li>
                <Link href="/openclaw/" className="hover:text-white transition-colors">
                  接入OpenClaw
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Plans */}
          <div>
            <h3 className="text-white font-semibold mb-4">热门方案</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.minimaxi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  MiniMax
                </a>
              </li>
              <li>
                <a
                  href="https://www.moonshot.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Moonshot AI
                </a>
              </li>
              <li>
                <a
                  href="https://www.zhipuai.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  智谱 AI
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} CodingPlan对比. 保留所有权利.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-400">
              隐私政策
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400">
              使用条款
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400">
              Affiliate声明
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
