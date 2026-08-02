import { motion } from 'framer-motion'
import { skills, softSkills } from '@/data/skills'

/* ── Data ────────────────────────────────────────────── */
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
})

const CAPABILITIES = [
  { icon: '🔍', title: '复杂问题理解', body: '快速梳理陌生业务或技术系统，识别关键问题、信息关系和行动路径。' },
  { icon: '📋', title: '技术方案表达', body: '将需求整理成结构清晰的技术方案、演示材料、技术响应和交付文档。' },
  { icon: '🤝', title: '跨角色协作', body: '具备与客户、产品、技术及合作伙伴协作的经验，推动任务向前。' },
  { icon: '🚀', title: '项目交付', body: '项目实施、问题跟踪、材料准备和验收支持，重视可靠交付。' },
  { icon: '🧠', title: 'AI 应用探索', body: '关注文档智能、RAG、Agent 和工作流自动化，从真实问题出发。' },
  { icon: '🌐', title: '中英文技术沟通', body: '阅读英文技术规范，编写英文技术材料，支持跨境技术交流。' },
]

const TIMELINE = [
  {
    period: '2024 — 至今',
    title: '气象科技领域 · 技术方案与项目支持',
    company: '中国华云气象科技集团',
    bullets: [
      '参与气象观测及相关行业场景的技术方案整理与编制',
      '支持技术文档、技术响应和项目材料编制',
      '主导部门 NAS 知识管理系统建设，改善资料检索与复用',
      '推动招投标 OA 流程数字化，将线下流程转为线上节点',
      '参与 2500 万元级安徽综合垂直观测项目的实施协调与验收',
      '支持巴基斯坦、摩洛哥、老挝等国际项目技术材料',
      '面向新疆气象局等客户进行正式技术方案宣讲',
    ],
  },
  {
    period: '2021 — 2024',
    title: '计算机科学 · 硕士',
    company: '北方工业大学',
    bullets: [
      '研究方向：计算机视觉、三维重建、增强现实、NeRF',
      '在低光照/低纹理场景下改进 NeRF 重建质量，PSNR 提升约 2.5%–4.5%',
      '自制 AR 头盔系统，集成热成像、双目相机与三维重建算法',
      '毕业论文首次盲审未过后，一个月内独立重构并通过（评审约 85 分）',
    ],
  },
  {
    period: '2016 — 2020',
    title: '机械设计制造及其自动化 · 本科',
    company: '哈尔滨商业大学',
    bullets: [
      '系统学习机械设计、制造、工程制图、材料与力学',
      '参加挑战杯，设计英语翻译众包平台，获校级银奖',
      '建立工程思维、动手意识和系统分析能力',
    ],
  },
]

const AI_PROJECTS = [
  {
    title: '长文档合规审查工具',
    desc: '探索文档解析、规则检查、语义检索、证据定位和人工复核的组合方式，降低遗漏风险。',
    status: '探索中',
    tags: ['文档智能', 'RAG', '规则检查', 'Agent'],
  },
  {
    title: '企业知识问答原型',
    desc: '将分散的制度与业务知识整理为可检索、可追溯的问答系统。',
    status: '原型探索',
    tags: ['知识库', 'RAG', '对话应用', 'FastAPI'],
  },
  {
    title: '职业英语训练工具',
    desc: '面向技术交流与英文会议场景，设计跟读、回放、标记和复习的训练闭环。',
    status: '产品构想',
    tags: ['语言学习', '语音交互', '个人效率'],
  },
]

