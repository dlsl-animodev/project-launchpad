"use client";

import { useEffect, useState } from "react";

const Design1 = () => {
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        // get the scroll position and log it
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            console.log(scrollPosition);

            // if scroll position is greater than the WORKS, ABOUT, EVENTS section, show the header
            if (scrollPosition > 50) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="  flex flex-col gap-24 ">
            <header
                className={`fixed top-0 left-0 right-0 overflow-hidden transition-[max-height,opacity,backdrop-filter] duration-500 ease-in-out
    ${showHeader ? "max-h-14 opacity-100" : "max-h-0 opacity-0"}
    flex justify-between items-center gap-2 font-semibold z-50 p-4
    bg-yellow-400/80 backdrop-blur-md shadow-md border-b-2 border-b-foreground`}
            >
                <div className="h-10 w-10 bg-foreground rounded-sm" />
                <div className="flex items-center gap-2">
                    <div className="border w-fit rounded-sm px-4 py-2 hover:bg-foreground hover:text-stone-200 transition hover:border-foreground hover:cursor-pointer">
                        WORKS
                    </div>
                    <div className="border w-fit rounded-sm px-4 py-2 hover:bg-foreground hover:text-stone-200 transition hover:border-foreground hover:cursor-pointer">
                        ABOUT
                    </div>
                    <div className="border w-fit rounded-sm px-4 py-2 hover:bg-foreground hover:text-stone-200 transition hover:border-foreground hover:cursor-pointer">
                        EVENTS
                    </div>
                </div>
            </header>
            <div className="flex flex-col gap-24 p-4">
                <section className="flex justify-between items-center gap-2 font-semibold">
                    <div className="h-10 w-10 bg-foreground rounded-sm" />
                    <div className="flex items-center gap-2">
                        <div className="border w-fit rounded-sm px-4 py-2">
                            WORKS
                        </div>
                        <div className="border w-fit rounded-sm px-4 py-2">
                            ABOUT
                        </div>
                        <div className="border w-fit rounded-sm px-4 py-2">
                            EVENTS
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-4">
                    <div>
                        <p className="font-semibold text-2xl"> ANIMO DEV </p>
                        <h1 className="font-boldonse text-6xl leading-relaxed">
                            DEVELOPERS <br /> SOCIETY
                        </h1>
                    </div>
                    <button className="bg-red-500 text-white font-bold px-4 py-2 rounded-sm w-fit text-3xl">
                        {" "}
                        JOIN US!{" "}
                    </button>
                    <div className="w-full h-[13rem] bg-foreground rounded-sm" />
                </section>

                <section>
                    <p className="font-semibold text-center text-3xl">
                        &quot;Fostering a collaborative environment where
                        students from all backgrounds can learn, create, and
                        grow together.&quot;
                    </p>
                </section>
            </div>

            <div className="bg-stone-200 p-4 flex flex-col gap-24 py-16">
                <section className="flex flex-col gap-16">
                    <h2 className="font-boldonse text-6xl leading-relaxed text-center">
                        {" "}
                        OUR WORKS{" "}
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <li>
                            <div className="w-full h-64 bg-foreground rounded-sm" />
                        </li>
                        <li>
                            <div className="w-full h-64 bg-foreground rounded-sm" />
                        </li>
                        <li>
                            <div className="w-full h-64 bg-foreground rounded-sm" />
                        </li>
                        <li>
                            <div className="w-full h-64 bg-foreground rounded-sm" />
                        </li>
                    </ul>
                </section>
            </div>

            <div className="p-4 flex flex-col gap-24">
                <div>
                    <h2 className="font-boldonse text-6xl leading-relaxed text-center">
                        MEET THE TEAM!
                    </h2>
                    <p className="text-center">
                        Our team is a diverse group of passionate individuals
                        dedicated to fostering a collaborative environment where
                        students from all backgrounds can learn, create, and
                        grow.
                    </p>
                </div>
                <div>
                    <h3 className="font-boldonse text-3xl leading-relaxed text-center mb-2">
                        Committees
                    </h3>
                    <ul className="flex gap-4 justify-center flex-wrap">
                        <li className="font-semibold px-4 py-2 border rounded-sm">
                            EXECUTIVES
                        </li>
                        <li className="font-semibold px-4 py-2 border rounded-sm">
                            DEVELOPERS
                        </li>
                        <li className="font-semibold px-4 py-2 border rounded-sm">
                            CREATIVES
                        </li>
                        <li className="font-semibold px-4 py-2 border rounded-sm">
                            DEVOPS
                        </li>
                        <li className="font-semibold px-4 py-2 border rounded-sm">
                            QA TESTERS
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-8 items-center">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <li>
                            <div
                                className="w-full h-64 bg-foreground rounded-sm  border-stone-200 border-2
                            flex justify-center 
                            "
                            >
                                <div className="w-fit h-fit font-semibold px-4 py-2 bg-stone-200 mt-4 rounded-sm ">
                                    DEVELOPERS HEAD
                                </div>
                            </div>
                            <p className="bg-stone-200 border-2 border-foreground mx-[4rem] p-4 rounded-sm text-center">
                                <span className="block bg-foreground text-stone-200 font-semibold rounded-sm py-2 mb-2">
                                    MARK ZUCKERBERG
                                </span>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quas tempora iusto nisi porro,
                                molestias consectetur fugiat est possimus
                                voluptate minima! Iste eaque asperiores quis in,
                                quos voluptatibus hic eligendi impedit.
                            </p>
                        </li>
                        <li>
                            <div
                                className="w-full h-64 bg-foreground rounded-sm  border-stone-200 border-2
                            flex justify-center 
                            
                            "
                            >
                                <div className="w-fit h-fit font-semibold px-4 py-2 bg-stone-200 mt-4 rounded-sm ">
                                    DEVELOPERS HEAD
                                </div>
                            </div>

                            <p className="bg-stone-200 border-2 border-foreground mx-[4rem] p-4 rounded-sm text-center">
                                <span className="block bg-foreground text-stone-200 font-semibold rounded-sm py-2 mb-2">
                                    MARK ZUCKERBERG
                                </span>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quas tempora iusto nisi porro,
                                molestias consectetur fugiat est possimus
                                voluptate minima! Iste eaque asperiores quis in,
                                quos voluptatibus hic eligendi impedit.
                            </p>
                        </li>
                        <li>
                            <div
                                className="w-full h-64 bg-foreground rounded-sm border-stone-200 border-2
                            flex justify-center 
                            
                            "
                            >
                                <div className="w-fit h-fit font-semibold px-4 py-2 bg-stone-200 mt-4 rounded-sm ">
                                    DEVELOPERS HEAD
                                </div>
                            </div>
                            <p className="bg-stone-200 border-2 border-foreground mx-[4rem] p-4 rounded-sm text-center">
                                <span className="block bg-foreground text-stone-200 font-semibold rounded-sm py-2 mb-2">
                                    MARK ZUCKERBERG
                                </span>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quas tempora iusto nisi porro,
                                molestias consectetur fugiat est possimus
                                voluptate minima! Iste eaque asperiores quis in,
                                quos voluptatibus hic eligendi impedit.
                            </p>
                        </li>
                    </ul>
                    <button className="bg-foreground text-white font-bold px-4 py-2 rounded-sm w-fit place-self-end">
                        SEE FULL OFFICERS LIST
                    </button>
                </div>
            </div>

            <div className="bg-foreground text-stone-200   py-16 ">
                <div className="flex flex-col gap-16">
                    <h2 className="font-boldonse text-6xl leading-relaxed text-center">
                        WHAT TO EXPECT!
                    </h2>
                    <ul className="flex flex-col items-center w-full ">
                        <li className="text-4xl font-semibold py-10  bg-red-500 w-full text-center">
                            {" "}
                            PROJECT LAUNCHPAD{" "}
                            <span className="text-lg font-normal block mt-2">
                                Augsut 5, 2025
                            </span>
                        </li>
                        <li className="text-4xl font-semibold py-10  bg-blue-500 w-full text-center">
                            {" "}
                            PROJECT LAUNCHPAD{" "}
                            <span className="text-lg font-normal block mt-2">
                                Augsut 5, 2025
                            </span>
                        </li>
                        <li className="text-4xl font-semibold py-10  bg-green-500 w-full text-center">
                            {" "}
                            PROJECT LAUNCHPAD{" "}
                            <span className="text-lg font-normal block mt-2">
                                Augsut 5, 2025
                            </span>
                        </li>
                        <li className="text-4xl font-semibold py-10  bg-orange-500 w-full text-center">
                            {" "}
                            PROJECT LAUNCHPAD{" "}
                            <span className="text-lg font-normal block mt-2">
                                Augsut 5, 2025
                            </span>
                        </li>
                        <li className="text-4xl font-semibold py-10  bg-purple-500 w-full text-center">
                            {" "}
                            PROJECT LAUNCHPAD{" "}
                            <span className="text-lg font-normal block mt-2">
                                Augsut 5, 2025
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="p-4 flex flex-col gap-18">
                <p className="font-semibold text-center text-3xl">
                    We share the build process, architecture plans, and
                    progress.{" "}
                    <span className="block font-normal mt-4 text-2xl">
                        This is a collaborative space, where your thoughts and
                        ideas are welcome as we code a real-world solution!
                    </span>
                </p>
                <div>
                    <h2 className="font-boldonse text-6xl leading-relaxed text-center">
                        BE FEATURED!
                    </h2>
                    <ul className="flex flex-col items-center w-full gap-8 mt-8">
                        <li className="bg-stone-200 rounded-sm p-4 flex flex-col gap-4 rotate-5 border-2 border-foreground">
                            <header className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-foreground" />
                                <div>
                                    <p className="font-semibold">John Doe</p>
                                    <p className="text-stone-500"> Member </p>
                                </div>
                            </header>
                            <main>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Cum veniam odio nobis. Nulla
                                cupiditate nesciunt perspiciatis. Perspiciatis
                                harum commodi maiores minus quasi veritatis ea
                                iusto. Unde fuga optio similique labore?
                            </main>
                            <footer className="text-stone-500">
                                <p>
                                    {" "}
                                    2:21 PM | Jul 24, 2024 | Project Launchpad{" "}
                                </p>
                            </footer>
                        </li>
                        <li className="bg-stone-200 rounded-sm p-4 flex flex-col gap-4 rotate-[-5deg] border-2 border-foreground">
                            <header className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-foreground" />
                                <div>
                                    <p className="font-semibold">John Doe</p>
                                    <p className="text-stone-500"> Member </p>
                                </div>
                            </header>
                            <main>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Cum veniam odio nobis. Nulla
                                cupiditate nesciunt perspiciatis. Perspiciatis
                                harum commodi maiores minus quasi veritatis ea
                                iusto. Unde fuga optio similique labore?
                            </main>
                            <footer className="text-stone-500">
                                <p>
                                    {" "}
                                    2:21 PM | Jul 24, 2024 | Project Launchpad{" "}
                                </p>
                            </footer>
                        </li>
                        <li className="bg-stone-200 rounded-sm p-4 flex flex-col gap-4 rotate-5 border-2 border-foreground">
                            <header className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-foreground" />
                                <div>
                                    <p className="font-semibold">John Doe</p>
                                    <p className="text-stone-500"> Member </p>
                                </div>
                            </header>
                            <main>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Cum veniam odio nobis. Nulla
                                cupiditate nesciunt perspiciatis. Perspiciatis
                                harum commodi maiores minus quasi veritatis ea
                                iusto. Unde fuga optio similique labore?
                            </main>
                            <footer className="text-stone-500">
                                <p>
                                    {" "}
                                    2:21 PM | Jul 24, 2024 | Project Launchpad{" "}
                                </p>
                            </footer>
                        </li>
                    </ul>
                    <div className="flex flex-col gap-4 items-center mt-14">
                        <button className="bg-foreground text-white font-bold px-4 py-2 rounded-sm w-fit">
                            SHARE YOUR ENTRY!
                        </button>
                        <p className="text-center">
                            Join one of our events for your entry to have the
                            chance to be featured! Let us collaborate and build!
                        </p>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col gap-8 py-16">
                <h2 className="font-boldonse text-4xl leading-relaxed text-center">
                    FREQUENTLY ASKED QUESTIONS
                </h2>
                <ul>
                    <li className="border-b-2 border-foreground w-full h-fit py-4 flex items-center justify-between px-4">
                        <details>
                            <summary className="cursor-pointer text-2xl text-foreground w-full">
                                This is a question?
                            </summary>
                            <p className="mt-2">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, quod.
                            </p>
                        </details>
                    </li>
                    <li className="border-b-2 border-foreground w-full h-fit py-4 flex items-center justify-between px-4">
                        <details>
                            <summary className="cursor-pointer text-2xl text-foreground w-full">
                                This is a question?
                            </summary>
                            <p className="mt-2">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, quod.
                            </p>
                        </details>
                    </li>
                    <li className="border-b-2 border-foreground w-full h-fit py-4 flex items-center justify-between px-4">
                        <details>
                            <summary className="cursor-pointer text-2xl text-foreground w-full">
                                This is a question?
                            </summary>
                            <p className="mt-2">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, quod.
                            </p>
                        </details>
                    </li>
                    <li className="border-b-2 border-foreground w-full h-fit py-4 flex items-center justify-between px-4">
                        <details>
                            <summary className="cursor-pointer text-2xl text-foreground w-full">
                                This is a question?
                            </summary>
                            <p className="mt-2">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, quod.
                            </p>
                        </details>
                    </li>
                </ul>
            </div>

            <footer className="bg-foreground text-stone-200 p-4 flex flex-col gap-8 py-8">
                <div className="flex justify-between items-center">
                    <div className="h-10 w-10 bg-stone-200 rounded-sm" />
                    <div className="flex items-center gap-2">
                        <div className="border w-fit rounded-sm px-4 py-2">
                            WORKS
                        </div>
                        <div className="border w-fit rounded-sm px-4 py-2">
                            ABOUT
                        </div>
                        <div className="border w-fit rounded-sm px-4 py-2">
                            EVENTS
                        </div>
                    </div>
                </div>
                <p className="text-center">
                    &copy; 2024 Animo Dev Society. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Design1;
