# oeeoc 修改教程

如何修改网站的各个部分。

---

## 目录

1. [修改文字内容](#1-修改文字内容)
2. [更换头像](#2-更换头像)
3. [添加文章](#3-添加文章)
4. [调整颜色](#4-调整颜色)
5. [改动效速度](#5-改动效速度)
6. [开关效果](#6-开关效果)
7. [修改联系方式](#7-修改联系方式)
8. [修改域名显示](#8-修改域名显示)

---

## 1. 修改文字内容

### 1.1 首页文字

**文件**：`src/pages/index.astro`

找到以下部分修改：

```astro
<!-- 简介文字 -->
<h1 class="intro-text">
  这里是 <span class="highlight">oeeoc</span> 的空间<br>
  记录思考，分享生活
</h1>
<p class="intro-subtitle text-secondary">
  偶尔写点文字，偶尔拍点照片
</p>

<!-- 名字 -->
<h2 class="name">oeeoc</h2>
<p class="tagline text-tertiary">思考者 / 创作者</p>
```

### 1.2 时间状态文字

**文件**：`src/pages/index.astro`

找到 `getTimeStatus` 函数：

```javascript
function getTimeStatus() {
  const hour = new Date().getHours();
  if (hour < 6) return { text: '夜深了', emoji: '🌙' };
  if (hour < 9) return { text: '早安', emoji: '🌅' };
  if (hour < 12) return { text: '上午好', emoji: '☀️' };
  if (hour < 14) return { text: '午安', emoji: '🌤️' };
  if (hour < 18) return { text: '下午好', emoji: '🌇' };
  return { text: '晚上好', emoji: '🌃' };
}
```

### 1.3 页面标题

**文件**：`src/layouts/BaseLayout.astro`

```astro
<title>{title}</title>
<meta name="description" content={description}>
```

---

## 2. 更换头像

### 2.1 准备图片

- 格式：JPG 或 PNG
- 尺寸：建议 400x400 像素以上
- 形状：正方形（会自动裁剪为圆形）

### 2.2 替换文件

**方法**：将图片复制到 `public/images/avatar.jpg`

```bash
# 替换头像
cp /path/to/your/avatar.jpg oeeoc/public/images/avatar.jpg
```

### 2.3 使用占位符

如果没有头像，会自动显示 `avatar-placeholder.svg`。

---

## 3. 添加文章

### 3.1 创建文章文件

**目录**：`src/content/articles/`

**文件名**：使用英文或拼音，如 `my-post.md`

### 3.2 文章格式

```markdown
---
title: "文章标题"
description: "文章描述，会显示在列表中"
pubDate: 2024-03-07
tags: ["标签1", "标签2"]
heroImage: "https://example.com/image.jpg"
---

# 正文标题

正文内容，支持 **Markdown** 语法。

## 二级标题

- 列表项 1
- 列表项 2

[链接文字](https://example.com)

![图片描述](图片URL)
```

### 3.3 快速添加

```bash
# 1. 创建文件
touch src/content/articles/my-new-post.md

# 2. 编辑文件（用你喜欢的编辑器）
code src/content/articles/my-new-post.md

# 3. 提交
git add .
git commit -m "添加新文章"
git push
```

---

## 4. 调整颜色

### 4.1 颜色变量

**文件**：`src/styles/global.css`

```css
:root {
  /* 深色基底 */
  --bg-primary: #0a0a0a;      /* 主背景 */
  --bg-secondary: #141414;    /* 次背景 */
  --bg-tertiary: #1a1a1a;     /* 第三层背景 */
  
  /* 文字颜色 */
  --text-primary: #ffffff;           /* 主文字 */
  --text-secondary: rgba(255, 255, 255, 0.7);   /* 次要文字 */
  --text-tertiary: rgba(255, 255, 255, 0.4);    /* 辅助文字 */
  
  /* 强调色 */
  --accent: #007aff;          /* 主强调色（蓝色） */
  --accent-light: #5ac8fa;    /* 浅强调色 */
}
```

### 4.2 改为浅色主题

取消 `data-theme="light"` 的注释，或添加：

```html
<html lang="zh-CN" data-theme="light">
```

### 4.3 强调色推荐

| 颜色 | 色值 | 效果 |
|------|------|------|
| 蓝色 | `#007aff` | Apple 风格 |
| 紫色 | `#af52de` | 优雅 |
| 粉色 | `#ff2d55` | 活力 |
| 橙色 | `#ff9500` | 温暖 |
| 绿色 | `#34c759` | 清新 |

---

## 5. 改动效速度

### 5.1 呼吸动画速度

**文件**：`src/pages/index.astro`

```css
.breathe {
  animation: breathe 4s ease-in-out infinite;  /* 4秒 = 速度 */
}
```

修改 `4s`：
- 更快：`2s`
- 更慢：`6s`

### 5.2 淡入动画时长

**文件**：`src/styles/global.css`

```css
:root {
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
}
```

### 5.3 光标跟随速度

**文件**：`src/layouts/BaseLayout.astro`

```javascript
// 修改 0.15 改变跟随速度
cursorX += dx * 0.15;
cursorY += dy * 0.15;
```

- 更快：`0.2` 或 `0.3`
- 更慢：`0.1`

### 5.4 微视差强度

**文件**：`src/pages/index.astro`

```html
<div data-parallax="0.05">  <!-- 修改这个值 -->
```

- 范围：`0.01` ~ `0.1`
- 越大移动越明显

### 5.5 磁吸强度

**文件**：`src/pages/index.astro`

```javascript
const strength = 0.3;  // 磁吸强度
const maxDistance = 50;  // 感应范围（像素）
```

---

## 6. 开关效果

### 6.1 关闭自定义光标

**文件**：`src/layouts/BaseLayout.astro`

在使用处添加 `noCursor`：

```astro
<BaseLayout noCursor={true}>
```

或全局关闭：

```css
/* 在 global.css 添加 */
.custom-cursor {
  display: none !important;
}
```

### 6.2 关闭微视差

**文件**：`src/pages/index.astro`

删除或注释掉：

```javascript
// 微视差效果代码块
```

### 6.3 关闭磁吸效果

**文件**：`src/pages/index.astro`

删除或注释掉：

```javascript
// 磁吸效果代码块
```

### 6.4 关闭呼吸动画

**文件**：`src/pages/index.astro`

```css
.entry-blob {
  /* 删除或注释掉 breathe 类 */
  /* animation: none; */
  border-radius: 50% !important;
}
```

### 6.5 减少动效偏好

系统设置中开启「减少动态效果」会自动关闭所有动画。

---

## 7. 修改联系方式

### 7.1 邮箱

**文件**：`src/pages/index.astro`

```astro
<a href="mailto:hello@oeeoc.me" class="contact-link">
  <span class="contact-icon">✉</span>
  <span class="contact-text">hello@oeeoc.me</span>
</a>
```

### 7.2 社交链接

```astro
<a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener" class="contact-link">
  <!-- GitHub 图标 -->
  <span class="contact-text">GitHub</span>
</a>

<a href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noopener" class="contact-link">
  <!-- Twitter 图标 -->
  <span class="contact-text">Twitter</span>
</a>
```

### 7.3 添加更多链接

复制一个 `<a>` 标签，修改 `href` 和文字即可。

---

## 8. 修改域名显示

### 8.1 角落域名

**文件**：`src/layouts/BaseLayout.astro`

```astro
<div class="corner-domain">
  <span class="text-xs text-muted">oeeoc</span>
</div>
```

### 8.2 完全隐藏

添加 `noFooter`：

```astro
<BaseLayout noFooter={true}>
```

---

## 9. 修改后台配置

### 9.1 后台标题

**文件**：`src/pages/admin.astro`

```html
<title>后台管理 - oeeoc</title>
```

### 9.2 认证方式

默认使用 localStorage 模拟，生产环境请替换为 Auth0：

```javascript
// 在 admin.astro 中
// 替换为真实的 Auth0 配置
const auth0 = new auth0.WebAuth({
  domain: 'YOUR_AUTH0_DOMAIN',
  clientID: 'YOUR_CLIENT_ID',
  // ...
});
```

---

## 10. 修改 SEO 信息

### 10.1 全局 SEO

**文件**：`src/layouts/BaseLayout.astro`

```astro
<meta name="description" content="网站描述">
<meta property="og:title" content="网站标题">
<meta property="og:description" content="网站描述">
```

### 10.2 页面特定 SEO

每个页面可以覆盖：

```astro
<BaseLayout 
  title="页面标题"
  description="页面描述"
  ogImage="/images/og.png"
>
```

---

## 快速修改清单

| 修改内容 | 文件路径 |
|---------|---------|
| 首页文字 | `src/pages/index.astro` |
| 头像 | `public/images/avatar.jpg` |
| 颜色 | `src/styles/global.css` |
| 文章 | `src/content/articles/*.md` |
| 联系方式 | `src/pages/index.astro` |
| 动效速度 | `src/pages/index.astro` |
| 光标 | `src/layouts/BaseLayout.astro` |
| 后台 | `src/pages/admin.astro` |

---

**提示**：修改后记得提交到 GitHub，Cloudflare 会自动重新部署。

```bash
git add .
git commit -m "修改内容描述"
git push
```

---

**最后更新**：2024年3月7日
