export type Lang = "pt" | "en"

export interface Localized {
  pt: string
  en: string
}

/** Tag de tecnologia (neutra) ou rótulo traduzido. */
export type Tag = string | Localized

export interface Experience {
  company: string
  role: Localized
  period: Localized
  description: Localized
  tags: Tag[]
  /** Mini linha do tempo da evolução no cargo, ex.: "front-end → QA → full stack". */
  progression?: Localized
  /** Agrupa entradas consecutivas da mesma empresa num bloco único. */
  group?: string
  /** Link de referência externa (matéria, case, etc.) exibido após a descrição. */
  link?: { label: Localized; href: string }
  /** Marca o trabalho atual. */
  current?: boolean
}

export interface Project {
  title: string
  href: string
  description: Localized
  tags: Tag[]
}

export interface Education {
  institution: string
  course: Localized
  period: Localized
  /** Ex.: "em andamento". Exibido como selo de destaque. */
  status?: Localized
}

export interface SkillGroup {
  label: Localized
  items: Tag[]
}

export interface Content {
  seo: {
    title: Localized
    description: Localized
  }
  nav: {
    experience: Localized
    projects: Localized
    education: Localized
    contact: Localized
  }
  hero: {
    headline: Localized
    tagline: Localized
    summary: Localized
    availability: Localized
    location: Localized
    cta: Localized
    ctaSecondary: Localized
  }
  sections: {
    experience: Localized
    projects: Localized
    education: Localized
    contact: Localized
  }
  skills: SkillGroup[]
  experiences: Experience[]
  projects: Project[]
  projectsNote: Localized
  education: Education[]
  contact: {
    heading: Localized
    blurb: Localized
    email: Localized
    whatsapp: string
    linkedin: string
    github: string
  }
  actions: {
    showMore: Localized
    showLess: Localized
    moreCount: Localized
    backToTop: Localized
  }
  a11y: {
    skipToContent: Localized
    mainNav: Localized
    language: Localized
    currentRole: Localized
    opensNewTab: Localized
    timeline: Localized
  }
}

