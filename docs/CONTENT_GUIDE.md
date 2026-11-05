# 内容维护

- 姓名、介绍、学校、年级、头像、邮箱、GitHub、简历：src/content/profile.ts。空值不显示对应入口。邮箱配置后自动显示 mailto、复制按钮和成功/失败反馈。
- 首页标题与文案：src/content/home.ts。当前介绍为首版编辑文案，请根据本人情况修订。
- 教育与经历：src/content/experience.ts，按真实时间添加 year / category / title / description，不生成虚构经历。
- 能力：src/content/capabilities.ts，evidence 指向真实项目；无证据项目仅开发模式展示。
- 主题：src/styles/tokens.css；组件私有样式采用 CSS Modules。
- 导航：src/config/navigation.ts，hidden 为 true 的入口不公开。

## 新增项目

复制 src/content/projects/portfolio.ts 到独立文件，遵循 src/types/content.ts 类型。设置唯一 slug、年份、真实职责、技术标签、封面、详情段落。放入 public/images/projects/<slug>/，在 projects/index.ts 中导入并加入 allProjects。status 先设 draft，核实内容后改 published。featured 控制首页精选，order 控制顺序。links.github / demo 可省略，组件不会生成空按钮。团队项目必须写清本人贡献。

当前封面是明确标注的视觉概念图，请用实际界面截图替换，并修改详情的说明和 alt。gallery 可放多个界面资源相对路径。

## 视频与照片

在 src/config/site.ts 的 hero 填写 poster / mp4 / webm 的 public 相对路径。默认只有静态海报，不发起视频请求。手机、弱网、节省流量和减少动态效果使用海报。视频自动播放失败后回退海报；页面隐藏或离开 Hero 暂停，用户手动暂停后不会随滚动恢复。恢复播放需用户点击。照片设置 profile.portrait；空值展示字标，不生成虚构本人肖像。

## 新增页面

在 src/pages 新建目录和组件，在 src/app/router.tsx 添加 lazy import 与 Route，再按就绪状态更新导航。Notes / NoteDetail / Lab / Now 已有扩展文件，未接入公开路由。章节跳转使用 scrollIntoView，避免与 HashRouter 的 hash 冲突。

## 上线前内容

补充或继续隐藏：姓名/学校/年级、个人介绍、邮箱与社交、真实经历、3–4 个项目、头像、简历与授权视频。开发样例不会出现在生产页面，未知或未公开 slug 显示 404。修改后运行 npm test 和 npm run build。
