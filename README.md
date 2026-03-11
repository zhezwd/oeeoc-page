# oeeoc

Apple 广告级精致风格的个人展示网站。

![Astro](https://img.shields.io/badge/Astro-4.5-BC52EE?logo=astro)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare)

## 特性

- **Apple 级精致设计** - 深色基底，玻璃拟态，超椭圆圆角
- **物理质感动效** - GSAP 驱动的弹簧、阻尼、惯性动画
- **自定义光标** - 8px 圆点，mix-blend-mode 反色，hover 变空心圆
- **微视差效果** - 鼠标移动时元素以不同速度微移
- **磁吸按钮** - 首页文章入口 50px 范围磁吸效果
- **呼吸变形圆** - 文章入口缓慢变形动画
- **实时状态** - 根据时间显示不同问候语
- **平滑滚动** - Lenis 驱动的文章页平滑滚动
- **阅读进度条** - 文章详情页轻微进度指示
- **响应式** - 电脑优先，手机自动降级
- **减少动效** - 尊重 `prefers-reduced-motion`

## 技术栈

- [Astro](https://astro.build) - 静态站点生成
- [GSAP](https://greensock.com/gsap) - 动画库
- [Lenis](https://lenis.studiofreight.com) - 平滑滚动
- [Cloudflare Pages](https://pages.cloudflare.com) - 部署托管

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建
npm run build
```

## 部署

1. 推送到 GitHub
2. 连接 Cloudflare Pages
3. 自动部署

详细步骤见 [MANUAL.md](./MANUAL.md)

## 修改

如何修改文字、头像、颜色、动效等，见 [EDIT.md](./EDIT.md)

## 结构

```
oeeoc/
├── src/
│   ├── components/      # 组件
│   ├── layouts/         # 布局
│   ├── pages/           # 页面
│   │   ├── index.astro      # 首页
│   │   ├── articles/        # 文章
│   │   └── admin.astro      # 后台
│   ├── content/         # 内容
│   │   └── articles/        # Markdown 文章
│   └── styles/          # 样式
├── public/              # 静态资源
├── MANUAL.md           # 部署手册
└── EDIT.md             # 修改教程
```

## 性能

- 首屏 < 150KB
- 所有动效使用 CSS transform/opacity
- iPhone Safari 60fps
- 支持 `prefers-reduced-motion`

## 许可证

MIT
