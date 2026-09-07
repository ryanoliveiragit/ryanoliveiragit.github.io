export type Lang = "en" | "pt" | "ru"

export interface Localized {
  en: string
  pt: string
  ru: string
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

export interface Language {
  name: Localized
  level: Localized
  /** Código BCP 47, usado no JSON-LD (knowsLanguage). */
  code: string
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
    languages: Localized
    contact: Localized
  }
  skills: SkillGroup[]
  experiences: Experience[]
  projects: Project[]
  projectsNote: Localized
  education: Education[]
  languages: Language[]
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
// Cada texto tem versão em inglês (en, padrão), português (pt)
// e russo (ru).
// ─────────────────────────────────────────────────────────────
export const content: Content = {
  seo: {
    title: {
      en: "Ryan Oliveira · Software Engineer | Portfolio",
      pt: "Ryan Oliveira · Engenheiro de Software | Portfólio",
      ru: "Райан Оливейра · Инженер-программист | Портфолио",
    },
    description: {
      en: "Generalist software engineer: front end, back end, AI and whatever else the project needs. Dashboards, SaaS and management systems for companies and NGOs. See the projects and get in touch.",
      pt: "Engenheiro de software generalista: front-end, back-end, IA e o que mais o projeto precisar. Dashboards, SaaS e sistemas de gestão para empresas e ONGs. Veja os projetos e fale comigo.",
      ru: "Инженер-программист широкого профиля: фронтенд, бэкенд, ИИ и всё, что нужно проекту. Дашборды, SaaS и системы управления для компаний и НКО. Посмотрите проекты и напишите мне.",
    },
  },

  nav: {
    experience: { en: "experience", pt: "experiência", ru: "опыт" },
    projects: { en: "projects", pt: "projetos", ru: "проекты" },
    education: { en: "education", pt: "formação", ru: "образование" },
    contact: { en: "contact", pt: "contato", ru: "контакты" },
  },

  hero: {
    headline: {
      en: "Software Engineer",
      pt: "Engenheiro de Software",
      ru: "Инженер-программист",
    },
    tagline: {
      en: "I build [[websites]], [[systems]] and [[digital products]] people actually use. I pick the technology to fit the problem, not the other way around.",
      pt: "Construo [[sites]], [[sistemas]] e [[produtos digitais]] que as pessoas usam de verdade. A tecnologia eu escolho conforme o problema, não o contrário.",
      ru: "Создаю [[сайты]], [[системы]] и [[цифровые продукты]], которыми люди действительно пользуются. Технологии подбираю под задачу, а не наоборот.",
    },
    summary: {
      en: "I started in support, became a developer, and today I run the technical side of the projects at Nevus Digital. I've worked with an NGO, an AI startup, a legacy CRM, e-commerce and a lot of dashboards, switching languages and tools as needed. I like taking a messy problem and shipping something simple that works.",
      pt: "Comecei no suporte, virei desenvolvedor e hoje cuido da parte técnica dos projetos na Nevus Digital. Já passei por ONG, startup de IA, CRM legado, e-commerce e muitos dashboards, trocando de linguagem e ferramenta conforme a necessidade. Gosto de pegar um problema bagunçado e entregar algo simples que funciona.",
      ru: "Начинал в техподдержке, стал разработчиком, а сегодня отвечаю за техническую часть проектов в Nevus Digital. Работал с НКО, ИИ-стартапом, legacy-CRM, e-commerce и множеством дашбордов, меняя языки и инструменты по необходимости. Люблю брать запутанную задачу и выпускать простое решение, которое работает.",
    },
    availability: {
      en: "Open to new opportunities",
      pt: "Aberto a novas oportunidades",
      ru: "Открыт для новых возможностей",
    },
    location: {
      en: "Brazil · remote",
      pt: "Brasil · remoto",
      ru: "Бразилия · удалённо",
    },
    cta: { en: "let's talk", pt: "vamos conversar", ru: "давайте поговорим" },
    ctaSecondary: {
      en: "see experience",
      pt: "ver experiência",
      ru: "смотреть опыт",
    },
  },

  sections: {
    experience: { en: "experience", pt: "experiência", ru: "опыт" },
    projects: { en: "projects", pt: "projetos", ru: "проекты" },
    education: { en: "education", pt: "formação", ru: "образование" },
    languages: { en: "languages", pt: "idiomas", ru: "языки" },
    contact: { en: "contact", pt: "contato", ru: "контакты" },
  },

  // Não aparece na página: alimenta apenas o JSON-LD (knowsAbout) para SEO.
  skills: [
    {
      label: { en: "Front-end", pt: "Front-end", ru: "Фронтенд" },
      items: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "PWA",
        "Recharts",
        { en: "AngularJS (legacy)", pt: "AngularJS (legado)", ru: "AngularJS (legacy)" },
      ],
    },
    {
      label: { en: "Back-end & data", pt: "Back-end & dados", ru: "Бэкенд и данные" },
      items: ["Node.js", "Prisma", "SQL", "Flask + Jinja2", "REST APIs", "Shopify"],
    },
    {
      label: { en: "AI & automation", pt: "IA & automação", ru: "ИИ и автоматизация" },
      items: [
        "LangChain",
        "LlamaIndex",
        "Claude API",
        "n8n",
        { en: "AI agents", pt: "Agentes de IA", ru: "ИИ-агенты" },
      ],
    },
    {
      label: { en: "Product & process", pt: "Produto & processo", ru: "Продукт и процессы" },
      items: [
        { en: "Front-end architecture", pt: "Arquitetura front-end", ru: "Архитектура фронтенда" },
        "UI/UX",
        "Figma",
        "QA",
        { en: "Tech leadership", pt: "Liderança técnica", ru: "Техническое лидерство" },
      ],
    },
  ],

