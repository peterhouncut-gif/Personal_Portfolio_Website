export interface Project {
  id: string
  title: string
  description: string
  impact: string
  techStack: string[]
  category: '行业实践' | '解决方案' | '国际业务' | 'AI 应用' | '产品构想'
  image: string
  githubUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 'met-obs',
    title: '综合气象观测项目支持',
    description: '协同推进项目问题与交付',
    impact: '多设备系统协同，确保项目顺利验收',
    techStack: ['项目协作', '问题跟踪', '材料整理', '交付支持'],
    category: '行业实践',
    image: '/assets/images/project-met.jpg',
    githubUrl: '#',
  },
  {
    id: 'met-solution',
    title: '气象技术方案',
    description: '将业务需求转化为技术材料',
    impact: '需求分析 → 结构化方案 → 技术响应',
    techStack: ['需求分析', '技术方案', '信息整合', '技术写作'],
    category: '解决方案',
    image: '/assets/images/project-solution.jpg',
    githubUrl: '#',
  },
  {
    id: 'intl-tech',
    title: '国际技术材料支持',
    description: '整理英文规范与技术响应',
    impact: '支持国际业务场景的技术沟通',
    techStack: ['英文技术阅读', '参数整理', '跨团队协作'],
    category: '国际业务',
    image: '/assets/images/project-intl.jpg',
    githubUrl: '#',
  },
  {
    id: 'doc-review',
    title: '长文档合规审查工具',
    description: '让关键条款检查可追溯',
    impact: '文档解析 + 规则检查 + 人工复核',
    techStack: ['文档智能', 'RAG', '规则检查', 'Agent'],
    category: 'AI 应用',
    image: '/assets/images/project-ai-doc.jpg',
    githubUrl: 'https://github.com/PeterHou',
  },
  {
    id: 'kb-qa',
    title: '企业知识问答原型',
    description: '让分散知识可查可问',
    impact: '制度检索 + 对话 + 知识库',
    techStack: ['知识库', 'RAG', '对话应用', 'FastAPI'],
    category: 'AI 应用',
    image: '/assets/images/project-ai-kb.jpg',
    githubUrl: 'https://github.com/PeterHou',
  },
  {
    id: 'shadow-boss',
    title: '职业英语训练工具',
    description: '面向职业场景的表达训练',
    impact: '跟读 → 回放 → 标记 → 复习闭环',
    techStack: ['语言学习', '语音交互', '个人效率'],
    category: '产品构想',
    image: '/assets/images/project-eng.jpg',
    githubUrl: 'https://github.com/PeterHou',
  },
]
