"use client";

import React from "react";

import {
    SectionContainer,
    SectionContainerHeader,
    SectionDescription,
    SectionTitle,
} from "../reusables/section";
import PostStack from "./post-stack";

const BeFeatured = () => {
    const dummyData = [
        {
            name: "John Doe",
            role: "Participant",
            date: "July 10 2025",
            time: "14:00 PM",
            projectName: "Project Alpha",
        },
        {
            name: "Jane Smith",
            role: "Speaker",
            date: "August 5 2025",
            time: "10:00 AM",
            projectName: "Project Beta",
        },
        {
            name: "Alice Johnson",
            role: "Organizer",
            date: "September 15 2025",
            time: "09:00 AM",
            projectName: "Project Gamma",
        },
        {
            name: "Bob Brown",
            role: "Volunteer",
            date: "October 20 2025",
            time: "11:30 AM",
            projectName: "Project Delta",
        },
        {
            name: "Charlie Davis",
            role: "Mentor",
            date: "November 12 2025",
            time: "13:45 PM",
            projectName: "Project Epsilon",
        },
    ];

    return (
        <SectionContainer className="bg-accent border-retro-y py-16 px-4 block">
            <SectionContainerHeader className="sticky top-0">
                <SectionTitle
                    className="text-7xl lg:text-9xl text-primary"
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    BE FEATURED!
                </SectionTitle>
                <SectionDescription className="text-primary">
                    Contribute to our community to get a chance to be featured!
                </SectionDescription>
            </SectionContainerHeader>

            <section className="relative h-fit">
                {/* parent is tall so children can stick and stack as you scroll */}
                <div className="w-full max-w-4xl mx-auto h-full flex items-start justify-center">
                    <div className="w-full relative">
                        {dummyData.map((data, index) => (
                            <PostStack
                                index={index}
                                key={index}
                                name={data.name}
                                role={data.role}
                                date={data.date}
                                time={data.time}
                                projectName={data.projectName}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </SectionContainer>
    );
};

export default BeFeatured;
