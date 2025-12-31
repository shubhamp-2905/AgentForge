import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Rocket, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Automations", href: "/#automations" },
    { name: "FAQ", href: "/#faq" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
       className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0a0a1a]/90 backdrop-blur-xl py-3 shadow-2xl shadow-black/40"
          : "bg-transparent py-5"
      )}

    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
  href="/"
  className="flex items-center gap-2.5 group cursor-pointer"
>
  <div className="relative flex items-center">
    <img
      src="/logo-af.png"   
      alt="AgentForge Logo"
      className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105"
    />

    {/* subtle glow effect */}
    <div className="absolute font-family: 'Space Grotesk', sans-serif; inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
  </div>

  <span className="text-xl  font-bold tracking-wide text-white">
    AGENT<span className="text-primary ">FORGE</span>
  </span>
</Link>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("/#")) {
                  e.preventDefault();
                  handleNavClick(link.href);
                }
              }}
              className="relative text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          
          <button 
            className="relative px-6 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 group overflow-hidden"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Demo 
              <Rocket className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a1a]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className="text-base font-semibold text-gray-300 hover:text-white hover:bg-white/5 py-3 px-4 rounded-lg transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <button 
              className="w-full mt-4 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}