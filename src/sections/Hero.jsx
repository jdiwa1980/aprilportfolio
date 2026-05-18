const Hero = () => {
    return ( 
        <section className="bg-background relative flex-col min-h-screen justify-center overflow-hidden pt-20">
            {/* Headline */}
            <div className="space-y-0.5 text-center">
                <h1 className="text-black animate-fade-in animation-delay-200 text-7xl font-bold leading-tight md:text-8xl lg:text-[10rem]">
                Portfolio
                </h1>
            </div>
            {/* Middle Column - Profile Image */}
            <div className="flex justify-center animate-float">
                <img src="/hero/tata_hero_pic.png" 
                     alt="tata_hero"
                    //  className="w-3/4 max-w-xl animate-fade-in animation-delay-300"
                     className="-mt-24 w-200 md:w-105 lg:w-135 animate-fade-in animation-delay-300"
                />
            </div>
            {/* test  */}
        </section>
     );
}
 
export default Hero;