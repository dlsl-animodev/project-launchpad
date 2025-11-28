import MobileView from "./mobile-view";
import DesktopView from "./desktop-view";

import { useIsTablet } from "@/lib/use-isTablet";

import { projects } from "./projects";

const OurWorks = () => {
    const isTablet = useIsTablet();

    if (isTablet) {
        return <MobileView projects={projects} />;
    } else {
        return <DesktopView projects={projects} />;
    }
};

export default OurWorks;

