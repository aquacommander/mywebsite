import configs from "configs"
import constantImages from "./img.constant"

const HOME_DATA = {
    Title: 'Welcome to Emmanuel Ocat',
    Content: 'Where you are is a result of who you were, but where you go depends entirely on who you choose to be.'
}

const ABOUT_DATA = {
    SERVICES: [
        {
            id: 'item-0',
            content: 'Full-Stack Web Development',
            icon: 'website',
            description: 'Owned full-stack SaaS platforms with Rails backend & responsive frontends',
            year: '10'
        },
        {
            id: 'item-1',
            content: 'Backend & API Development',
            icon: 'design',
            description: 'Built high-concurrency RESTful APIs & microservices for global platforms',
            year: '5'
        },
        {
            id: 'item-2',
            content: 'AI & LLM-Powered Systems',
            icon: 'card',
            description: 'Designed LLM agentic workflows, model monitoring & evaluation for regulated domains',
            year: '4'
        },
        {
            id: 'item-3',
            content: 'Scalable & Distributed Systems',
            icon: 'bot',
            description: 'Engineered multi-region, high-availability systems with Docker/K8s/AWS/GCP',
            year: '10'
        }
    ],
    SKILLS: [
        {
            id: 'item-0',
            content: 'HTML',
            icon: 'html',
            description: 'Standard markup language for structuring and presenting web content.',
            year: '5+',
            type: 'Frontend'
        },
        {
            id: 'item-1',
            content: 'CSS',
            icon: 'css',
            description: 'Stylesheet language for designing and laying out web pages responsively.',
            year: '5+',
            type: 'Frontend'
        },
        {
            id: 'item-2',
            content: 'JavaScript',
            icon: 'js',
            description: 'Core programming language for adding interactivity and logic to web applications.',
            year: '5+',
            type: 'Frontend'
        },
        {
            id: 'item-3',
            content: 'TypeScript',
            icon: 'ts',
            description: 'Superset of JavaScript adding static typing for more reliable large-scale code.',
            year: '3+',
            type: 'Frontend'
        },
        {
            id: 'item-4',
            content: 'React',
            icon: 'react',
            description: 'JavaScript library for building dynamic, component-based user interfaces.',
            year: '3+',
            type: 'Frontend'
        },
        {
            id: 'item-5',
            content: 'Ruby (or Ruby on Rails)',
            icon: 'ruby',
            description: 'Dynamic language and framework used for scalable backend and full-stack SaaS platforms.',
            year: '5+',
            type: 'Backend / Full-Stack'
        },
        {
            id: 'item-6',
            content: 'Python',
            icon: 'python',
            description: 'Versatile language for backend services, scripting, data processing, and AI/LLM development.',
            year: '5+',
            type: 'Backend / AI'
        },
        {
            id: 'item-7',
            content: 'Scala',
            icon: 'scala',
            description: 'Functional and object-oriented language for high-performance, concurrent backend systems.',
            year: '2+',
            type: 'Backend'
        },
        {
            id: 'item-8',
            content: 'PHP',
            icon: 'php',
            description: 'Server-side scripting language used in large-scale microservices environments.',
            year: '2+',
            type: 'Backend'
        }
    ],
    AI: [
        {
            id: 'item-0',
            content: 'LLM & Agentic Workflows',
            icon: 'llm',
            description: 'Designed and built production LLM-powered agentic systems for automated submission intake, risk triage, quote generation, and underwriting decisions.',
            year: '~4',
            type: 'AI'
        },
        {
            id: 'item-1',
            content: 'Model Evaluation & Monitoring',
            icon: 'llm',
            description: 'Led creation of comprehensive benchmarking, evaluation, drift detection, latency, and performance regression tracking systems for production ML/LLM models.',
            year: '~4',
            type: 'AI'
        },
        {
            id: 'item-2',
            content: 'LangChain & CrewAI',
            icon: 'langchain',
            description: 'Developed modular architectures and guardrails using LangChain & CrewAI for safe, interpretable, explainable autonomous agent behavior in regulated domains.',
            year: '~4',
            type: 'AI'
        },
        {
            id: 'item-3',
            content: 'PyTorch & LLM Integration',
            icon: 'pytorch',
            description: 'Implemented and optimized LLM integrations, rapid experimentation, and reuse across insurance lines, carriers, and real-world use cases in production environments.',
            year: '~4',
            type: 'AI'
        },
    ],
    EDITORS: [
        {
            id: 'item-0',
            content: 'VS Code',
            icon: 'vscode',
            description: 'It is designed to provide a lightweight yet powerful environment for editing, debugging, and building modern web and cloud applications',
            type: 'Editor'
        },
        {
            id: 'item-1',
            content: 'Cursor',
            icon: 'cursor',
            description: 'AI-powered code editor built on VS Code for enhanced development with intelligent completions and assistant features.',
            type: 'Editor'
        },
        {
            id: 'item-2',
            content: 'CodePen',
            icon: 'code_pen',
            description: 'It provides a platform for developers to write, test, and share HTML, CSS, and JavaScript code snippets, projects, and web applications.',
            type: 'Editor'
        },
    ],
    UTILS: [
        {
            id: 'item-0',
            content: 'Git',
            icon: 'git',
            description: 'Distributed version control system for tracking changes in source code during development and collaboration.',
            year: '~10+',
            type: 'Util'
        },
        {
            id: 'item-1',
            content: 'Docker',
            icon: 'docker',
            description: 'Platform for developing, shipping, and running applications in containers for consistent environments.',
            year: '~6+',
            type: 'Util'
        },
        {
            id: 'item-2',
            content: 'Kubernetes',
            icon: 'kubernetes',
            description: 'Open-source system for automating deployment, scaling, and management of containerized applications.',
            year: '~6+',
            type: 'Util'
        },
        {
            id: 'item-3',
            content: 'NPM',
            icon: 'npm',
            description: 'npm (Node Package Manager) is a package manager for JavaScript programming language. ',
            type: 'Util'
        },
        {
            id: 'item-4',
            content: 'Yarn',
            icon: 'yarn',
            description: 'Yarn is a package manager for JavaScript, just like npm.',
            type: 'Util'
        },
    ],
    DATABASE: [
        {
            id: 'item-0',
            content: 'MySQL',
            icon: 'mysql',
            description: 'MySQL is an open-source relational database management system.',
            type: 'database',
            year: '4'
        },
        {
            id: 'item-1',
            content: 'PostgreSQL',
            icon: 'postgresql',
            description: 'PostgreSQL is an open-source relational database management system known for its robustness, reliability, and ability to handle complex workloads',
            type: 'database',
            year: '4'
        },
        {
            id: 'item-2',
            content: 'MongoDB',
            icon: 'mongodb',
            description: 'MongoDB is a cross-platform document-oriented database program.',
            type: 'database',
            year: '4'
        },
        {
            id: 'item-3',
            content: 'Firebase',
            icon: 'firebase',
            description: 'Firebase is a mobile and web application development platform developed by Google.',
            type: 'database',
            year: '4'
        },
    ],
    HOSTING: [
        {
            id: 'item-0',
            content: 'Heroku',
            icon: 'heroku',
            description: 'Heroku is a cloud-based platform as a service (PaaS) that enables developers to deploy, manage, and scale applications.',
            type: 'Cloud / Hosting',
        },
        {
            id: 'item-1',
            content: 'Vercel',
            icon: 'vercel',
            description: 'Vercel is a cloud platform that enables developers to create, deploy, and scale web applications.',
            type: 'Cloud / Hosting',
        },
        {
            id: 'item-2',
            content: 'AWS',
            icon: 'aws',
            description: 'Comprehensive cloud platform for computing, storage, deployment, and scaling of production services.',
            year: '~6+',
            type: 'Cloud / Hosting',
        },
        {
            id: 'item-3',
            content: 'GCP',
            icon: 'gcp',
            description: 'Google Cloud Platform for building, deploying, and managing scalable applications and AI workloads.',
            year: '~6+',
            type: 'Cloud / Hosting',
        },
        {
            id: 'item-4',
            content: 'DigitalOcean',
            icon: 'digital_ocean',
            description: 'DigitalOcean is a cloud computing platform that offers infrastructure hosting services for developers.',
            type: 'Cloud / Hosting',
        },
    ]
}

