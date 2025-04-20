"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import RoboticPopup from "../components/ui/RoboticPopup";
import {
  FaCode,
  FaMicrochip,
  FaRobot,
  FaDraftingCompass,
  FaGitAlt,
  FaNetworkWired,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

type ResumeContentProps = {
  title: string;
  items: string[];
};

const ResumeContent = ({ title, items }: ResumeContentProps) => (
  <div className="space-y-3">
    <h3 className="text-lg font-semibold underline underline-offset-4 mb-2">
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
    whileHover={{
      scale: 1.05,
      boxShadow: "0 0 25px rgba(255, 127, 80, 0.5)",
    }}
    className="transition-transform duration-300"
  >
    <Card className="bg-background/80 backdrop-blur-md border border-border/30 dark:bg-black dark:border-turquoise-500">
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
  const [showCat, setShowCat] = useState(false);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  }, [controls]);

  const skills = [
    {
      icon: <FaCode size={24} />,
      label: "C, C++, Java, Python",
    },
    {
      icon: <FaMicrochip size={24} />,
      label: "Embedded C: TM4C123GH6PGE, STM32, Arduino, ESP32",
    },
    {
      icon: <FaRobot size={24} />,
      label: "ROS2, OpenCV, ODrive",
    },
    {
      icon: <FaDraftingCompass size={24} />,
      label: "Altium, MATLAB",
    },
    {
      icon: <FaNetworkWired size={24} />,
      label: "Robocon Robotics (STM32 + ROS2)",
    },
    {
      icon: <FaGitAlt size={24} />,
      label: "Git, GitHub, Version Control",
    },
  ];

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 relative z-0 overflow-hidden ${
        darkMode
          ? "bg-black text-turquoise-200"
          : "bg-gradient-to-br from-[#edf1f3] to-[#e0e7ec] text-gray-800"
      }`}
    >
      <RoboticPopup />
      <nav className={`py-4 px-6 sticky top-0 z-50 flex justify-between items-center shadow-md ${
        darkMode ? "bg-black border-b border-coral-400" : "bg-white border-b border-teal-400"
      }`}>
        <h1 className="text-xl font-extrabold tracking-wider">Amruta Panda</h1>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {["About", "My Journey", "Skills", "Projects", "Contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase().replace(/ /g, "")}`}
                className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-300 hover:text-coral-400" : "text-gray-500 hover:text-teal-600"
                }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 items-center">
          <Button
            variant="outline"
            className="text-xs px-3 py-1 rounded-md border"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </Button>
        </div>
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
          style={{ color: darkMode ? "#d1d5db" : "#374151" }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          <img
            src="/my-image.jpg"
            alt="Amruta Panda"
            className="rounded-full w-48 h-48 object-cover border-4 border-teal-400 dark:border-coral-400 shadow-lg"
          />
          <p
            className="text-base leading-7 text-center md:text-left"
            style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}
          >
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
        className="text-3xl font-bold text-center mb-14"
        style={{ color: darkMode ? "#d1d5db" : "#374151" }}
      >
        My Journey 🚀
      </h2>

      <div className="relative max-w-3xl mx-auto before:content-[''] before:absolute before:w-1 before:h-full before:bg-gray-300 dark:before:bg-turquoise-500 before:left-1/2 before:transform before:-translate-x-1/2">

        {[
          {
            icon: "🎓",
            title: "B.Tech @ MIT-WPU",
            description: "Electronics & Telecommunication (AI/ML), Class of 2027",
            xDir: -50,
          },
          {
            icon: "📌",
            title: "Tech Focus",
            description: "Embedded Systems, Logic Building, Robotics, AI/ML",
            xDir: 50,
          },
          {
            icon: "🛠",
            title: "Projects",
            description: "Home Automation · Blind Stick · Arm Turret · Line Follower",
            xDir: -50,
          },
          {
            icon: "🤖",
            title: "Robocon Robotics Club",
            description: "STM32 & ROS2 focused robotic systems with automation goals",
            xDir: 50,
          },
          {
            icon: "🎯",
            title: "Goals",
            description: "Pursue higher studies and explore AI/ML & Robotics careers",
            xDir: -50,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="mb-12 flex flex-col md:flex-row items-center md:items-start relative"
            initial={{ opacity: 0, x: item.xDir }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className={`w-full md:w-1/2 ${
                item.xDir > 0
                  ? "md:pl-8 md:ml-auto text-left"
                  : "md:pr-8 text-right"
              }`}
            >
              <div
                className={`
                  p-6 rounded-2xl shadow-xl border transition-all duration-300
                  ${
                    darkMode
                      ? "bg-gray-100 border-gray-200 text-gray-900"
                      : "bg-white border-gray-200 text-gray-800 hover:shadow-xl"
                  }
                `}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>

            {/* Animated Dot */}
            <div className="hidden md:block w-6 h-6 bg-turquoise-400 border-4 border-white dark:border-black rounded-full absolute left-1/2 transform -translate-x-1/2 top-2 animate-pulse shadow-lg"></div>
          </motion.div>
        ))}
      </div>
    </motion.section>

      {/* SKILLS SECTION */}
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
          style={{ color: darkMode ? "#d1d5db" : "#374151" }}
        >
          Skills
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-sm">
          {skills.map(({ icon, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: darkMode
                  ? "0 0 18px rgba(255, 127, 80, 0.6)" // coral glow
                  : "0 0 15px rgba(0, 200, 200, 0.4)", // turquoise glow
                transition: { type: "spring", stiffness: 300 },
              }}
              className="p-5 rounded-lg shadow-md border border-border/30 bg-white/90 dark:bg-black/50 text-gray-800 dark:text-turquoise-200 transition-all duration-300 flex flex-col items-center gap-2"
            >
              <div>{icon}</div>
              <span className="text-xs font-medium">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS SECTION */}
      <motion.section
        id="projects"
        className={`py-20 px-6 md:px-20 ${
          darkMode
            ? "bg-gradient-to-br from-transparent to-[#cde9eb]" 
            : "bg-gradient-to-b from-transparent to-[#d6f4f4]"
        }`}        
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{ color: darkMode ? "#d1d5db" : "#374151" }}
        >
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {[ // Projects array for easier scalability
            {
              img: "/home-automation.png",
              title: "Smart Home Security System",
              desc: "RFID, keypad & camera-based security with alert system. Solo project.",
              delay: 0.1,
            },
            {
              img: "/blind-stick.png",
              title: "Smart Blind Stick",
              desc: "ESP32-based smart stick with GPS & obstacle sensors.",
              delay: 0.2,
            },
            {
              img: "/robotic-arm.jpg",
              title: "AI-Powered Arm Turret",
              desc: "ROS2 & CV guided targeting system with ODrive & Nidec motors.",
              delay: 0.3,
            },
            {
              img: "/line-follower.png",
              title: "Line Follower Bot",
              desc: "Obstacle-avoiding path bot using custom sensors and logic.",
              delay: 0.4,
            },
          ].map(({ img, title, desc, delay }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: darkMode
                  ? "0 0 25px rgba(255, 127, 80, 0.5)" // coral glow
                  : "0 0 25px rgba(0, 200, 200, 0.4)", // turquoise glow
              }}
              className="transition-transform duration-300"
            >
              <Card className="bg-background/80 backdrop-blur-md border border-border/30 dark:bg-black dark:border-turquoise-500">
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
          ))}
        </div>
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section
      id="contact"
      className={`py-20 px-6 md:px-20 ${
        darkMode
          ? "bg-gradient-to-t from-transparent to-black"
          : "bg-gradient-to-t from-transparent to-[#d6f4f4]"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2
        className="text-3xl font-bold mb-12 text-center"
        style={{ color: darkMode ? "#d1d5db" : "#374151" }}
      >
        Let’s Connect
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {/* GitHub Card */}
        <div
          className={`flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 ${
            darkMode
              ? "bg-white text-black hover:shadow-coral-300/50"
              : "bg-white text-gray-800 hover:shadow-turquoise-300/50"
          }`}
        >
          <FaGithub className="text-4xl mb-4 text-white bg-black rounded-full p-2" />
          <h3 className="text-xl font-semibold mb-2">GitHub</h3>
          <p className="text-sm text-center mb-4">Explore my code and projects</p>
          <a
            href="https://github.com/07-amruta"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 shadow-md group bg-[#b3e5fc] text-black hover:bg-[#a0d8f1]"
          >
            Follow
          </a>
        </div>

        {/* LinkedIn Card */}
        <div
          className={`flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 ${
            darkMode
              ? "bg-white text-black hover:shadow-coral-300/50"
              : "bg-white text-gray-800 hover:shadow-turquoise-300/50"
          }`}
        >
          <FaLinkedin className="text-4xl mb-4 text-white bg-[#0A66C2] rounded-full p-2" />
          <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
          <p className="text-sm text-center mb-4">Connect professionally with me</p>
          <a
            href="https://www.linkedin.com/in/amruta-panda-700128288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 shadow-md group bg-[#b3e5fc] text-black hover:bg-[#a0d8f1]"
          >
            Connect
          </a>
        </div>

        {/* Email Card */}
        <div
          className={`flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 ${
            darkMode
              ? "bg-white text-black hover:shadow-coral-300/50"
              : "bg-white text-gray-800 hover:shadow-turquoise-300/50"
          }`}
        >
          <FaEnvelope className="text-4xl mb-4 text-white bg-[#1E40AF] rounded-full p-2" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-sm text-center mb-4">Let’s chat or collaborate!</p>
          <a
            href="mailto:amruta.panda@mitwpu.edu.in"
            className="relative inline-block px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 shadow-md group bg-[#b3e5fc] text-black hover:bg-[#a0d8f1]"
          >
            Say Hi ✨
          </a>
        </div>
      </div>
    </motion.section>

    </div>
  );
}
