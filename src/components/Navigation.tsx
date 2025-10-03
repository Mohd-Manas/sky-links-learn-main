import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/videos", label: "Videos" },
    { href: "/ebooks", label: "Ebooks" },
    { href: "/quiz", label: "Quiz" },
    { href: "/webinars", label: "Webinars" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Sky Links Academy" className="h-12 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                   className={cn(
                     "text-sm font-medium transition-colors hover:text-white relative",
                     isActive(item.href) 
                       ? "text-white after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full" 
                       : "text-white/70"
                   )}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <Button variant="cta" size="sm" className="shadow-finance-sm">
              Enrol Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                   className={cn(
                     "text-sm font-medium transition-colors py-2",
                     isActive(item.href) ? "text-white" : "text-white/70"
                   )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Button variant="cta" size="sm" className="w-fit">
                Enrol Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;