  // Ordem: mais recente primeiro. Entradas com o mesmo `group`
  // aparecem encapsuladas juntas (evolução dentro da empresa).
  experiences: [
    {
      company: "Nevus Digital",
      role: { en: "Tech Lead", pt: "Tech Lead", ru: "Tech Lead" },
      period: {
        en: "jul 2026 — present",
        pt: "jul 2026 — presente",
        ru: "июл 2026 — настоящее время",
      },
      current: true,
      description: {
        en: "I look after the technical side of every project at the company. I pick the tools, design the architecture, organize how we ship, and keep writing code. I'm not tied to a single product: I step in wherever it's needed, from choosing the stack to deploying.",
        pt: "Cuido da parte técnica de todos os projetos da empresa. Escolho as ferramentas, desenho a arquitetura, organizo o processo de entrega e continuo programando. Não fico preso a um produto só: entro onde precisa, da decisão de stack ao deploy.",
        ru: "Отвечаю за техническую часть всех проектов компании. Выбираю инструменты, проектирую архитектуру, выстраиваю процесс поставки и продолжаю писать код. Не привязан к одному продукту: подключаюсь там, где нужно, от выбора стека до деплоя.",
      },
      tags: [
        { en: "Architecture", pt: "Arquitetura", ru: "Архитектура" },
        { en: "Processes", pt: "Processos", ru: "Процессы" },
        "Node.js",
        "React",
        "Next.js",
      ],
    },
    {
      company: "Plusoft",
      role: {
        en: "Software Engineer",
        pt: "Engenheiro de Software",
        ru: "Инженер-программист",
      },
      period: {
        en: "apr 2026 — jun 2026",
        pt: "abr 2026 — jun 2026",
        ru: "апр 2026 — июн 2026",
      },
      description: {
        en: "I joined the INPASS team to look after Omni CRM, a legacy AngularJS platform that needed stability. I dug into incidents, fixed critical bugs in production and made the system more predictable. I also worked on the product's AI features and on the database side.",
        pt: "Entrei no time do INPASS para cuidar do CRM Omni, uma plataforma legada em AngularJS que precisava de estabilidade. Investiguei incidentes, corrigi bugs críticos em produção e deixei o sistema mais previsível. Também mexi nas funcionalidades de IA do produto e no banco de dados.",
        ru: "Пришёл в команду INPASS, чтобы заняться CRM Omni, legacy-платформой на AngularJS, которой не хватало стабильности. Разбирал инциденты, исправлял критические баги в продакшене и сделал систему более предсказуемой. Также работал над ИИ-функциями продукта и базой данных.",
      },
      tags: [
        "AngularJS",
        { en: "AI", pt: "IA", ru: "ИИ" },
        "Debugging",
        { en: "Databases", pt: "Bancos de dados", ru: "Базы данных" },
      ],
    },
    {
      company: "Instituto Joga Junto",
      role: {
        en: "Software Engineer",
        pt: "Engenheiro de Software",
        ru: "Инженер-программист",
      },
      period: {
        en: "sep 2024 — feb 2026",
        pt: "set 2024 — fev 2026",
        ru: "сен 2024 — фев 2026",
      },
      group: "ijj",
      description: {
        en: "I built and led the platform that centralizes the NGO's management: enrollments, projects, finances, volunteers and certificate issuing. Set up real-time dashboards with React, Next.js and Recharts so the team could see their day-to-day numbers. I owned the front-end architecture, performance and user experience, from gathering requirements to going live. I also set up the NGO's Shopify store with integrated payments.",
        pt: "Desenvolvi e liderei a plataforma que centraliza a gestão da ONG: matrículas, projetos, finanças, voluntários e emissão de certificados. Montei dashboards em tempo real com React, Next.js e Recharts para a equipe enxergar os números do dia a dia. Fui responsável pela arquitetura do front, performance e experiência de uso, do levantamento de requisitos até a publicação. Também estruturei a loja da ONG na Shopify, com pagamentos integrados.",
        ru: "Разработал и возглавил платформу, которая централизует управление НКО: зачисления, проекты, финансы, волонтёры и выдача сертификатов. Собрал дашборды в реальном времени на React, Next.js и Recharts, чтобы команда видела свои ежедневные показатели. Отвечал за архитектуру фронтенда, производительность и пользовательский опыт, от сбора требований до запуска. Также настроил магазин НКО на Shopify с интегрированными платежами.",
      },
      tags: ["Next.js", "React", "Recharts", "Prisma", "Shopify"],
    },
    {
      company: "Instituto Joga Junto",
      role: {
        en: "Web Development Instructor",
        pt: "Instrutor de Desenvolvimento Web",
        ru: "Преподаватель веб-разработки",
      },
      period: {
        en: "feb 2024 — feb 2026",
        pt: "fev 2024 — fev 2026",
        ru: "фев 2024 — фев 2026",
      },
      group: "ijj",
      progression: {
        en: "front-end → QA → full stack",
        pt: "front-end → QA → full stack",
        ru: "фронтенд → QA → full stack",
      },
      description: {
        en: "I taught hands-on web development and software quality classes to the institute's students. We went through the whole cycle: requirements, Figma prototype, front end, back end and delivery. I built real applications with the classes to teach coding and QA in practice. The track started with front end and grew into QA and full stack.",
        pt: "Dei aulas práticas de desenvolvimento web e qualidade de software para os alunos do instituto. A gente percorria o ciclo inteiro: requisitos, protótipo no Figma, front, back e entrega. Construí aplicações reais junto com as turmas para ensinar programação e QA na prática. A trilha começou em front-end e cresceu para QA e full stack.",
        ru: "Вёл практические занятия по веб-разработке и качеству ПО для студентов института. Мы проходили полный цикл: требования, прототип в Figma, фронтенд, бэкенд и сдача проекта. Вместе с группами создавал реальные приложения, чтобы учить программированию и QA на практике. Курс начинался с фронтенда и вырос до QA и full stack.",
      },
      tags: [
        { en: "Teaching", pt: "Ensino", ru: "Преподавание" },
        "QA",
        "Figma",
        "JavaScript",
      ],
    },
    {
      company: "YAITEC Solutions",
      role: {
        en: "Software Engineer · AI",
        pt: "Engenheiro de Software · IA",
        ru: "Инженер-программист · ИИ",
      },
      period: {
        en: "jan 2025 — apr 2025",
        pt: "jan 2025 — abr 2025",
        ru: "янв 2025 — апр 2025",
      },
      description: {
        en: "I was responsible for the product's entire front end, including interface design and component standardization (Flask + Jinja2, Next.js, shadcn/ui, Tailwind CSS). I defined the company's visual identity and component system, and integrated AI agents and automations using LangChain, LlamaIndex, Claude and n8n.",
        pt: "Fui responsável por todo o front-end do produto, incluindo o design da interface e a padronização dos componentes (Flask + Jinja2, Next.js, shadcn/ui, Tailwind CSS). Defini a identidade visual da empresa e o sistema de componentes. Integrei agentes de IA e automações usando LangChain, LlamaIndex, Claude e n8n.",
        ru: "Отвечал за весь фронтенд продукта, включая дизайн интерфейса и стандартизацию компонентов (Flask + Jinja2, Next.js, shadcn/ui, Tailwind CSS). Определил визуальную идентичность компании и систему компонентов. Интегрировал ИИ-агентов и автоматизации с помощью LangChain, LlamaIndex, Claude и n8n.",
      },
      tags: ["Next.js", "LangChain", "LlamaIndex", "Claude", "n8n"],
    },
    {
      company: "Omi Soluções em Tecnologia",
      role: {
        en: "Software Engineer",
        pt: "Engenheiro de Software",
        ru: "Инженер-программист",
      },
      period: {
        en: "jan 2024 — sep 2024",
        pt: "jan 2024 — set 2024",
        ru: "янв 2024 — сен 2024",
      },
      description: {
        en: "I built Civil Empreendimentos' real-estate agent platform from scratch: a modular dashboard with data visualization, sales indicators and configurable screens (React, Next.js, shadcn/ui, Recharts), plus a PWA with rankings, levels and points to engage the sales team. I was involved from the concept stage, defining navigation flows, information hierarchy and reusable components. The launch made the local press.",
        pt: "Construí do zero a plataforma de corretores da Civil Empreendimentos: um dashboard modular com visualização de dados, indicadores de vendas e telas configuráveis (React, Next.js, shadcn/ui, Recharts), mais um PWA com ranking, níveis e pontos para engajar a equipe de vendas. Participei desde a concepção, definindo fluxos de navegação, hierarquia de informação e componentes reutilizáveis. O lançamento saiu na imprensa local.",
        ru: "С нуля построил платформу для риелторов Civil Empreendimentos: модульный дашборд с визуализацией данных, показателями продаж и настраиваемыми экранами (React, Next.js, shadcn/ui, Recharts), плюс PWA с рейтингом, уровнями и баллами для вовлечения отдела продаж. Участвовал с самого замысла, определяя навигацию, иерархию информации и переиспользуемые компоненты. О запуске написала местная пресса.",
      },
      tags: ["React", "Next.js", "shadcn/ui", "Recharts", "PWA"],
      link: {
        label: {
          en: "read the story on Alô Alô Bahia",
          pt: "ler a matéria no Alô Alô Bahia",
          ru: "читать статью в Alô Alô Bahia",
        },
        href: "https://aloalobahia.com/noticias/2024/11/17/civil-empreendimentos-lanca-plataforma-que-integra-recursos-e-agiliza-trabalho-de-corretores/",
      },
    },
    {
      company: "Mutant",
      role: {
        en: "N2 Support Analyst · Internal Developer",
        pt: "Analista de Suporte N2 · Desenvolvedor Interno",
        ru: "Аналитик поддержки N2 · Внутренний разработчик",
      },
      period: {
        en: "sep 2022 — nov 2023",
        pt: "set 2022 — nov 2023",
        ru: "сен 2022 — ноя 2023",
      },
      description: {
        en: "I worked in N2 support and, in the middle of that, started building internal tools to unblock the operation. I automated personalized email sending at scale, which cut manual work and mistakes in customer communication. I created an interface to manage the lead base, with advanced filters, segmentation and status tracking. That's where I learned to turn operational pain into simple solutions.",
        pt: "Trabalhava no suporte N2 e, no meio disso, comecei a construir ferramentas internas para destravar a operação. Automatizei o envio de e-mails personalizados em escala, o que cortou trabalho manual e erros na comunicação com clientes. Criei uma interface para gerenciar a base de leads, com filtros avançados, segmentação e acompanhamento de status. Foi onde aprendi a transformar dor de operação em solução simples.",
        ru: "Работал в поддержке второй линии и параллельно начал создавать внутренние инструменты, чтобы разгрузить операционную команду. Автоматизировал массовую отправку персонализированных писем, что сократило ручную работу и ошибки в общении с клиентами. Сделал интерфейс для управления базой лидов с расширенными фильтрами, сегментацией и отслеживанием статусов. Там я научился превращать операционную боль в простые решения.",
      },
      tags: [
        "React",
        "Next.js",
        { en: "Automation", pt: "Automação", ru: "Автоматизация" },
        "CRM",
      ],
    },
    {
      company: "R3 Transportes",
      role: {
        en: "Junior Front-end Developer",
        pt: "Desenvolvedor Front-end Júnior",
        ru: "Младший фронтенд-разработчик",
      },
      period: {
        en: "jul 2023 — sep 2023",
        pt: "jul 2023 — set 2023",
        ru: "июл 2023 — сен 2023",
      },
      description: {
        en: "I improved the usability, accessibility and visual clarity of the company's main application. Built screens to segment information and track status, implemented Chart.js charts to follow operations and shipments, and took part in Figma prototyping with the team.",
        pt: "Melhorei a usabilidade, a acessibilidade e a clareza visual da aplicação principal da empresa. Desenvolvi telas para segmentar informações e acompanhar status, implementei gráficos com Chart.js para acompanhar operações e embarques e participei dos protótipos no Figma junto com o time.",
        ru: "Улучшил удобство, доступность и визуальную ясность основного приложения компании. Разработал экраны для сегментации информации и отслеживания статусов, добавил графики на Chart.js для контроля операций и отгрузок и участвовал в прототипировании в Figma вместе с командой.",
      },
      tags: [
        "React",
        "Chart.js",
        "Figma",
        { en: "Accessibility", pt: "Acessibilidade", ru: "Доступность" },
      ],
    },
  ],

