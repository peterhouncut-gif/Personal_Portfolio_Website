export interface Skill {
  id: string
  name: string
  level: number // 0-100
  category: 'frontend' | 'backend' | 'devops'
  color: string // Hex color
}

export const skills: Skill[] = [
  { id: 'react', name: 'React', level: 90, category: 'frontend', color: '#61DAFB' },
  { id: 'typescript', name: 'TypeScript', level: 85, category: 'frontend', color: '#3178C6' },
  { id: 'vue', name: 'Vue', level: 70, category: 'frontend', color: '#4FC08D' },
  { id: 'nodejs', name: 'Node.js', level: 80, category: 'backend', color: '#339933' },
  { id: 'python', name: 'Python', level: 75, category: 'backend', color: '#3776AB' },
  { id: 'docker', name: 'Docker', level: 65, category: 'devops', color: '#2496ED' },
]
