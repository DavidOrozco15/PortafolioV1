const translations = {
  es: {
    // Navbar
    nav: {
      about: 'Sobre mi',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      contact: 'Contacto',
    },

    // Hero
    hero: {
      projectsBtn: 'Proyectos',
      tagline: 'Mi meta es desarrollar código <em>limpio, legible</em> y <em>fácil de mantener</em> logrando que el proceso de desarrollo sea gratificante.',
      scroll: 'scroll',
    },

    // About
    about: {
      sectionLabel: 'Quien soy?',
      title: 'Sobre mi',
      intro: '¡Hola! Soy <strong>David Orozco</strong>, Soy <em>Desarrollador Junior Full Stack.</em>.',
      bio: `Me especializo en crear soluciones digitales integrales que fusionan un diseño elegante con arquitecturas escalables. Mi enfoque combina sólidos conocimientos en hardware con el desarrollo de aplicaciones modernas, utilizando <strong><em>JavaScript, React y Tailwind CSS</em></strong> para construir interfaces dinámicas y de alto rendimiento.

En el backend, gestiono la lógica de negocio y bases de datos con <strong><em>Python, SQL y Java</em></strong>. Además, potencio la eficiencia operativa mediante automatizaciones avanzadas con n8n y bots de soporte.

Mi trabajo se basa en la resolución de problemas, el liderazgo bajo metodología Scrum y la creación de tecnología con un alto nivel de innovación.`,
      functions: 'Funciones',
      achievements: 'Logros',
      projects: 'Proyectos',
      experience: 'Experiencia:',
      experienceYears: '1+ año',
      trajectory: 'Trayectoria',
      stats: [
        { value: '24/7', label: 'Innovación\ncontinua' },
        { value: '10+', label: 'Proyectos\ncompletados' },
        { value: '4+', label: 'Áreas de\ntecnología' },
        { value: '∞', label: 'Líneas de\ncódigo' },
      ],
      skillGroups: [
        { title: 'Frontend', items: 'React / TypeScript / JavaScript / Tailwind CSS / Next.js' },
        { title: 'UI/UX Design', items: 'Figma / Framer Motion / CSS3 / SCSS / Responsive Design' },
        { title: 'Backend & Automation', items: 'Python / Node.js / n8n / SQL / MySQL / Java' },
        { title: 'Workflow & Tools', items: 'Git / GitHub / Scrum / Telegram Bot API / WhatsApp Business API' },
      ],
      workExperience: [
        {
          period: '2025 – Presente', duration: '1 año',
          company: 'CampusLands', role: 'Full-stack Developer', tech: 'Python, JavaScript, Java, MYSQL, Scrum, Springboot, React, n8n, Git, Github, Html y Css',
          active: true,
          functions: [
            'Desarrollo y estructuración de proyectos escalables de software.',
            'Integración con APIs REST y servicios backend',
            'Aplicación de Inteligencia Artificial para la optimización del desarrollo y código.',
            'Participación en code reviews y metodologías ágiles (Scrum)',
            'Gestión de bases de datos relacionales mediante SQL y MySQL para el soporte de lógica de negocio compleja.',
          ],
          achievements: [
            'Ejecución exitosa de proyectos bajo el marco de trabajo Scrum, garantizando la entrega continua de valor y la adaptabilidad del equipo.',
            'Optimización del tiempo de desarrollo en un 30% mediante la implementación de prompts avanzados y herramientas de IA aplicadas al código.',
            'Liderazgo en procesos de revisión de código y control de versiones utilizando Git y GitHub para asegurar la integridad de los repositorios colaborativos.',
          ],
          projects: [
            { name: 'Ecosistema de Automatización IT', desc: 'Diseño de flujos de trabajo que conectan múltiples servicios (APIs) para la gestión automática de incidentes y soporte técnico.', tags: ['Json', 'n8n', 'SQL'] },
            { name: 'Landing Pages de Alto Impacto', desc: 'Creación de sitios web optimizados desde el prototipado en Figma hasta el despliegue final, asegurando adaptabilidad total en dispositivos móviles.', tags: ['React', 'Tailwind CSS', 'Figma'] },
          ],
        },
        {
          period: '2024 – Presente', duration: '2+ años',
          company: 'Freelance', role: 'Full-stack Developer', tech: 'HTML, CSS, JavaScript, React y Figma.',
          active: false,
          functions: [
            'Diseño de interfaces, prototipado de landing pages y estructuración de sitios web modernos utilizando Figma.',
            'Desarrollo de aplicaciones web en el Front-End usando HTML, CSS, JavaScript y React.',
            'Creación de flujos de automatización e integración de bases de datos mediante n8n y Python.',
            'Configuración de bots conversacionales para la optimización de procesos de atención al cliente.',
          ],
          achievements: [
            'Publicación exitosa de una extensión propia de gestión de credenciales (CredEasy) en el Marketplace.',
            'Automatización de pedidos y soporte técnico mediante la integración de la API de WhatsApp y Telegram.',
            'Entrega de Diseños de sitios web con un diseño profesional, elegante y enfocado en una excelente experiencia de usuario (UX).',
          ],
          projects: [
            { name: 'Herramientas de Automatización', desc: 'Desarrollo de HelpDeskBot para automatizar PQRS', tags: ['n8n', 'JavaScript', 'Telegram API'] },
            { name: 'Neon Bucaramanga & Web Apps', desc: 'Landing pages responsivas con efectos visuales avanzados y estructuración de portafolio web interactivo.', tags: ['React', 'JavaScript', 'Figma'] },
          ],
        },
        {
          period: '2024 – 2024', duration: '6 Meses',
          company: 'Accedo Technologies', role: 'Helpdesk IT | Hardware & Soporte | Practicante', tech: 'Hardware',
          active: false,
          functions: [
            'Diagnóstico y solución de problemas de hardware, software y conectividad.',
            'Administración de cuentas de usuario en Active Directory y sistemas similares.',
          ],
          achievements: [
            'Ejecución de mantenimiento preventivo y correctivo en computadoras y periféricos corporativos.',
            'Implementación y refuerzo de medidas de seguridad informática.',
          ],
          projects: [
            { name: 'Soporte Corporativo', desc: 'Configuración, instalación y actualización continua de sistemas operativos para múltiples usuarios.', tags: ['Windows'] },
          ],
        },
      ],
    },

    // MissionVision
    mission: {
      sectionLabel: 'Misión, Visión & Valores',
      title: 'Filosofía',
      tabs: [
        {
          id: 'mision', num: '01', title: 'Misión',
          quote: 'Tecnología con propósito.',
          content: 'Mi misión es desarrollar soluciones tecnológicas eficientes y funcionales que resuelvan problemas reales, combinando desarrollo web, automatización y soporte IT para generar valor en cada proyecto. Busco crear aplicaciones intuitivas, optimizadas y escalables, enfocadas en mejorar la experiencia del usuario y la eficiencia de los procesos.',
        },
        {
          id: 'vision', num: '02', title: 'Visión',
          quote: 'Impacto real, a escala.',
          content: 'Convertirme en un desarrollador fullstack altamente capacitado, especializado en la creación de sistemas completos y automatizados, integrando tecnologías modernas y herramientas como n8n. Aspiro a participar en proyectos innovadores que generen impacto real, optimizando procesos y aportando soluciones tecnológicas a nivel empresarial.',
          highlights: [
            'Especialización en sistemas full-stack',
            'Integración de automatización inteligente',
            'Impacto a nivel empresarial',
          ],
        },
        {
          id: 'valores', num: '03', title: 'Valores',
          quote: 'Lo que me define como profesional.',
          values: [
            { label: 'Calidad del código', desc: 'Código limpio, mantenible y bien documentado.' },
            { label: 'Aprendizaje constante', desc: 'Siempre explorando nuevas tecnologías y metodologías.' },
            { label: 'Solución de problemas', desc: 'Enfoque analítico y creativo ante cada desafío.' },
            { label: 'Experiencia de usuario', desc: 'El usuario final es siempre la prioridad.' },
            { label: 'Automatización', desc: 'Optimizar procesos para liberar tiempo humano.' },
            { label: 'Colaboración', desc: 'El mejor código se escribe en equipo.' },
          ],
        },
        {
          id: 'objetivos', num: '04', title: 'Objetivos',
          quote: 'El camino tiene dirección.',
          content: 'En los próximos años busco especializarme en arquitecturas de software modernas, dominar el ecosistema de automatización con n8n, y contribuir a proyectos de alto impacto que combinen desarrollo web con inteligencia artificial.',
          tags: [
            'Fullstack Senior',
            'Automatización con n8n',
            'Arquitectura de Software',
            'Proyectos con IA',
            'Open Source',
            'Liderazgo técnico',
          ],
        },
      ],
    },

    // Services
    services: {
      sectionLabel: 'Servicios',
      title: 'Servicios',
      items: [
        { number: '01', title: 'Frontend Development', description: 'Desarrollo interfaces web modernas, responsivas y centradas en el usuario utilizando HTML, CSS y JavaScript.', tags: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
        { number: '02', title: 'Backend Development', description: 'Desarrollo lógica del lado del servidor, manejo de datos y creación de APIs básicas para aplicaciones web.', tags: ['Node.js', 'APIs', 'JSON', 'Python'] },
        { number: '03', title: 'Desarrollo Fullstack', description: 'Construcción de aplicaciones web completas integrando frontend y backend, aplicando buenas prácticas y estructura escalable.', tags: ['Fullstack', 'CRUD', 'Web Apps'] },
        { number: '04', title: 'UI/UX Design', description: 'Diseño interfaces atractivas y prototipos en Figma, priorizando la usabilidad y la experiencia del usuario.', tags: ['Figma', 'UX', 'Prototyping'] },
        { number: '05', title: 'Automatización (n8n)', description: 'Automatización de flujos de trabajo utilizando n8n, integrando APIs, bases de datos y servicios para optimizar procesos y reducir tareas manuales.', tags: ['n8n', 'Automation', 'APIs'] },
        { number: '06', title: 'Soporte Técnico IT', description: 'Diagnóstico y solución de problemas en hardware, software y redes, garantizando el correcto funcionamiento de sistemas.', tags: ['Hardware', 'Software', 'Networking'] },
      ],
    },

    // Projects
    projects: {
      sectionLabel: 'Desarrollos',
      title: 'Proyectos',
      viewAll: 'Ir a Github y ver todos',
      items: [
        {
          title: 'LogiTrack WMS — Sistema de Gestión y Auditoría de Bodegas.',
          description: 'Sistema backend de gestión y auditoría de bodegas para una empresa con múltiples sedes distribuidas en distintas ciudades. Centraliza el control de inventario —entradas, salidas y transferencias de productos entre bodegas— con autenticación JWT basada en roles (ADMIN/EMPLEADO), registro automático de auditorías y una API REST documentada con Swagger, brindando trazabilidad completa sobre cada cambio realizado por los usuarios del sistema.',
        },
        {
          title: 'CredEasy — Credenciales de Git facilitadas.',
          description: 'Extensión publicada para Visual Studio Code diseñada para simplificar y automatizar la configuración de credenciales de Git (nombre y correo) de forma global o local directamente desde el editor. Elimina la necesidad de usar comandos de terminal repetitivos para configurar la identidad del desarrollador, reduciendo errores en los commits y agilizando el inicio de nuevos proyectos.',
        },
        {
          title: 'HelpDeskBot — Gestión Automatizada de Soporte.',
          description: 'Sistema inteligente de mesa de ayuda que integra un bot de Telegram con n8n para la gestión, registro y seguimiento de incidentes técnicos en tiempo real. Centraliza el reporte de fallas técnicas de forma intuitiva para el usuario, automatizando el almacenamiento de datos en hojas de cálculo y notificando instantáneamente al equipo de soporte.',
        },
      ],
    },

    // Certifications
    certifications: {
      sectionLabel: 'Certifications',
      title: 'Formación y\nCertificaciones',
      credentials: 'credenciales',
      verify: 'Verify',
      close: 'Cerrar',
      verifyOfficial: 'Ver credencial oficial ↗',
      items: [
        { title: 'Análisis de Datos Básico', issuer: 'TalentoTech', date: 'dic. 2024', description: 'Introducción al análisis de datos y toma de decisiones basada en información.' },
        { title: 'Introducción y Manejo de Power BI', issuer: 'MinTIC', date: 'abr. 2025', description: 'Creación de dashboards interactivos y visualización de datos.' },
        { title: 'Técnico en Sistemas', issuer: 'SENA', date: 'nov. 2019', description: 'Formación técnica en soporte, mantenimiento de equipos, redes y sistemas informáticos, con enfoque en diagnóstico y solución de problemas.' },
        { title: 'Network Security', issuer: 'Cisco · SENATIC', date: 'oct. 2024', description: 'Fundamentos de ciberseguridad, protección de redes y buenas prácticas en seguridad informática.' },
      ],
    },

    // Contact
    contact: {
      role: 'Full-stack developer',
      navigation: 'Navegación',
      contactLabel: '... /Contacto ...',
      contactNumber: 'Mi numero de Contacto',
      navLinks: [
        { label: 'Inicio', href: '#hero' },
        { label: 'Sobre mi', href: '#about' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Servicios', href: '#services' },
        { label: 'Filosofia', href: '#mission' },
      ],
      copyright: 'Todos los derechos reservados.',
      built: 'Creado con React + Vite',
    },
  },

  en: {
    // Navbar
    nav: {
      about: 'About me',
      projects: 'Projects',
      certifications: 'Certifications',
      contact: 'Contact',
    },

    // Hero
    hero: {
      projectsBtn: 'Projects',
      tagline: 'My goal is to write <em>clean, readable</em> and <em>maintainable</em> code, making the development process rewarding.',
      scroll: 'scroll',
    },

    // About
    about: {
      sectionLabel: 'Who am I?',
      title: 'About me',
      intro: 'Hi! I\'m <strong>David Orozco</strong>, I\'m a <em>Junior Full Stack Developer.</em>.',
      bio: `I specialize in creating comprehensive digital solutions that blend elegant design with scalable architectures. My approach combines solid hardware knowledge with modern application development, using <strong><em>JavaScript, React, and Tailwind CSS</em></strong> to build dynamic, high-performance interfaces.

On the backend, I manage business logic and databases with <strong><em>Python, SQL, and Java</em></strong>. I also boost operational efficiency through advanced automation with n8n and support bots.

My work is based on problem-solving, leadership under Scrum methodology, and creating technology with a high level of innovation.`,
      functions: 'Responsibilities',
      achievements: 'Achievements',
      projects: 'Projects',
      experience: 'Experience:',
      experienceYears: '1+ year',
      trajectory: 'Work Experience',
      stats: [
        { value: '24/7', label: 'Continuous\ninnovation' },
        { value: '10+', label: 'Completed\nprojects' },
        { value: '4+', label: 'Technology\nareas' },
        { value: '∞', label: 'Lines of\ncode' },
      ],
      skillGroups: [
        { title: 'Frontend', items: 'React / TypeScript / JavaScript / Tailwind CSS / Next.js' },
        { title: 'UI/UX Design', items: 'Figma / Framer Motion / CSS3 / SCSS / Responsive Design' },
        { title: 'Backend & Automation', items: 'Python / Node.js / n8n / SQL / MySQL / Java' },
        { title: 'Workflow & Tools', items: 'Git / GitHub / Scrum / Telegram Bot API / WhatsApp Business API' },
      ],
      workExperience: [
        {
          period: '2025 – Present', duration: '1 year',
          company: 'CampusLands', role: 'Full-stack Developer', tech: 'Python, JavaScript, Java, MYSQL, Scrum, Springboot, React, n8n, Git, Github, HTML & CSS',
          active: true,
          functions: [
            'Development and structuring of scalable software projects.',
            'Integration with REST APIs and backend services.',
            'Application of Artificial Intelligence for development and code optimization.',
            'Participation in code reviews and agile methodologies (Scrum).',
            'Management of relational databases using SQL and MySQL to support complex business logic.',
          ],
          achievements: [
            'Successful execution of projects under the Scrum framework, ensuring continuous value delivery and team adaptability.',
            'Optimized development time by 30% through advanced prompts and AI tools applied to code.',
            'Leadership in code review and version control processes using Git and GitHub to ensure collaborative repository integrity.',
          ],
          projects: [
            { name: 'IT Automation Ecosystem', desc: 'Design of workflows connecting multiple services (APIs) for automatic incident management and technical support.', tags: ['Json', 'n8n', 'SQL'] },
            { name: 'High-Impact Landing Pages', desc: 'Creation of optimized websites from Figma prototyping to final deployment, ensuring full mobile device adaptability.', tags: ['React', 'Tailwind CSS', 'Figma'] },
          ],
        },
        {
          period: '2024 – Present', duration: '2+ years',
          company: 'Freelance', role: 'Full-stack Developer', tech: 'HTML, CSS, JavaScript, React & Figma.',
          active: false,
          functions: [
            'Interface design, landing page prototyping, and modern website structuring using Figma.',
            'Front-End web application development using HTML, CSS, JavaScript, and React.',
            'Creation of automation workflows and database integration using n8n and Python.',
            'Configuration of conversational bots to optimize customer service processes.',
          ],
          achievements: [
            'Successful publication of a custom credential management extension (CredEasy) on the Marketplace.',
            'Automation of orders and technical support through WhatsApp and Telegram API integration.',
            'Delivery of professional, elegant website designs focused on excellent user experience (UX).',
          ],
          projects: [
            { name: 'Automation Tools', desc: 'Development of HelpDeskBot to automate support requests', tags: ['n8n', 'JavaScript', 'Telegram API'] },
            { name: 'Neon Bucaramanga & Web Apps', desc: 'Responsive landing pages with advanced visual effects and interactive web portfolio development.', tags: ['React', 'JavaScript', 'Figma'] },
          ],
        },
        {
          period: '2024 – 2024', duration: '6 Months',
          company: 'Accedo Technologies', role: 'IT Helpdesk | Hardware & Support | Intern', tech: 'Hardware',
          active: false,
          functions: [
            'Diagnosis and resolution of hardware, software, and connectivity issues.',
            'User account management in Active Directory and similar systems.',
          ],
          achievements: [
            'Execution of preventive and corrective maintenance on corporate computers and peripherals.',
            'Implementation and reinforcement of IT security measures.',
          ],
          projects: [
            { name: 'Corporate Support', desc: 'Configuration, installation, and continuous update of operating systems for multiple users.', tags: ['Windows'] },
          ],
        },
      ],
    },

    // MissionVision
    mission: {
      sectionLabel: 'Mission, Vision & Values',
      title: 'Philosophy',
      tabs: [
        {
          id: 'mision', num: '01', title: 'Mission',
          quote: 'Technology with purpose.',
          content: 'My mission is to develop efficient and functional technology solutions that solve real problems, combining web development, automation, and IT support to generate value in every project. I seek to create intuitive, optimized, and scalable applications focused on improving user experience and process efficiency.',
        },
        {
          id: 'vision', num: '02', title: 'Vision',
          quote: 'Real impact, at scale.',
          content: 'To become a highly skilled fullstack developer, specialized in creating complete and automated systems, integrating modern technologies and tools like n8n. I aspire to participate in innovative projects that generate real impact, optimizing processes and providing technological solutions at an enterprise level.',
          highlights: [
            'Specialization in full-stack systems',
            'Intelligent automation integration',
            'Enterprise-level impact',
          ],
        },
        {
          id: 'valores', num: '03', title: 'Values',
          quote: 'What defines me as a professional.',
          values: [
            { label: 'Code quality', desc: 'Clean, maintainable, and well-documented code.' },
            { label: 'Continuous learning', desc: 'Always exploring new technologies and methodologies.' },
            { label: 'Problem solving', desc: 'Analytical and creative approach to every challenge.' },
            { label: 'User experience', desc: 'The end user is always the priority.' },
            { label: 'Automation', desc: 'Optimize processes to free up human time.' },
            { label: 'Collaboration', desc: 'The best code is written as a team.' },
          ],
        },
        {
          id: 'objetivos', num: '04', title: 'Goals',
          quote: 'The path has direction.',
          content: 'In the coming years I seek to specialize in modern software architectures, master the n8n automation ecosystem, and contribute to high-impact projects that combine web development with artificial intelligence.',
          tags: [
            'Senior Fullstack',
            'n8n Automation',
            'Software Architecture',
            'AI Projects',
            'Open Source',
            'Technical Leadership',
          ],
        },
      ],
    },

    // Services
    services: {
      sectionLabel: 'Services',
      title: 'Services',
      items: [
        { number: '01', title: 'Frontend Development', description: 'Building modern, responsive, user-centered web interfaces using HTML, CSS, and JavaScript.', tags: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
        { number: '02', title: 'Backend Development', description: 'Developing server-side logic, data handling, and creating REST APIs for web applications.', tags: ['Node.js', 'APIs', 'JSON', 'Python'] },
        { number: '03', title: 'Fullstack Development', description: 'Building complete web applications integrating frontend and backend, applying best practices and scalable architecture.', tags: ['Fullstack', 'CRUD', 'Web Apps'] },
        { number: '04', title: 'UI/UX Design', description: 'Designing attractive interfaces and Figma prototypes, prioritizing usability and user experience.', tags: ['Figma', 'UX', 'Prototyping'] },
        { number: '05', title: 'Automation (n8n)', description: 'Workflow automation using n8n, integrating APIs, databases, and services to optimize processes and reduce manual tasks.', tags: ['n8n', 'Automation', 'APIs'] },
        { number: '06', title: 'IT Technical Support', description: 'Diagnosis and resolution of hardware, software, and network issues, ensuring proper system operation.', tags: ['Hardware', 'Software', 'Networking'] },
      ],
    },

    // Projects
    projects: {
      sectionLabel: 'Developments',
      title: 'Projects',
      viewAll: 'Go to GitHub and see all',
      items: [
        {
          title: 'LogiTrack WMS — Warehouse Management & Audit System.',
          description: 'Backend warehouse management and audit system for a company with multiple branches across different cities. Centralizes inventory control —entries, exits, and product transfers between warehouses— with JWT-based role authentication (ADMIN/EMPLOYEE), automatic audit logging, and a Swagger-documented REST API, providing complete traceability of every change made by system users.',
        },
        {
          title: 'CredEasy — Simplified Git Credentials.',
          description: 'A Visual Studio Code extension designed to simplify and automate Git credential configuration (name and email) globally or locally directly from the editor. Eliminates the need for repetitive terminal commands to set up developer identity, reducing commit errors and speeding up new project initialization.',
        },
        {
          title: 'HelpDeskBot — Automated Support Management.',
          description: 'An intelligent helpdesk system integrating a Telegram bot with n8n for real-time technical incident management, logging, and tracking. Centralizes technical issue reporting in an intuitive interface for users, automating data storage in spreadsheets and instantly notifying the support team.',
        },
      ],
    },

    // Certifications
    certifications: {
      sectionLabel: 'Certifications',
      title: 'Education &\nCertifications',
      credentials: 'credentials',
      verify: 'Verify',
      close: 'Close',
      verifyOfficial: 'View official credential ↗',
      items: [
        { title: 'Basic Data Analysis', issuer: 'TalentoTech', date: 'Dec 2024', description: 'Introduction to data analysis and information-based decision making.' },
        { title: 'Power BI Introduction & Management', issuer: 'MinTIC', date: 'Apr 2025', description: 'Creation of interactive dashboards and data visualization.' },
        { title: 'Systems Technician', issuer: 'SENA', date: 'Nov 2019', description: 'Technical training in support, equipment maintenance, networks, and IT systems, with a focus on diagnosis and troubleshooting.' },
        { title: 'Network Security', issuer: 'Cisco · SENATIC', date: 'Oct 2024', description: 'Cybersecurity fundamentals, network protection, and IT security best practices.' },
      ],
    },

    // Contact
    contact: {
      role: 'Full-stack developer',
      navigation: 'Navigation',
      contactLabel: '... /Contact ...',
      contactNumber: 'My contact number',
      navLinks: [
        { label: 'Home', href: '#hero' },
        { label: 'About me', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Services', href: '#services' },
        { label: 'Philosophy', href: '#mission' },
      ],
      copyright: 'All rights reserved.',
      built: 'Built with React + Vite',
    },
  },
};

export default translations;
