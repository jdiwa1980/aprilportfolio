import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react"; 

const navLinks = [
    { href: "#about", label: "About"},
    { href: "#services", label: "Services"},
    { href: "#tools", label: "Tools"},
    { href: "#projects", label: "Projects"},
    { href: "#contact", label: "Contact"}
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
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
            <nav className="container mx-auto px-5 flex items-center justify-between">
                <a href="#" className="text-white text-xl font-bold tracking-tight hover:text-pink-300">ABD 
                    {/* <span className="text-primary hover:text-white">//</span> */}
                </a>
                {/* Desktop Nav  */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, idx) => (
                            <a href={link.href}
                               key={idx}
                               className={`${isScrolled ? "text-black/50" : "text-white"} group px-4 py-2`}
                            //    
                            >
                                {link.label}
                                <div className={`${isScrolled ? "bg-black/50" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`}/>
                            </a>
                        ))}

                    </div>
                </div>
                {/* RIGHT - empty space for balance */}
                <div className="w-20">
                    {/* Can be used for future additions  */}
                </div>
                {/* Mobile Menu Button  */}
                <button className="md:hidden p-2 text-foreground cursor-pointer"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)} 
                > {/* this is what makes the isMobileMenuOpen true when the button is clicked and renders the html  */}
                    {isMobileMenuOpen ? <X size={24}/> : <Menu size={24} />}       
                </button>
            </nav>
            {/* Mobile Menu  */}
            {/* using useState() to toggle the menu from false to true  */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4 items-center justify-center">
                        {navLinks.map((link, index) => (
                            <a 
                               href={link.href} 
                               key={index}
                               onClick={() => setIsMobileMenuOpen(false)}
                               className="group text-lg text-gray-50 hover:text-pink-300 py-2"
                               >
                            {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
      );
}
 
export default Navbar;