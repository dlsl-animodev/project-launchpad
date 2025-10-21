import { X } from "lucide-react";
import Button from "./ui/button";

const OurWorks = () => {
    return (
        <div className="flex flex-col items-center px-4">
            <h2 className="font-bold font-bebas text-8xl">OUR WORKS</h2>
            <p className="text-center mb-12">
                A showcase of the apps and ideas we have brought to life.
            </p>

            <section className="bg-accent border-retro flex flex-col items-center justify-between w-full h-[20rem] p-4">
                {/* THE HEADER  */}
                <div className="border-retro bg-secondary flex items-center justify-between px-4 py-2 w-[90%]">
                    <p className="font-bold"> 404 NOT FOUND </p>
                    <span className="flex items-center justify-center">
                        <X
                            className="bg-accent  border-retro"
                            size={27}
                            color="white"
                        />
                    </span>
                </div>
                {/* THE MAIN  */}
                <p className="text-center text-primary">
                    No finished project found, <br /> work in progress
                </p>
                {/* THE FOOTER  */}
                <Button className="w-full">UPCOMING WORKS</Button>
            </section>
        </div>
    );
};

export default OurWorks;
