import { Check } from "lucide-react";

const Packages = () => {
    const packages = [
        {
            name: "Starter Support",
            rate: "$200 - $300",
            idealfor: "Small businesses or startups requiring light operation support" ,
            hour: "20–30 hrs / month",
            keyInclusions: ["Email & calendar management", "Documentation & filing", "Reporting & status updates", "Supplier follow‑ups", "Basic admin support"]
        },
        {
            name: "Operations Support",
            rate: "$400 - $600",
            idealfor: `Growing businesses requiring ongoing project
            and operational coordination 40-60 hrs/month`,
            hour: "40–60 hrs / month",
            keyInclusions: ["Project coordination", "Scheduling & planning", "Quotations & proposals",
            "client & contractor comms", "reporting"]
        },
        {
            name: "Project Operations ",
            rate: "$800 - $1,200",
            idealfor: `Retail fit-out, installation, retrofitting, and
            multi-site projects 80-120 hrs/month`,
            hour: "80–120 hrs / month",
            keyInclusions: ["End-to-end project coordination", "Budget tracking", "Supplier management",
             "scheduling, workforce planning", "client updates & workflow support"]
        },
        {
            name: "Hourly Support",
            rate: "$10",
            idealfor: "Flexible or short‑term support for ad‑hoc projects.",
            hour: "MIN 10 HRS / WEEK",
            keyInclusions: ["Operational & admininstrative support", "Inbox & calendar", "Research & documentation", "Ad‑hoc coordination", "Pay‑as‑you‑go"]
        }
    ]

    return ( 
        <section id="pricing" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-[#e5e1d8]">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                <div className="max-w-xl">
                    <p className="text-xs tracking-[0.3em] uppercase text-light-grey mb-6">Packages - 08</p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
                        Transparent
                        <em className="italic text-light-grey"> pricing</em>
                        , flexible scope.
                    </h2>
                </div>
                <p className="md:max-w-sm text-sm leading-relaxed text-[#5c5c5c] font-light">Choose a monthly retainer or pay hourly. Custom scopes welcome — let's shape something that fits.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                {/* Pricing Cards  */}
                {packages.map((item, idx) =>(
                <div className={`p-8 md:p-10 border-[#e5e1d8] border -mt-px md:mt-0 transition-colors duration-300 ${
                    idx===2 ?"bg-dark text-white border-dark lg:scale-[1.02] lg:z-10 relative":" bg-white"} hover:border-light-grey`}>


                    {idx===2 && <span className="inline-block px-3 py-1 mb-6 text-[10px] tracking-[0.25em] uppercase bg-white text-dark rounded-full">most popular</span>}                       
                    <p className="text-xs tracking-[0.25em] uppercase text-light-grey">{item.hour}</p>
                    <h3 className="mt-3 font-serif text-3xl font-light">{item.name}</h3>
                    <div className="mt-6 flex items-baseline gap-2">
                        <span className="font-serif text-4xl md:text-5xl font-light">{item.rate}</span>
                        <span className="text-xs tracking-wider text-light-grey">{idx===3 ? "/ hour" : "/ month"}</span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed font-light min-h-16 text-[#5c5c5c]"></p>
                    <ul className="mt-6 space-y-3 border-t border-[#e5e1d8]/30 pt-6">
                    {/* Key inclusion  */}
                    {item.keyInclusions.map((key, idn) => (
                        <li className={`flex items-start gap-3 text-sm font-light ${idx===2 ? "text-[#f9f8f6]" : "text-dark"}`}>
                            <Check  className={`mt-0.5 shrink-0 text-light-grey`}
                                    size={16}
                                    strokeWidth={1.5}
                            />
                            <span>{key}</span>
                        </li>
                    ))}
                    </ul>
                    <a href="#contact" 
                        className={`mt-8 inline-flex w-full items-center justify-center px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors ${
                                            idx===2 ? 
                                            "bg-white text-dark hover:bg-[#eae7df] hover:border-light-grey" 
                                            : "border border-dark  text-dark hover:bg-dark hover:text-white"}`}
                    >
                        Enquire
                    </a>
                </div>
                ))}
            </div>

        </section>
     );
}
 
export default Packages;