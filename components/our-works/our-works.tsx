import MobileView from "./mobile-view";
import DesktopView from "./desktop-view";

import { useIsTablet } from "@/lib/use-isTablet";

const OurWorks = () => {
    const isTablet = useIsTablet();

    if (isTablet) {
        return <MobileView />;
    } else {
        return <DesktopView />;
    }
};

export default OurWorks;

