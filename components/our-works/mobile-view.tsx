import { Figma, Github, Globe2, X, Minus, Square } from "lucide-react";
import { motion } from "motion/react";
import { StaticImageData } from "next/image";
import React from "react";
import ImageHandler from "../image-handler";
import { projects, ProjectType } from "./projects";
import {
    SectionContainer,
    SectionContainerHeader,
    SectionTitle,
} from "../reusables/section";

const MobileView = () => {
    return (
        <SectionContainer>
            <SectionContainerHeader className="sticky top-0 bg-background z-20 w-full">
                <SectionTitle
                    className="text-8xl"
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    OUR WORKS
                </SectionTitle>
            </SectionContainerHeader>

            {projects.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </SectionContainer>
    );
};

export default MobileView;

interface ProjectProps {
    project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
    return (
        <section className="h-[150vh] relative w-full ">
            {/* Sticky Preview */}
            <div className="sticky top-[6rem] z-10">
                <motion.section
                    className="bg-accent border-retro flex flex-col items-center justify-between p-4 mx-auto"
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
                        <p className="font-bold">{project.title}</p>
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
                    <ImageHandler className="aspect-video" />
                </motion.section>
            </div>

            {/* Project Info */}
            <div className="relative z-0 mt-[4rem]">
                <motion.h2
                    className="text-5xl  mx-4 relative z-20"
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    {project.title}
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
                        {project.figmaLink || "Not available"}
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
                        {project.githubLink || "Not available"}
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
                        {project.liveDemoLink || "Not available"}
                    </p>
                </motion.div>

                <motion.p
                    className="mx-4 mt-6 font-semibold text-lg h-screen relative z-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15, delay: 0.1 }}
                >
                    {project.description}
                </motion.p>
            </div>
        </section>
    );
};
