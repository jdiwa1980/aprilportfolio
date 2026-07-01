import { Settings2, ClipboardList, Headphones } from "lucide-react";

const Services = () => {
    const servicesList = [
        {
            id:"01",
            icon: <Settings2 />,
            title: "Operations Support",
            description: "Keeping day‑to‑day running smoothly so founders can focus on growth — email triage, calendar, documentation, supplier follow‑ups, and reporting."
        },
        {
            id:"02",
            icon:<ClipboardList />,
            title: "Project Coordination",
            description: "Managing timelines, deliverables, scopes, and team communication. From kickoff to closeout, including retail fit‑outs and multi‑site rollouts."
        },
        {
            id:"03",
            icon:<Headphones />,
            title: "Virtual Assistance",
            description: "Remote support for admin tasks, inbox, scheduling, research, and ongoing operational care — flexible to your team's rhythm."
        }
    ]
    return (
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-[#e5e1d8]">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                <div className="max-w-xl">
                    <p className="text-xs tracking-[0.3em] uppercase text-light-grey mb-6">Services - 03</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-light leading-light tracking-tight">Three ways i can support your business</h2>
                </div>
                <p className="md:max-w-sm text-sm leading-relaxed text-[#5c5c5c] font-light">
                    Each engagement is shaped to fit your scope — from light admin care to end‑to‑end project ownership.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {servicesList.map((item, idx) => (
                    <div className="p-8 md:p-10 transition-colors duration-300 hover:bg-[#eae7df]/50 md:border-r border-[#e5e1d8] border-t md:border-t-0"
                        key={idx}
                    >
                    <div className="flex items-center gap-4">
                        <span className="font-serif text-light-grey text-sm">
                            {item.id}
                        </span>
                        {item.icon}
                    </div>
                    <h3 className="mt-8 font-serif text-3xl font-light">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed font-light text-[#5c5c5c]">
                        {item.description}
                    </p>
                </div>
                ))}

            </div>

        </section>
      );
}
 
export default Services;