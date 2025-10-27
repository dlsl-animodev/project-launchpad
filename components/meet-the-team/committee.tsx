import OfficerWindow, { OfficerType } from "./officer-window";
import { SectionContainerSubHeading } from "../reusables/section";

interface CommitteeProps {
    name: string;
    officers: OfficerType[];
    index: number;
}
const Committee: React.FC<CommitteeProps> = ({ name, officers, index }) => {
    return (
        <>
            <SectionContainerSubHeading
                className={`font-inter font-bold text-secondary text-center my-[4rem] ${index > 0 ? "mt-[8rem] pt-[8rem] border-t-2 border-primary w-full" : ""}`}
                initial={{ opacity: 0, y: 20, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                {name.toUpperCase()}
            </SectionContainerSubHeading>

            <ul
                className={`flex flex-wrap justify-center gap-12 space-y-6 w-full max-w-[90vw] mx-auto`}
            >
                {officers.map((officer, index) => (
                    <OfficerWindow key={officer.name} officer={officer} delay={index * 0.05} />
                ))}
            </ul>
        </>
    );
};

export default Committee;
