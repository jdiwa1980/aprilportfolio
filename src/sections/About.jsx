const coreValues =[
  {
    key: "01",
    title: "Integrity",
    quote: "I do what I say I'll do — even when no one is watching. Honesty and transparency guide every decision. "
  },
  {
    key: "02",
    title: "Accountability",
    quote: "I own my work fully. When something needs fixing, I step up without excuses and deliver solutions."
  },
  {
    key: "03",
    title: "Excellence",
    quote: "Good enough isn't my standard. I bring precision, care, and consistency to every task — big or small."
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40 border-t border-light-grey"
    > 
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-8">
          <p className="text-xs tracking-[0.3em] uppercase text-light-grey">
          About - 01
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
            A proactive partner for the <em className="italic text-light-grey">unglamorous </em>
            work that keeps business running.
          </h2>
          <div className="mt-10 max-w-2xl space-y-6 text-base md:text-lg leading-relaxed font-light text-[#5c5c5c]">
            <p>
              With over seven years of experience in business operations, project coordination, and virtual administrative support, I help businesses streamline workflows, manage projects efficiently, and maintain organized day‑to‑day operations.
            </p>
            <p>
              My background includes retail fit‑outs, fixture installations, retrofitting, client management, proposal costing, calendar coordination, and remote operational support across fast‑paced environments — bringing clear communication and reliable execution to every engagement.
            </p>
          </div>
          <blockquote className="mt-12 border-l-2 border-dark pl-6">
            <p className="font-serif text-2xl md:text-3xl italic font-light text-dark leading-snug">
              “The best operations work disappears into the background — everything just works.”
            </p>
          </blockquote>
        </div>
        {/* core values  */}
        <div className="lg:col-span-4">
          <p className="text-xs tracking-[0.3em] uppercase text-light-grey mb-6">
            Core Values
          </p>
          <ul className="divide-y divide-[#e5e1d8] border-t border-b border-[#e5e1d8]">
            {coreValues.map((item, idx) => (
              <li className="py-7">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-sm text-light-grey">
                    {item.key}
                  </span>
                  <h3 className="font-serif text-2xl font-normal">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed font-light text-[#5c5c5c]">
                    {item.quote}
                </p>
              </li>
            ))}

          </ul>


        </div>

      </div>
      
      
    </section>
  );
};

export default About;