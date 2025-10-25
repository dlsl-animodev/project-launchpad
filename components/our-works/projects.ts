export interface ProjectType {
    title: string;
    description: string;
    githubLink: string;
    figmaLink: string;
    liveDemoLink: string;
}

export const projects = [
    {
        title: "Project QoL",
        description:
            "Bringing Quality of Life improvements to our Lasallian community! This Event Attendance Manager eliminates the hassle of manual tracking attendance at assemblies, workshops, lectures, and campus events.",
        githubLink: "https://github.com/dlsl-animodev/project-qol-frontend",
        figmaLink: "",
        liveDemoLink: "https://project-qol-frontend.vercel.app/",
    },
    {
        title: "Project Harmony",
        description:
            "A collaboration with musikalista, Project Harmony is designed to digitalize the music room attendance. Tap your ID to log entry and exit and all data automatically exports to daily Excel files effortless tracking!",
        githubLink: "https://github.com/dlsl-animodev/project-harmony-frontend",
        figmaLink: "",
        liveDemoLink: "https://project-harmony-frontend.vercel.app/",
    },
    {
        title: "Project Deep Dive",
        description:
            "Project Deep Dive is more than a trip down memory lane, it’s about sharing our past projects that came to life, from architecture to deployment! First up: The Reaction Ring Game! Let’s go behind the scenes and see how it all began.",
        githubLink: "",
        figmaLink: "",
        liveDemoLink: "",
    },
    {
        title: "Project Spotlight",
        description:
            "A collaboration with DLSL Film society, bringing innovation to the big screen in a creative crossover. Together, they are building a digital space that lets filmmakers share their works online and reach audiences on a wider horizon.",
        githubLink: "",
        figmaLink: "",
        liveDemoLink: "",
    },
];
