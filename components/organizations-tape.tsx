import React from "react";

const duration = 20;
const pauseOnHover = true;

const OrganizationsTape = () => {
    const orgs = ["Org1", "Org2", "Org3", "Org4", "Org5"];

    return (
        <div className="w-full overflow-hidden bg-[#F37145] py-2 border-retro-y">
            <style>{`
                .marquee-wrapper { overflow: hidden; width: 100%; }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    gap: 1.5rem;
                    align-items: center;
                    animation-name: marquee;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    will-change: transform;
                }
                .marquee-group { display: flex; gap: 1.5rem; align-items: center; }
                .marquee-item { display: flex; align-items: center; gap: 0.5rem; box-sizing: border-box; }
                .marquee-icon { width: 2.5rem; height: 2.5rem; flex: 0 0 auto; }
                .marquee-item span { line-height: 1; white-space: nowrap; }
                ${pauseOnHover ? `.marquee-wrapper:hover .marquee-track { animation-play-state: paused; }` : ''}
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
            `}</style>

            <section className="marquee-wrapper" style={{ padding: "0.5rem 0" }}>
                {/* Track contains two identical groups so the scroll is seamless */}
                <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
                    <ul className="marquee-group" aria-hidden={false}>
                        {orgs.map((org) => (
                            <li key={org} className="marquee-item">
                                <div className="marquee-icon bg-neutral-100" />
                                <span>{org}</span>
                            </li>
                        ))}
                    </ul>

                    {/* duplicate group must be identical markup and sizes for seamless looping */}
                    <ul className="marquee-group" aria-hidden={true}>
                        {orgs.map((org) => (
                            <li key={`${org}-dup`} className="marquee-item">
                                <div className="marquee-icon bg-neutral-100" />
                                <span>{org}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default OrganizationsTape;
