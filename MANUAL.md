# oeeoc 部署与使用手册

从 0 到访问，一步到底。

---

## 目录

1. [环境准备](#1-环境准备)
2. [项目配置](#2-项目配置)
3. [GitHub 配置](#3-github-配置)
4. [Cloudflare 部署](#4-cloudflare-部署)
5. [DNS 配置](#5-dns-配置)
6. [日常使用](#6-日常使用)
7. [更新文章](#7-更新文章)
8. [故障排查](#8-故障排查)

---

## 1. 环境准备

### 1.1 安装 Node.js

```bash
# macOS (使用 Homebrew)
brew install node

# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# Windows
# 访问 https://nodejs.org 下载 LTS 版本安装包
```

验证安装：
```bash
node --version  # 应显示 v18+ 或 v20+
npm --version
```

### 1.2 安装 Git

```bash
# macOS
brew install git

# Ubuntu/Debian
sudo apt install git

# Windows
# 访问 https://git-scm.com/download/win 下载安装包
```

验证安装：
```bash
git --version
```

### 1.3 配置 Git

```bash
git config --global user.name "你的名字"
git config --global user.email "your@email.com"
```

---

## 2. 项目配置

### 2.1 下载项目

```bash
# 克隆仓库（替换为你的 GitHub 用户名）
git clone https://github.com/YOUR_USERNAME/oeeoc.git
cd oeeoc
```

### 2.2 安装依赖

```bash
npm install
```

### 2.3 本地预览

```bash
npm run dev
```

打开浏览器访问 `http://localhost:4321`，你应该能看到首页。

---

## 3. GitHub 配置

### 3.1 创建仓库

1. 打开 https://github.com/new
2. 仓库名称填写 `oeeoc`
3. 选择 **Public**（公开）
4. 不要勾选 "Add a README file"
5. 点击 **Create repository**

### 3.2 推送代码

```bash
# 初始化 Git（如果还没做）
git init

# 添加远程仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/oeeoc.git

# 提交代码
git add .
git commit -m "Initial commit"
git push -u origin main
```

---

## 4. Cloudflare 部署

### 4.1 注册/登录 Cloudflare

1. 打开 https://dash.cloudflare.com
2. 注册账号或登录

### 4.2 创建 Pages 项目

1. 在左侧菜单点击 **Pages**
2. 点击 **Create a project**
3. 选择 **Connect to Git**
4. 授权 Cloudflare 访问你的 GitHub 账号
5. 选择 `oeeoc` 仓库
6. 点击 **Begin setup**

### 4.3 配置构建设置

| 设置项 | 值 |
|--------|-----|
| Project name | oeeoc |
| Production branch | main |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |

点击 **Save and Deploy**

### 4.4 等待部署完成

- 首次部署约需 2-3 分钟
- 部署成功后，会显示 `https://oeeoc.pages.dev`
- 点击链接即可访问

---

## 5. DNS 配置（使用自定义域名）

### 5.1 添加域名到 Cloudflare

1. 在 Cloudflare Dashboard 点击 **Add a domain**
2. 输入你的域名（如 `oeeoc.me`）
3. 选择 **Free** 计划
4. 点击 **Continue**

### 5.2 修改域名 DNS 服务器

1. Cloudflare 会提供两个 DNS 服务器地址
2. 登录你的域名注册商（如阿里云、GoDaddy 等）
3. 找到 DNS 设置，将 DNS 服务器修改为 Cloudflare 提供的地址
4. 保存，等待生效（通常 5-30 分钟）

### 5.3 配置 Pages 自定义域名

1. 回到 Cloudflare Pages 项目
2. 点击 **Custom domains**
3. 点击 **Set up a custom domain**
4. 输入你的域名（如 `oeeoc.me`）
5. 点击 **Continue**
6. Cloudflare 会自动添加 DNS 记录
7. 等待 SSL 证书生成（约 1-2 分钟）

### 5.4 验证

在浏览器访问你的自定义域名，应该能看到网站。

---

## 6. 日常使用

### 6.1 本地开发

```bash
cd oeeoc
npm run dev
```

访问 `http://localhost:4321`

### 6.2 后台管理

1. 访问 `https://你的域名/admin`
2. 使用配置的账号登录
3. 在编辑器中撰写文章
4. 点击 **发布文章** 下载 Markdown 文件

### 6.3 文件结构

```
oeeoc/
├── src/
│   ├── components/      # 组件
│   ├── layouts/         # 布局
│   ├── pages/           # 页面
│   │   ├── index.astro  # 首页
│   │   ├── articles/    # 文章相关
│   │   └── admin.astro  # 后台
│   ├── content/         # 内容
│   │   └── articles/    # 文章 Markdown 文件
│   └── styles/          # 样式
├── public/              # 静态资源
│   └── images/          # 图片
└── astro.config.mjs     # 配置文件
```

---

## 7. 更新文章

### 7.1 方法一：Git 提交（推荐）

```bash
# 1. 进入项目目录
cd oeeoc

# 2. 创建新文章文件
# 文件路径：src/content/articles/文章标题.md

# 3. 添加文件到 Git
git add .

# 4. 提交
git commit -m "添加新文章：文章标题"

# 5. 推送到 GitHub
git push

# 6. Cloudflare 会自动重新部署（2-3 分钟）
```

### 7.2 方法二：GitHub 网页编辑

1. 打开 GitHub 仓库
2. 进入 `src/content/articles/` 目录
3. 点击 **Add file** → **Create new file**
4. 文件名格式：`文章标题.md`
5. 粘贴 Markdown 内容
6. 点击 **Commit changes**

### 7.3 文章格式

```markdown
---
title: "文章标题"
description: "文章描述"
pubDate: 2024-03-07
tags: ["标签1", "标签2"]
heroImage: "封面图URL（可选）"
---

# 正文内容

支持 Markdown 语法。
```

### 7.4 文章文件名规范

- 使用英文或拼音
- 单词之间用连字符 `-` 连接
- 示例：`hello-world.md`、`my-first-post.md`

---

## 8. 故障排查

### 8.1 部署失败

**问题**：Cloudflare Pages 部署失败

**解决**：
1. 检查 `astro.config.mjs` 配置
2. 确保 `dist` 目录存在
3. 查看 Cloudflare 部署日志

### 8.2 文章不显示

**问题**：新文章没有出现在列表中

**解决**：
1. 检查 frontmatter 格式（`---` 包裹）
2. 检查 `pubDate` 格式（`YYYY-MM-DD`）
3. 确保 `draft: false` 或未设置 draft
4. 重新部署

### 8.3 样式异常

**问题**：页面样式不正确

**解决**：
1. 清除浏览器缓存
2. 检查 `src/styles/global.css`
3. 确保 CSS 变量正确

### 8.4 图片不显示

**问题**：文章图片加载失败

**解决**：
1. 图片放在 `public/images/` 目录
2. 引用路径使用 `/images/图片名.jpg`
3. 或使用完整 URL `https://...`

---

## 快速命令参考

```bash
# 本地开发
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview

# Git 操作
git add .
git commit -m "描述"
git push

# 拉取更新
git pull
```

---

## 需要帮助？

- Astro 文档：https://docs.astro.build
- Cloudflare Pages：https://developers.cloudflare.com/pages
- Markdown 语法：https://www.markdownguide.org

---

**最后更新**：2024年3月7日
