import { useState, useEffect } from "react";
import { FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

const jokes = [
  "Why did the robot go on a diet? Too many bytes!",
  "01000010 01111001 01100101 means 'Bye' in binary 🧠",
  "I told my bot to chill... now it’s frozen 🥶",
  "Robots love dark mode—it’s easier on their circuits 😉",
  "Why don’t robots ever panic? They always keep it together!",
  "What did the robot say to the broken toaster? 'I think you need a reboot.'",
  "How do robots fix a broken heart? With a little bit of coding 💔💻",
  "Why did the robot get a promotion? It was always working overtime!",
  "Why was the robot so good at making friends? It was great at networking!",
  "What do you call a robot that likes to play music? A drum-bot!",
  "I asked my robot for a joke, but it gave me a serious error message.",
  "Why don’t robots ever get lost? They always follow the right path… with a little help from GPS!",
];

const RoboticPopup = () => {
  const [visible, setVisible] = useState(true);
  const [joke, setJoke] = useState(jokes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-gradient-to-r from-[#C1A4E6] to-[#D8C6F5] text-white p-5 rounded-xl shadow-lg max-w-xs z-50 w-80"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
      transition={{ duration: 0.6 }}
      onClick={() => setVisible(false)}
    >
      <div className="flex items-center gap-4">
        <FaRobot className="text-4xl text-purple-700" />
        <div className="flex flex-col justify-center">
          <p className="text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">{joke}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default RoboticPopup;
