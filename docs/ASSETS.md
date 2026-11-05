# 素材与授权

本次没有引入第三方图片、字体或视频。全部 SVG 是本项目原创代码绘制：

| 文件                                       | 用途                   | 说明                                    |
| ------------------------------------------ | ---------------------- | --------------------------------------- |
| public/media/hero/poster.svg               | Hero 静态海报 / 分享图 | 参数化结形金属图，约 175 KB，无本人肖像 |
| public/images/projects/dark-lab/cover.svg  | 网站封面               | 明确标注的视觉概念图，不作为实拍界面    |
| public/images/projects/example-*/cover.svg | 开发样例               | 带样例标记，生产页面不引用              |
| public/favicon.svg                         | 字标                   | 原创字标                                |

字体现用操作系统无衬线与等宽字体，不下载中文字体包。今后若自托管展示字体，须记录来源和许可证并使用 font-display: swap。

视频替换须记录创作者、来源 URL、使用许可和取得日期。目标 8–15 秒、1080p、静音无音轨、3–6 MB，可循环 MP4 和可选 WebM；海报建议不超过 300 KB。人像应由本人提供或获授权；项目截图应确认可公开，去除私人资料。

项目图建议响应式 WebP/AVIF，保留 width / height，首屏外 loading=lazy；当前矢量概念图无需位图多尺寸。public 文件通过 assetUrl 拼接 BASE_URL，适应 GitHub Pages 子路径。上传 PDF 后配置 profile.resume 才展示下载入口。

注意：部分社交平台不显示 SVG 分享图。若需平台社交卡片，另提供授权的 1200×630 PNG/JPEG 并更新 index.html 的 og:image。
