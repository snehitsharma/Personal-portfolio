import {
  algorithms,
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
    title: "Information Technology",
    company_name: "UMass Boston",
    date: "2023 - 2024",
    details: [
      "Pursuing advanced studies in <span style='color: white;'>System Analysis and Design, Database Management Systems, and Big Data</span>, maintaining a strong GPA of 3.8/4.0.",
  "<span style='color: white;'>Developed expertise in Project Management</span> methodologies and practices, enhancing leadership and organizational skills.",
  "<span style='color: white;'>Applied theoretical knowledge to practical projects</span>, bridging the gap between academic learning and real-world IT challenges.",
    ],
  },
  {
    title: "Assistant System Engineer",
    company_name: "Tata Consultancy Services",
    date: "2021 - 2023",
    details: [
      "Developed and delivered <span style='color: white;'>end-to-end workflows for financial data management</span> and clinical trial platforms for clients including <span style='color: white;'>Comcast and GSK</span>.",
  "<span style='color: white;'>Designed and implemented intuitive dashboards</span> using React.js, GraphQL, and integrated ElasticSearch to enhance search capabilities.",
  "<span style='color: white;'>Collaborated with cross-functional teams</span> to optimize storage and retrieval of large volumes of data, improving query performance by 40%.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Indie",
    date: "2020 - 2021",
    details: [
      "Built and deployed <span style='color: white;'>e-commerce platforms and sports management systems</span> for clients like RichwellTeas and Sports Studio, showcasing full-stack development skills.",
"Designed <span style='color: white;'>data pipelines and cloud architectures</span> for Navam International and A.K. Jain Associates using Cloud services, Python, and data analysis tools.",
"<span style='color: white;'>Implemented ETL processes and automated workflows</span> to handle large volumes of financial and international trade data, improving efficiency and data accessibility.",
    ],
  },
  {
    title: "Computer Science",
    company_name: "SRM",
    date: "2017 - 2021",
    details: [
      "Built a <span style='color: white;'>strong technical foundation</span> studying Computer Science at SRM Institute of Science and Technology.",
"Mastered key subjects including <span style='color: white;'>Data Structures, Machine Learning, Computer Networks, Operating Systems, and Cloud Computing</span>.",
"Demonstrated expertise through <span style='color: white;'>multiple hackathon wins</span> during college, showcasing practical application of academic knowledge.",
    ],
  },
];

const portfolio = [
  {
    name: "Movie Recommendation System",
    description:
      "Developed a full-stack Movie Recommendation System with a React frontend and Python backend, employing collaborative filtering and machine learning libraries to deliver personalized suggestions with high precision.",
    image: oscs,
  },
  {
    name: "Smart Fridge",
    description:
      "Engineered 'Smart Fridge', a full-stack web application using React and Node.js, enabling users to track food inventory, receive expiration alerts, and generate recipe suggestions based on available ingredients.",
    image: devnotes,
  },
  {
    name: "Data Structures & Algorithms",
    description:
      "Demonstrated advanced data structure expertise through 295 algorithmic challenges, earning a 50-day consistency badge and ranking in the top 6.9% of users, showcasing exceptional problem-solving skills across diverse coding scenarios",
    image: algorithms,
  },
];

export { experiences, portfolio };

