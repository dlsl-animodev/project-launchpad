import ANIMODEVLOGO from "@/public/animo-dev-logo.jpg";
import ImageHandler from "./image-handler";

const Footer = () => {
    return (
        <div className="flex items-center justify-between bg-secondary border-retro-y py-8 px-4 gap-[10rem] md:gap-[0rem]">
            <ImageHandler
                src={ANIMODEVLOGO}
                alt="Animo Dev Logo"
                width={70}
                height={70}
                className="border-retro border-black"
            />
            <p className="font-bold">© 2025 Animo Dev Society. All rights reserved.</p>
        </div>
    );
};

export default Footer;
