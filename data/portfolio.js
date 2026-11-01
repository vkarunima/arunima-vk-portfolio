// All site content lives here. Edit this file to customize the portfolio.
export const profile = {
  name: "Arunima V K",
  title: "AI / ML Engineer",
  statement:
    "Computer Science undergraduate who builds machine learning and computer vision systems, from a video anomaly detection system to a RAG-based assistant for government schemes.",
  facts: [
    "B.Tech Computer Science, Rajagiri School of Engineering and Technology (2023–2027), CGPA 8.53",
    "Machine Learning Intern at Keltron",
    "Backend Developer on SchemeSmart AI, a team of 4",
  ],
  about: [
    "I am a Computer Science undergraduate with hands-on experience in Python, web development, machine learning and databases. I have a strong foundation in data structures and algorithms, DBMS and software development.",
    "My work spans AI-enabled applications and a video anomaly detection system. Through internships, projects, hackathons and student leadership roles, I have worked as both a team member and a team lead.",
  ],
  location: "Kochi, Kerala",
  email: "u2303057@rajagiri.edu.in",
  phone: "+91 7907374536",
  linkedin: "https://www.linkedin.com/in/arunima-v-k",
  github: "", // Paste your GitHub profile URL here
};

export const projects = [
  {
    name: "SchemeSmart AI",
    tag: "Web application, NLP, RAG",
    problem: "Citizens find it hard to discover the government welfare schemes they are eligible for.",
    solution:
      "An AI-powered web app that matches a person's profile and eligibility to schemes. A TF-IDF recommender ranks schemes against user requirements, and a RAG chatbot using Llama 3 answers scheme questions in plain language. An AI-assisted form-filling demo guides users through application forms and validates inputs.",
    tech: ["TF-IDF", "RAG", "Llama 3"],
    role: "Backend Developer in a team of 4. Contributed to eligibility matching, frontend integration, testing and notification features.",
    outcome: "A working app combining personalised recommendations, a retrieval-based chatbot and a form-filling demo.",
  },
  {
    name: "Video Anomaly Detection System",
    tag: "Computer vision",
    solution: "A system that detects anomalies in video.",
  },
  {
    name: "Face Detection and Age & Gender Estimation",
    tag: "Computer vision, internship project",
    problem: "Estimate a person's age and gender from live video.",
    solution:
      "A webcam pipeline that processes live frames, finds faces with an OpenCV DNN detector, and predicts age and gender with pretrained models.",
    tech: ["Python", "OpenCV"],
    role: "Built the pipeline during the Machine Learning internship at Keltron Knowledge Centre, Kaloor: preprocessing, model integration and real-time prediction.",
    outcome: "Real-time face, age and gender prediction from a webcam stream.",
  },
];

export const experience = [
  {
    role: "Machine Learning Intern",
    company: "Keltron",
    points: [
      "Developed machine learning models for cancer prediction and age-gender detection using Python, TensorFlow and Scikit-learn.",
      "Applied feature selection techniques that improved model performance by 20%.",
    ],
  },
];

export const skills = [
  { group: "AI / ML", items: "Machine Learning, TensorFlow, Scikit-learn, OpenCV, NLP, Retrieval-Augmented Generation (RAG)" },
  { group: "Programming", items: "Python, C, Java" },
  { group: "Web and backend", items: "FastAPI, REST APIs, HTML, CSS, SQLite, MySQL, Supabase" },
  { group: "CS fundamentals", items: "Data Structures and Algorithms, OOP, DBMS, SQL" },
  { group: "Tools", items: "Git, GitHub, Figma" },
];

export const education = [
  "B.Tech in Computer Science, Rajagiri School of Engineering and Technology, Kochi. CGPA 8.53, 2023–2027",
  "CBSE Class XII, Lake Ford School. 95.4%, 2023",
  "CBSE Class X, Lake Ford School. 95%, 2022",
];

export const certifications = [
  "Pursuing an Honours Degree in Machine Learning",
  "NPTEL certification in Data Structure and Algorithm Design, IIT Kanpur",
  "Web development training, Qnayds LLP",
  "Ongoing: Complete Web Design, Figma to Webflow to Freelancing (Udemy)",
];

export const leadership = [
  "Creative Co-Lead, ACM, Rajagiri School of Engineering and Technology (2025)",
  "Placement Cell Representative, Engineering batch 2023–2027",
  "Core committee member for the college tech fest Techshetra 2026",
  "Team lead across group projects, presentations and hackathons",
  "Selected for HACKERNEL, a 24-hour hackathon by Hack Club Ernakulam",
  "Participant, Cymonic 5-hour hackathon",
];
