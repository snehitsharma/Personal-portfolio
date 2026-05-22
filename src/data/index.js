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
      "Designed and deployed <span style='color: white;'>conversational AI agents</span> inside Unity VR training environments, enabling real-time user interaction and adaptive learning workflows across client products.",
      "Built an internal <span style='color: white;'>RAG system using LangChain and OpenAI API</span> over a proprietary knowledge base, enabling employees to query company documentation through a conversational LLM interface.",
      "Built and delivered interactive <span style='color: white;'>Power BI dashboards</span> tracking retention rates and session length metrics, providing clients with actionable insights that directly informed product and UX decisions.",
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
      "Built and optimized <span style='color: white;'>PySpark ETL pipelines on Databricks</span> for customer transaction data, including sensitive column masking and data protection compliance at scale.",
      "Designed <span style='color: white;'>FastAPI RESTful APIs improving data retrieval by 40%</span> and optimized PostgreSQL queries via CTEs and execution plan tuning, reducing query time by 30%.",
      "Automated containerized microservice deployments via <span style='color: white;'>Docker and Kubernetes</span>, implementing zero downtime upgrades cutting maintenance downtime by 80%.",
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
    name: "Multi-Agent Autonomous Trading System",
    description:
      "Engineered a multi-agent trading system with ensemble ML models for real-time signal aggregation and buy/sell decision logic, deployed via microservices (Python · FastAPI · React) with a live P&L dashboard and portfolio orchestration across US equities, crypto, and India markets.",
    image: ammtb,
  },
  {
    name: "NL-to-SQL Query Engine",
    description:
      "Built a natural language to SQL engine using Azure OpenAI and LangChain — plain English queries auto-generate and execute correct SQL. Full RAG pipeline with ChromaDB for schema-aware retrieval, React frontend for live query input, and Python backend handling prompt engineering, validation, and execution.",
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

