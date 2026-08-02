export interface Skill {
  id: string
  name: string
  level: number
  category: string
  color: string
}

export const skills: Skill[] = [
  // 解决方案与项目
  { id: 'req', name: '需求理解与信息梳理', level: 88, category: 'solution', color: '#F4976C' },
  { id: 'proposal', name: '技术方案与演示材料', level: 85, category: 'solution', color: '#F7B05E' },
  { id: 'tech-resp', name: '技术响应与文档核对', level: 82, category: 'solution', color: '#FFD166' },
  { id: 'delivery', name: '项目问题跟踪与交付', level: 80, category: 'solution', color: '#F4976C' },
  { id: 'comm', name: '跨角色沟通与协作', level: 85, category: 'solution', color: '#F7B05E' },

  // 气象科技
  { id: 'surface', name: '地面气象观测', level: 75, category: 'meteorology', color: '#4ECDC4' },
  { id: 'remote', name: '遥感观测设备', level: 70, category: 'meteorology', color: '#44B09E' },
  { id: 'integrated', name: '综合观测系统', level: 78, category: 'meteorology', color: '#4ECDC4' },

  // 软件与 AI
  { id: 'python', name: 'Python', level: 80, category: 'tech', color: '#3776AB' },
  { id: 'cpp', name: 'C++', level: 65, category: 'tech', color: '#00599C' },
  { id: 'pytorch', name: 'PyTorch / OpenCV', level: 70, category: 'tech', color: '#EE4C2C' },
  { id: 'fastapi', name: 'FastAPI / SQLAlchemy', level: 68, category: 'tech', color: '#009688' },
  { id: 'vue', name: 'Vue / Vite', level: 60, category: 'tech', color: '#4FC08D' },
  { id: 'rag', name: 'RAG / LangChain', level: 65, category: 'tech', color: '#FFD166' },
  { id: 'linux', name: 'Linux / Git', level: 72, category: 'tech', color: '#FCC624' },

  // 文档与表达
  { id: 'writing', name: '长篇技术文档', level: 85, category: 'document', color: '#F4976C' },
  { id: 'present', name: '演示与方案介绍', level: 82, category: 'document', color: '#F7B05E' },
  { id: 'english', name: '中英文技术资料', level: 78, category: 'document', color: '#FFD166' },
]

export const softSkills: Pick<Skill, 'id' | 'name' | 'level'>[] = [
  { id: 'learn', name: '快速学习与适应', level: 92 },
  { id: 'structure', name: '结构化表达', level: 88 },
  { id: 'push', name: '复杂事务推进', level: 85 },
  { id: 'resilience', name: '抗压与自我纠偏', level: 90 },
]
