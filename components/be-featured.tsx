'use client'

import Button from "./ui/button";
import React, { useEffect, useRef, useState } from "react";

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

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const intervalRef = useRef<number | null>(null);
    const SLIDE_INTERVAL = 4000; 

    const goToIndex = (idx: number) => {
        setCurrentIndex(idx);
    };

    useEffect(() => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        if (!isPaused) {
            intervalRef.current = window.setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % dummyData.length);
            }, SLIDE_INTERVAL);
        }

        return () => {
            if (intervalRef.current) {
                window.clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isPaused, dummyData.length]);

    return (
        <div className="bg-accent border-retro-y py-16 px-4">
            <section>
                <h2 className="font-bold font-bebas text-8xl text-center text-primary tracking-wide">
                    BE FEATURED!
                </h2>
                <p className="text-white text-center">
                    Join one of our events and share your amazing ideas to have
                    an opportunity to be featured on our platform!
                </p>
            </section>


            {/* Carousel wrapper */}
            <div className="mt-16">
                <div
                    className="relative overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className="flex transition-transform duration-700"
                        style={{
                            width: `${dummyData.length * 100}%`,
                            transform: `translateX(-${currentIndex * (100 / dummyData.length)}%)`,
                        }}
                        ref={trackRef}
                    >
                        {dummyData.map((data, index) => (
                            <div
                                key={index}
                                className="w-full flex-shrink-0 px-2"
                                style={{ width: `${100 / dummyData.length}%` }}
                            >
                                <div className="bg-neutral-100 p-6 pb-12 border-retro h-full">
                                    <FeaturedCard
                                        name={data.name}
                                        role={data.role}
                                        date={data.date}
                                        time={data.time}
                                        projectName={data.projectName}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Indicators */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-3 flex gap-2">
                        {dummyData.map((_, idx) => (
                            <button
                                key={idx}
                                aria-label={`Go to slide ${idx + 1}`}
                                onClick={() => goToIndex(idx)}
                                className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-primary" : "bg-neutral-400"}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <Button variant="secondary" className="w-full">
                        Share your entry
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default BeFeatured;

interface FeaturedCardProps {
    name: string;
    role: string;
    message?: string;
    date: string;
    time: string;
    projectName: string;
}
const FeaturedCard: React.FC<FeaturedCardProps> = ({
    name,
    role,
    message,
    date,
    time,
    projectName,
}) => {
    return (
        <div>
            {/* HEADER  */}
            <section className="flex items-center gap-2">
                <div className="w-10 h-10 bg-neutral-700 rounded-full" />
                <span>
                    <p className="font-bold text-xl">{name}</p>
                    <p className="text-neutral-600">{role}</p>
                </span>
            </section>

            {/* MAIN  */}
            <section className="my-2">
                <small>
                    {message
                        ? message
                        : `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                </small>
            </section>

            {/* FOOTER  */}
            <section className="text-neutral-600">
                <small>
                    {date} &#8226; {time} &#8226; {projectName}
                </small>
            </section>
        </div>
    );
};
