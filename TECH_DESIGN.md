# TECH_DESIGN.md

# 个人作品集网站技术设计

## 技术选型
- **核心框架**：React 18 + TypeScript 5 + Vite 5（开发速度更快，HMR更流畅）
- **样式方案**：Tailwind CSS 4（配合`dark:`前缀实现深色主题）
- **动画库**：Framer Motion 11（实现卡片悬停动画/技能雷达图加载效果）
- **路由管理**：React Router 7（仅当包含独立博客页时启用）
- **构建部署**：Vite静态生成 + GitHub Pages（`gh-pages`分支自动部署）

## 项目结构
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # 响应式导航栏（含平滑滚动）
│   │   └── Footer.tsx    # 底部联系信息区
│   ├── sections/
│   │   ├── Hero.tsx      # 首页大标题+头像区（含打字动画）
│   │   ├── About.tsx     # 关于我（技能雷达图+时间轴）
│   │   ├── Projects.tsx  # 项目展示区（筛选器+响应式卡片）
│   │   └── Contact.tsx   # 联系区（表单+社交媒体图标）
│   └── ui/
│       ├── SkillRadar.tsx  # D3.js可视化技能雷达图
│       └── ProjectCard.tsx # 可筛选项目卡片组件
├── data/
│   ├── projects.ts     # 项目数据数组（名称/描述/截图/技术栈/链接）
│   └── skills.ts       # 技能数据数组（名称/熟练度/颜色）
├── assets/
│   ├── images/         # 头像/项目截图等图片资源
│   └── icons/          # 社交媒体SVG图标
├── styles/
│   └── index.css       # 全局样式（字体/暗色主题变量）
├── App.tsx             # 路由配置与布局容器
└── main.tsx            # Vite入口文件
```

## 数据管理
1. **项目数据结构**（projects.ts）：
```ts
export interface Project {
  id: string;
  title: string;
  description: string; // ≤15字
  techStack: string[]; // 技术标签数组（用于分类筛选）
  image: string;       // assets路径
  liveUrl?: string;    // 部署链接
  githubUrl: string;   // 代码仓库链接
}
```
2. **技能数据结构**（skills.ts）：
```ts
export interface Skill {
  id: string;
  name: string;
  level: number;      // 0-100数值（用于雷达图）
  category: 'frontend' | 'backend' | 'devops'; // 分类标签
  color: string;      // 技术栈对应主题色（Hex）
}
```
3. **数据流**：
   - 组件直接导入TS数据文件（无需状态管理）
   - 项目筛选通过`techStack`字段过滤
   - 新增项目只需修改`projects.ts`数组