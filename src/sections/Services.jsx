const Services = () => {
    const servicesList = [
        {
            id:1,
            title: "Operations Support",
            description: "Keeping your day-to-day running smoothly so you can focus on growth"
        },
        {
            id:2,
            title: "Project Coordination",
            description: "Keeping your day-to-day running smoothly so you can focus on growth"
        },
        {
            id:3,
            title: "Virtual Assistance",
            description: "Reliable remote support for admin tasks, emails and coordination."
        }
    ]
    return (
        <section id="services"
                 className="bg-background-litegray py-32"
        >
            {/* Heading  */}
            <div className="container relative mx-auto px-6">
                <h1 className="text-darkgrey italic text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Services <br />
                            Offered <br />
                </h1>
            </div>
            {/* Cards  */}
            <div className="pt-10 grid gap-3 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
                {/* Services Card  */}
                {servicesList.map((item, idx)=>(
                    <div className="bg-white/40 backdrop-blur-md p-6 w-70 rounded-2xl animate-fade-in shadow-lg hover:-translate-y-1 hover:bg-white/50 transition-all duration-300 text-center"
                         key={item.id}
                         style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                    >   
                        <h3 className="text-darkgrey text-lg font-semibold mb-2">
                                    {item.title}
                        </h3>
                        <p className="text-darkgrey text-sm leading-7 max-w-[22ch] mx-auto">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

        </section>
      );
}
 
export default Services;