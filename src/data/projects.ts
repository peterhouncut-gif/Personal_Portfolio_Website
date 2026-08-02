export interface Project {
  id: string
  title: string
  description: string // ≤15字 per PRD.md
  techStack: string[]
  category: 'frontend' | 'backend' | 'fullstack'
  image: string
  liveUrl?: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: '全栈电商平台',
    techStack: ['React', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    image: '/assets/images/project1.jpg',
    liveUrl: 'https://example.com/shop',
    githubUrl: 'https://github.com/example/project1',
  },
  {
    id: 'project-2',
    title: 'Data Dashboard',
    description: '实时数据分析面板',
    techStack: ['Vue', 'D3.js', 'Python'],
    category: 'frontend',
    image: '/assets/images/project2.jpg',
    liveUrl: 'https://example.com/dashboard',
    githubUrl: 'https://github.com/example/project2',
  },
  {
    id: 'project-3',
    title: 'Task Manager',
    description: '团队协作任务管理',
    techStack: ['TypeScript', 'React', 'GraphQL'],
    category: 'fullstack',
    image: '/assets/images/project3.jpg',
    githubUrl: 'https://github.com/example/project3',
  },
  {
    id: 'project-4',
    title: 'API Gateway',
    description: '微服务API网关',
    techStack: ['Go', 'Docker', 'Kubernetes'],
    category: 'backend',
    image: '/assets/images/project4.jpg',
    githubUrl: 'https://github.com/example/project4',
  },
  {
    id: 'project-5',
    title: 'Portfolio Site',
    description: '个人作品集网站',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    category: 'frontend',
    image: '/assets/images/project5.jpg',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project5',
  },
  {
    id: 'project-6',
    title: 'Chat Microservice',
    description: '实时聊天微服务',
    techStack: ['Node.js', 'WebSocket', 'Redis'],
    category: 'backend',
    image: '/assets/images/project6.jpg',
    githubUrl: 'https://github.com/example/project6',
  },
]
