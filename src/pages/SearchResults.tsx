import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import DestinationCard from "@/components/DestinationCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Import destination images
import manaliImage from "@/assets/manali-hero.jpg";
import shimlaImage from "@/assets/shimla.jpg";
import goaImage from "@/assets/goa.jpg";
import pachmarhiImage from "@/assets/pachmarhi.jpg";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q") || "";
  const [filteredDestinations, setFilteredDestinations] = useState<any[]>([]);

  const allDestinations = [
    {
      id: "manali",
      name: "Magical Manali",
      location: "Himachal Pradesh",
      image: manaliImage,
      rating: 4.8,
      totalReviews: 1250,
      startingPrice: 15999,
      duration: "5D/4N",
      agencyCount: 12,
      description: "Experience snow-capped mountains, adventure sports, and pristine valleys in the crown jewel of Himachal Pradesh."
    },
    {
      id: "shimla",
      name: "Colonial Shimla",
      location: "Himachal Pradesh", 
      image: shimlaImage,
      rating: 4.6,
      totalReviews: 980,
      startingPrice: 12999,
      duration: "4D/3N",
      agencyCount: 8,
      description: "Walk through British colonial architecture, scenic toy train rides, and misty mountain landscapes."
    },
    {
      id: "goa",
      name: "Tropical Goa",
      location: "Goa",
      image: goaImage,
      rating: 4.7,
      totalReviews: 2100,
      startingPrice: 18999,
      duration: "6D/5N",
      agencyCount: 15,
      description: "Pristine beaches, vibrant nightlife, Portuguese heritage, and water sports in India's beach paradise."
    },
    {
      id: "pachmarhi",
      name: "Green Pachmarhi",
      location: "Madhya Pradesh",
      image: pachmarhiImage,
      rating: 4.5,
      totalReviews: 670,
      startingPrice: 11999,
      duration: "4D/3N",
      agencyCount: 6,
      description: "Discover hidden waterfalls, ancient caves, and lush forests in the Queen of Satpura."
    }
  ];

  useEffect(() => {
    if (query) {
      const filtered = allDestinations.filter(destination =>
        destination.name.toLowerCase().includes(query.toLowerCase()) ||
        destination.location.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredDestinations(filtered);
    }
  }, [query]);

  const handleDestinationClick = (destinationId: string) => {
    navigate(`/agencies/${destinationId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Search Results for "{query}"
            </h1>
            <p className="text-muted-foreground mt-2">
              Found {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {filteredDestinations.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                {...destination}
                onClick={() => handleDestinationClick(destination.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              No destinations found
            </h2>
            <p className="text-muted-foreground mb-8">
              Try searching for popular destinations like Manali, Shimla, Goa, or Pachmarhi
            </p>
            <Button onClick={() => navigate("/")} variant="outline">
              Explore All Destinations
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;