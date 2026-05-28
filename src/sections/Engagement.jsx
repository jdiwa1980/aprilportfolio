const Engagement = () => {
    const processList = [
        {
            id: "01",
            title: "Initial Consultation",
            content:`"Understanding client requirements and project scope."`
        },
        {
            id: "02",
            title: "Scope Agreement & Onboarding",
            content:`"Aligning project scope, timelines, and expectations."`
        },
        {
            id: "03",
            title: "Execution Support",
            content:`"Managing communications, tracking progress, and resolving issues."`
        },
        {
            id: "04",
            title: "Reporting & Follow-Up",
            content:`"Providing updates, documentation, and operational support."`
        },
    ]

    return (  
        <section id="engagement"
                 className="bg-background-litegray pt-32"
        
        >
            <div className="container mx-auto px-6">
                {/* Heading  */}
                <div className="px-6 mx-auto">
                        <h1 className="text-darkgrey italic text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                    Engagement<br />
                                    Process
                        </h1>
                </div>
            </div>
            {/* Cards  */}
            <div className="container mx-auto mt-16 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6">
                {processList.map((item, idx) => (
                    <div className="bg-white/40 backdrop-blur-md p-12  w-full max-w-90 rounded-4xl animate-fade-in shadow-lg text-left animation-fade-in animation-delay-100"
                         key={item.id}
                         style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                    >   
                        <div className="relative mb-3">
                            <span className="absolute -top-6 left-0 text-7xl font-semibold text-gray-500/20">
                                {item.id}
                            </span>
                            <h3 className="relative z-10 pt-6 text-darkgrey text-xl font-semibold mb-1 leading-snug">
                                    {item.title}
                            </h3>
                        </div>
                        <p className="text-darkgrey text-sm leading-7 text-left -pt-6">
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
            
            

        </section>
    );
}
 
export default Engagement;