/* ── Component ──────────────────────────────────────── */
export function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-4xl mx-auto">
      {/* Heading */}
      <motion.div className="mb-16 text-center" variants={fadeIn()} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold tracking-tight text-[#FFFDF7] sm:text-4xl">关于我</h2>
        <p className="mt-3 text-sm text-[#F5E6D3]/45 sm:text-base">
          跨越机械工程、计算机与气象科技的复合历程
        </p>
      </motion.div>

      {/* Bio + Avatar */}
      <motion.div className="space-y-6" variants={fadeIn(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {/* Avatar row */}
        <div className="flex items-center gap-5 mb-8">
          <div className="h-16 w-16 rounded-full bg-[#2a1f18] flex items-center justify-center overflow-hidden border-2 border-[#F4976C]/30">
            <img
              src="/assets/images/avatar.jpg"
              alt="Peter Hou"
              className="h-full w-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          </div>
          <div>
            <p className="font-semibold text-[#FFFDF7]">侯耀辉 Peter Hou</p>
            <p className="text-sm text-[#F5E6D3]/50">北京 · 技术解决方案 · 气象科技</p>
          </div>
        </div>

        <p className="text-[#F5E6D3]/75 leading-relaxed">
          我的学习与职业经历横跨机械工程、计算机和气象科技领域。从机械工程的系统思维，
          到计算机视觉与 AI 的技术深度，再到气象科技行业的方案落地——每一次跨越都是
          把上一段经历中最核心的能力带入新领域。
        </p>
        <p className="text-[#F5E6D3]/65 leading-relaxed">
          我更擅长站在技术与业务的交叉位置工作：快速进入陌生领域，梳理复杂信息，
          把需求转化为团队能够执行的方案，并在多方协作中持续推动问题解决。
        </p>

        <blockquote className="relative mt-6 rounded-2xl border border-[#F4976C]/15 bg-gradient-to-br from-[#F4976C]/8 to-[#FFD166]/5 p-5">
          <span className="absolute -top-3 left-4 text-3xl text-[#FFD166]/40 select-none">&ldquo;</span>
          <p className="pt-3 text-sm leading-relaxed text-[#F5E6D3]/70 italic">
            我关注长文档处理、知识检索、信息复用和流程协同等共性问题，
            并尝试使用 AI、RAG 和 Agent 等技术设计更高效的解决方式。
          </p>
        </blockquote>
      </motion.div>

      {/* Capabilities */}
      <motion.div className="mt-20 border-t border-[#F5E6D3]/6 pt-16" variants={fadeIn(0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h3 className="text-xl font-semibold text-[#FFFDF7] mb-8 text-center">核心能力</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="flex items-start gap-4 rounded-2xl border border-[#F5E6D3]/6 bg-[#F5E6D3]/3 p-5 transition-all hover:border-[#F4976C]/20 hover:bg-[#F4976C]/6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4976C]/10 text-xl">{c.icon}</span>
              <div>
                <h4 className="font-semibold text-[#FFFDF7]">{c.title}</h4>
                <p className="mt-1 text-sm text-[#F5E6D3]/55 leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div className="mt-16 border-t border-[#F5E6D3]/6 pt-16" variants={fadeIn(0.25)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h3 className="text-xl font-semibold text-[#FFFDF7] mb-8 text-center">技能</h3>
        <div className="space-y-3">
          {skills.slice(0, 8).map((s) => (
            <div key={s.id} className="flex items-center gap-4">
              <span className="w-28 text-xs text-[#F5E6D3]/60 shrink-0">{s.name}</span>
              <div className="flex-1 h-1.5 bg-[#F5E6D3]/6 rounded-full overflow-hidden">
                <motion.div
                  className="h-full gradient-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                />
              </div>
              <span className="text-[10px] text-[#F5E6D3]/30 w-8 text-right">{s.level}%</span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {softSkills.map((s) => (
            <span key={s.id} className="text-xs text-[#FFD166]/70 border border-[#F4976C]/15 rounded-full px-3 py-1">{s.name}</span>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div className="mt-16 border-t border-[#F5E6D3]/6 pt-16" variants={fadeIn(0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h3 className="text-xl font-semibold text-[#FFFDF7] mb-8 text-center">经历</h3>
        <div className="space-y-10">
          {TIMELINE.map((entry, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-[#F4976C]/20">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#F4976C]" />
              <span className="text-xs font-medium tracking-wider text-[#FFD166]/70 uppercase">{entry.period}</span>
              <h4 className="mt-1 text-base font-semibold text-[#FFFDF7]">{entry.title}</h4>
              <p className="text-xs text-[#F5E6D3]/45 mt-0.5">{entry.company}</p>
              <ul className="mt-3 space-y-1.5">
                {entry.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-[#F5E6D3]/55 flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#F5E6D3]/20" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* AI Projects */}
      <motion.div className="mt-16 border-t border-[#F5E6D3]/6 pt-16" variants={fadeIn(0.35)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h3 className="text-xl font-semibold text-[#FFFDF7] mb-8 text-center">AI 与数字产品探索</h3>
        <div className="space-y-4">
          {AI_PROJECTS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-[#F5E6D3]/6 bg-[#F5E6D3]/3 p-5 hover:border-[#F4976C]/20 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-sm font-semibold text-[#FFFDF7]">{p.title}</h4>
                <span className="text-[10px] text-[#FFD166]/60 border border-[#F4976C]/15 rounded-full px-2 py-0.5">{p.status}</span>
              </div>
              <p className="text-xs text-[#F5E6D3]/55 leading-relaxed">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] text-[#F5E6D3]/40">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
