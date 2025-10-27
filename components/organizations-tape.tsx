import React from "react";
import { motion } from "motion/react";

import {
    SectionContainer,
    SectionContainerMain,
} from "./reusables/section";

const OrganizationsTape = () => {
    const orgs = [
        "Org1",
        "Org2",
        "Org3",
        "Org4",
        "Org5",
        "Org6",
        "Org7",
        "Org8",
        "Org9",
        "Org10",
    ];

    const repeatedOrgs = [...orgs, ...orgs, ...orgs];

    return (
        <SectionContainer
            className="w-full overflow-hidden bg-[#F37145] border-retro-y gap-4 py-[2rem]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <SectionContainerMain>
                <div className="relative w-full overflow-hidden">
                    <motion.div
                        className="flex space-x-8 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 50,
                            repeat: Infinity,
                        }}
                    >
                        {repeatedOrgs.map((org, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-white text-black px-6 py-3 border-retro font-semibold text-xl"
                            >
                                <div className="h-14 w-14 border-retro" />
                                {org} Name
                            </div>
                        ))}
                    </motion.div>
                </div>
            </SectionContainerMain>
        </SectionContainer>
    );
};

export default OrganizationsTape;