  projectsNote: {
    en: "Things I built on my own that are live today.",
    pt: "Coisas que criei por conta própria e estão no ar.",
    ru: "То, что я сделал сам и что работает сегодня.",
  },

  projects: [
    {
      title: "ConstruPrice",
      href: "https://lpconstructprice.vercel.app/",
      description: {
        en: "Real-time construction material quotes. Searches several suppliers at once, compares prices and lets you buy in one click.",
        pt: "Cotação de material de construção em tempo real. Busca em vários fornecedores ao mesmo tempo, compara os preços e deixa comprar com um clique.",
        ru: "Цены на стройматериалы в реальном времени. Ищет сразу у нескольких поставщиков, сравнивает цены и позволяет купить в один клик.",
      },
      tags: [
        "Next.js",
        {
          en: "Automated data collection",
          pt: "Coleta automatizada",
          ru: "Автоматический сбор данных",
        },
      ],
    },
    {
      title: "EloChaos",
      href: "https://www.elochaos.com.br/",
      description: {
        en: "SaaS for League of Legends services (boosting and coaching), with built-in Pix payments and round-the-clock support.",
        pt: "SaaS de serviços para League of Legends (boost e coaching), com pagamento por Pix integrado e atendimento 24 horas.",
        ru: "SaaS для услуг по League of Legends (буст и коучинг) со встроенной оплатой через Pix и круглосуточной поддержкой.",
      },
      tags: ["Next.js", "SaaS", { en: "Payments", pt: "Pagamentos", ru: "Платежи" }],
    },
    {
      title: "SynapseOS",
      href: "https://www.synapseos.com.br/",
      description: {
        en: "Desktop app that tunes Windows for gaming: more FPS, less latency, built-in AI, one-click presets and assisted overclocking.",
        pt: "App desktop que otimiza o Windows para jogos: mais FPS, menos latência, IA integrada, presets de um clique e overclock assistido.",
        ru: "Десктопное приложение, которое оптимизирует Windows для игр: больше FPS, меньше задержек, встроенный ИИ, пресеты в один клик и ассистируемый разгон.",
      },
      tags: ["Desktop", "Windows", { en: "AI", pt: "IA", ru: "ИИ" }],
    },
  ],

  education: [
    {
      institution: "UNINTER",
      course: {
        en: "B.Sc. in Computer Science",
        pt: "Bacharelado em Ciência da Computação",
        ru: "Бакалавриат по компьютерным наукам",
      },
      period: {
        en: "2026 — expected 2028",
        pt: "2026 — previsão 2028",
        ru: "2026 — ожидается 2028",
      },
      status: { en: "in progress", pt: "em andamento", ru: "в процессе" },
    },
    {
      institution: "Rocketseat",
      course: {
        en: "Full Stack Program",
        pt: "Formação Full Stack",
        ru: "Программа Full Stack",
      },
      period: { en: "2021 — 2023", pt: "2021 — 2023", ru: "2021 — 2023" },
    },
  ],

  languages: [
    {
      name: { en: "Portuguese", pt: "Português", ru: "Португальский" },
      level: { en: "native", pt: "nativo", ru: "родной" },
      code: "pt-BR",
    },
    {
      name: { en: "English", pt: "Inglês", ru: "Английский" },
      level: { en: "technical", pt: "técnico", ru: "технический" },
      code: "en",
    },
    {
      name: { en: "Russian", pt: "Russo", ru: "Русский" },
      level: { en: "basic", pt: "básico", ru: "базовый" },
      code: "ru",
    },
  ],

