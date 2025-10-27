import ANIMODEVLOGO from "@/public/animo-dev-logo.jpg";
import ImageHandler from "./image-handler";
import { Facebook, Github, Instagram, Mail } from "lucide-react";
import Link from "next/link";

import { motion } from "motion/react";

const Footer = () => {
    return (
        <motion.footer
            className="bg-secondary border-retro-y py-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-[4rem]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <section className="flex flex-col gap-4 justify-center items-center">
                <div className="flex flex-wrap items-center gap-4">
                    <ImageHandler
                        src={ANIMODEVLOGO}
                        alt="Animo Dev Logo"
                        width={70}
                        height={70}
                        className="border-retro border-black"
                    />
                    <p className="text-3xl md:text-5xl text-center lg:text-7xl font-bold font-rubik">
                        ANIMO.DEV
                    </p>
                </div>
                <p className="font-medium text-base lg:text-xl text-center">
                    &copy; {new Date().getFullYear()} Developers Society. All
                    rights reserved.
                </p>
            </section>
            <section className="flex flex-col items-center">
                <p className="mb-4 font-bold text-3xl lg:text-4xl text-left">
                    Connect with us!
                </p>
                <ul className="flex flex-wrap gap-4 font-semibold">
                    <li>
                        <Link
                            href="https://github.com/dlsl-animodev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:underline"
                            aria-label="Animo.dev GitHub"
                        >
                            <Github
                                className="p-2 border-retro bg-primary shrink-0"
                                size={50}
                            />
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="https://www.facebook.com/profile.php?id=61577729247232"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:underline"
                            aria-label="Animo.dev Facebook"
                        >
                            <Facebook
                                className="p-2 border-retro bg-primary shrink-0"
                                size={50}
                            />
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="https://www.instagram.com/dlsl.devsoc/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:underline shrink-0"
                            aria-label="Animo.dev Instagram"
                        >
                            <Instagram
                                className="p-2 border-retro bg-primary"
                                size={50}
                            />
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="mailto:"
                            className="flex items-center gap-3 hover:underline shrink-0"
                            aria-label="Contact Animo.dev via Email"
                        >
                            <Mail
                                className="p-2 border-retro bg-primary"
                                size={50}
                            />
                        </Link>
                    </li>
                </ul>
            </section>
        </motion.footer>
    );
};

export default Footer;
