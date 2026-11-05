# battick / DARK LAB

React + Vite + TypeScript 静态个人作品集，设计依据见 [PLAN.md](PLAN.md)。

## 本地开发

使用 Node.js 24（与 Actions 一致）。

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

开发地址为 http://127.0.0.1:5173/about-me/ 。开发模式显示待填信息和两个明确标注的样例；生产构建只显示 published 项目。当前真实内容是本网站，学校、邮箱、经历、照片和简历尚未提供，公开页面隐藏这些字段。

## 页面

首页包含 Hero / About / Selected Work / Toolkit / Contact。独立项目列表支持标签筛选；项目详情、关于、联系和 404 按页面懒加载。笔记、Lab、Now 有独立文件，待内容就绪后接入路由，不出现在导航中。

HashRouter 使用 /about-me/#/projects/dark-lab 形式的详情地址，刷新仍请求入口。不要用 /about-me/projects/dark-lab 这种服务器路径。

## 发布

main 推送触发 .github/workflows/deploy.yml。GitHub 仓库 Settings → Pages → Source 选择 GitHub Actions。工作流执行 npm ci、内容测试、类型检查与构建，发布 dist。预期地址 https://battick.github.io/about-me/ 。实际部署状态以 GitHub Actions 和 Pages 为准。

文档：[内容维护](docs/CONTENT_GUIDE.md)、[素材规范](docs/ASSETS.md)、[验证记录](docs/VALIDATION.md)。

## 浏览器验证

```sh
npm run test:browser
```

默认使用已安装的 Microsoft Edge。测试自动启动生产预览，检查五种宽度、键盘、筛选、刷新、移动导航和减少动态偏好。其他系统可将 playwright.config.ts 的 channel 改为已安装的浏览器。截图在忽略的 .qa/ 目录。
