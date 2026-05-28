const Projects = () => {

    const projectClients = [
        {
            title: "ODD Studio -- Retail Fit-Out Projects",
            logo:"sections/logo.png",
            role: "Business Operations & Project Coordination Support",
            description: `Supported retail fit-out and installion projects
                        through client coordination, proposal costing, 
                        scheduling, documentation management, and project
                        reporting while ensuring smooth communication
                        accross stakeholders and project teams..`,
            scope: ["Client Managment", "Proposal Costing", "Project Coordination & Scheduling","Documentation & Reports", "Project Progress Updates"]
            
            
        },
        {
            title: "Nurture RN - Logo Design",
            logo:"sections/nurtureRNlogo.png",
            role: "Brand Identity Support",
            description: `Designed a clean and professional logo concept
                          aligned with the client's brand identity and business
                          vision, supporting visual branding and presentation requirements`,
            scope: ["Logo Design", "Brand Identity Support", "Visual Concept Development"]
            
            
        },
        {
            title: "ISAPH Inc - Logo Design",
            logo:"sections/isaLogo.png",
            role: "Corporate Branding Support",
            description: `Developed a professional logo design reflecting the
                          company's operational and corporate identity,
                          creating a modern and recognizable visual brand
                          presence`,
            scope: ["Corporate Logo Design", "Branding Support ", "Visual Identity Development"]
            
            
        }
    ]
    return (
        <section id="projects"
                 className="bg-background-litegray pt-32"
        >
            <div className= "container mx-auto grid gap-6 lg:grid-cols-2 px-6">
                {/* Card Left Column  */}
                <div className="flex flex-col gap-6">
                    {/*  Heading  */}
                    <div className="px-2">
                        <h1 className="text-darkgrey italic text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                    Projects & <br />
                                    Clients <br />
                        </h1>
                    </div>
                    
                        {/* 1st Card */}
                        <div
                        className="bg-white/40 backdrop-blur-md p-8 max-w-md rounded-3xl animate-fade-in shadow-lg text-gray-700 lg:ml-60"
                        style={{ animationDelay: `${(0 + 1) * 100}ms` }}
                        >
                            <div className="flex items-center gap-4">
                                <img src={projectClients[0].logo} 
                                     alt="logo" 
                                     className="w-14 h-14 object-contain opacity-60 shrink-0"
                                     
                                />
                                <div className="flex flex-col">
                                    <h3 className="text-darkgrey text-lg font-semibold leading-snug">
                                    {projectClients[0].title}
                                    </h3>
                                    <h5 className="mt-1 text-sm tracking-[0.15em] text-gray-900/80">
                                        {projectClients[0].role}
                                    </h5>
                                </div>
                            </div>
                            
                            <div className="mt-6 space-y-6">
                                <p className="text-darkgrey leading-relaxed">
                                    {projectClients[0].description}
                                </p>
                                {/* Scope of Work  */}
                                <div>
                                    <h4 className="text-darkgrey text-base font-semibold mb-3">
                                            Scope of Work
                                    </h4>
                                    <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                                        {projectClients[0].scope.map((scope, scopeIdx)=>(
                                            <li key={scopeIdx}
                                            >
                                                {scope}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                </div>    
                        {/* Card Right Column */}
                        <div className="flex flex-col gap-10">
                            {projectClients.slice(1).map((item, idx) =>(
                                <div
                                    key={idx}
                                    className="bg-white/40 backdrop-blur-md p-8 max-w-md rounded-3xl animate-fade-in shadow-lg text-gray-700 "
                                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                                >
                                    <div className="flex items-center gap-4">
                                        <img src={item.logo} 
                                            alt="logo" 
                                            className="w-14 h-14 object-contain opacity-60 shrink-0"
                                            
                                        />
                                        <div className="flex flex-col">
                                            <h3 className="text-darkgrey text-lg font-semibold leading-snug">
                                            {item.title}
                                            </h3>
                                            <h5 className="mt-1 text-sm tracking-[0.15em] text-gray-900/80">
                                                {item.role}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="mt-6 space-y-6">
                                        <p className="text-darkgrey leading-relaxed">
                                            {item.description}
                                        </p>
                                        {/* Scope of Work  */}
                                        <div>
                                            <h4 className="text-darkgrey text-base font-semibold mb-3">
                                                    Scope of Work
                                            </h4>
                                            <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                                                {item.scope.map((scope, scopeIdx)=>(
                                                    <li key={scopeIdx}
                                                    >
                                                        {scope}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        ))}
                        </div>
                </div>
        </section>
      );
}
 
export default Projects;