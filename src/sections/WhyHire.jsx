import { CircleCheck, ShieldCheck,Wallet } from "lucide-react";

const WhyHire = () => {

    const reasons = [
        {
            icon: <CircleCheck />,
            title: "Fewer Dropped Balls",
            content: `Track tasks, deadlines, and deliverables so nothing 
            slips through the cracks.`
        },
        {
            icon: <ShieldCheck />,
            title: "Reduced Operational Chaos",
            content: `Builds the systems — SOPs, filing structures, and workflows — that make your business calm.`
        },
        {
            icon: <Wallet />,
            title: "Cost-Effective Expertise",
            content: `Senior‑level operations support without the overhead of a full‑time hire.`
        }
    ]

    return ( 
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40 border-t border-[#e5e1d8] bg-[#eae7df]/40"
                    id="why"
        >
            <div className="max-w-3xl">
                <p className="text-xs tracking-[0.3em] uppercase text-light-grey">
                    Why hire - 02
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-tight">
                    Why work with an 
                    <em className="italic text-light-grey"> Operations Support </em>
                    Specialist?
                </h2>
                
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {reasons.map((item, idx) =>(
                        <div className="bg-white p-8 md:p-10 border border-[#e5e1d8] transition-all duration-300 hover:border-light-grey" key={idx}>
                            {item.icon}
                            <h3 className="mt-8 font-serif text-2xl font-normal">
                                {item.title}
                            </h3>
                            <p className="mt-4 text-sm leading-relaxed font-light text-[#5c5c5c]">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
        </section>
     );
}
 
export default WhyHire;