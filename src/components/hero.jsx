import React from "react";
import image from "../../public/hero.jpg";
import {motion} from "framer-motion";
import {TbCloudDownload} from "react-icons/tb";

const Hero = () => {
    return (
        <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
            <div className="flex flex-col items-center justify-center gap-10 text-white">
                <motion.div
                    initial={{y: -200, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    <img
                        src={image}
                        alt="hero"
                        className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
                    />
                </motion.div>

                <div className="flex flex-col items-center justify-center mt-2 gap-3 space-y-6 p-2">
                    <a
                        href="https://docs.google.com/document/d/14YNtc0M3m1GX3t8aEF3UDv2pV9T-Z9QckaGX9z5SKi0/edit?tab=t.0"
                        download
                        className="flex justify-center items-center rounded-lg border border-indigo-600 border-e-gray-500 px-5 py-3 text-md font-bold text-sky-400 shadow-lg shadow-indigo-900 transition-all duration-300 hover:bg-gray-500"
                    >
                        Download CV
                        <span>
                            <TbCloudDownload />
                        </span>
                    </a>
                </div>

                <motion.div
                    initial={{y: 200, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
                    className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
                >
                    <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-6xl transition-all duration-300 hover:opacity-100">
                        MAS
                    </h1>
                    <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl">
                        Web Developer
                    </h3>
                    <p className="md:text-base text-pretty text-sm text-gray-300 lg:w-[1000px]">
                        Creative and detail-oriented Junior Frontend Developer with a passion for crafting responsive,
                        user-friendly web applications.Successfully developed dynamic projects using React , TypeScript
                        and Sass ensuring seamless design implementation and performance. Motivated by problem-solving
                        and delivering exceptional user experiences, i excel in building clean, maintainable code.
                        Skilled in modern Javascript frameworks API integration and responsive design techniques. I
                        focus on improving user experience and making web applications efficient and intuitive. I'm
                        always eager to learn new technologies to achieve excellence in every project. I have strong
                        skills in optimizing code, debugging and collaborating effectively. I thrive in a team
                        environment and enjoy finding innovative solutions always ready to take on new challenges and
                        achieve greater goals.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
export default Hero;
