import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DestinationCard from "@/components/DestinationCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Star, Users, Award } from "lucide-react";

// Import destination images
import manaliImage from "@/assets/manali-hero.jpg";
import shimlaImage from "@/assets/shimla.jpg";
import goaImage from "@/assets/goa.jpg";
import pachmarhiImage from "@/assets/pachmarhi.jpg";

const Index = () => {
  const destinations = [
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

  const features = [
    {
      icon: Shield,
      title: "Verified Agencies",
      description: "All travel agencies are thoroughly verified and trusted by thousands of travelers."
    },
    {
      icon: Star,
      title: "Authentic Reviews",
      description: "Real reviews from real travelers to help you make informed decisions."
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Connect with local agencies who know the destinations inside and out."
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Compare packages from multiple agencies to find the best deals for your budget."
    }
  ];

  const handleDestinationClick = (destinationId: string) => {
    // In a real app, this would navigate to the package detail page
    console.log("Navigate to:", destinationId);
    window.location.href = `/package/${destinationId}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Popular Destinations Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore India's most loved destinations with trusted local travel agencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                {...destination}
                onClick={() => handleDestinationClick(destination.id)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose TrustTrip Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose TrustTrip?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for discovering India with authentic local experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <div className="bg-gradient-hero text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered incredible destinations through our trusted local partners
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Explore Destinations
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              List Your Agency
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-hero text-primary-foreground p-2 rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold">TrustTrip</span>
              </div>
              <p className="text-background/70">
                Connecting travelers with trusted local agencies across India for authentic and memorable experiences.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="/" className="hover:text-background transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-background transition-colors">About</a></li>
                <li><a href="/destinations" className="hover:text-background transition-colors">Destinations</a></li>
                <li><a href="/contact" className="hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Agencies</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="/register" className="hover:text-background transition-colors">Register Agency</a></li>
                <li><a href="/dashboard" className="hover:text-background transition-colors">Agency Dashboard</a></li>
                <li><a href="/pricing" className="hover:text-background transition-colors">Pricing</a></li>
                <li><a href="/support" className="hover:text-background transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-background/70">
                <p>📧 hello@trusttrip.com</p>
                <p>📞 +91 98765 43210</p>
                <p>📍 New Delhi, India</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 TrustTrip. All rights reserved. Built for SIH 2024 - PS25137</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;