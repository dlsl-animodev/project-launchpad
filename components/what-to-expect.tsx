import NotchedBox from "./ui/notched-box";

const WhatToExpect = () => {
    const projects = [
        {
            bgColor: "#F8DF5F",
            title: "Project Deep Dive",
        },
        {
            bgColor: "#F37145",
            title: "Project Spotlight",
        },
        {
            bgColor: "#FE5C8C",
            title: "Project QoL",
        },
        {
            bgColor: "#5498F1",
            title: "Project Harmony",
        },
    ];

    return (
        <div>
            <section>
                <h2 className="font-bold font-bebas text-8xl text-center">
                    WHAT TO EXPECT?
                </h2>
                <p className=" text-center">View our ongoing projects!</p>
            </section>

            <ul className="mt-16 mb-44">
                {projects.map((project) => (
                    <li key={project.title}>
                        <NotchedBox
                            className="h-[12rem] w-full mb-[-6rem] text-foreground"
                            fillColor={project.bgColor}
                        >
                            <h3 className="text-4xl font-bold">
                                {project.title}
                            </h3>
                        </NotchedBox>
                    </li>
                ))}
            </ul>

            <section>
                <p className="font-bebas text-6xl font-bold text-center">
                    We share the build process, architecture plans, and
                    progress.
                </p>
                <p className="text-center">
                    This is a collaborative space, where your thoughts and ideas
                    are welcome as we code a real-world solution!
                </p>
            </section>
        </div>
    );
};

export default WhatToExpect;
