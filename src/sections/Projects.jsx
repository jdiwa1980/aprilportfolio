const Projects = () => {

    const projectClients = [
        {
            subtitle: "Retail Fit-Out",
            title: "ODD Studio",
            logo:"sections/odd.avif",
            role: "Business Operations & Project Coordination Support",
            description: `Supported retail fit‑out and installation projects through client coordination, proposal costing, 
                            scheduling, documentation, and reporting — ensuring smooth communication across stakeholders 
                            and on‑site teams.`,
            scope: ["Client Managment", "Proposal Costing", "Project Coordination","Documentation & Reports",]
            
            
        },
        {
            subtitle: "logo design",
            title: "Nurture RN",
            logo:"sections/nurtureRN.avif",
            role: "Brand Identity Support",
            description: `Designed a clean and professional logo concept aligned with the client's brand identity 
                        and business vision — supporting visual branding and presentation requirements.`,
            scope: ["Logo Design", "Brand Identity", "Visual Concept"]
            
            
        },
        {
            subtitle: "Corporate Branding",
            title: "ISAPH Inc",
            logo:"sections/isaPH.avif",
            role: "Corporate Branding Support",
            description: `Developed a professional logo reflecting the company's operational and corporate identity 
                        — creating a modern and recognizable visual brand presence.`,
            scope: ["Corporate Logo Design", "Branding Support ", "Visual Identity Development"]
            
            
        }
    ]
    return (
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-[#e5e1d8]" id="work">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                <div className="max-w-2xl">
                    <p className="text-xs tracking-[0.3em] uppercase text-light-grey mb-6">
                        Selected Work — 06
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
                        A few recent
                        <em className="italic text-light-grey"> engagements</em>.  
                    </h2>
                </div>
                <p className="md:max-w-sm text-sm leading-relaxed text-[#5c5c5c] font-light">
                    From multi‑site retail fit‑outs to brand identity coordination — 
                 a snapshot of recent work across operations and creative ops.
                </p>
            </div>
            <div className="space-y-20 md:space-y-28">
                {/* Projects  */}
                {projectClients.map((item, idx) => (
                    <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start" id="" key={idx}>
                        <div className={`lg:col-span-7 overflow-hidden ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                            <div className="lg:col-span-7 overflow-hidden bg-[#eae7df] group">
                                <div className="aspect-4/3 w-full overflow-hidden">
                                    <img src={item.logo} 
                                        alt="clients.jpg" 
                                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={`lg:col-span-5 group ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                            <p className="text-xs tracking-[0.25em] uppercase text-light-grey">{item.subtitle}</p>
                            <h3 className="mt-3 font-serif text-3xl md:text-4xl font-light">{item.title}</h3>
                            <p className="mt-1 text-sm italic text-light-grey">{item.role}</p>
                            <p className="mt-6 text-base leading-relaxed font-light text-[#5c5c5c]">{item.description}</p>
                            <div className="mt-8">
                                <p className="text-xs tracking-[0.25em] uppercase text-light-grey mb-3">Scope of Work</p>
                                    <ul className="flex flex-wrap gap-2" >
                                        {item.scope.map((pill, idn) => (
                                            <li className="px-3 py-1.5 border border-dark/15 text-[11px] tracking-[0.18em] uppercase font-medium rounded-full"
                                                key={idn}
                                            >
                                            {pill}
                                            </li>
                                         ))}
                                    </ul>
                                
                            </div>
                        </div>
                    </article>
                    ))}
            </div>
        </section>
      );
}
 
export default Projects;