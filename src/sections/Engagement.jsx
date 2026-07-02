const Engagement = () => {
    const processList = [
        {
            id: "01",
            title: "Initial Consultation",
            content:`We talk through your business, current bottlenecks, and the outcomes you need.`,
            step: "step 01"
            
        },
        {
            id: "02",
            title: "Scope Agreement & Onboarding",
            content:`We align on scope, timelines, tools, and expectations — then I onboard into your workflow.`,
            step: "step 01"
        },
        {
            id: "03",
            title: "Execution Support",
            content:`I manage communications, track progress, resolve issues, and keep work flowing daily.`,
            step: "step 01"
        },
        {
            id: "04",
            title: "Reporting & Follow-Up",
            content:`Clear updates, documentation, and ongoing operational support so nothing falls behind.`,
            step: "step 01"
        },
    ]

    return (  
        <section id="process" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-[#e5e1d8] bg-[#eae7df]/40">
            <div className="max-w-3xl">
                <p className="text-xs tracking-[0.3em] uppercase text-light-grey mb-6">
                    Engagement Process - 07
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight"> 
                    A calm, repeatable way to
                    <em className="italic text-light-grey">  get started</em>
                </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                {/* Steps  */}
                {processList.map((item, idx) => (
                 <div className="relative pl-2">
                    <span className="absolute -top-6 -left-2 font-serif text-[120px] md:text-[160px] leading-none font-light text-dark/6 select-none">{item.id}</span>
                    <div className="relative">
                        <p className="text-xs tracking-[0.25em] uppercase text-light-grey">
                            {item.step}
                        </p>
                        <h3 className="mt-3 font-serif text-3xl font-light">
                            {item.title}
                        </h3>
                        <p className="mt-4 max-w-md text-base leading-relaxed font-light text-[#5c5c5c]">
                            {item.content}
                        </p>
                    </div>
                </div>   
                ))}
                

            </div>

        </section>
    );
}
 
export default Engagement;