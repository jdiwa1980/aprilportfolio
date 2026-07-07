import { Heart, Mail, Phone, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact"
            className="bg-dark text-[#f9f8f6] px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-10"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-[#a39b8b] mb-8">Let's work together - 09</p>
      <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[110px] font-light leading-[0.95] tracking-tighter">
        Have a project in 
        <br />
        <em className="italic text-[#a39b8b]">mind? </em>
        Let's talk.
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#f9f8f6]/15 pt-12">
              <a href="mailto:aprilrosebertin@gmail.com" className="group block">
                  <p class="text-xs tracking-[0.25em] uppercase text-[#a39b8b] mb-3 flex items-center gap-2">
                  <Mail  size={14} />email
                  </p>
                  <p className="font-serif text-2xl md:text-3xl font-light group-hover:text-[#a39b8b] transition-colors flex items-center gap-3">
                    aprilrosebertin@gmail.com
                    <ArrowUpRight size={20 } strokeWidth={1.5} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                  </p>
              </a>
              <a href="tel:+6309669937108" className="group block">
                <p className="text-xs tracking-[0.25em] uppercase text-[#a39b8b] mb-3 flex items-center gap-2">
                  <Phone size={14}/>
                  Phone
                </p>
                <p className="font-serif text-xl md:text-3xl font-light group-hover:text-[#a39b8b] transition-colors flex items-center gap-3">
                    +63 966 99 37108 (Philippine Number) <br />
                    +353 85 7872 834 (Ireland Number)
                    <ArrowUpRight size={20 }  strokeWidth={1.5} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                </p>
              </a>
      </div>
      <div className="mt-20 pt-8 border-t border-[#f9f8f6]/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs tracking-[0.2em] uppercase text-[#a39b8b]">
        <p>
          © {currentYear} April Rose Bertin · All rights reserved
        </p>
        <p className="font-serif italic text-base normal-case tracking-normal text-[#f9f8f6]/70">Integrity · Accountability · Excellence</p>
      </div>

    </footer>
  );
};