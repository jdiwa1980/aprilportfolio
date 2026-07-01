const Expertise = () => {
    const Pills = [
        'Business Operations Support', 
        'Project Coordination & Administration', 
        'Client Relationship Management',
        'Contractor & Supplier Cooordination',
        'Project Scheduling & Planning', 
        'Cost Proposal & Quotation Preparation',
        'Documentation & Reporting Management', 
        'Administrative & Office Support', 
        'Compliance & Documentation Control'
    ]      
    
    return ( 
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-[#e5e1d8] bg-[#eae7df]/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                    <p className="text-xs tracking-[0.3em] uppercase text-light-grey mb-6">
                        Streghts - 04
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-tight">
                        Where I bring the most <em className="italic text-light-grey"> value</em>.
                    </h2>
                    <p className="mt-6 text-sm leading-relaxed font-light text-[#5c5c5c] max-w-sm">
                        A focused set of skills sharpened across studios, fit‑out contractors, and remote teams.
                    </p>
                </div>
                <div className="lg:col-span-8">
                    <ul className="flex flex-wrap gap-3">
                        {Pills.map((item, idx) => (
                            <li className="px-5 py-2.5 border border-dark/15 text-dark text-xs tracking-[0.18em] uppercase rounded-full bg-white/60 backdrop-blur hover:bg-dark hover:text-white hover:border-dark transition-colors duration-300 cursor-default"
                                key={idx}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
     );
}
 
export default Expertise;