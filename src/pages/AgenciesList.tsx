import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin, Phone, Mail, Award, Users } from "lucide-react";

const AgenciesList = () => {
  const { destinationId } = useParams();
  const navigate = useNavigate();

  // Mock agencies data - in real app, this would come from API based on destinationId
  const agencies = [
    {
      id: "1",
      name: "Mountain Adventures Tours",
      rating: 4.8,
      reviews: 245,
      location: "Mall Road, Manali",
      phone: "+91 98765 43210",
      email: "info@mountainadventures.com",
      speciality: "Adventure Tours",
      experience: "15+ years",
      packages: [
        { name: "Manali Adventure Package", price: 15999, duration: "5D/4N" },
        { name: "Solang Valley Special", price: 12999, duration: "3D/2N" },
      ],
      verified: true,
      description: "Specializing in adventure tourism and mountain expeditions with experienced local guides."
    },
    {
      id: "2", 
      name: "Himalayan Heritage Travels",
      rating: 4.6,
      reviews: 189,
      location: "Old Manali, Himachal Pradesh",
      phone: "+91 87654 32109",
      email: "contact@himalayanheritage.com",
      speciality: "Cultural Tours",
      experience: "12+ years",
      packages: [
        { name: "Cultural Manali Experience", price: 14999, duration: "4D/3N" },
        { name: "Temple & Monastery Tour", price: 11999, duration: "3D/2N" },
      ],
      verified: true,
      description: "Authentic cultural experiences focusing on local traditions and heritage sites."
    },
    {
      id: "3",
      name: "Valley View Travels",
      rating: 4.4,
      reviews: 156,
      location: "Hadimba Road, Manali",
      phone: "+91 76543 21098",
      email: "bookings@valleyview.com",
      speciality: "Family Tours",
      experience: "8+ years",
      packages: [
        { name: "Family Fun Package", price: 16999, duration: "5D/4N" },
        { name: "Rohtang Pass Excursion", price: 13999, duration: "4D/3N" },
      ],
      verified: false,
      description: "Family-friendly tours with comfortable accommodations and safe travel arrangements."
    }
  ];

  const destinationNames: { [key: string]: string } = {
    manali: "Manali",
    shimla: "Shimla",
    goa: "Goa",
    pachmarhi: "Pachmarhi"
  };

  const destinationName = destinationNames[destinationId || ""] || "Unknown Destination";

  const handleAgencyClick = (agencyId: string) => {
    navigate(`/package/${destinationId}?agency=${agencyId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Travel Agencies in {destinationName}
            </h1>
            <p className="text-muted-foreground mt-2">
              {agencies.length} verified local agencies found
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          {agencies.map((agency) => (
            <Card key={agency.id} className="cursor-pointer hover:shadow-hover transition-all duration-300" onClick={() => handleAgencyClick(agency.id)}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">{agency.name}</CardTitle>
                      {agency.verified && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <Award className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{agency.rating}</span>
                        <span>({agency.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{agency.experience}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{agency.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{agency.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span>{agency.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <span>{agency.email}</span>
                        </div>
                      </div>
                      
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {agency.speciality}
                        </Badge>
                        <p className="font-medium">Popular Packages:</p>
                        <ul className="space-y-1">
                          {agency.packages.map((pkg, index) => (
                            <li key={index} className="text-muted-foreground">
                              {pkg.name} - ₹{pkg.price.toLocaleString()} ({pkg.duration})
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    Click to view detailed packages and roadmaps
                  </div>
                  <Button variant="outline" size="sm">
                    View Packages
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgenciesList;