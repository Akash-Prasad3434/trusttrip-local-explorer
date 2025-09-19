import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-hero text-primary-foreground p-2 rounded-lg">
              <Search className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              TrustTrip
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="/my-trip" className="text-foreground hover:text-primary transition-colors font-medium">
              My Trip
            </a>
            <a href="/profile" className="text-foreground hover:text-primary transition-colors font-medium">
              Profile
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Home
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                About
              </a>
              <a href="/my-trip" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                My Trip
              </a>
              <a href="/profile" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Profile
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;