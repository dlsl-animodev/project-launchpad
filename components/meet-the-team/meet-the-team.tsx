"use client";

import { motion } from "motion/react";
import Committee from "./committee";
import { organizationBody } from "@/lib/predefined-objects";
import {
    SectionContainer,
    SectionContainerHeader,
    SectionContainerMain,
    SectionTitle,
} from "../reusables/section";

const MeetTheTeam = () => {
    return (
        <SectionContainer className="bg-accent border-retro-y py-16">
            <SectionContainerHeader>
                <SectionTitle
                    className="text-8xl text-primary"
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    MEET THE TEAM
                </SectionTitle>
                <motion.p
                    className="text-white text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    Our team is a diverse group of passionate dedicated students
                    fostering a collaborative environment where students from
                    all backgrounds can thrive and innovate together.
                </motion.p>
            </SectionContainerHeader>
            <SectionContainerMain className="flex flex-col items-center">
                {/* Team Committees */}
                {Object.entries(organizationBody).map(
                    ([, { title, members }], index) => (
                        <Committee
                            key={title}
                            name={title}
                            officers={members}
                            index={index}
                        />
                    )
                )}
            </SectionContainerMain>
        </SectionContainer>
    );
};

export default MeetTheTeam;