const MENU_DATA = [
    {
        link: configs.path.HOME_PREFIX,
        content: 'Home'
    },
    {
        link: configs.path.OVERVIEW_PREFIX,
        content: 'Overview'
    },
    {
        link: configs.path.SKILLS_PREFIX,
        content: 'Skills'
    },
    {
        link: configs.path.WORKS_PREFIX,
        content: 'Projects'
    },
    {
        link: configs.path.CONTACT_PREFIX,
        content: 'Contact'
    },
]

const OVERVIEW_DATA = {
    PIE_DATA: [
        { name: 'AI', value: 500 },
        { name: 'Frontend', value: 800 },
        { name: 'Backend', value: 650 },
        { name: 'Bot', value: 300 },
        { name: 'Dapp', value: 400 },
        { name: 'Database', value: 400 },
        { name: 'Mobile', value: 320 },
        { name: 'Bug Fix', value: 400 },
        { name: 'API', value: 530 },
    ],
    LINE_DATA: [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ],
    BAR_DATA: [
        { name: 'AI', value: 500 },
        { name: 'Frontend', value: 800 },
        { name: 'Backend', value: 650 },
        { name: 'Bot', value: 300 },
        { name: 'Dapp', value: 400 },
        { name: 'Database', value: 400 },
        { name: 'Mobile', value: 320 },
        { name: 'Bug Fix', value: 400 },
        { name: 'API', value: 530 },
    ],
    COLORS: ['#f44336', '#8a4af3', '#2196f3', '#009688', '#FA6800', '#795548', '#ffeb3b', '#8bc34a', '#cddc39', '#f44336'],
    PERSONAL_DATA: {
        NAME: 'Emmanuel Ocat',
        USERNAME: 'Ocat',
        PRONOUNCE: 'He/Him',
        INFORMATION: [
            {
                icon: 'location',
                value: 'Makati, Philippines',
                link: '#'
            },
            {
                icon: 'status',
                value: 'Available For Hire',
                link: '#'
            }
        ]
    },
    CAREER_STAIRCASE_DATA: [
        {
            id: 'education',
            period: '04/2010 – 03/2014',
            label: 'Bachelor of Information Technology and Business',
            company: 'Cyber University',
            color: '#6B7280',
            location: 'Fukuoka, Japan',
            locationFlag: '🇯🇵',
            icon: '📚',
            focus: 'Foundation',
            impacts: [
                'Specialized in software engineering and algorithms',
                'Thesis on distributed systems',
            ],
            techStack: ['C', 'Java', 'Python'],
        },
        {
            id: 'yokogawa',
            period: '06/2014 – 07/2015 (~1 year)',
            label: 'Sales Engineer',
            company: 'Yokogawa Philippines, Inc.',
            color: '#F59E0B',
            location: 'Manila, Philippines',
            locationFlag: '🇵🇭',
            icon: '🛰️',
            focus: 'Technical sales engineering and industrial automation',
            impacts: [
                'Led field wireless, software, and controller solution presentations',
                'Delivered installations, commissioning, and hands-on client technical support',
            ],
            techStack: ['Industrial Automation', 'Field Wireless', 'Controllers'],
        },
        {
            id: 'hacobu',
            period: '09/2015 – 11/2019 (~4 years)',
            label: 'Full Stack Developer',
            company: '株式会社Hacobu',
            color: '#10B981',
            location: 'Tokyo, Japan – Remote',
            locationFlag: '🇯🇵',
            icon: '💻',
            focus: 'Full-stack SaaS ownership and engineering foundations',
            impacts: [
                'Owned logistics SaaS features end-to-end from concept to production',
                'Improved performance through schema redesign, indexing, and large-scale refactoring',
            ],
            techStack: ['Ruby on Rails', 'JavaScript', 'HTML/CSS', 'REST API'],
        },
        {
            id: 'delivery-hero',
            period: '11/2019 – 04/2022 (~2.5 years)',
            label: 'Senior Backend Engineer',
            company: 'Delivery Hero',
            color: '#3B82F6',
            location: 'Berlin, Germany – Remote',
            locationFlag: '🇩🇪',
            icon: '⚙️',
            focus: 'High-concurrency global backend platforms',
            impacts: [
                'Built and optimized backend services and APIs used across 40+ countries',
                'Increased stability and throughput via tuning, refactoring, and observability',
            ],
            techStack: ['Python', 'Scala', 'PHP', 'Docker', 'Kubernetes', 'AWS', 'GCP'],
        },
        {
            id: 'federato',
            period: '04/2022 – 01/2026 (~4 years)',
            label: 'Senior AI Engineer',
            company: 'Federato',
            color: '#8B5CF6',
            location: 'San Francisco, US – Remote',
            locationFlag: '🇺🇸',
            icon: '🤖',
            focus: 'LLM-powered underwriting and agentic automation',
            impacts: [
                'Designed agentic workflows for intake, triage, quote generation, and decision support',
                'Led model evaluation, benchmarking, drift, and regression monitoring systems',
            ],
            techStack: ['LLM', 'PyTorch', 'LangChain', 'CrewAI', 'MLOps'],
        },
    ],
    CAREER_TIMELINE_DATA: [
        {
            id: 'education',
            type: 'education' as const,
            label: 'B.Eng. Computer Science – The University of Tokyo',
            startYear: 2010,
            startMonth: 1,
            endYear: 2014,
            endMonth: 6,
            color: '#6b7280',
            location: 'Tokyo, Japan',
            locationFlag: '🇯🇵',
            achievements: [
                'Specialized in software engineering and algorithms',
                'Thesis on distributed systems',
            ],
            techStack: ['C', 'Java', 'Python'],
        },
        {
            id: 'yokogawa',
            type: 'role' as const,
            label: 'Sales Engineer – Yokogawa',
            company: 'Yokogawa Philippines, Inc.',
            startYear: 2014,
            startMonth: 6,
            endYear: 2015,
            endMonth: 7,
            color: '#F59E0B',
            location: 'Manila, Philippines',
            locationFlag: '🇵🇭',
            achievements: [
                'Handled technical proposals and client-facing product presentations',
                'Executed installations and commissioning for field wireless solutions',
                'Provided post-sales technical support for software and controllers',
            ],
            techStack: ['Industrial Automation', 'Field Wireless', 'Controllers'],
        },
        {
            id: 'hacobu',
            type: 'role' as const,
            label: 'Full Stack Developer – Hacobu',
            company: '株式会社Hacobu',
            startYear: 2015,
            startMonth: 9,
            endYear: 2019,
            endMonth: 11,
            color: '#10B981',
            location: 'Tokyo, Japan – Remote',
            locationFlag: '🇯🇵',
            achievements: [
                'Owned full-stack logistics SaaS features from planning to production',
                'Improved database and query performance through schema and indexing redesign',
                'Established development standards and mentored growing engineering teams',
            ],
            techStack: ['Ruby on Rails', 'JavaScript', 'HTML/CSS', 'REST API'],
        },
        {
            id: 'delivery-hero',
            type: 'role' as const,
            label: 'Senior Backend Engineer – Delivery Hero',
            company: 'Delivery Hero',
            startYear: 2019,
            startMonth: 11,
            endYear: 2022,
            endMonth: 4,
            color: '#3B82F6',
            location: 'Berlin, Germany – Remote',
            locationFlag: '🇩🇪',
            achievements: [
                'Designed high-concurrency services for ads, placements, and analytics products',
                'Improved stability, throughput, and cost-efficiency via optimization and refactoring',
                'Operated services with Docker and Kubernetes across AWS and GCP',
            ],
            techStack: ['Python', 'Scala', 'PHP', 'Docker', 'Kubernetes', 'AWS', 'GCP'],
        },
        {
            id: 'federato',
            type: 'role' as const,
            label: 'Senior AI Engineer – Federato',
            company: 'Federato',
            startYear: 2022,
            startMonth: 4,
            endYear: 2026,
            endMonth: 1,
            color: '#8B5CF6',
            location: 'San Francisco, United States – Remote',
            locationFlag: '🇺🇸',
            achievements: [
                'Built LLM-powered agentic workflows for underwriting intake, triage, and quote generation',
                'Created production evaluation and monitoring for drift, latency, and regressions',
                'Defined guardrails for safe, explainable autonomous decision-support behavior',
            ],
            techStack: ['LLM', 'PyTorch', 'LangChain', 'CrewAI', 'MLOps'],
        },
    ],
    AGGREGATE_DATA: [
        {
            icon: 'calendar',
            value: 'Experience',
            count: '14+ years'
        },
        {
            icon: 'website',
            value: 'Projects',
            count: '75'
        },
        {
            icon: 'github',
            value: 'Repositories',
            count: '75'
        },
        {
            icon: 'good',
            value: 'Followers',
            count: '345'
        }
    ]
}

