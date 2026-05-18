const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column  */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                                Hi, I'm
                            </h2>
                        </div>
                        <h1 className="text-black italic text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                        April Rose Bertin
                        </h1>
                        <div className="space-y-4 animate-fade-in animation-delay-200">
                    <p>
                        With 7+ years of experience in operations support, project 
                        coordination, and brand administration, I bring order to complexity
                        and momentum to every project I touch.
                    </p>
                    <p>
                        From retail fit-outs to corporate builds, I've successfully delivered
                        projects end-to-end across fast-paced, regulated environments -
                        managing timelines, budgets, compliance, and stakeholder 
                        expectations with precision
                    </p>
                    <p>
                        I'm the person who keeps projects moving, teams aligned, and 
                        clients confident. Organized systems, clear communication, and 
                        seamless execution aren't just goals - they're my standard
                    </p>      
                </div>
            </div>         
        </div>   
        </div>
        </section>  
    );
}
 
export default About;