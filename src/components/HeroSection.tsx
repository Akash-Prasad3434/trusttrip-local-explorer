import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import manaliHero from "@/assets/manali-hero.jpg";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const popularDestinations = ["Manali", "Shimla", "Goa", "Pachmarhi", "Kerala", "Rajasthan"];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // In a real app, this would navigate to search results
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={manaliHero} 
          alt="Beautiful mountain landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover India with 
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              Local Experts
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Connect with trusted local travel agencies and explore incredible destinations 
            with personalized packages and authentic experiences.
          </p>

          {/* Search Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-hero max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Where do you want to go?
            </h3>
            
            <div className="flex gap-3">
              <Input
                placeholder="Search destinations (e.g., Manali, Goa, Shimla)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-12 text-lg border-2 border-border focus:ring-primary focus:border-primary"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button 
                onClick={handleSearch}
                className="h-12 px-8 bg-gradient-hero hover:shadow-glow transition-all duration-300"
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>

            {/* Popular Destinations */}
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-3">Popular destinations:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {popularDestinations.map((destination) => (
                  <Button
                    key={destination}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(destination)}
                    className="border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {destination}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;