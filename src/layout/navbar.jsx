import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react"; 

const navLinks = [
    { href: "#about", label: "About"},
    { href: "#services", label: "Services"},
    { href: "#work", label: "Work"},
    { href: "#process", label: "Process"},
    { href: "#price", label: "Pricing"}
]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 50);
            }
            window.addEventListener("scroll", handleScroll);
    
            return () => window.removeEventListener("scroll", handleScroll);
        },[])
    
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
                ? "bg-white/40 backdrop-blur-xl border-b border-white/20"
                : "bg-transparent"
            }`}>
            <div className="px-6 md:px-12 lg:px-24 py-5 flex items-center justify-between">
                <a href="" className="font-serif text-xt tracking-tight">
                    April Rose 
                    <span className="italic text-light-grey"> Bertin</span>
                </a>
                <nav className="hidden md:flex items-center gap-9">
                    {navLinks.map((item, idx) => (
                        <a href={item.href}
                            className="text-xs tracking-[0.2em] uppercase font-medium text-dark transition-colors"
                            key={idx}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <a href="#contact"
                        className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 border border-dark text-dark hover:bg-dark  hover:text-white transition-colors text-[11px] tracking-[0.2em] uppercase font-medium" 
                    >
                        Get in Touch
                </a>
            </div>
        </header>
      );
}
 
export default Navbar;