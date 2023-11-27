export const menuItems: any[] = [
  {
    order: 1,
    routerLink: 'home',
    icon: 'fal fa-home',
    label: 'sidebar.menu.home.text',
  },
  {
    order: 2,
    routerLink: 'about',
    icon: 'fal fa-address-card',
    label: 'sidebar.menu.about.text',
  },
  {
    order: 3,
    routerLink: 'projects',
    icon: 'fal fa-laptop-code',
    label: 'sidebar.menu.project.text',
  },
  {
    order: 5,
    routerLink: 'education',
    icon: 'fal fa-chalkboard-teacher',
    label: 'sidebar.menu.education.text',
    items: [
      {
        order: 1,
        routerLink: 'education/academic',
        icon: 'fal fa-chalkboard-teacher',
        label: 'sidebar.menu.education.academic.text',
      },
      {
        order: 2,
        routerLink: 'education/course',
        icon: 'fal fa-chalkboard-teacher',
        label: 'sidebar.menu.education.course.text',
      },
      {
        order: 3,
        routerLink: 'education/contest',
        icon: 'fal fa-chalkboard-teacher',
        label: 'sidebar.menu.education.contest.text',
      },
    ],
  },
  {
    order: 4,
    routerLink: 'experience',
    icon: 'fal fa-briefcase',
    label: 'sidebar.menu.experience.text',
  },
];

