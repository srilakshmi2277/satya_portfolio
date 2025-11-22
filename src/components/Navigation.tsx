import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    href: "#about",
    label: "About"
  }, {
    href: "#projects",
    label: "Projects"
  }, {
    href: "#skills",
    label: "Skills"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold gradient-text">
           HEMA RUDRA
        </h2>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.href} href={link.href} onClick={e => scrollToSection(e, link.href)} className="text-foreground hover:text-primary transition-colors font-medium">
              {link.label}
            </a>)}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && <nav className="md:hidden bg-card border-t border-border">
          <div className="flex flex-col py-4">
            {navLinks.map(link => <a key={link.href} href={link.href} onClick={e => scrollToSection(e, link.href)} className="px-6 py-3 text-foreground hover:text-primary hover:bg-secondary/50 transition-colors font-medium">
                {link.label}
              </a>)}
          </div>
        </nav>}
    </header>;
};
export default Navigation;