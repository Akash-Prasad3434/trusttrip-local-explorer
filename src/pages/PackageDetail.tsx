import { ArrowLeft, Camera, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import PackageRoadmap from "@/components/PackageRoadmap";
import Navigation from "@/components/Navigation";

const PackageDetail = () => {
  // Sample package data - in real app this would come from props/API
  const samplePackage = {
    name: "Magical Manali Adventure",
    location: "Manali, Himachal Pradesh",
    duration: "5 Days / 4 Nights",
    price: 15999,
    rating: 4.8,
    agency: {
      name: "Mountain Explorers Travel",
      rating: 4.7,
      reviews: 324
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        activities: [
          "Pick up from Delhi/Chandigarh",
          "Journey to Manali via scenic route",
          "Check-in to hotel",
          "Evening at Mall Road",
          "Welcome dinner"
        ],
        meals: ["Dinner"],
        accommodation: "3-star hotel in Manali center"
      },
      {
        day: 2,
        title: "Local Sightseeing",
        activities: [
          "Visit Hadimba Devi Temple",
          "Explore Manu Temple",
          "Walk through Old Manali",
          "Adventure sports at Solang Valley",
          "Paragliding (weather permitting)"
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
      },
      {
        day: 3,
        title: "Rohtang Pass Excursion",
        activities: [
          "Early morning departure to Rohtang Pass",
          "Snow activities and photography",
          "Visit Rahala Falls",
          "Lunch with mountain views",
          "Return to Manali"
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
      },
      {
        day: 4,
        title: "Kasol & Tosh Village",
        activities: [
          "Drive to Kasol via Kullu",
          "Explore hippie village culture",
          "Trek to Tosh Village",
          "Sunset views from mountains",
          "Bonfire evening"
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Riverside camping/guesthouse"
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Morning at leisure",
          "Check-out and departure",
          "Journey back to Delhi/Chandigarh",
          "Drop at railway station/airport"
        ],
        meals: ["Breakfast", "Lunch"],
      }
    ],
    inclusions: [
      "4 nights accommodation",
      "All meals as per itinerary", 
      "AC transportation",
      "Professional guide",
      "All permits and taxes"
    ],
    addOns: [
      {
        name: "Personal Local Guide",
        price: 2500,
        icon: User,
        description: "Dedicated local guide for personalized experience"
      },
      {
        name: "Photo & Video Package",
        price: 3500,
        icon: Camera,
        description: "Professional photography and drone videos of your trip"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Destinations
        </Button>

        <PackageRoadmap packageData={samplePackage} />
      </main>
    </div>
  );
};

export default PackageDetail;