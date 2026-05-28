const Expertise = () => {
    const bullets = [
        {
            id: 1,
            text:['Business Operations Support', 'Project Coordination & Administration', 'Client Relationship Management']
        },
        {
            id: 2,
            text:['Contractor & Supplier Cooordination','Project Scheduling & Planning', 'Cost Proposal & Quotation Preparation']
        },
        {
            id: 3,
            text: ['Documentation & Reporting Management', 'Administrative & Office Support', 'Compliance & Documentation Control']
        }
    ]
    return ( 
        <section id="services" 
                 className="bg-background-litegray">
            {/* Headers  */}
            <div className="container relative z-10 mx-auto px-6">
                {/* TWO COLUMN LAYOUT  */}
                <div className="grid gap-16 lg:grid-cols-2 items-start">
                     <div>
                            <h1 className="text-darkgrey italic text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Strength & <br />
                            Expertise <br />
                            </h1>
                        <div className="w-full max-w-md space-y-6 pt-6 text-gray-700/70 animate-fade-in animation-delay-200">
                            <p>
                            End-to-end administrative coordination that keeps your business
                            organized, on schedule, and running without friction
                            </p>
                            <p>
                            Dependable remote support for day-to-day admin - 
                            inbox management, scheduling, documentation, and stakeholder
                            communication.
                            </p>
                            <p>
                            Structured project oversight from planning to delivery - trackiing
                            timelines, aligning teams, and ensuring nothing falls through the 
                            cracks.
                            </p>
                        </div>
                     </div>
                     {/* Right Column  */}
                     <div className="flex flex-col gap-6">
                        {/* Card */}
                        {bullets.map((item, idx)=>(
                        <div
                        key={item.id}
                        className="bg-white/40 backdrop-blur-md p-4 max-w-sm rounded-xl animate-fade-in shadow-lg text-gray-700"
                        style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                                <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                                    {item.text.map((bullet, bulletIdx)=>(
                                        <li key={bulletIdx}>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>

                        </div>
                        ))}
                     </div>
                     
                </div>
            </div>
        </section>
     );
}
 
export default Expertise;