const FRONTEND_DATA = [
    {
        name: 'CerasHealth',
        description: 'Ceras Health is a healthcare company that provides innovative solutions for managing chronic conditions.',
        tags: ['React', 'Healthcare', 'SaaS', 'TypeScript'],
        image: constantImages.CERASHEALTH,
        link: 'https://cerashealth.com'
    },
    {
        name: 'PicKade',
        description: 'Pickade is your destination for a modern Minecraft minigames experience.',
        tags: ['React', 'Gaming', 'Minecraft', 'Web3'],
        image: constantImages.PICKADE,
        link: 'https://pickade.net/'
    },
    {
        name: 'CBet',
        description: 'CBET Casino is an online gambling platform that offers a wide range of casino games, including slots, table games, live dealer games, and more.',
        tags: ['React', 'Casino', 'Gaming', 'TypeScript'],
        image: constantImages.CBET,
        link: 'https://cbet.world'
    },
    {
        name: 'Raffle Famous',
        description: 'A Raffle Famous is an online platform where individuals can purchase tickets for a chance to win prizes.',
        tags: ['React', 'Web3', 'NFT', 'Raffle'],
        image: constantImages.RAFFLE,
        link: 'https://rafffle.famousfoxes.com/'
    },
    {
        name: 'SportsBlog',
        description: 'Sportsblog is a platform where sports fans can write and share their thoughts, opinions, and analysis about various sports topics.',
        tags: ['React', 'Blog', 'Sports', 'CMS'],
        image: constantImages.SPORTSBLOG,
        link: 'https://sportsblog.com/'
    },
    {
        name: 'MapBox',
        description: 'AI-powered location technology for automakers, mobile app developers, and logistics services.',
        tags: ['Maps', 'AI', 'Geospatial', 'API'],
        image: constantImages.MAPBOX,
        link: 'https://www.mapbox.com/'
    },
    {
        name: 'BloxMoon',
        description: 'Bloxmoon is an online gambling platform that offers a wide range of casino games, including slots, table games, live dealer games, and more.',
        tags: ['React', 'Casino', 'Gaming', 'Web3'],
        image: constantImages.BLOXMOON,
        link: 'https://bloxmoon.com/'
    },
    {
        name: 'ARMORY',
        description: 'Armory is web3 community to get items!',
        tags: ['React', 'Web3', 'Gaming', 'Community'],
        image: constantImages.ARMORY,
        link: "https://cyberstadium.gg"
    },
    {
        name: 'Amino Rewards',
        description: 'Amino Rewards is a feature within the Amino app, a social networking healthy app for communities.',
        tags: ['React', 'Mobile', 'Social', 'Rewards'],
        image: constantImages.AMINOREWARDS,
        link: "https://aminorewards.com/"
    },
]

