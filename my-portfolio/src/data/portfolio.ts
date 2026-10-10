export const profile = {
  name: "Mouhamed",
  role: "Software Engineer",
  email: "mcoundoul6@gmail.com",
  location: "Montréal, Québec",
  github: "https://github.com/mcndl13",
  linkedin: "https://www.linkedin.com/in/mouhamed-coundoul-873672255/",
  resume: "/resume.pdf",
};

export type ProjectVisual =
  "mobile-api" | "web-services" | "data-graph" | "ml-study" | "location";

export interface Project {
  title: string;
  kind: string;
  summary: string;
  contributions: string[];
  technologies: string[];
  visual: ProjectVisual;
  repo: string;
  demo: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "MeMantra",
    kind: "Full-stack mobile app",
    summary:
      "A mobile affirmations application backed by a REST API and relational database.",
    contributions: [
      "Developed a React Native / Expo client with TypeScript and a backend using Express and PostgreSQL.",
      "Used GitHub Actions, Jest, Maestro and static analysis to support testing and automated checks.",
    ],
    technologies: [
      "TypeScript",
      "React Native",
      "Express",
      "PostgreSQL",
      "Jest",
    ],
    visual: "mobile-api",
    repo: "https://github.com/MeMantraa/MeMantra",
    demo: "https://apps.apple.com/us/app/memantra/id6761772637",
    featured: true,
  },
  {
    title: "Neural Network Robustness Study",
    kind: "Machine learning",
    summary:
      "A comparative study of how neural networks perform under visual distribution shifts.",
    contributions: [
      "Implemented and compared MLP, CNN and ResNet architectures in PyTorch.",
      "Evaluated Gaussian noise, blur and brightness corruptions at five severity levels using accuracy and degradation metrics.",
    ],
    technologies: ["Python", "PyTorch", "CNN", "ResNet"],
    visual: "ml-study",
    repo: "https://github.com/mcndl13/arch-robustness-study",
    demo: "",
    featured: true,
  },
  {
    title: "Lost-in-Faubourg",
    kind: "Mobile development",
    summary:
      "A location-aware mobile application built with React Native, Expo and Google Maps API.",
    contributions: [
      "Worked with native-style mobile interfaces and Google Maps integration.",
    ],
    technologies: ["React Native", "Expo", "Google Maps API"],
    visual: "location",
    repo: "https://github.com/mcndl13/SOEN-390-Mini-Capstone",
    demo: "",
    featured: true,
  },
  {
    title: "RateMyPeers",
    kind: "Full-stack web app",
    summary:
      "A peer-feedback web application combining a React frontend with Go and MongoDB.",
    contributions: [
      "Worked with a web stack spanning the client, Go-based backend and document database.",
      "Structured application functionality across frontend and backend concerns.",
    ],
    technologies: ["React", "Go", "MongoDB"],
    visual: "web-services",
    repo: "https://github.com/JayC-SF/GoVite.Inc-SOEN341_Project_F24",
    demo: "",
    featured: true,
  },
  {
    title: "Soccer Analytics Database",
    kind: "Data engineering",
    summary:
      "A multi-league soccer statistics project using relational and graph data models.",
    contributions: [
      "Designed PostgreSQL and Neo4j schemas to represent and query soccer statistics.",
      "Built Python pipelines integrating external APIs to generate analytical insights.",
    ],
    technologies: ["Python", "PostgreSQL", "Neo4j", "APIs"],
    visual: "data-graph",
    repo: "https://github.com/mcndl13/SOEN-363-Project/tree/main",
    demo: "",
    featured: true,
  },
];

export const skills = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Go", "Java", "C++", "SQL"],
  },
  {
    title: "Application development",
    items: ["React", "React Native", "Node.js", "Express", "Angular", "Vue"],
  },
  {
    title: "Data & AI",
    items: ["PostgreSQL", "MongoDB", "Neo4j", "PyTorch", "REST APIs"],
  },
  {
    title: "Engineering workflow",
    items: [
      "Git",
      "GitHub Actions",
      "Azure DevOps",
      "CI/CD",
      "Jest",
      "Maestro",
    ],
  },
];

export interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  logo: string;
  impact: string;
  achievements: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    company: "Genetec",
    position: "UX Software Developer Intern",
    period: "Jan – Apr 2024",
    location: "Saint-Laurent, QC",
    logo: "/assets/cb544.png",
    impact:
      "Software engineering experience focused on reusable interfaces, frontend quality and product collaboration.",
    achievements: [
      "Developed reusable UI components using React, Angular and Vue, supporting consistency across multiple product applications.",
      "Translated Figma designs into responsive interfaces while collaborating with designers and engineers.",
      "Contributed to unit and end-to-end testing and Agile delivery workflows using Azure DevOps.",
    ],
    technologies: ["React", "Angular", "Vue", "Testing", "Azure DevOps"],
  },
  {
    company: "The CSL Group",
    position: "Business Analyst Intern",
    period: "May – Aug 2023",
    location: "Montréal, QC",
    logo: "/assets/74c37.png",
    impact:
      "An analytical role connecting technical teams, operational data and business requirements.",
    achievements: [
      "Analyzed operational service metrics and contributed to service-level objectives and reliability reporting.",
      "Worked with business and engineering stakeholders to gather requirements and translate them into actionable technical context.",
      "Communicated analysis and workflow improvement opportunities across cross-functional teams.",
    ],
    technologies: [
      "Requirements analysis",
      "Service metrics",
      "Stakeholder collaboration",
    ],
  },
];
