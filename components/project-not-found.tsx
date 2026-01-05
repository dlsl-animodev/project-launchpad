import { twMerge } from "tailwind-merge";
import { X } from "lucide-react";
import Button from "./ui/button";
import React from "react";

const ProjectNotFound = () => {
    return (
        <div className="relative bg-accent h-[25rem] lg:h-[40rem] lg:w-[50rem] mx-[1rem] border-retro p-2 flex flex-col justify-between">
            {/* Header  */}
            <div className="bg-primary flex justify-between items-center px-2 py-1">
                <p className="font-bold">404 NOT FOUND</p>
                <X className="bg-accent text-white border-r-2 border-b-2 border-secondary" />
            </div>
            {/* Main  */}
            <p className="text-primary font-semibold text-center">
                No finished project found, <br /> work in progres.
            </p>
            {/* Footer  */}
            <Button className="mb-4 w-fit place-self-center">UPCOMING WORKS</Button>

            {/* Triangles */}
            {/* Top Triangle  */}
            <ExclamationTriangle
                className="-top-10 right-12"
            />
            {/* Bottom Triangle  */}
            <ExclamationTriangle 
                className="-bottom-5 -left-2"
            />
        </div>
    );
};

export default ProjectNotFound;

interface ExclamationTriangleProps {
    className? : string;
    borderTriangleClassName?: string;
    innerTriangleClassName?: string;
    contentClassName? : string;
}

const ExclamationTriangle: React.FC<ExclamationTriangleProps> = ({
    className,
    contentClassName,
    borderTriangleClassName,
    innerTriangleClassName,
}) => {
    return (
        <div className={twMerge(`absolute w-18 h-18`, className)}>
            {/* Border triangle */}
            <div
                className={twMerge(
                    `absolute inset-0 bg-black [clip-path:polygon(50%_0,100%_100%,0_100%)]`,
                    borderTriangleClassName
                )}
            ></div>
            {/* Inner triangle - slightly smaller */}
            <div
                className={twMerge(
                    `absolute inset-[4px] bg-secondary flex pt-[1rem] justify-center [clip-path:polygon(50%_0,100%_100%,0_100%)]`,
                    innerTriangleClassName
                )}
            >
                <p className={twMerge(`text-[#404040] font-extrabold text-[2rem]`, contentClassName)}>!</p>
            </div>
        </div>
    );
};
