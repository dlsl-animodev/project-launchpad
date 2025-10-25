"use client";

import { motion } from "motion/react";
import Committee from "./committee";
import { organizationBody } from "@/lib/predefined-objects";

const MeetTheTeam = () => {
    return (
        <div className="bg-accent border-retro-y py-16 px-4">
            <section>
                <motion.h2
                    className="font-bold font-bebas text-8xl text-center text-primary tracking-wide"
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    MEET THE TEAM
                </motion.h2>
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
            </section>

            <section className="flex flex-col items-center mt-16">
                {Object.entries(organizationBody).map(
                    ([, { title, members, }]) => (
                        <Committee
                            key={title}
                            name={title}
                            officers={members}
                        />
                    )
                )}
            </section>
        </div>
    );
};

export default MeetTheTeam;
