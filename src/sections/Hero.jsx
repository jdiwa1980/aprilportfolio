const Hero = () => {
    return ( 
        <section className="bg-background relative flex-col min-h-screen justify-center overflow-hidden pt-20">
            {/* Headline */}
            <div className="space-y-0.5 text-center">
                <h1 className="text-darkgrey animate-fade-in animation-delay-200 text-7xl font-bold leading-tight md:text-8xl lg:text-[10rem]">
                Portfolio
                </h1>
                <div className="-mt-10 mx-auto flex max-w-4xl justify-between px-6 text-sm text-white/70">
                    <h6>Business Operatios Support Specialist</h6>
                    <h6>Project Management | Brand Administrator</h6>
                </div>
                
            </div>
            {/* Middle Column - Profile Image */}
            <div className="flex justify-center">
                <img src="/hero/tata_hero_pic.png" 
                     alt="tata_hero"
                    //  className="w-3/4 max-w-xl animate-fade-in animation-delay-300"
                     className="-mt-24 w-200 md:w-105 lg:w-135 animate-fade-in animation-delay-300"
                />
            </div>
            
        </section>
     );
}
 
export default Hero;