// ─────────────────────────────────────────────────────────────
// ✏️ Conteúdo do portfólio. Para editar textos, experiências,
// projetos, formação ou links, basta alterar os campos abaixo.
// Cada texto tem versão em português (pt) e inglês (en).
// ─────────────────────────────────────────────────────────────
export const content: Content = {
  seo: {
    title: {
      pt: "Ryan Oliveira · Engenheiro de Software | Portfólio",
      en: "Ryan Oliveira · Software Engineer | Portfolio",
    },
    description: {
      pt: "Engenheiro de software generalista: front-end, back-end, IA e o que mais o projeto precisar. Dashboards, SaaS e sistemas de gestão para empresas e ONGs. Veja os projetos e fale comigo.",
      en: "Generalist software engineer: front end, back end, AI and whatever else the project needs. Dashboards, SaaS and management systems for companies and NGOs. See the projects and get in touch.",
    },
  },

  nav: {
    experience: { pt: "experiência", en: "experience" },
    projects: { pt: "projetos", en: "projects" },
    education: { pt: "formação", en: "education" },
    contact: { pt: "contato", en: "contact" },
  },

  hero: {
    headline: {
      pt: "Engenheiro de Software",
      en: "Software Engineer",
    },
    tagline: {
      pt: "Construo [[sites]], [[sistemas]] e [[produtos digitais]] que as pessoas usam de verdade. A tecnologia eu escolho conforme o problema, não o contrário.",
      en: "I build [[websites]], [[systems]] and [[digital products]] people actually use. I pick the technology to fit the problem, not the other way around.",
    },
    summary: {
      pt: "Comecei no suporte, virei desenvolvedor e hoje cuido da parte técnica dos projetos na Nevus Digital. Já passei por ONG, startup de IA, CRM legado, e-commerce e muitos dashboards, trocando de linguagem e ferramenta conforme a necessidade. Gosto de pegar um problema bagunçado e entregar algo simples que funciona.",
      en: "I started in support, became a developer, and today I run the technical side of the projects at Nevus Digital. I've worked with an NGO, an AI startup, a legacy CRM, e-commerce and a lot of dashboards, switching languages and tools as needed. I like taking a messy problem and shipping something simple that works.",
    },
    availability: {
      pt: "Aberto a novas oportunidades",
      en: "Open to new opportunities",
    },
    location: { pt: "Brasil · remoto", en: "Brazil · remote" },
    cta: { pt: "vamos conversar", en: "let's talk" },
    ctaSecondary: { pt: "ver experiência", en: "see experience" },
  },

  sections: {
    experience: { pt: "experiência", en: "experience" },
    projects: { pt: "projetos", en: "projects" },
    education: { pt: "formação", en: "education" },
    contact: { pt: "contato", en: "contact" },
  },

  // Não aparece na página: alimenta apenas o JSON-LD (knowsAbout) para SEO.
  skills: [
    {
      label: { pt: "Front-end", en: "Front-end" },
      items: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "PWA",
        "Recharts",
        { pt: "AngularJS (legado)", en: "AngularJS (legacy)" },
      ],
    },
    {
      label: { pt: "Back-end & dados", en: "Back-end & data" },
      items: ["Node.js", "Prisma", "SQL", "Flask + Jinja2", "REST APIs", "Shopify"],
    },
    {
      label: { pt: "IA & automação", en: "AI & automation" },
      items: [
        "LangChain",
        "LlamaIndex",
        "Claude API",
        "n8n",
        { pt: "Agentes de IA", en: "AI agents" },
      ],
    },
    {
      label: { pt: "Produto & processo", en: "Product & process" },
      items: [
        { pt: "Arquitetura front-end", en: "Front-end architecture" },
        "UI/UX",
        "Figma",
        "QA",
        { pt: "Liderança técnica", en: "Tech leadership" },
      ],
    },
  ],

  // Ordem: mais recente primeiro. Entradas com o mesmo `group`
  // aparecem encapsuladas juntas (evolução dentro da empresa).
  experiences: [
    {
      company: "Nevus Digital",
      role: { pt: "Tech Lead", en: "Tech Lead" },
      period: { pt: "jul 2026 — presente", en: "jul 2026 — present" },
      current: true,
      description: {
        pt: "Cuido da parte técnica de todos os projetos da empresa. Escolho as ferramentas, desenho a arquitetura, organizo o processo de entrega e continuo programando. Não fico preso a um produto só: entro onde precisa, da decisão de stack ao deploy.",
        en: "I look after the technical side of every project at the company. I pick the tools, design the architecture, organize how we ship, and keep writing code. I'm not tied to a single product: I step in wherever it's needed, from choosing the stack to deploying.",
      },
      tags: [
        { pt: "Arquitetura", en: "Architecture" },
        { pt: "Processos", en: "Processes" },
        "Node.js",
        "React",
        "Next.js",
      ],
    },
    {
      company: "Plusoft",
      role: { pt: "Engenheiro de Software", en: "Software Engineer" },
      period: { pt: "abr 2026 — jun 2026", en: "apr 2026 — jun 2026" },
      description: {
        pt: "Entrei no time do INPASS para cuidar do CRM Omni, uma plataforma legada em AngularJS que precisava de estabilidade. Investiguei incidentes, corrigi bugs críticos em produção e deixei o sistema mais previsível. Também mexi nas funcionalidades de IA do produto e no banco de dados.",
        en: "I joined the INPASS team to look after Omni CRM, a legacy AngularJS platform that needed stability. I dug into incidents, fixed critical bugs in production and made the system more predictable. I also worked on the product's AI features and on the database side.",
      },
      tags: [
        "AngularJS",
        { pt: "IA", en: "AI" },
        "Debugging",
        { pt: "Bancos de dados", en: "Databases" },
      ],
    },
    {
      company: "Instituto Joga Junto",
      role: { pt: "Engenheiro de Software", en: "Software Engineer" },
      period: { pt: "set 2024 — fev 2026", en: "sep 2024 — feb 2026" },
      group: "ijj",
      description: {
        pt: "Desenvolvi e liderei a plataforma que centraliza a gestão da ONG: matrículas, projetos, finanças, voluntários e emissão de certificados. Montei dashboards em tempo real com React, Next.js e Recharts para a equipe enxergar os números do dia a dia. Fui responsável pela arquitetura do front, performance e experiência de uso, do levantamento de requisitos até a publicação. Também estruturei a loja da ONG na Shopify, com pagamentos integrados.",
        en: "I built and led the platform that centralizes the NGO's management: enrollments, projects, finances, volunteers and certificate issuing. Set up real-time dashboards with React, Next.js and Recharts so the team could see their day-to-day numbers. I owned the front-end architecture, performance and user experience, from gathering requirements to going live. I also set up the NGO's Shopify store with integrated payments.",
      },
      tags: ["Next.js", "React", "Recharts", "Prisma", "Shopify"],
    },
    {
      company: "Instituto Joga Junto",
      role: {
        pt: "Instrutor de Desenvolvimento Web",
        en: "Web Development Instructor",
      },
      period: { pt: "fev 2024 — fev 2026", en: "feb 2024 — feb 2026" },
      group: "ijj",
      progression: {
        pt: "front-end → QA → full stack",
        en: "front-end → QA → full stack",
      },
      description: {
        pt: "Dei aulas práticas de desenvolvimento web e qualidade de software para os alunos do instituto. A gente percorria o ciclo inteiro: requisitos, protótipo no Figma, front, back e entrega. Construí aplicações reais junto com as turmas para ensinar programação e QA na prática. A trilha começou em front-end e cresceu para QA e full stack.",
        en: "I taught hands-on web development and software quality classes to the institute's students. We went through the whole cycle: requirements, Figma prototype, front end, back end and delivery. I built real applications with the classes to teach coding and QA in practice. The track started with front end and grew into QA and full stack.",
      },
      tags: [{ pt: "Ensino", en: "Teaching" }, "QA", "Figma", "JavaScript"],
    },
    {
      company: "YAITEC Solutions",
      role: {
        pt: "Engenheiro de Software · IA",
        en: "Software Engineer · AI",
      },
      period: { pt: "jan 2025 — abr 2025", en: "jan 2025 — apr 2025" },
      description: {
        pt: "Fui responsável por todo o front-end do produto, incluindo o design da interface e a padronização dos componentes (Flask + Jinja2, Next.js, shadcn/ui, Tailwind CSS). Defini a identidade visual da empresa e o sistema de componentes. Integrei agentes de IA e automações usando LangChain, LlamaIndex, Claude e n8n.",
        en: "I was responsible for the product's entire front end, including interface design and component standardization (Flask + Jinja2, Next.js, shadcn/ui, Tailwind CSS). I defined the company's visual identity and component system, and integrated AI agents and automations using LangChain, LlamaIndex, Claude and n8n.",
      },
      tags: ["Next.js", "LangChain", "LlamaIndex", "Claude", "n8n"],
    },
    {
      company: "Omi Soluções em Tecnologia",
      role: { pt: "Engenheiro de Software", en: "Software Engineer" },
      period: { pt: "jan 2024 — set 2024", en: "jan 2024 — sep 2024" },
      description: {
        pt: "Construí do zero a plataforma de corretores da Civil Empreendimentos: um dashboard modular com visualização de dados, indicadores de vendas e telas configuráveis (React, Next.js, shadcn/ui, Recharts), mais um PWA com ranking, níveis e pontos para engajar a equipe de vendas. Participei desde a concepção, definindo fluxos de navegação, hierarquia de informação e componentes reutilizáveis. O lançamento saiu na imprensa local.",
        en: "I built Civil Empreendimentos' real-estate agent platform from scratch: a modular dashboard with data visualization, sales indicators and configurable screens (React, Next.js, shadcn/ui, Recharts), plus a PWA with rankings, levels and points to engage the sales team. I was involved from the concept stage, defining navigation flows, information hierarchy and reusable components. The launch made the local press.",
      },
      tags: ["React", "Next.js", "shadcn/ui", "Recharts", "PWA"],
      link: {
        label: {
          pt: "ler a matéria no Alô Alô Bahia",
          en: "read the story on Alô Alô Bahia",
        },
        href: "https://aloalobahia.com/noticias/2024/11/17/civil-empreendimentos-lanca-plataforma-que-integra-recursos-e-agiliza-trabalho-de-corretores/",
      },
    },
    {
      company: "Mutant",
      role: {
        pt: "Analista de Suporte N2 · Desenvolvedor Interno",
        en: "N2 Support Analyst · Internal Developer",
      },
      period: { pt: "set 2022 — nov 2023", en: "sep 2022 — nov 2023" },
      description: {
        pt: "Trabalhava no suporte N2 e, no meio disso, comecei a construir ferramentas internas para destravar a operação. Automatizei o envio de e-mails personalizados em escala, o que cortou trabalho manual e erros na comunicação com clientes. Criei uma interface para gerenciar a base de leads, com filtros avançados, segmentação e acompanhamento de status. Foi onde aprendi a transformar dor de operação em solução simples.",
        en: "I worked in N2 support and, in the middle of that, started building internal tools to unblock the operation. I automated personalized email sending at scale, which cut manual work and mistakes in customer communication. I created an interface to manage the lead base, with advanced filters, segmentation and status tracking. That's where I learned to turn operational pain into simple solutions.",
      },
      tags: ["React", "Next.js", { pt: "Automação", en: "Automation" }, "CRM"],
    },
    {
      company: "R3 Transportes",
      role: {
        pt: "Desenvolvedor Front-end Júnior",
        en: "Junior Front-end Developer",
      },
      period: { pt: "jul 2023 — set 2023", en: "jul 2023 — sep 2023" },
      description: {
        pt: "Melhorei a usabilidade, a acessibilidade e a clareza visual da aplicação principal da empresa. Desenvolvi telas para segmentar informações e acompanhar status, implementei gráficos com Chart.js para acompanhar operações e embarques e participei dos protótipos no Figma junto com o time.",
        en: "I improved the usability, accessibility and visual clarity of the company's main application. Built screens to segment information and track status, implemented Chart.js charts to follow operations and shipments, and took part in Figma prototyping with the team.",
      },
      tags: ["React", "Chart.js", "Figma", { pt: "Acessibilidade", en: "Accessibility" }],
    },
  ],

  projectsNote: {
    pt: "Coisas que criei por conta própria e estão no ar.",
    en: "Things I built on my own that are live today.",
  },

  projects: [
    {
      title: "ConstruPrice",
      href: "https://lpconstructprice.vercel.app/",
      description: {
        pt: "Cotação de material de construção em tempo real. Busca em vários fornecedores ao mesmo tempo, compara os preços e deixa comprar com um clique.",
        en: "Real-time construction material quotes. Searches several suppliers at once, compares prices and lets you buy in one click.",
      },
      tags: ["Next.js", { pt: "Coleta automatizada", en: "Automated data collection" }],
    },
    {
      title: "EloChaos",
      href: "https://www.elochaos.com.br/",
      description: {
        pt: "SaaS de serviços para League of Legends (boost e coaching), com pagamento por Pix integrado e atendimento 24 horas.",
        en: "SaaS for League of Legends services (boosting and coaching), with built-in Pix payments and round-the-clock support.",
      },
      tags: ["Next.js", "SaaS", { pt: "Pagamentos", en: "Payments" }],
    },
    {
      title: "SynapseOS",
      href: "https://www.synapseos.com.br/",
      description: {
        pt: "App desktop que otimiza o Windows para jogos: mais FPS, menos latência, IA integrada, presets de um clique e overclock assistido.",
        en: "Desktop app that tunes Windows for gaming: more FPS, less latency, built-in AI, one-click presets and assisted overclocking.",
      },
      tags: ["Desktop", "Windows", { pt: "IA", en: "AI" }],
    },
  ],

  education: [
    {
      institution: "UNINTER",
      course: {
        pt: "Bacharelado em Ciência da Computação",
        en: "B.Sc. in Computer Science",
      },
      period: { pt: "2026 — previsão 2028", en: "2026 — expected 2028" },
      status: { pt: "em andamento", en: "in progress" },
    },
    {
      institution: "Rocketseat",
      course: {
        pt: "Formação Full Stack",
        en: "Full Stack Program",
      },
      period: { pt: "2021 — 2023", en: "2021 — 2023" },
    },
  ],

  contact: {
    heading: { pt: "vamos conversar", en: "let's talk" },
    blurb: {
      pt: "Se você tem uma vaga, um projeto ou só quer trocar uma ideia, me chama. E-mail é o jeito mais rápido, mas WhatsApp e LinkedIn também funcionam.",
      en: "If you have a role, a project or just want to talk shop, reach out. Email is the fastest, but WhatsApp and LinkedIn work too.",
    },
    email: { pt: "e-mail", en: "email" },
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    github: "GitHub",
  },

  actions: {
    showMore: { pt: "ver mais", en: "see more" },
    showLess: { pt: "ver menos", en: "see less" },
    moreCount: { pt: "experiências", en: "roles" },
    backToTop: { pt: "voltar ao topo", en: "back to top" },
  },

  a11y: {
    skipToContent: { pt: "Pular para o conteúdo", en: "Skip to content" },
    mainNav: { pt: "Navegação principal", en: "Main navigation" },
    language: { pt: "Idioma", en: "Language" },
    currentRole: { pt: "cargo atual", en: "current role" },
    opensNewTab: { pt: "(abre em nova aba)", en: "(opens in a new tab)" },
    timeline: { pt: "Linha do tempo profissional", en: "Career timeline" },
  },

}

export const pick = (l: Localized, lang: Lang) => l[lang]

/** Resolve uma tag neutra ou traduzida para texto. */
export const tagText = (t: Tag, lang: Lang) =>
  typeof t === "string" ? t : t[lang]
