import { SECTION_IDS } from "@/lib/scroll-into-view-ids";
import {
    SectionContainer,
    SectionContainerFooter,
    SectionContainerHeader,
    SectionContainerMain,
    SectionContainerSubHeading,
    SectionDescription,
    SectionTitle,
} from "../reusables/section";
import FolderStack from "./folder-stack";

const WhatToExpect = () => {
    const projects = [
        { title: "Project QoL", fillColor: "#FFBE0B" },
        { title: "Project Harmony", fillColor: "#FB5607" },
        { title: "Project Launchpad", fillColor: "#FF006E" },
        { title: "Project Deep Dive", fillColor: "#8338EC" },
        { title: "Project Spotlight", fillColor: "#3A86FF" },
    ];

    return (
        <SectionContainer withDefaultClasses={false} id={SECTION_IDS.FUTURE_PROJECTS}>
          <div>
                <SectionContainerHeader className="sticky top-0 pb-[6rem]">
                    <SectionTitle
                        initial={{ opacity: 0, y: 20, scale: 0.7 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        WHAT TO EXPECT?
                    </SectionTitle>
                    <SectionDescription
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        View our ongoing projects!
                    </SectionDescription>
                </SectionContainerHeader>

                <SectionContainerMain className="relative h-fit">
                    <div className="w-full max-w-4xl mx-auto h-full flex items-start justify-center">
                        <div className="w-full relative">
                            {projects.map((project, index) => (
                                <FolderStack
                                    key={index}
                                    index={index}
                                    title={project.title}
                                    fillColor={project.fillColor}
                                />
                            ))}
                        </div>
                    </div>
                </SectionContainerMain>
            </div>
            <SectionContainerFooter className="mb-[14rem] mt-[20rem]">
                <SectionContainerSubHeading
                    className="text-6xl lg:text-9xl"
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    WE SHARE THE BUILD PROCESS, ARCHITECTURE PLANS, AND
                    PROGRESS.
                </SectionContainerSubHeading>
                <SectionDescription
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    This is a collaborative space, where your thoughts and ideas
                    are welcome as we code a real-world solution!
                </SectionDescription>
            </SectionContainerFooter>
        </SectionContainer>
    );
};

export default WhatToExpect;