export const contacts = [
  {
    id: '3da9ab7a-f670-44e1-99cf-609c70468e04',
    name: 'Linkedin',
    customClass: 'linkedin-icon',
    url: 'www.linkedin.com/in/kevin-jimenez-saraguro-a7321b193',
    icon: 'linkedin-icon.svg',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    id: '23463c92-b39b-4adc-a974-e2fc02b9c9af',
    name: 'Github',
    customClass: 'github-icon',
    url: 'https://github.com/kevinjimenez',
    icon: 'github-icon.svg',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    id: '9fad21fb-62f6-4d1c-8326-2a9100488038',
    name: 'Twitter',
    customClass: 'twitter-icon',
    url: 'https://twitter.com/kevi_n_',
    icon: 'twitter.svg',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    id: 'c1ff84bb-e410-4ea9-a211-6314c342220e',
    name: 'Instagram',
    customClass: 'instagram-icon',
    url: 'https://www.instagram.com/kevi_n_24',
    icon: 'instagram-icon.svg',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    id: '1db65a5c-9cb0-403c-8c59-cfba5482ea6a',
    name: 'Celular',
    value: '+593 998047440',
    icon: 'consultation.gif',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    id: '6a1983e2-64f8-4c26-b3bd-3a5d28446cd7',
    name: 'Correo',
    value: 'orlando.kj24@gmail.com',
    icon: 'email.gif',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
];

export const skills: any[] = [
  {
    id: '572f201f-f43d-4c5f-af27-54b3724cba99',
    name: 'NestJS',
    icon: 'nestjs.svg',
  },
  {
    id: '68d5a0a9-12b1-471a-b4e3-6b612eb393af',
    name: 'Html',
    icon: 'html-5.svg',
  },
  {
    id: '74664f63-fdf0-4144-ba56-12ac908ab238',
    name: 'Docker',
    icon: 'docker-icon.svg',
  },
  {
    id: 'f08e0168-0b43-472f-b3cd-32da63cfde6e',
    name: 'Postgres',
    icon: 'postgresql.svg',
  },
  {
    id: 'd59cdc7e-5c1e-4b43-8743-dccc0caabd2b',
    name: 'Angular',
    icon: 'angular-icon.svg',
  },
  {
    id: '7aebde36-d956-46b5-a477-0f119bae7bbe',
    name: 'Machine Learning',
  },
  {
    id: 'b292c831-4d3e-4ce9-a06f-c356feaa2555',
    name: 'Node',
    icon: 'nodejs.svg',
  },
  {
    id: 'b02a5144-549a-4dc9-8964-2a9eb770ebde',
    name: 'C# .net',
    icon: 'c-sharp.svg',
  },
  {
    id: '9b6c500a-10e7-4afc-a1df-7fd5c5df4914',
    name: 'MongoDB',
    icon: 'mongodb-icon.svg',
  },
  {
    id: 'fcca19f2-1bbe-4cd0-94ca-12594efc6996',
    name: 'Git',
    icon: 'git-icon.svg',
  },
  {
    id: 'ebf31e91-6690-44d1-8ed4-1daf311a1ad6',
    name: 'Css',
    icon: 'css-3.svg',
  },
  {
    id: 'b1f5d64e-b22e-4990-83be-4431519262e5',
    name: 'Typescript',
    icon: 'typescript-icon.svg',
  },
  {
    id: '86e26706-3bd3-4a70-9468-3513b49fccc3',
    name: 'Graphql',
    icon: 'graphql.svg',
  },
  {
    id: 'eaf5991e-5094-4a17-9bb8-d71175d6602e',
    name: 'Flutter',
    icon: 'flutter.svg',
  },
  {
    id: '9b5d0bcc-cc11-4052-a21f-1920d273537a',
    name: 'Tailwindcss',
    icon: 'tailwindcss-icon.svg',
  },
  {
    id: 'c539dad7-9427-4094-bcc7-e2276023ba19',
    name: 'Javascript',
    icon: 'javascript.svg',
  },
  {
    id: '3c020d22-ffe8-4dc7-9315-b30e2d5a07e5',
    name: 'Bootstrap',
    icon: 'bootstrap.svg',
  },
  {
    id: 'ec113e8f-b277-4aed-8c7f-ae9805593924',
    name: 'Mysql',
    icon: 'mysql.svg',
  },
  {
    id: 'd6388ce6-f971-47f2-a594-22c83c507118',
    name: 'React',
    icon: 'react.svg',
  },
  {
    id: 'b497ce33-d48f-41fe-a1cd-b178516c4947',
    name: 'Ionic',
    icon: 'ionic-icon.svg',
  },
  {
    id: '57528013-cc3e-459e-9a2f-8bc94183250d',
    name: 'Vue 2',
    icon: 'vue.svg',
  },
  {
    id: '4aaf13a9-6e41-48fb-ab83-fe5b5626dd6c',
    name: 'Python',
    icon: 'python.svg',
  },
  {
    id: '75f88dbb-0c6c-4c21-9a46-d37ac92f0c9b',
    name: 'Software Engineer',
  },
  {
    id: '10b2f4cb-69c8-479f-8007-de11186d9abc',
    name: 'Full Stack',
  },
];

export const users: any[] = [
  {
    id: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
    name: 'Kevin',
    middleName: 'Orlando',
    lastName: 'Jimenez Saraguro',
    title: 'Full Stack Developer | Software Engineer',
    description: `Me apasiona la tecnología aprender e investigar nuevas tecnologías,
        mi especialidad es el desarrollo de frontend, backend y móvil,
        últimamente estoy aprendiendo machine learning y visión por computadora lo cual me gusta mucho,
        además, disfruto mucho de los videojuegos y el fútbol.`,
    place: 'Quito - Ecuador',
    skills: [
      '572f201f-f43d-4c5f-af27-54b3724cba99',
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af',
      '74664f63-fdf0-4144-ba56-12ac908ab238',
      'f08e0168-0b43-472f-b3cd-32da63cfde6e',
      'd59cdc7e-5c1e-4b43-8743-dccc0caabd2b',
      '7aebde36-d956-46b5-a477-0f119bae7bbe',
      'b292c831-4d3e-4ce9-a06f-c356feaa2555',
      'b02a5144-549a-4dc9-8964-2a9eb770ebde',
      '9b6c500a-10e7-4afc-a1df-7fd5c5df4914',
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996',
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6',
      'b1f5d64e-b22e-4990-83be-4431519262e5',
      '86e26706-3bd3-4a70-9468-3513b49fccc3',
      'eaf5991e-5094-4a17-9bb8-d71175d6602e',
      '9b5d0bcc-cc11-4052-a21f-1920d273537a',
      'c539dad7-9427-4094-bcc7-e2276023ba19',
      '3c020d22-ffe8-4dc7-9315-b30e2d5a07e5',
      'ec113e8f-b277-4aed-8c7f-ae9805593924',
      'd6388ce6-f971-47f2-a594-22c83c507118',
      'b497ce33-d48f-41fe-a1cd-b178516c4947',
      '57528013-cc3e-459e-9a2f-8bc94183250d',
      '4aaf13a9-6e41-48fb-ab83-fe5b5626dd6c',
      '75f88dbb-0c6c-4c21-9a46-d37ac92f0c9b',
      '10b2f4cb-69c8-479f-8007-de11186d9abc',
    ],
    contacts: [
      '3da9ab7a-f670-44e1-99cf-609c70468e04',
      '23463c92-b39b-4adc-a974-e2fc02b9c9af',
      '9fad21fb-62f6-4d1c-8326-2a9100488038',
      'c1ff84bb-e410-4ea9-a211-6314c342220e',
      '1db65a5c-9cb0-403c-8c59-cfba5482ea6a',
      '6a1983e2-64f8-4c26-b3bd-3a5d28446cd7',
    ],
    academics: [
      '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
      '8c4cf75c-8734-4e14-b06d-9aecfb332c61',
    ],
  },
];

export const jobs: any[] = [
  {
    id: '85b452fa-3900-47c0-af0a-54e610a83a02',
    company: 'Kruger Corp',
    position: 'Consultor técnico',
    start: '2022-07-03',
    status: 'progress',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    id: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
    company: 'Cooperativa 29 de octubre',
    position: 'Analista de gestión de aplicaciones',
    start: '2020-10-22',
    end: '2022-04-30',
    status: 'end',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    id: 'd774803d-16f2-4243-886d-95f9f65e883c',
    company: 'Manticore Labs',
    position: 'Desarrollador Full Stack',
    start: '2017-08-24',
    end: '2020-09-01',
    status: 'end',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
];

export const responsibilities: any[] = [
  // kruger
  {
    name: 'Desarrollo frontend (Angular)',
    job: '85b452fa-3900-47c0-af0a-54e610a83a02',
  },
  {
    name: 'Desarrollo backend (NestJS)',
    job: '85b452fa-3900-47c0-af0a-54e610a83a02',
  },
  {
    name: 'Análisis de requerimientos',
    job: '85b452fa-3900-47c0-af0a-54e610a83a02',
  },
  {
    name: 'Versionamiento e integración continua.',
    job: '85b452fa-3900-47c0-af0a-54e610a83a02',
  },
  // 29 de oct
  {
    name: 'Tech Lead',
    job: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
  },
  {
    name: 'Análisis de requerimientos',
    job: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
  },
  {
    name: 'Integración y consumo webservices',
    job: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
  },
  {
    name: 'Versionamiento e integración continua',
    job: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
  },
  {
    name: 'Desarrollo frontend',
    job: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
  },
  {
    name: 'Desarrollo backend',
    job: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
  },
  {
    name: 'Webservice',
    job: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
  },
  {
    name: 'Rest api',
    job: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
  },
  // manticore
  {
    name: 'Metodologías ágiles SCRUM',
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },
  {
    name: 'Análisis de requerimientos',
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },
  {
    name: 'Maquetado de aplicaciones web y móviles',
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },
  {
    name: 'Aplicaciones móviles híbridas y nativas',
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },
  {
    name: 'Desarrollo frontend',
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },
  {
    name: 'Desarrollo backend',
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },
  {
    name: 'Webservice',
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },
  {
    name: 'Rest api',
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },
  {
    name: 'TDD desarrollo guiado por pruebas',
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },
];

export const academics = [
  {
    id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'Colegio "Juan Pío Montúfar',
    title: 'Bachiller Físico - Matemáticas, generación 2013',
    place: 'Quito - Ecuador',
    start: '2007-09-06',
    end: '2013-07-24',
    logo: 'montufar-icon.png',
    status: 'graduated',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    id: '8c4cf75c-8734-4e14-b06d-9aecfb332c61',
    name: 'Escuela Politécnica Nacional',
    title: 'Ingeniería en Sistemas Informáticos y de computación',
    place: 'Quito - Ecuador',
    start: '2014-09-03',
    end: '2020-08-22',
    logo: 'epn-icon.png',
    status: 'graduated',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
];

export const tesis = [
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'A Hybrid Recommender for Cybersecurity Based on Rating Approach',
    authors:
      'Carlos Ayala, Kevin Jiménez, Edison Loza-Aguirre, Roberto O. Andrade',
    summary:
      'La función principal de un analista de seguridad es proteger y tomar las mejores decisiones para preservar la integridad de los sistemas informáticos dentro de una organización. Todos los días, deben lidiar con muchas anomalías y ataques. Para proporcionar una respuesta rápida, el analista generalmente depende de su buen juicio, lo que debería llevarlo a ejecutar procesos manuales en un tiempo limitado. Al lidiar con demasiadas anomalías y vulnerabilidades, las respuestas solo se brindan a aquellas amenazas con el más alto nivel de criticidad. Esta investigación tiene como objetivo proponer una herramienta que ayude a los analistas a filtrar anomalías, vulnerabilidades y riesgos latentes. Para cumplir con este objetivo, se desarrolló un sistema de recomendación basado en el filtrado colaborativo y el conocimiento, generando calificaciones de los peores casos con las mejores recomendaciones basadas en el juicio de expertos. Durante las pruebas, el sistema permitió una mejora en el tiempo de respuesta de los analistas para resolver problemas. También eliminó la subjetividad del analista y redujo el número de procesos manuales.',
    appointment:
      'Ayala C., Jiménez K., Loza-Aguirre E., Andrade R.O. (2021) A Hybrid Recommender for Cybersecurity Based on Rating Approach. In: Daimi K., Peoples C. (eds) Advances in Cybersecurity Management. Springer, Cham. https://doi.org/10.1007/978-3-030-71381-2_20',
    link: 'https://link.springer.com/chapter/10.1007/978-3-030-71381-2_20#citeas',
    publisher: 'Springer International Publishing',
    published: 'Advances in Cybersecurity Management',
    academic: '8c4cf75c-8734-4e14-b06d-9aecfb332c61',
  },
];

export const educations = [
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'ANGULAR FORMS: CREACIÓN Y OPTIMIZACIÓN DE FORMULARIOS WEB',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'ANGULAR ROUTER Y PROGRAMACIÓN MODULAR',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'ANGULAR: COMPONENTES Y SERVICIO',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'FUNDAMENTOS DE ANGULAR',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'BACKEND CON NESTJS',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'CONSUMO DE APIS REST CON ANGULAR',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'INTRODUCCIÓN A REACT.JS',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'NESTJS: PERSISTENCIA DE DATOS CON TYPEORM',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'REACT AVANZADO',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'PROFESIONAL DE REACT HOOKS',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'ANÁLISIS DE NEGOCIOS PARA CIENCIA DE DATOS',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'INTRODUCCIÓN AL PENSAMIENTO COMPUTACIONAL CON PYTHON',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'FUNDAMENTOS PRÁCTICOS DE MACHINE LEARNING',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'MACHINE LEARNING APLICADO CON PYTHON',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'POO Y ALGORITMOS CON PYTHON',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'BÁSICO DE MONGODB',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'NESTJS: AUTENTICACIÓN CON PASSPORT Y JWT',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'NESTJS: PROGRAMACIÓN MODULAR',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'PROGRESSIVE WEB APPS CON ANGULAR',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'RENDIMIENTO EN ANGULAR',
    company: 'Platzi',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'FLUTTER: TU GUÍA COMPLETA DE DESARROLLO PARA IOS Y ANDROID',
    company: 'Udemy',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'FLUTTER AVANZADO: LLEVA TU CONOCIMIENTO AL SIGUIENTE NIVEL',
    company: 'Udemy',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },

  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'NESTJS ZERO TO HERO - MODERN TYPESCRIPT BACK-END DEVELOPMENT',
    company: 'Udemy',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2019',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'FLUTTER INTERMEDIO: DISEÑOS PROFESIONALES Y ANIMACIONES',
    company: 'Udemy',
    description: 'Quito - Ecuador',
    type: 'course',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  // contest
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'CODTOBER-FEST',
    company: 'Stack Builders',
    description:
      'Desafío de código de Stack Builders para la contruccion de un software Web.',
    type: 'contest',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'DEVSU: CODEJAM',
    company: 'Devsu',
    description:
      'El mejor concurso de programación de Latinoamérica para poner aprueba las habilidades',
    type: 'contest',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    // id: '4fcc8698-42a4-4195-9a7a-49e2ca454aa0',
    name: 'CODING DOJO',
    company: 'Idukay',
    description:
      'Demostrar las habilidades en NodeJS, AngularJS, ReactJS, React Native, TDD, Data Science, MongoDB',
    type: 'contest',
    year: '2021',
    status: 'finished',
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
];

export const projects = [
  // user
  {
    name: 'Pokedex',
    type: 'mobile',
    status: 'finished',
    description:
      'App móvil para revisar la información de los 150 primeros Pokemons',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996',
      'eaf5991e-5094-4a17-9bb8-d71175d6602e',
    ],
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    name: 'Rick & Morty',
    type: 'mobile',
    status: 'finished',
    description:
      'App móvil que te permite ver información de los personajes de la serie',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996',
      'eaf5991e-5094-4a17-9bb8-d71175d6602e',
    ],
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    name: 'Portafolio v1',
    type: 'web',
    status: 'finished',
    description:
      'Portafolio creado con React primera version, la cual ayuda a ver los skills y proyectos que manejado',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      'd6388ce6-f971-47f2-a594-22c83c507118', // react
      '3c020d22-ffe8-4dc7-9315-b30e2d5a07e5', // bootstrap
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6', // css
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af', // html
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    name: 'Portafolio v2',
    type: 'web',
    status: 'progress',
    description:
      'Portafolio version 2 con Angular, la cual ayuda a ver los skills y proyectos que manejado',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      'd59cdc7e-5c1e-4b43-8743-dccc0caabd2b', // ng
      '3c020d22-ffe8-4dc7-9315-b30e2d5a07e5', // bootstrap
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6', // css
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af', // html
      '9b5d0bcc-cc11-4052-a21f-1920d273537a', // tailwindcss
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    name: 'JISIC EPN',
    type: 'mobile',
    status: 'finished',
    description:
      'Aplicación móvil version 1 que permite ver el cronograma de las Jornada JISIC de la Escuela Politécnica Nacional de la Faculta de Sistemas',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      'b497ce33-d48f-41fe-a1cd-b178516c4947', // ionic
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6', // css
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af', // html
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    name: 'Api JISIC',
    type: 'api',
    status: 'finished',
    description:
      'Webservice (Rest-Api) el consumo de datos, generacion y lector de QR para el ingreso y revision de horarios',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      '572f201f-f43d-4c5f-af27-54b3724cba99', // nest
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      '74664f63-fdf0-4144-ba56-12ac908ab238', // docker
      'ec113e8f-b277-4aed-8c7f-ae9805593924', // mysql
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    name: 'Api profile',
    type: 'api',
    status: 'progress',
    description:
      'Webservice (Rest-Api) para la administración de las información de portafolio personal',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      '572f201f-f43d-4c5f-af27-54b3724cba99', // nest
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      '74664f63-fdf0-4144-ba56-12ac908ab238', // docker
      'f08e0168-0b43-472f-b3cd-32da63cfde6e', // pg
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    name: 'Predicción futbol',
    type: 'other',
    status: 'finished',
    description:
      'Proyecto de AI el cual ayuda a predecir mediante redes bayesianas que equipo va a ganar',
    skills: [],
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    name: 'Movies',
    type: 'mobile',
    status: 'finished',
    description:
      'Aplicación en la cual se puede buscar, agregar a favoritos las películas',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996',
      'eaf5991e-5094-4a17-9bb8-d71175d6602e',
    ],
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  {
    name: 'Scanner QR',
    type: 'mobile',
    status: 'finished',
    description: 'App móvil para scanear codigos QR y abrir en el navegador',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996',
      'eaf5991e-5094-4a17-9bb8-d71175d6602e',
    ],
    user: 'b00fe7df-ddcd-414d-9c2a-0e7a8eed5e89',
  },
  // job
  {
    name: 'Pico y placa',
    type: 'mobile',
    status: 'finished',
    description:
      'Aplicaion para el uso de pico y placa, notificaion del dia en turno',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      'b497ce33-d48f-41fe-a1cd-b178516c4947', // ionic
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6', // css
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af', // html
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },
  {
    name: 'Inventario de artículos varios',
    type: 'web',
    status: 'finished',
    description: 'Aplicacion para el ingreso y salida de articulos (PDVSA)',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      'd59cdc7e-5c1e-4b43-8743-dccc0caabd2b', // ng
      '3c020d22-ffe8-4dc7-9315-b30e2d5a07e5', // bootstrap
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6', // css
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af', // html
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },
  {
    name: 'Tracking de vendedores',
    type: 'mobile',
    status: 'finished',
    description:
      'Aplicación para vendedores de uso offline para la recepcion de pedidos y el rastreo de rutas de los vendedores',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      'b497ce33-d48f-41fe-a1cd-b178516c4947', // ionic
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6', // css
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af', // html
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },
  {
    name: 'Juego de la bolsa',
    type: 'web',
    status: 'finished',
    description:
      'Juego para aprender vender y comprar acciones de diferentes marcas y empresas',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      'd59cdc7e-5c1e-4b43-8743-dccc0caabd2b', // ng
      '3c020d22-ffe8-4dc7-9315-b30e2d5a07e5', // bootstrap
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6', // css
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af', // html
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },
  {
    name: 'Administración equipos de futbol',
    type: 'web',
    status: 'finished',
    description: 'Aplicacion de gestion de equipos de futbol de cualquier liga',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      'd59cdc7e-5c1e-4b43-8743-dccc0caabd2b', // ng
      '3c020d22-ffe8-4dc7-9315-b30e2d5a07e5', // bootstrap
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6', // css
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af', // html
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
      '86e26706-3bd3-4a70-9468-3513b49fccc3', // graphql
    ],
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },
  {
    name: 'Api equipos de futbol',
    type: 'api',
    status: 'finished',
    description:
      'Webservice (Rest-Api) para la administración de las información de los equipos de futbol',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      '572f201f-f43d-4c5f-af27-54b3724cba99', // nest
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      '74664f63-fdf0-4144-ba56-12ac908ab238', // docker
      'f08e0168-0b43-472f-b3cd-32da63cfde6e', // pg
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
      '86e26706-3bd3-4a70-9468-3513b49fccc3', // graphql
    ],
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },
  {
    name: 'Alitas cadillac',
    type: 'mobile',
    status: 'finished',
    description:
      'Aplicacion donde se puedo pedir pedidos, visualizar promociones y rastreo de pedido',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      'b497ce33-d48f-41fe-a1cd-b178516c4947', // ionic
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6', // css
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af', // html
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    job: 'd774803d-16f2-4243-886d-95f9f65e883c',
  },

  {
    name: 'Integración pago inmediato a bús de servicios',
    type: 'api',
    status: 'finished',
    description:
      'Integracion de pago directo a core bancario de Cooperativa 29 de octubre',
    skills: [
      'b02a5144-549a-4dc9-8964-2a9eb770ebde', // c#
    ],
    job: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
  },
  {
    name: 'Administración de contrato y compras',
    type: 'web',
    status: 'finished',
    description:
      'Aplicacion donde se puede ingresar los contratos y los encargados de dichos contrasto u compras',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      'd59cdc7e-5c1e-4b43-8743-dccc0caabd2b', // ng
      '3c020d22-ffe8-4dc7-9315-b30e2d5a07e5', // bootstrap
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6', // css
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af', // html
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    job: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
  },
  {
    name: 'Plataforma de consultas y pagos',
    type: 'web',
    status: 'finished',
    description:
      'Kiosko donde se puede realizar pagos de servicios basicos, recargas y consulta de saldos',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      'd59cdc7e-5c1e-4b43-8743-dccc0caabd2b', // ng
      '3c020d22-ffe8-4dc7-9315-b30e2d5a07e5', // bootstrap
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6', // css
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af', // html
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    job: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
  },
  {
    name: 'Api de consultas y pagos',
    type: 'api',
    status: 'finished',
    description:
      'Webservice (Rest-Api) para la administración de las información de los pagos y consultas',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      '572f201f-f43d-4c5f-af27-54b3724cba99', // nest
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      '74664f63-fdf0-4144-ba56-12ac908ab238', // docker
      'ec113e8f-b277-4aed-8c7f-ae9805593924', // mysql
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    job: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
  },
  {
    name: 'Credito a funcionarios',
    type: 'web',
    status: 'finished',
    description:
      'Solicitud de crdeito para los funcionarios de la Cooperativa 29 de octubre, integrado con aval buro',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      'd59cdc7e-5c1e-4b43-8743-dccc0caabd2b', // ng
      '3c020d22-ffe8-4dc7-9315-b30e2d5a07e5', // bootstrap
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6', // css
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af', // html
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    job: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
  },
  {
    name: 'Api credito a funcionarios',
    type: 'api',
    status: 'finished',
    description:
      'Webservice (Rest-Api) para la administración de las información del credito',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      '572f201f-f43d-4c5f-af27-54b3724cba99', // nest
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      '74664f63-fdf0-4144-ba56-12ac908ab238', // docker
      'ec113e8f-b277-4aed-8c7f-ae9805593924', // mysql
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    job: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
  },
  {
    name: 'Administración de usuarios',
    type: 'web',
    status: 'finished',
    description: 'Aplicaion donde se asigna usuario por aplicativo y modulos',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      'd59cdc7e-5c1e-4b43-8743-dccc0caabd2b', // ng
      '3c020d22-ffe8-4dc7-9315-b30e2d5a07e5', // bootstrap
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6', // css
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af', // html
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    job: '76e18dd1-365e-4350-9556-4a34dfe9d2fc',
  },

  {
    name: 'Sixstar Hotels',
    type: 'web',
    status: 'finished',
    description:
      'Apliacion de administracion de solicitudes, manteminoento, ingreso de personal y reportes',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      'd59cdc7e-5c1e-4b43-8743-dccc0caabd2b', // ng
      '3c020d22-ffe8-4dc7-9315-b30e2d5a07e5', // bootstrap
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6', // css
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af', // html
      'b292c831-4d3e-4ce9-a06f-c356feaa2555', // node
    ],
    job: '85b452fa-3900-47c0-af0a-54e610a83a02',
  },
  {
    name: 'Emisión de TCT (Galapagos)',
    type: 'web',
    status: 'progress',
    description:
      'Compra de TCT para el ingreso a Galapagos y evitar las largas filas',
    skills: [
      'fcca19f2-1bbe-4cd0-94ca-12594efc6996', // git
      'b1f5d64e-b22e-4990-83be-4431519262e5', // ts
      'ebf31e91-6690-44d1-8ed4-1daf311a1ad6', // css
      '68d5a0a9-12b1-471a-b4e3-6b612eb393af', // html
      '9b5d0bcc-cc11-4052-a21f-1920d273537a', // tailwindcss
      'd6388ce6-f971-47f2-a594-22c83c507118', // react
    ],
    job: '85b452fa-3900-47c0-af0a-54e610a83a02',
  },
];
