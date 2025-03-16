import React from "react";
import proImage1 from "../../public/images/6pray time.jpg";
import proImage2 from "../../public/images/2Finsweet Agency.jpeg";
import proImage3 from "../../public/images/3indicorp.jpg";
import proImage4 from "../../public/images/4next-store.jpg";
import proImage5 from "../../public/images//5UI.dest Just Eat healthy.jpg";
import proImage6 from "../../public/images/1create-cars.jpg";
import proImage7 from "../../public/images/7To-Do.jpg";
import {motion} from "framer-motion";

const projectsData = [
    {
        image: proImage1,
        title: "Pray Time",
        description: "A useful application for Muslims. It shows prayer times and calendars.",
        technologies: ["HTML", "CSS", "SASS", "JAVASCRIPT"],
        link: "https://remarkable-faun-fdbd43.netlify.app/",
    },
    {
        image: proImage2,
        title: "Finsweet Agency",
        description: "Template Website The Era Of Technology",
        technologies: ["HTML", "CSS", "SASS"],
        link: "https://finsweetagencycom.netlify.app/",
    },
    {
        image: proImage3,
        title: "Indicorp",
        description: "Dark Web Page Template",
        technologies: ["HTML", "CSS", "TAILWIND"],
        link: "https://indicorppcom.netlify.app/",
    },
    {
        image: proImage4,
        title: "Next-store",
        description: "Online Technical Internet Store",
        technologies: ["HTML", "CSS", "TAILWIND", "JAVASCRIPT", "REACT-FRAMEWORK"],
        link: "https://nextstoreuzz.netlify.app/",
    },
    {
        image: proImage5,
        title: "UI.dest",
        description: "Just Eat healthy food to live a healthier life",
        technologies: ["HTML", "CSS", "SASS"],
        link: "https://uideskjusteathealthy.netlify.app/",
    },
    {
        image: proImage6,
        title: "Create Info Cars",
        description: "Generating information about different types of machines using Javascript",
        technologies: ["HTML", "CSS", "SASS", "JAVASCRIPT"],
        link: "https://createcars.netlify.app/",
    },
    {
        image: proImage7,
        title: "To-Do",
        description: "You can create everything. What you want. It's just practical for you",
        technologies: ["HTML", "CSS", "TAILWIND", "REACT-FRAMEWORK", "JAVASCRIPT"],
        link: "https://bejewelled-ganache-e5ac16.netlify.app/?#",
    },
];

const ScrollReveal = ({children}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
        >
            {children}
        </motion.div>
    );
};

const ProjectCard = ({project}) => {
    return (
        <ScrollReveal>
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
                <a href={project.link}>
                    <img
                        src={project.image}
                        alt=""
                        className="w-full cursor-default rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
                    />
                </a>

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <div className="text-xl font-semibold">{project.title}</div>
                        <p className="text-gray-400">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-5">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="rounded-lg bg-blue-600 p-3">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
};

const Projects = () => {
    return (
        <div
            id="projects"
            className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
        >
            <ScrollReveal>
                <h1 className="bg-gradient-to-r from bg-indigo-500 to-blue-500 bg-clip-text text-transparent  text-4xl font-light text-white md:text-6xl">
                    MAS Projects
                </h1>
            </ScrollReveal>

            <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};
export default Projects;
