const Hero = () => {
    return ( 
        <section className="bg-hero-bg relative flex min-h-screen flex-col justify-center overflow-hidden pt-20">
            {/* Headline */}
            <div className="text-center">
                {/* Wrap title + subtitles together  */}
                <div className="inline-block">
                    <h1 className="text-white animate-fade-in animation-delay-200 text-9xl font-bold leading-tight md:text-9xl lg:text-[15rem]">
                    {/* <span className="text-lite-blue text-opacity-50">abd</span> */}
                    Portfolio
                    </h1>
                    <div className="relative z-10 mt-2 md:-mt-10 flex flex-col gap-2 md:flex-row justify-between px-2 text-xs md:text-sm text-white/80 animate-fade-in animation-delay-200">
                        <h6>Business Operations Support Specialist</h6>
                        <h6>Project Management | Brand Administrator</h6>
                    </div>
                </div>
            </div>
            {/* Middle Column - Profile Image */}
            <div className="flex justify-center">
                <img src="/hero/tata_hero_pic.png" 
                     alt="tata_hero"
                    //  className="w-3/4 max-w-xl animate-fade-in animation-delay-300"
                    //  className="-mt-24 w-200 md:w-105 lg:w-135 animate-fade-in animation-delay-300"
                    className="-mt-6 md:-mt-16 lg:-mt-60 w-[520px] md:w-[620px] lg:w-[1020px] animate-fade-in animation-delay-300"
                />  
            </div>
            
        </section>
     );
}
 
export default Hero;