  contact: {
    heading: { en: "let's talk", pt: "vamos conversar", ru: "давайте поговорим" },
    blurb: {
      en: "If you have a role, a project or just want to talk shop, reach out. Email is the fastest, but WhatsApp and LinkedIn work too.",
      pt: "Se você tem uma vaga, um projeto ou só quer trocar uma ideia, me chama. E-mail é o jeito mais rápido, mas WhatsApp e LinkedIn também funcionam.",
      ru: "Если у вас есть вакансия, проект или просто хочется обсудить идею, напишите. Быстрее всего по e-mail, но WhatsApp и LinkedIn тоже работают.",
    },
    email: { en: "email", pt: "e-mail", ru: "e-mail" },
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    github: "GitHub",
  },

  actions: {
    showMore: { en: "see more", pt: "ver mais", ru: "показать ещё" },
    showLess: { en: "see less", pt: "ver menos", ru: "свернуть" },
    moreCount: { en: "roles", pt: "experiências", ru: "позиции" },
    backToTop: { en: "back to top", pt: "voltar ao topo", ru: "наверх" },
  },

  a11y: {
    skipToContent: {
      en: "Skip to content",
      pt: "Pular para o conteúdo",
      ru: "Перейти к содержимому",
    },
    mainNav: {
      en: "Main navigation",
      pt: "Navegação principal",
      ru: "Основная навигация",
    },
    language: { en: "Language", pt: "Idioma", ru: "Язык" },
    currentRole: { en: "current role", pt: "cargo atual", ru: "текущая позиция" },
    opensNewTab: {
      en: "(opens in a new tab)",
      pt: "(abre em nova aba)",
      ru: "(откроется в новой вкладке)",
    },
    timeline: {
      en: "Career timeline",
      pt: "Linha do tempo profissional",
      ru: "Хронология карьеры",
    },
  },
}

export const pick = (l: Localized, lang: Lang) => l[lang]

/** Resolve uma tag neutra ou traduzida para texto. */
export const tagText = (t: Tag, lang: Lang) =>
  typeof t === "string" ? t : t[lang]