const AI_DATA = [
    {
        name: 'Zebracat AI',
        description: 'AI-powered platform that converts text, audio, and blog content into professional videos optimized for social media. Smart web app with Next.js, TypeScript, Tailwind CSS, AI text-to-video conversion, computer vision-based scene and avatar generation using TensorFlow, backend video rendering, and Stripe for subscription management.',
        tags: ['OpenAI', 'TensorFlow', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Stripe'],
        image: constantImages.ZEBRACAT,
        link: 'https://www.zebracat.ai/'
    },
    {
        name: 'Job Wizard',
        description: 'AI-powered Chrome Extension that helps job seekers save time by accurately autofilling job applications with personalized data. Chrome extension using React, TypeScript, and Styled-Components to autofill applications with AI-generated data and Chrome Extension APIs for form detection and secure data injection.',
        tags: ['OpenAI', 'React', 'TypeScript', 'Styled-Components', 'Chrome Extension API'],
        image: constantImages.JOBWIZARD,
        link: 'https://chromewebstore.google.com/detail/jobwizard-ai-autofill-job/kbhgdbfkbgkokgkkdhnnlmkhnokjmfib'
    },
    {
        name: 'Ollama Chatbot',
        description: 'Samples showing how to build applications powered by Generative AI and LLMs. Demonstrates chatbot, computer vision, and vector DB integration for GenAI workflows.',
        tags: ['Python', 'Agent', 'LLM', 'Vector DB', 'Chatbot', 'Computer Vision', 'GenAI'],
        image: constantImages.OLLAMA,
        link: 'https://github.com/aquacommander/Ollama-Chatbot'
    },
    {
        name: 'MultiAgent Medical Assistant',
        description: 'GenAI powered multi-agentic medical diagnostics and healthcare research assistance chatbot.',
        tags: ['Python', 'Agent', 'RAG', 'medical-imaging', 'Chatbot', 'LLM', 'GenAI', 'LangChain'],
        image: constantImages.MULTIAGENT,
        link: 'https://github.com/aquacommander/MultiAgent-Medical-Assistant'
    },
    {
        name: 'Parasol Finance ($PSOL)',
        description: 'First community-governed IDO (Initial DEX Offering) platform built on Solana blockchain. Secure and intuitive UI for Solana-based IDO platform using Next.js, TypeScript, Tailwind CSS, Firebase for auth and real-time updates, and Solana smart contracts with Phantom and Solflare wallets.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Solana'],
        image: constantImages.PAROSOL,
        link: 'https://parasol.build/'
    },
    {
        name: 'Menaji',
        description: 'U.S. based e-commerce platform offering high-definition cosmetics and advanced skincare products for men. Responsive e-commerce site using React, TypeScript, Styled-Components, Node.js, Express, MongoDB, Shopify for product management and secure checkout.',
        tags: ['React', 'TypeScript', 'Styled-Components', 'Node.js', 'Express', 'MongoDB', 'Shopify'],
        image: constantImages.MENAJI,
        link: 'https://www.menaji.com/'
    }
]

