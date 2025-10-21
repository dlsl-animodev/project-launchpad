import Button from "./ui/button";

const FooterCTA = () => {
    return (
        <div className="flex flex-col items-center px-4">
            <h2 className="font-bold font-bebas text-8xl text-center ">
                READY AND EXCITED TO INNOVATE?
            </h2>
            <p className="text-center">
                We will follow up with your application status.
            </p>
            <Button className="w-full mt-12">JOIN US!</Button>
        </div>
    );
};

export default FooterCTA;
