import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/jdiwa1980", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/neil-jeffrey-diwa-502a85134/", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://www.facebook.com/jeff.diwa.2024/", label: "Facebook" },
];

const footerLinks = [
    { href: "#about", label: "About"},
    { href: "#services", label: "Services"},
    { href: "#tools", label: "Tools"},
    { href: "#projects", label: "Projects"},
    { href: "#contact", label: "Contact"}
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero-bg py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="z-10 text-center md:text-left">
            <a href="#" className="text-gray-50 text-xl font-bold tracking-tight">
              ABD<span className="text-gray-50">.</span>
            </a>
            <p className="text-sm text-gray-50 mt-2">
              © {currentYear} aprilrosediwa. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-100 hover:text-pink-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="bg-gray-200 text-gray-400 p-2 rounded-full glass hover:bg-gray-50 hover:text-pink-300 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};