import {
  algorithms,
  ammtb,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Technical Analyst",
    company_name: "Quantile Tech",
    date: "Feb 2025 – Present",
    details: [
      "Driving <span style='color: white;'>technical analysis and system design</span> initiatives at Quantile Tech, contributing to quantitative and data-driven solutions.",
      "<span style='color: white;'>Collaborating with engineering and product teams</span> to deliver scalable, high-performance analytical tools.",
      "Applying expertise in <span style='color: white;'>data pipelines, software engineering, and analytics</span> to support client-facing products and internal platforms.",
    ],
  },
  {
    title: "Technical Support Assistant",
    company_name: "UMass Boston",
    date: "Aug 2024 – Dec 2024",
    details: [
      "Provided <span style='color: white;'>technical support and troubleshooting</span> for university systems, ensuring smooth operations for students and faculty.",
      "<span style='color: white;'>Diagnosed and resolved hardware, software, and network issues</span> in a fast-paced academic environment.",
      "Developed documentation and knowledge base articles to <span style='color: white;'>improve support efficiency</span> across the department.",
    ],
  },
  {
    title: "Assistant System Engineer",
    company_name: "Tata Consultancy Services",
    date: "May 2021 – Jan 2023",
    details: [
      "Developed and delivered <span style='color: white;'>end-to-end workflows for financial data management</span> and clinical trial platforms for clients including <span style='color: white;'>Comcast and GSK</span>.",
      "<span style='color: white;'>Designed and implemented intuitive dashboards</span> using React.js, GraphQL, and integrated ElasticSearch to enhance search capabilities.",
      "<span style='color: white;'>Collaborated with cross-functional teams</span> to optimize storage and retrieval of large volumes of data, improving query performance by 40%.",
    ],
  },
  {
    title: "B.Tech Computer Science / M.Sc. Information Technology",
    company_name: "SRM Institute · UMass Boston",
    date: "2017–2021 · 2023–2024",
    details: [
      "Earned a <span style='color: white;'>B.Tech in Computer Science</span> from SRM Institute of Science and Technology (2017–2021), mastering Data Structures, Machine Learning, Computer Networks, and Cloud Computing.",
      "Completed a <span style='color: white;'>Master of Science in Information Technology</span> at UMass Boston (2023–2024) with a GPA of 3.8/4.0, focusing on System Analysis, Database Management, and Big Data.",
      "Demonstrated expertise through <span style='color: white;'>multiple hackathon wins</span> and applied projects bridging academic learning with real-world IT challenges.",
    ],
  },
];

const portfolio = [
  {
    name: "AMMTB Multi-Agent Trading System",
    description:
      "Built a modular, agent-driven autonomous trading system with a microservices architecture spanning US equities, crypto, and India markets. Features include real-time signal generation, Jito bundle execution, portfolio orchestration, and a React dashboard for live monitoring.",
    image: ammtb,
  },
  {
    name: "NL-to-SQL Query Engine",
    description:
      "Engineered a natural language to SQL translation engine leveraging large language models and schema-aware prompt engineering. Enables non-technical users to query relational databases conversationally with high accuracy and explainability.",
    image: devnotes,
  },
  {
    name: "CineMetrics Movie Analytics Platform",
    description:
      "Developed a full-stack movie analytics platform with a React frontend and Python backend, integrating collaborative filtering, content-based recommendations, and real-time analytics dashboards to deliver personalized movie discovery experiences.",
    image: oscs,
  },
];

export { experiences, portfolio };

