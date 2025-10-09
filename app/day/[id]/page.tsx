import Dashboard from "@/components/dashboard";
import Sidebar from "@/components/sidebar";
import { Suspense } from "react";

interface SinglePageProps {
    params: {
        id: string;
    };
}
const SinglePage: React.FC<SinglePageProps> = async ({ params }) => {
    const id = (await params).id;

    return (
        <div className="flex gap-10">
            <Suspense fallback={<div>Loading...</div>}>
                <Dashboard id={id} />
            </Suspense>
        </div>
    );
};

export default SinglePage;
