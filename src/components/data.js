import React from "react";

// Minimal inline icon to avoid external assets
const Dot = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
    <circle cx="12" cy="12" r="6" />
  </svg>
);


export const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: <Dot />,
    items: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "Dart",
      "R",
      "SQL",
      "C#",
      "C++",
    ],
  },
  {
    title: "Frontend",
    icon: <Dot />,
  
    items: [
      "React",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Flutter",
      "Bootstrap",
      

    ],
  },
  {
    title: "Backend",
    icon: <Dot />,
    items: [
      "Flask",
      "REST APIs",
      "SQLite",
      ".NET MVC",
      "Authentication (JWT/OAuth basics)",
      
      "API Docs",
      "Express",
      "Node.js",
    ],
  },
  {
    title: "Machine Learning / AI",
    icon: <Dot />,
    items: [
      "PyTorch",
      "TensorFlow",
      "YOLO",
      "OpenCV",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Robotic Process Automation (Power Automate)",
      "HuggingFace",
      "GANs",
      "Data Augmentation (Roboflow)",
      "Model Deployment",
    ],
  },
  {
    title: "Data & Visualisation",
    icon: <Dot />,
    items: [
      "ETL (JSON / CSV)",
      "Data Cleaning & Feature Engineering",
      "SQL / SQLite",
      "MongoDB",
      "Excel",
      "Spark",
      "Hadoop",
      "Matplotlib",
      "Seaborn",
      "Streamlit Dashboards",
      "Reporting (confusion matrices / PR curves)",
    ],
  },
  {
    title: "Practices, Tooling & Others",
    icon: <Dot />,
    items: [
      "Agile Methodologies",
      "Git & GitHub",
      "CI/CD",
      "Documentation",
      "Postman",
      

    ],
  },
];
