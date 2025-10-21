// THIS WILL FILL THE ENTIRE SCREEN HEIGHT

import Button from "./ui/button";

const HeroSection = () => {
    return (
        <div className="bg-foreground text-background h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
            {/* TEXTS  */}
            <section>
                <h1 className="text-8xl font-extrabold font-bebas">
                    DEVELOPERS <br /> SOCIETY
                </h1>
                <p>
                    &quot;Fostering a collaborative environment where students
                    from all background can learn, create, grow together.&quot;
                </p>
            </section>

            {/* VIDEO  */}
            <section className="bg-secondary w-full h-[25rem] p-4 pt-12 border-retro">
                <div 
                    className="w-full h-full bg-primary border-retro"
                />
            </section>

            {/* CTA  */}
            <Button>
                JOIN US NOW!
            </Button>

        </div>
    );
};

export default HeroSection;
