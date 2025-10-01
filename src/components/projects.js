export const PROJECTS = [
  {
    title: "House Shortlist",
    subtitle: "Full-Stack webapp",
    blurb:
      "Full-stack property shortlist webapp using React (typescript) and MongoDB.",
    image: "/images/house.jpg",
    video: "/videos/house-shortlist.mp4",
    tech: ["React", "Tailwind CSS", "MongoDB", "Nodejs", "Express"],
  },
  {
    title: "AI Ingredient Detection App",
    subtitle: "Ingredient Detection + Recipe Generation app",
    blurb:
      "Object detection of fridge contents using YOLO in PyTorch, with a Flask API and Flutter front-end, recipes and macros via GPT, SQLite for storage, data labelled and augmented in Roboflow.",
    image: "/images/fridge.jpg",
    video: "/videos/fridge.mp4",
    tech: ["Python", "YOLO", "PyTorch", "OpenCV", "Flask", "Flutter", "SQLite", "REST APIs", "Roboflow"],
  },
  {
    title: "Image Generation Website",
    subtitle: "Full-stack text-to-image with GAN",
    blurb:
      "React + Flask web app integrating a pre-trained GAN model for text-to-image synthesis, with real-time canvas editing and a responsive UI focused on performance and modularity.",
    image: "/images/img-gen.jpg",
    video: "/videos/img-gen.mp4",
    tech: ["Flask", "React", "NodeJS", "Python", "GANs", "HuggingFace", "REST APIs", "HTML/CSS"],
  },
  {
    title: "Fantasy Premier League Analytics",
    subtitle: "Analytics Based Webapp/Dashboard",
    blurb:
      "End-to-end pipeline from official FPL JSON endpoints, engineered features (form, opponent difficulty, minutes), baseline models, and a dashboard for transfer/captain suggestions.",
    image: "/images/fpl.jpg",
    // No video yet → modal shows progress view
    status: "WIP",
    progress: 60, // tweak as you advance
    done: [
      "ETL from official FPL JSON endpoints",
      "Feature engineering (rolling form, xMin, home/away)",
      "Baseline models & evaluation scaffold",
    ],
    next: [
      "Model tuning & cross-validation",
      "Add xG/xA proxies and injury flags",
      "Ship Streamlit dashboard MVP",
    ],
    tech: ["Python", "Pandas", "NumPy", "scikit-learn", "SQL", "REST APIs", "Streamlit/Flask"],
    repo: "",          // optional
    progressUrl: "",   // optional link to a README/Notion/GitHub Project
  },
];