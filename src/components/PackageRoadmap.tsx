import { Clock, MapPin, Star, Utensils, Car, Camera, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PackageRoadmapProps {
  packageData: {
    name: string;
    location: string;
    duration: string;
    price: number;
    rating: number;
    agency: {
      name: string;
      rating: number;
      reviews: number;
    };
    itinerary: Array<{
      day: number;
      title: string;
      activities: string[];
      meals: string[];
      accommodation?: string;
    }>;
    inclusions: string[];
    addOns: Array<{
      name: string;
      price: number;
      icon: any;
      description: string;
    }>;
  };
}

const PackageRoadmap = ({ packageData }: PackageRoadmapProps) => {
  return (
    <div className="space-y-8">
      {/* Package Header */}
      <Card className="bg-gradient-card shadow-hero">
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <CardTitle className="text-3xl font-bold text-foreground mb-2">
                {packageData.name}
              </CardTitle>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{packageData.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{packageData.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-rating fill-rating" />
                  <span>{packageData.rating}/5</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-bold text-price">
                ₹{packageData.price.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">per person</div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Agency Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="bg-gradient-hero text-primary-foreground p-2 rounded-lg">
              <User className="h-5 w-5" />
            </div>
            Travel Agency
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">{packageData.agency.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Star className="h-4 w-4 text-rating fill-rating" />
                <span className="font-medium">{packageData.agency.rating}/5</span>
                <span className="text-muted-foreground">({packageData.agency.reviews} reviews)</span>
                <Badge className="bg-trust text-white">Verified</Badge>
              </div>
            </div>
            <Button variant="outline">Contact Agency</Button>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Itinerary */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Itinerary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {packageData.itinerary.map((day, index) => (
              <div key={day.day} className="relative">
                {/* Timeline connector */}
                {index < packageData.itinerary.length - 1 && (
                  <div className="absolute left-6 top-12 h-full w-0.5 bg-border"></div>
                )}
                
                <div className="flex gap-4">
                  <div className="bg-gradient-hero text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {day.day}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">{day.title}</h4>
                    
                    <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                      <div>
                        <h5 className="font-medium text-foreground mb-2 flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Activities
                        </h5>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {day.activities.map((activity, idx) => (
                            <li key={idx}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-foreground mb-2 flex items-center gap-2">
                          <Utensils className="h-4 w-4" />
                          Meals
                        </h5>
                        <div className="flex gap-2">
                          {day.meals.map((meal, idx) => (
                            <Badge key={idx} variant="secondary">{meal}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      {day.accommodation && (
                        <div>
                          <h5 className="font-medium text-foreground mb-2 flex items-center gap-2">
                            <Car className="h-4 w-4" />
                            Accommodation
                          </h5>
                          <p className="text-muted-foreground">{day.accommodation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Optional Add-ons */}
      <Card>
        <CardHeader>
          <CardTitle>Optional Add-ons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {packageData.addOns.map((addon, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-card transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-nature text-accent-foreground p-2 rounded-lg">
                      <addon.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{addon.name}</h4>
                      <p className="text-sm text-muted-foreground">{addon.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-price">+₹{addon.price}</div>
                    <Button size="sm" variant="outline" className="mt-2">
                      <Plus className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Book Now Section */}
      <Card className="bg-gradient-hero text-primary-foreground">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Book?</h3>
              <p className="opacity-90">Secure your spot with our trusted local partner</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" size="lg">
                Contact Agency
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Book Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PackageRoadmap;