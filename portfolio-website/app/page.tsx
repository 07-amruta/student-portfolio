"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

// Reusable component for the Resume Snapshot content
type ResumeContentProps = {
  title: string;
  items: string[];
};

const ResumeContent = ({ title, items }: ResumeContentProps) => (
  <div className="space-y-3">
    <h3
      className="text-lg font-semibold underline underline-offset-4 mb-2"
      style={{ color: "#000000" }} // Black color for subheadings
    >
      {title}
    </h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

type ProjectCardProps = {
  img: string;
  title: string;
  desc: string;
  delay?: number;
};

const ProjectCard = ({ img, title, desc, delay = 0 }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-background/80 backdrop-blur-md border border-border/30 dark:bg-black dark:border-turquoise-500">
      <CardContent className="p-6 flex flex-col items-center text-center dark:text-turquoise-200">
        {img && (
          <img
            src={img}
            alt={title}
            className="rounded-full mb-4 h-40 w-40 object-cover border-4 border-turquoise-400 dark:border-coral-400 shadow-md"
          />
        )}
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm dark:text-turquoise-200">{desc}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default function Portfolio() {
  const controls = useAnimation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  }, [controls]);

  return (
    <div
      className={`min-h-screen scroll-smooth transition-colors duration-500 font-sans ${
        darkMode ? "bg-black text-turquoise-200" : "bg-gradient-to-br from-[#edf1f3] to-[#e0e7ec] text-gray-800"
      }`}
    >
      <nav
        className={`py-4 px-6 sticky top-0 z-50 flex justify-between items-center shadow-md ${
          darkMode ? "bg-black border-b border-coral-400" : "bg-white border-b border-teal-400"
        }`}
      >
        <h1 className="text-xl font-extrabold tracking-wider">Amruta Panda</h1>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {["About", "Resume", "Skills", "Projects", "Contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-300 hover:text-coral-400" : "text-gray-500 hover:text-teal-600"
                }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className="text-xs px-3 py-1 rounded-md border"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </Button>
      </nav>

      {/* ABOUT SECTION */}
      <motion.section
        id="about"
        className="py-24 px-6 md:px-20"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <motion.h2
          className="text-3xl font-extrabold mb-12 text-center"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          style={{ color: darkMode ? '#d1d5db' : '#374151' }} // Light gray for dark mode
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          <img
            src="/my-image.jpg"
            alt="Amruta Panda"
            className="rounded-full w-48 h-48 object-cover border-4 border-teal-400 dark:border-coral-400 shadow-lg"
          />
          <p className="text-base leading-7 text-center md:text-left" style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}>
            I’m Amruta Panda, a B.Tech student in Electronics & Telecommunication Engineering (AI/ML) at MIT-WPU.
            I’m passionate about embedded systems, automation & robotics. I enjoy bringing smart ideas to life through
            code and hardware. I work well in teams, and I’m always excited to learn and experiment with technology.
          </p>
        </div>
      </motion.section>

      {/* RESUME SECTION */}
      <motion.section
        id="resume"
        className="py-20 px-6 md:px-20 bg-gradient-to-br from-transparent to-[#cde9eb] dark:to-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl font-bold text-center mb-8"
          style={{ color: darkMode ? '#d1d5db' : '#374151' }} // Light gray for dark mode
        >
          Resume Snapshot
        </h2>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 text-sm bg-background/80 p-6 rounded-xl shadow-lg border border-border/30 dark:bg-black dark:border-turquoise-500 dark:text-turquoise-200">
          {/* Highlights Section */}
          <ResumeContent
            title="Highlights"
            items={[
              "🎓 Education: 2nd Year B.Tech (E&TC - AI/ML), MIT-WPU Pune",
              "📌 Focus: Embedded Systems, AI/ML, Robotics",
              "🧠 Projects: Home Automation, Blind Stick, Arm Turret, Line Follower",
            ]}
          />
          {/* Skills Section */}
          <ResumeContent
            title="Skills & Tools"
            items={[
              "🛠 Tools: C, C++, Python, Java, ROS2, OpenCV",
              "🤖 Club: Robocon Robotics Club (STM32 + ROS2)",
              "📄 PDF: Download Resume",
            ]}
          />
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        className="py-20 px-6 md:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl font-bold mb-10 text-center"
          style={{ color: darkMode ? '#d1d5db' : '#374151' }} // Light gray for dark mode
        >
          Skills
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-sm dark:text-turquoise-200">
          {["C, C++, Java, Python",
            "Embedded C: TM4C123GH6PGE, STM32, Arduino, ESP32",
            "ROS2, OpenCV, ODrive",
            "Altium, MATLAB",
            "Robocon Robotics (STM32 + ROS2)",
            "Git, GitHub, Version Control",
          ].map((skill, i) => (
            <div
              key={i}
              className="bg-white dark:bg-black dark:text-turquoise-200 p-4 rounded-lg shadow-md border border-border/30 dark:border-turquoise-500"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        className={`py-20 px-6 md:px-20 ${
          darkMode ? "bg-gradient-to-b from-transparent to-black" : "bg-gradient-to-b from-transparent to-[#d6f4f4]"
        }`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{ color: darkMode ? '#d1d5db' : '#374151' }} // Light gray for dark mode
        >
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          <ProjectCard
            img="/home-automation.png"
            title="Smart Home Security System"
            desc="RFID, keypad & camera-based security with alert system. Solo project."
            delay={0.1}
          />
          <ProjectCard
            img="/blind-stick.png"
            title="Smart Blind Stick"
            desc="ESP32-based smart stick with GPS & obstacle sensors."
            delay={0.2}
          />
          <ProjectCard
            img="/robotic-arm.jpg"
            title="AI-Powered Arm Turret"
            desc="ROS2 & CV guided targeting system with ODrive & Nidec motors."
            delay={0.3}
          />
          <ProjectCard
            img="/line-follower.png"
            title="Line Follower Bot"
            desc="Obstacle-avoiding path bot using custom sensors and logic."
            delay={0.4}
          />
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className={`py-20 px-6 md:px-20 ${
          darkMode ? "bg-gradient-to-t from-transparent to-black" : "bg-gradient-to-t from-transparent to-[#d6f4f4]"
        }`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: darkMode ? '#d1d5db' : '#374151' }} // Light gray for dark mode
        >
          Contact
        </h2>
        <div className="text-center space-y-2 text-sm dark:text-turquoise-200">
          <p>
            📧 <a href="mailto:amruta.panda@mitwpu.edu.in" className="text-teal-600 dark:text-coral-300 hover:underline">
              amruta.panda@mitwpu.edu.in
            </a>
          </p>
          <p>
            💼 <a href="https://www.linkedin.com/in/amruta-panda-700128288" target="_blank" className="text-teal-600 dark:text-coral-300 hover:underline">
              LinkedIn
            </a>
          </p>
          <p>
            💻 <a href="https://github.com/07-amruta" target="_blank" className="text-teal-600 dark:text-coral-300 hover:underline">
              GitHub
            </a>
          </p>
        </div>
      </motion.section>
    </div>
  );
}
