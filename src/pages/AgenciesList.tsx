import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin, Phone, Mail, Award, Users } from "lucide-react";

const AgenciesList = () => {
  const { destinationId } = useParams();
  const navigate = useNavigate();

  // Local agencies based in each destination
  const agenciesData: { [key: string]: any[] } = {
    manali: [
      {
        id: "1",
        name: "Manali Local Tours",
        rating: 4.8,
        reviews: 245,
        location: "Mall Road, Manali",
        phone: "+91 98765 43210",
        email: "info@manalitours.com",
        speciality: "Local Area Expert",
        experience: "15+ years",
        packages: [
          { name: "Complete Manali Tour", price: 8999, duration: "3D/2N" },
          { name: "Solang Valley & Rohtang", price: 12999, duration: "4D/3N" },
        ],
        verified: true,
        description: "Born and raised in Manali, we know every corner of this beautiful valley."
      },
      {
        id: "2", 
        name: "Himachal Native Travels",
        rating: 4.6,
        reviews: 189,
        location: "Old Manali, Himachal Pradesh",
        phone: "+91 87654 32109",
        email: "contact@himachalnative.com",
        speciality: "Adventure & Culture",
        experience: "12+ years",
        packages: [
          { name: "Local Heritage Walk", price: 5999, duration: "2D/1N" },
          { name: "Mountain Trekking Package", price: 15999, duration: "5D/4N" },
        ],
        verified: true,
        description: "Local experts offering authentic Himachali experiences and mountain adventures."
      }
    ],
    shimla: [
      {
        id: "3",
        name: "Shimla Hills Travel",
        rating: 4.7,
        reviews: 198,
        location: "The Mall, Shimla",
        phone: "+91 76543 21098",
        email: "info@shimlahills.com",
        speciality: "Colonial Heritage",
        experience: "20+ years",
        packages: [
          { name: "Colonial Shimla Tour", price: 7999, duration: "3D/2N" },
          { name: "Toy Train & Heritage", price: 9999, duration: "4D/3N" },
        ],
        verified: true,
        description: "Shimla-based agency specializing in colonial architecture and heritage tours."
      }
    ],
    goa: [
      {
        id: "4",
        name: "Goa Coastal Tours",
        rating: 4.9,
        reviews: 312,
        location: "Panaji, Goa",
        phone: "+91 98321 76543",
        email: "hello@goacoastal.com",
        speciality: "Beach & Water Sports",
        experience: "18+ years",
        packages: [
          { name: "Beach Hopping Tour", price: 6999, duration: "3D/2N" },
          { name: "Water Sports Package", price: 11999, duration: "4D/3N" },
        ],
        verified: true,
        description: "Local Goan agency offering authentic beach experiences and water adventures."
      }
    ],
    pachmarhi: [
      {
        id: "5",
        name: "Satpura Local Guides",
        rating: 4.5,
        reviews: 156,
        location: "Pachmarhi, Madhya Pradesh",
        phone: "+91 87654 98765",
        email: "info@satpuraguides.com",
        speciality: "Forest & Wildlife",
        experience: "10+ years",
        packages: [
          { name: "Forest Trek Package", price: 5999, duration: "2D/1N" },
          { name: "Complete Pachmarhi", price: 9999, duration: "4D/3N" },
        ],
        verified: true,
        description: "Local experts from Pachmarhi offering forest treks and wildlife experiences."
      }
    ]
  };

  const agencies = agenciesData[destinationId || ""] || [];

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
              Local Travel Agencies in {destinationName}
            </h1>
            <p className="text-muted-foreground mt-2">
              {agencies.length} local agencies from {destinationName} area
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
                    Click to view packages from this local agency
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