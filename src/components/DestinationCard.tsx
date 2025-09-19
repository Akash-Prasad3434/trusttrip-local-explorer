import { Star, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface DestinationCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  totalReviews: number;
  startingPrice: number;
  duration: string;
  agencyCount: number;
  description: string;
  onClick?: () => void;
}

const DestinationCard = ({
  name,
  location,
  image,
  rating,
  totalReviews,
  startingPrice,
  duration,
  agencyCount,
  description,
  onClick
}: DestinationCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
          <Star className="h-4 w-4 text-rating fill-rating" />
          <span className="text-sm font-semibold">{rating}</span>
          <span className="text-xs text-muted-foreground">({totalReviews})</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-overlay p-4">
          <div className="flex items-center gap-2 text-white">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">{location}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{agencyCount} agencies</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-price">₹{startingPrice.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground ml-1">onwards</span>
          </div>
          
          <Button 
            onClick={onClick}
            className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
          >
            View Packages
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;