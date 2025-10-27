import { Figma, Github, Globe2, Minus, Square, X } from "lucide-react";
import { motion } from "motion/react";

import { projects, ProjectType } from "./projects";
import ImageHandler from "../image-handler";
import {
    SectionContainer,
    SectionContainerHeader,
    SectionContainerMain,
    SectionDescription,
    SectionTitle,
} from "../reusables/section";
import { SECTION_IDS } from "@/lib/scroll-into-view-ids";

const DesktopView = () => {
    return (
        <SectionContainer id={SECTION_IDS.OUR_WORKS}>
            <SectionContainerHeader>
                <SectionTitle
                    className="text-8xl lg:text-9xl"
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.1 }}
                >
                    OUR WORKS
                </SectionTitle>
                <SectionDescription
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, delay: 0.2 }}
                >
                    A showcase of the apps and ideas we have brought to life.
                </SectionDescription>
            </SectionContainerHeader>
            <SectionContainerMain>
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </SectionContainerMain>
        </SectionContainer>
    );
};

export default DesktopView;

interface ProjectProps {
    project: ProjectType;
}
const Project: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div className="h-[150vh] w-full pb-[5rem]">
            <div className="flex flex-col-reverse lg:flex-row w-full h-full">
                <div className="w-1/2">
                    <div className="h-screen flex flex-col mx-[4rem] justify-center">
                        <motion.h2
                            className="text-8xl "
                            initial={{ opacity: 0, y: 20, scale: 0.7 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.15 }}
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
                            className="mt-[2rem] font-semibold text-justify text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                        >
                            {project.description}
                        </motion.p>
                    </div>
                </div>

                <div className="w-1/2 flex items-start">
                    <div className="sticky top-24 w-full h-[60vh] flex items-center justify-center">
                        <motion.section
                            className="bg-accent border-retro flex flex-col items-center justify-between aspect-video p-4 w-[90%]"
                            initial={{ scale: 0, y: 30, opacity: 0.8 }}
                            whileInView={{ scale: 1, y: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 90,
                                damping: 15,
                                delay: 0.05,
                            }}
                        viewport={{ amount: 0.2, margin: "-50px 0px" }}

                        >
                            <div className="border-retro bg-primary flex items-center justify-between px-4 py-2 w-full mb-2">
                                <p className="font-bold"> Project QoL </p>
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
                </div>
            </div>
        </div>
    );
};
