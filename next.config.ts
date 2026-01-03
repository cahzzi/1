import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 启用严格模式，帮助发现潜在问题
  reactStrictMode: true,
  
  // 压缩输出
  compress: true,
  
  // 优化生产构建
  compiler: {
    // 移除 console.log（生产环境）
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  // 实验性优化
  experimental: {
    // 优化包导入，减少 bundle 大小
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
