const WhyHire = () => {

    const reasons = [
        {
            id: "01",
            title: "Fewer Dropped Balls",
            content: `Nothing slips through the cracks.
        I track every task, deadline, and deliverable
        so your team stays aligned and on schedule.`
        },
        {
            id: "02",
            title: "Reduced Operational Chaos",
            content: `I build systems that bring order -
            from SOPs and filing structures to 
            streamline approval workflows.`
        },
        {
            id: "03",
            title: "Cost Effective Expertise",
            content: `Great senior-level operational support 
            without the overhead of a full-time hire. Flexible, reliable, and ready to
            deliver.`
        }
    ]

    return ( 
        <section id="whyhire" className="bg-background-litegray py-32">
            {/* Background Picture  */}
            <div className="absolute flex justify-end items-center">
                <img src="/sections/litebulb.png" 
                     alt="litebulb" 
                />
            </div>
            {/* Headers  */}
            <div className="container relative z-10 mx-auto px-6">
                <h1 className="text-darkgrey italic text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                    Why Hire An <br />
                    Operation Support <br />
                    Specialist? 
                </h1>
                {/* Reasons Cards  */}
                <div className="pt-10 grid lg:grid-cols-3 gap-4 items-start">
                    {reasons.map((item, idx) =>(
                        <div
                        key={idx}
                        className="bg-white/40 backdrop-blur-md p-6 rounded-2xl animate-fade-in shadow-lg"
                        style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            <div className="flex flex-row p-1">
                                <h3 className="text-gray-50 text-lg font-bold pr-1">{item.id}</h3>
                                <h3 className="text-darkgrey text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>
                            </div>
                        

                        <p className="text-darkgrey text-sm leading-relaxed">
                            {item.content}
                        </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
     );
}
 
export default WhyHire;