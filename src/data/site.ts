export type Locale = "en" | "zh";

export type LocalizedText = {
  en: string;
  zh: string;
};

export type LinkItem = {
  label: string;
  href: string;
  disabled?: boolean;
};

export type ResearchArea = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  tags: string[];
  emphasis: "primary" | "secondary";
};

export type Publication = {
  slug: string;
  title: LocalizedText;
  authors: string;
  venue: string;
  year: string;
  summary: LocalizedText;
  tags: string[];
  links: LinkItem[];
};

export type Project = {
  slug: string;
  title: LocalizedText;
  status: LocalizedText;
  problem: LocalizedText;
  approach: LocalizedText;
  outcome: LocalizedText;
  tags: string[];
};

export type CvGroup = {
  title: LocalizedText;
  items: Array<{
    period: string;
    title: LocalizedText;
    detail: LocalizedText;
  }>;
};

export const profile = {
  name: "Your Name",
  chineseName: "你的姓名",
  role: {
    en: "Researcher in wireless systems and scientific AI",
    zh: "无线系统与科学智能方向研究者"
  },
  affiliation: {
    en: "Your University or Lab",
    zh: "你的大学或实验室"
  },
  location: {
    en: "City, Country",
    zh: "城市，国家"
  },
  email: "your.email@example.edu",
  links: [
    { label: "Google Scholar", href: "#", disabled: true },
    { label: "GitHub", href: "#", disabled: true },
    { label: "ORCID", href: "#", disabled: true },
    { label: "LinkedIn", href: "#", disabled: true }
  ] satisfies LinkItem[],
  cv: { label: "CV", href: "#", disabled: true } satisfies LinkItem
};

export const hero = {
  eyebrow: {
    en: "Personal Research Homepage",
    zh: "个人研究主页"
  },
  title: {
    en: "Researching THz Channels, Scientific AI, and Embodied Intelligence",
    zh: "研究太赫兹信道、科学智能与具身智能"
  },
  description: {
    en: "I study channel modeling and future wireless systems, while exploring how scientific AI and embodied intelligence can expand how we model, sense, and interact with complex environments.",
    zh: "我关注信道建模与未来无线系统，同时探索科学智能与具身智能如何拓展我们对复杂环境的建模、感知与交互方式。"
  },
  keywords: ["THz", "Channel Modeling", "Scientific AI", "Embodied Intelligence"]
};

export const researchAreas: ResearchArea[] = [
  {
    id: "thz-channel-modeling",
    title: {
      en: "THz Channel Modeling",
      zh: "太赫兹信道建模"
    },
    summary: {
      en: "Modeling propagation, scattering, absorption, and environment-aware channel behavior for future high-frequency wireless systems.",
      zh: "面向未来高频无线系统，研究传播、散射、吸收与环境感知信道行为建模。"
    },
    tags: ["THz", "6G", "Propagation", "Channel models"],
    emphasis: "primary"
  },
  {
    id: "ai-scientific-discovery",
    title: {
      en: "AI for Scientific Discovery",
      zh: "面向科学发现的人工智能"
    },
    summary: {
      en: "Using learning systems to accelerate simulation, inference, model discovery, and scientific reasoning.",
      zh: "利用学习系统加速仿真、推断、模型发现与科学推理。"
    },
    tags: ["Scientific ML", "Surrogates", "Inference"],
    emphasis: "secondary"
  },
  {
    id: "embodied-intelligence",
    title: {
      en: "Embodied Intelligence",
      zh: "具身智能"
    },
    summary: {
      en: "Exploring how agents perceive, move, communicate, and adapt in physical environments.",
      zh: "探索智能体如何在物理环境中感知、移动、通信与适应。"
    },
    tags: ["Robotics", "Agents", "Perception"],
    emphasis: "secondary"
  }
];

export const publications: Publication[] = [];

