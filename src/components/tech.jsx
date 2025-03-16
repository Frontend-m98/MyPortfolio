import React from "react";
import { AiTwotoneHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaGithubSquare, FaNodeJs, FaReact } from "react-icons/fa";
import {
  RiBootstrapFill,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiAstro } from "react-icons/si";
import { TbBrandSass } from "react-icons/tb";
import { motion } from "framer-motion";

const Technologies = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-4xl font-light text-white md:text-6xl"
      >
       MAS Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <AiTwotoneHtml5 className="w-25 cursor-pointer text-[80px] text-blue-600 transition-all duration-300 hover:-translate-x-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <BiLogoCss3 className="w-25 cursor-pointer text-[80px] text-yellow-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <TbBrandSass className="w-25 cursor-pointer text-[80px] text-pink-600 transition-all duration-300 hover:-translate-x-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <RiBootstrapFill className="w-25 cursor-pointer text-[80px] text-blue-800 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <RiTailwindCssFill className="w-25 cursor-pointer text-[80px] text-blue-600 transition-all duration-300 hover:-translate-x-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <BiLogoJavascript className="w-25 cursor-pointer text-[80px] text-orange-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <BiLogoTypescript className="w-25 cursor-pointer text-[80px] text-sky-600 transition-all duration-300 hover:-translate-x-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <FaNodeJs className="w-25 cursor-pointer text-[80px] text-sky-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <FaReact className="w-25 cursor-pointer text-[80px] text-sky-600 transition-all duration-300 hover:-translate-x-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <SiAstro className="w-25 cursor-pointer text-[80px] text-sky-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <RiNextjsLine className="w-25 cursor-pointer text-[80px] text-sky-600 transition-all duration-300 hover:-translate-x-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <FaGithubSquare className="w-25 cursor-pointer text-[80px] text-gray-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </div>
      </div>
    </div>
  );
};
export default Technologies;
