import Link from "next/link";
import { memo } from "react";

const Sidebar = async () => {
    // Simulate an await
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // assume this data comes from an API
    const data = [
        {
            href: "/day/1",
            label: "Day 1",
        },
        { href: "/day/2", label: "Day 2" },
        { href: "/day/3", label: "Day 3" },
    ];

    return (
        <div>
            <ul>
                {data.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default memo(Sidebar);
