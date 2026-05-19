import { useState, useEffect } from "react";

const navLinks = [
    { href: "#about", label: "About"},
    { href: "#services", label: "Services"},
    { href: "#tools", label: "Tools"},
    { href: "#projects", label: "Projects"},
    { href: "#contact", label: "Contact"}
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 50);
            }
            window.addEventListener("scroll", handleScroll);
    
            return () => window.removeEventListener("scroll", handleScroll);
        },[])
    
    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
            <nav className="container mx-auto px-5 flex items-center justify-between">
                <a href="#" className="text-darkgrey text-xl font-bold tracking-tight hover:text-white">ABD 
                    <span className="text-primary hover:text-white">.</span>
                </a>
                {/* Desktop Nav  */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, idx) => (
                            <a href={link.href}
                               key={idx}
                               className="px-4"
                            >
                                {link.label}
                            </a>
                        ))}

                    </div>
                </div>
                {/* RIGHT - empty space for balance */}
                <div className="w-20">
                    {/* Can be used for future additions  */}
                </div>
            </nav>
        </header>
      );
}
 
export default Navbar;