const BACKEND_DATA = [
    {
        name: 'Pixora',
        description: 'Comprehensive image sharing platform that combines the power of modern web technologies. Upload images, build your audience, and connect with other creators.',
        tags: ['Next.js', 'Node.js', 'Bcrypt', 'Multer', 'MongoDB'],
        image: constantImages.PIXORA,
        link: 'https://github.com/aquacommander/Pixora'
    },
    {
        name: 'Appointy',
        description: 'Full-stack doctor appointment web app built with the MERN stack, featuring patient, doctor, and admin logins.',
        tags: ['Next.js', 'Node.js', 'doctor-booking-system', 'MongoDB'],
        image: constantImages.APPOINTY,
        link: 'https://github.com/aquacommander/Appointy'
    },
    {
        name: 'Australian Banking DB',
        description: 'Ongoing collection of Open Banking Data APIs for Australian deposit taking institutions.',
        tags: ['API', 'Fintech', 'banking', 'banking-apis', 'consumer-data'],
        image: constantImages.BANKING,
        link: 'https://github.com/aquacommander/Australian-Banking-DB'
    },
    {
        name: 'CerasHealth',
        description: 'Ceras Health is a healthcare company that provides innovative solutions for managing chronic conditions.',
        tags: ['Rails', 'API', 'Healthcare', 'PostgreSQL'],
        image: constantImages.CERASHEALTH,
        link: 'https://cerashealth.com'
    },
    {
        name: 'Raffle Famous',
        description: 'A Raffle Famous is an online platform where individuals can purchase tickets for a chance to win prizes.',
        tags: ['Ruby', 'Web3', 'API', 'Blockchain'],
        image: constantImages.RAFFLE,
        link: 'https://rafffle.famousfoxes.com/'
    },
    {
        name: 'SportsBlog',
        description: 'Sportsblog is a platform where sports fans can write and share their thoughts, opinions, and analysis about various sports topics.',
        tags: ['Rails', 'API', 'CMS', 'PostgreSQL'],
        image: constantImages.SPORTSBLOG,
        link: 'https://sportsblog.com/'
    },
    {
        name: 'BloxMoon',
        description: 'Bloxmoon is an online gambling platform that offers a wide range of casino games, including slots, table games, live dealer games, and more.',
        tags: ['Ruby', 'API', 'Gaming', 'Microservices'],
        image: constantImages.BLOXMOON,
        link: 'https://bloxmoon.com/'
    },
    {
        name: 'ARMORY',
        description: 'Armory is web3 community to get items!',
        tags: ['API', 'Web3', 'Gaming', 'Backend'],
        image: constantImages.ARMORY,
        link: "https://cyberstadium.gg"
    }
]


const constantData = {
    HOME_DATA,
    ABOUT_DATA,
    MENU_DATA,
    OVERVIEW_DATA,
    FRONTEND_DATA,
    BACKEND_DATA,
    AI_DATA
}

export default constantData;