export const publicationEmptyState = {
  title: {
    en: "Selected publications will be added soon.",
    zh: "代表论文将持续更新。"
  },
  description: {
    en: "This section is ready for papers, preprints, code links, and BibTeX entries.",
    zh: "该板块已为论文、预印本、代码链接与 BibTeX 条目预留结构。"
  }
};

export const projects: Project[] = [
  {
    slug: "thz-environment-aware-channel-models",
    title: {
      en: "Environment-aware THz Channel Models",
      zh: "环境感知太赫兹信道模型"
    },
    status: {
      en: "Template project",
      zh: "模板项目"
    },
    problem: {
      en: "How can channel models reflect geometry, material response, and high-frequency propagation effects?",
      zh: "信道模型如何反映几何结构、材料响应与高频传播效应？"
    },
    approach: {
      en: "Combine physics-inspired modeling, measurement assumptions, and data-driven calibration.",
      zh: "结合物理启发建模、测量假设与数据驱动校准。"
    },
    outcome: {
      en: "A reusable project slot for publications, datasets, demos, and code.",
      zh: "可替换为论文、数据集、演示与代码的项目入口。"
    },
    tags: ["THz", "Channel", "Modeling"]
  },
  {
    slug: "scientific-ai-for-wireless-simulation",
    title: {
      en: "Scientific AI for Wireless Simulation",
      zh: "面向无线仿真的科学智能"
    },
    status: {
      en: "Future direction",
      zh: "未来方向"
    },
    problem: {
      en: "How can AI reduce simulation cost while preserving scientific interpretability?",
      zh: "AI 如何在保持科学可解释性的同时降低仿真成本？"
    },
    approach: {
      en: "Use surrogate models, uncertainty-aware inference, and structured representations.",
      zh: "使用代理模型、不确定性感知推断与结构化表示。"
    },
    outcome: {
      en: "A space for future collaborations across wireless systems and scientific machine learning.",
      zh: "为无线系统与科学机器学习交叉合作预留空间。"
    },
    tags: ["Scientific AI", "Simulation", "Surrogates"]
  }
];

export const cvGroups: CvGroup[] = [
  {
    title: { en: "Education", zh: "教育经历" },
    items: [
      {
        period: "20XX - Present",
        title: { en: "Degree Program, Your University", zh: "学位项目，你的大学" },
        detail: { en: "Research focus: wireless communications and channel modeling.", zh: "研究方向：无线通信与信道建模。" }
      }
    ]
  },
  {
    title: { en: "Experience", zh: "经历" },
    items: [
      {
        period: "20XX - Present",
        title: { en: "Research Assistant, Your Lab", zh: "科研助理，你的实验室" },
        detail: { en: "Replace this entry with lab, internship, or collaboration experience.", zh: "可替换为实验室、实习或合作经历。" }
      }
    ]
  },
  {
    title: { en: "Awards & Skills", zh: "荣誉与技能" },
    items: [
      {
        period: "Selected",
        title: { en: "Research skills and awards", zh: "研究技能与荣誉" },
        detail: { en: "Channel modeling, simulation, machine learning, academic writing.", zh: "信道建模、仿真、机器学习、学术写作。" }
      }
    ]
  }
];

export const contact = {
  title: {
    en: "Open to research conversations and collaboration.",
    zh: "欢迎研究交流与合作。"
  },
  description: {
    en: "For collaboration, paper discussion, or project ideas, reach out by email or connect through academic profiles once added.",
    zh: "如需合作、论文交流或项目讨论，可通过邮箱联系；学术主页链接可在后续补充。"
  }
};

export const navItems = [
  { href: "#research", label: { en: "Research", zh: "研究" } },
  { href: "#publications", label: { en: "Publications", zh: "论文" } },
  { href: "#projects", label: { en: "Projects", zh: "项目" } },
  { href: "#cv", label: { en: "CV", zh: "简历" } },
  { href: "#contact", label: { en: "Contact", zh: "联系" } }
];
