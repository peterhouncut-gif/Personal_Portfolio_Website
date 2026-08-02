# AGENTS.md

# 个人作品集网站开发规范

## 项目核心原则
- **必须严格遵循 TECH_DESIGN.md 中的技术架构**（React 18 + TypeScript 5 + Tailwind CSS 4）
- **禁止创建新文件时询问用户**：当需要新增组件/数据文件时，直接按 TECH_DESIGN.md 的目录结构创建
- **所有设计决策必须引用 PRD.md/TECH_DESIGN.md**：若需求描述模糊，优先采用 TECH_DESIGN.md 确定的方案

## 代码规范
### 组件开发
```tsx
// ✅ 正确示例：符合 TECH_DESIGN.md 的 atomic 设计
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onHover?: (id: string) => void;
}

export const ProjectCard = ({ project, onHover }: ProjectCardProps) => {
  // 使用 Framer Motion 实现悬停动效（TECH_DESIGN.md 要求）
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img 
        src={project.image} 
        alt={project.title}
        loading="lazy" // ✅ 强制图片懒加载
      />
      {/* 项目标签使用 TECH_DESIGN.md 定义的 techStack 字段 */}
      <div className="flex gap-2">
        {project.techStack.map(tag => (
          <span 
            key={tag}
            className="px-2 py-1 rounded-full text-xs"
            style={{ backgroundColor: `var(--${tag}-color)` }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
```

1. **必须使用函数式组件 + Hooks**
   - 组件命名遵循 PascalCase（`AboutSection.tsx` 而非 `about-section.tsx`）
   - 所有组件必须使用 TypeScript 接口定义 props

2. **样式规则**
   - **禁止**使用 CSS 文件或内联 style → **100% Tailwind 实现**
   - 深色主题方案：
     ```html
     <!-- TECH_DESIGN.md 指定的色值 -->
     <body class="bg-[#121212] text-[#E0E0E0] dark:bg-[#0a0a0a]">
     ```
   - 渐变色使用预定义类（在 `styles/index.css` 中定义）：
     ```css
     .gradient-accent {
       background: linear-gradient(90deg, #6366f1, #8b5cf6);
     }
     ```

3. **数据管理**
   - 新增项目必须修改 `data/projects.ts`（示例）：
     ```ts
     // ✅ 正确添加格式（符合 TECH_DESIGN.md 接口）
     {
       id: 'project-3',
       title: '数据分析平台',
       description: '实时数据可视化系统',
       techStack: ['React', 'D3.js', 'TypeScript'],
       image: '/assets/images/project3.jpg',
       githubUrl: 'https://github.com/...'
     }
     ```

## 设计执行要求
| 要素 | 规范 | 违反示例 |
|------|------|----------|
| **颜色** | 背景 `#121212` → `#0a0a0a` (移动端)<br>文字 `#E0E0E0` → `#FFFFFF` (标题) | 使用 `#000000` 或自定义色值 |
| **动画** | 滚动：`scroll-snap-type` + `smooth-scroll`
卡片悬停：`transform: translateY(-5px) + 阴影增强` | 硬编码 `margin-top` 实现位移 |
| **响应式** | 断点严格按 TECH_DESIGN.md：<br>`<768px: 单列`<br>`768px-1024px: 双列`<br>`>1024px: 三列` | 使用 `max-width` 替代 Tailwind 响应式前缀 |

## 质量守则
1. **性能**
   - 所有图片必须：
     ```html
     <img loading="lazy" decoding="async" />
     ```
   - 禁止未压缩的 PNG/JPG（自动添加 `?v=1` 版本号防缓存）

2. **可访问性**
   - 社交媒体图标必须包含 `aria-label`：
     ```html
     <a href="..." aria-label="GitHub">
     ```
   - 颜色对比度 ≥ 4.5:1（使用 [Tailwind Contrast Checker](https://tailwindcss.com/docs/accessibility)）

3. **链接验证**
   - 所有外部链接必须通过验证：
     ```bash
     npx check-links ./src/**/*.tsx
     ```

> ⚠️ **AI 特别注意**：当修改组件时，必须同步更新 `TECH_DESIGN.md` 中的对应注释。新增功能前先检查 `PRD.md` 是否覆盖。