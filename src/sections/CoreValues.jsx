const CoreValues = () => {
    const coreValues = [
        {
            title: "Integrity", 
            content: "I do what I say I'll do - even when no one is watching. Honesty and transparency guide every decision I make."
        },
        {
            title: "Accountability", 
            content:"I own my work fully. When something needs fixing, I step up without excuses and deliver solutions."
        },
        {
            title: "Excellence", 
            content:"Good enought isn't my standard. I bring precision, care, and consistency to every task - big or small."
        }
    ]
    return (
        <section id="corevalues"
        className="relative overflow-hidden bg-background-litegray py-32"
        >
            {/* Background Image  */}
            <div className="absolute inset-0 flex justify-end items-center opacity-75">
                <img
                src="/sections/corevalues.png"
                alt="corevalues"
                className="w-full max-w-6xl object-contain animate-fade-in animation-delay-300"
                />
            </div>
            <div className="container relative z-10 mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-x-1 items-start">

                    {/* LEFT COLUMN */}
                    <div className="-space-y-10">
                        <h1 className="text-darkgrey animate-fade-in animation-delay-200 text-5xl font-bold leading-tight md:text-7xl lg:text-[10rem]">
                        Core <br /> Values
                        </h1>
                        <h6 className="mt-4 text-sm uppercase tracking-[0.25em] text-darkgrey animate-fade-in animation-delay-300">
                            values i believe in
                        </h6>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-start-2 flex flex-col gap-6 pl-0 max-w-sm">

                    {coreValues.map((item, idx) => (
                        <div
                        key={idx}
                        className="bg-white/40 backdrop-blur-md p-6 rounded-2xl animate-fade-in shadow-lg"
                        style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                        <h3 className="text-darkgrey text-lg font-semibold mb-2">
                            {item.title}
                        </h3>

                        <p className="text-darkgrey text-sm leading-relaxed">
                            {item.content}
                        </p>
                        </div>
                    ))}

                    </div>
                    {/* Spacer Column  */}


                </div>

            </div>
            
            
            
            

        </section>
      );
}
 
export default CoreValues;