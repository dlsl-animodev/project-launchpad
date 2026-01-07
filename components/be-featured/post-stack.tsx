import { motion } from "motion/react";

interface PostStackProps {
    index: number;
    name: string;
    role: string;
    message?: string;
    date: string;
    time: string;
    projectName: string;
}
const PostStack: React.FC<PostStackProps> = ({
    index,
    name,
    role,
    message,
    date,
    time,
    projectName,
}) => {
    return (
        <motion.div
            className={`sticky top-[20rem] z-0 bg-neutral-200  border-retro p-4 md:p-6 my-16 w-full   ${index % 2 === 0 ? 'translate-x-2 rotate-2' : '-translate-x-2  -rotate-2'}`}
            initial={{ opacity: 0, y: 40 + index * 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: index * 8, scale: 1 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
        >
            {/* HEADER  */}
            <section className="flex items-center gap-2">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-neutral-700 rounded-full" />
                <span>
                    <p className="font-bold text-sm sm:text-lg lg:text-xl">{name}</p>
                    <p className="text-neutral-600 text-xs sm:text-base lg:text-lg">{role}</p>
                </span>
            </section>

            {/* MAIN  */}
            <section className="my-2">
                <p className="text-xs leading-[1.3] lg:text-sm lg:leading-[1.5]">
                    {message
                        ? message
                        : `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                </p>
            </section>

            {/* FOOTER  */}
            <section className="text-neutral-600">
                <p className="text-xs leading-[1.3] lg:text-sm lg:leading-[1.5]">
                    {date} &#8226; {time} &#8226; {projectName}
                </p>
            </section>
        </motion.div>
    );
};

export default PostStack;
