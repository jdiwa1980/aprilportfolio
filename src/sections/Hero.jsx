import { GoArrowDownRight } from "react-icons/go";

const statDetails = [
    {
    number: "7+",
    detail:"Years experience"
    },
    {
    number: "30+",
    detail:"projects coordinated"
    },
    {
    number: "100%",
    detail:"remote-ready"
    },
    {
    number: "3",
    detail:"core service lines"
    },

]

const Hero = () => {
    return ( 
        <section id="hero" className="relative px-6 md:px-12 lg:px-24 pt-36 md:pt-44 pb-24 md:pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
                {/* left  */}
                <div className="lg:col-span-7 animate-fade-up">
                    <p className="text-xs tracking-[0.3em] uppercase text-light-grey mb-8">Business Operations · Project Management · Brand Admin</p>
                    <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-light leading-[0.95] tracking-tighter">
                        Streamlined 
                        <em className="italic text-light-grey"> operations</em>
                        ,
                        <br />
                        quietly executed.
                    </h1>
                    <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed font-light text-[#5c5c5c]">
                        I'm April Rose — a Business Operations Support Specialist helping founders, studios, and growing teams turn chaos into clear systems. Seven+ years of project coordination, virtual support, and day‑to‑day operational care.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <a href="#work"
                            className="inline-flex items-center gap-2 px-7 py-4 bg-dark text-white hover:bg-[#333] transition-colors text-xs tracking-[0.2em] uppercase font-medium"
                        >
                            View Selected Work
                            <GoArrowDownRight />
                        </a>
                        <a href="#contact"
                            className="inline-flex items-center  px-7 py-4 border border-dark  text-dark hover:bg-dark hover:text-white transition-colors text-xs tracking-[0.2em] uppercase font-medium"
                        >
                            Work with me
                        </a>
                    </div>
                </div>
                {/* Right Hero picture  */}
                <div className="lg:col-span-5 animate-fade-up animation-delay-200">
                        <div className="relative aspect-4/5 w-full overflow-hidden bg-[#eae7df]">
                            <img src="/hero/hero.avif" 
                                alt="hero img"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white drop-shadow">
                                <div className="text-xs tracking-[0.25em] uppercase">Est. 7+ years</div>
                                <div className="font-serif text-2xl italic">since 2017</div>
                            </div>

                        </div>
                </div> 
                   
            </div>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#e5e1d8] pt-10">
                {statDetails.map((item, idx) =>(
                    <div key={idx}>
                    <div className="font-serif text-4xl md:text-5xl">{item.number}</div>
                    <div className="mt-1 text-xs tracking-[0.2em] uppercase text-light-grey">{item.detail}</div>
                    </div>
                ))}
            </div>
            
        </section>
     );
}
 
export default Hero;