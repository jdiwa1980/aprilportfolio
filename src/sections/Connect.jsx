const Connect = () => {

    const contactList = [
        {
            icon:"/sections/phone_icon.png",
            details: "+63 (0) 966 9937108",
            href: "tel:+639669937108"
        },
        {
            icon:"/sections/mail_icon.png",
            details: "aprilrosebertin@gmail.com",
            href: "mailto:aprilrosebertin@gmail.com"
        },
        {
            icon:"/sections/website_icon.png",
            details: "aprilrosebertin.com",
            href: "https://aprilportfolio-seven.vercel.app/#"
        },

    ]
    return (
        <section id="contact"
                 className="relative overflow-hidden bg-hero-bg py-30"
        >
            {/* Background Image  */}
            <div className="absolute inset-0 flex justify-end pointer-events-none">
                {/* <div className="bg-linear-to-r from-hero-bg/80 via-hero-bg/40 to-transparent" /> */}
                <img
                src="/sections/connect_tata.png"
                alt="connect_tata"
                className="w-80 max-w-7xl object-contain animate-fade-in animation-delay-300 lg:w-120 opacity-10"
                />
            </div>
            <div className="relative z-10 container mx-auto px-6">
                {/* Heading  */}
                <div className="px-6 mx-auto text-background-litegray">
                    <div className="flex items-start">
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-light leading-tight animate-fade-in animation-delay-100">
                                    Let's    
                        </h1>
                        <img src="/sections/art_style.png" 
                                         alt="art_style" 
                                         className="w-25 h-25 -mt-5"
                                    />
                    </div>
                    <h1 className="-mt-6 italic text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                        Connect
                    </h1>   
                        <p>
                            Thank you for taking the time to review my portfolio. I look forward to supporting <br />
                            businesses through reliable operational coordination, project support, and professional <br />
                            business solutions. Let's connect and discuss how I can add value to your team or project.
                        </p>
                </div>
                {/* Contact List  */}
                <div className="flex flex-col gap-3 mt-12 z-10">
                    {contactList.map((item, idx) => (
                        <div className="flex items-center gap-4 mt-4">
                            <span className="w-16 h-16 shrink-0 rounded-full ring-6 ring-inset ring-white backdrop-blur-sm p-1 flex items-center justify-center shadow-lg">
                                <img src={item.icon} 
                                     alt="icon" 
                                     className="w-full h-full object-contain rounded-full"
                                />
                            </span>
                            <div className="flex">
                                
                                <a href={item.href}
                                   className="text-background-litegray text-xl font-semibold leading-snug hover:opacity-70 transition-opacity duration-300"
                                >
                                    {item.details}
                                </a>
                                {/* <h3 className="text-background-litegray text-xl font-semibold leading-snug">
                                    {item.details}
                                </h3> */}
                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </section>
      );
}
 
export default Connect;