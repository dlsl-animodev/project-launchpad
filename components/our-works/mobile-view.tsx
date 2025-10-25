import { Figma, Github, Globe2, X, Minus, Square } from "lucide-react";
import { motion } from "motion/react";
import { StaticImageData } from "next/image";
import React from "react";
import ImageHandler from "../image-handler";
import { projects } from "./projects";

const MobileView = () => {
    return (
        <div className="flex flex-col items-center ">
            {/* Header Section */}
            <div className="sticky top-0 bg-background z-20 w-full">
                <motion.h2
                    className="font-bold font-bebas text-8xl text-center "
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    OUR WORKS
                </motion.h2>
            </div>

            {/* Project Section */}
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    githubLink={project.githubLink}
                    figmaLink={project.figmaLink}
                    liveDemoLink={project.liveDemoLink}
                />
            ))}
        </div>
    );
};

export default MobileView;

interface ProjectProps {
    title: string;
    githubLink: string;
    figmaLink: string;
    liveDemoLink: string;
    description: string;
    imageUrl?: StaticImageData;
}

const Project: React.FC<ProjectProps> = ({
    title,
    githubLink,
    figmaLink,
    liveDemoLink,
    description,
    imageUrl,
}) => {
    return (
        <section className="h-[180vh] relative w-full px-4">
            {/* Sticky Preview */}
            <div className="sticky top-[6rem] z-10">
                <motion.section
                    className="bg-accent border-retro flex flex-col items-center justify-between p-4 mx-auto aspect-square "
                    initial={{ scale: 0, y: 30, opacity: 0.8 }}
                    whileInView={{ scale: 1, y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 90,
                        damping: 15,
                        delay: 0.05,
                    }}
                    viewport={{ amount: 0.6 }}
                >
                    <div className="border-retro bg-primary flex items-center justify-between px-4 py-2 w-full mb-2">
                        <p className="font-bold">{title}</p>
                        <div className="flex items-center gap-2">
                            <Minus
                                className="bg-accent  border-retro"
                                size={27}
                                color="white"
                            />
                            <Square
                                className="bg-accent  border-retro p-1"
                                size={27}
                                color="white"
                            />
                            <X
                                className="bg-accent border-retro"
                                size={27}
                                color="white"
                            />
                        </div>
                    </div>
                    <ImageHandler />
                </motion.section>
            </div>

            {/* Project Info */}
            <div className="relative z-0">
                <motion.h2
                    className="text-5xl mt-[10rem] mx-4 relative z-20"
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    {title}
                </motion.h2>

                <motion.div
                    className="mx-4 mt-6 font-semibold flex gap-2 items-center relative z-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <Figma
                        className="shrink-0 border-retro bg-primary p-1"
                        size={40}
                    />
                    <p className="break-all underline underline-offset-4">
                        {figmaLink || "Not available"}
                    </p>
                </motion.div>

                <motion.div
                    className="mx-4 mt-6 font-semibold flex gap-2 items-center relative z-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    <Github
                        className="shrink-0 border-retro bg-primary p-1"
                        size={40}
                    />
                    <p className="break-all underline underline-offset-4">
                        {githubLink || "Not available"}
                    </p>
                </motion.div>

                <motion.div
                    className="mx-4 mt-6 font-semibold flex gap-2 items-center relative z-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >
                    <Globe2
                        className="shrink-0 border-retro bg-primary p-1"
                        size={40}
                    />
                    <p className="break-all underline underline-offset-4">
                        {liveDemoLink || "Not available"}
                    </p>
                </motion.div>

                <motion.p
                    className="mx-4 mt-6 font-semibold text-lg h-screen relative z-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15, delay: 0.1 }}
                >
                    {description}.
                </motion.p>
            </div>
        </section>
    );
};
