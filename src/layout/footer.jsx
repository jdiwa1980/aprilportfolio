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
    <>
    </>
  );
};