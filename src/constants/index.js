import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hey, I'm Yaswanth Rajeev, a freshman at Model Engineering College, Thrikkakara. I'm a passionate computer science student with strong problem-solving skills and a desire to continuously learn and grow in the field. Seeking internships and entry-level opportunities to apply my knowledge and contribute to innovative projectsI am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Flask, MySQL, . My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, Python, Opencv. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 June 16 - June 27",
    role: "Full Stack Developer Intern",
    company: "Gadgeon Smart Systems Pvt. Ltd.",
    description: `Worked on building a full-stack microservices-based web application with real-time sentiment analysis. Developed the frontend with React.js and
    Tailwind CSS, implemented the backend using FastAPI and SQLite, integrated RabbitMQ for messaging, and deployed the solution using Docker
    and GitHub Pages.`,
    technologies: ["FastAPI", "React.js", "RabbitMQ", "Docker", "Hugging Face"],
  },
];

export const PROJECTS = [
  {
    title: "Pedestrian Detection",
    image: project2,
    description:
      "Real-time pedestrian detection system using computer vision to enhance safety and automation.",
    technologies: ["Next.js", "Python", "Opencv", "Flask", "Supabase"],
  },
  {
    title: "Subtitle Generator",
    image: project1,
    description:
      "Automatic subtitle generator that converts speech to synced text using speech recognition.",
    technologies: ["Whisper", "Python","Flask", "numpy"],
  },
  {
    title: "TIK TAK TOE GAME",
    image: project1,
    description:
      " A simple and interactive 3x3 grid game where players compete to align three markers in a row. Built with a focus on clean design and smooth functionality, it offers an enjoyable experience for both single and multiplayer modes.",
    technologies: ["HTML","CSS","REACT"],
  },
  {
    title: "MicroForum Platform",
    image: project3,
    description:
      "A Microforum platform with sentiment analysis",
     technologies: ["FastAPI", "React.js", "RabbitMQ", "Docker", "Hugging Face"],
  },
 
];

export const CONTACT = {
  address: "Padickal Puthen Veedu,Aimury PO, Perumbavoor",
  phoneNo: "+91 7034017146",
  email: "yaswanthrajeev@gmail.com",
};
