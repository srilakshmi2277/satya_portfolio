import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import assembly1 from "@/assets/assembly-1.png";
import assembly2 from "@/assets/assembly-2.png";
import assembly3 from "@/assets/assembly-3.png";
import assembly4 from "@/assets/assembly-4.png";

const AssemblyDetail = () => {
  const navigate = useNavigate();
  const { assemblyId } = useParams();

  const assembliesData = [
    {
      id: "1",
      title: "Three-Jaw Puller",
      description: "The Three-Jaw Puller is a mechanical tool used for removing gears, bearings, and pulleys from shafts. It works by evenly applying pulling force through three jaws that grip the part, while a central spindle screw pushes against the shaft, safely dislodging the component without damage. This design was created in SolidWorks to replicate a common workshop tool.",
      image: assembly1,
      designDetails: {
        software: "SolidWorks",
        features: "Revolve, Extruded Boss/Base, Hole Wizard, Assembly Mates",
        applications: "Removing gears, bearings, pulleys, and couplings from shafts"
      }
    },
    {
      id: "2",
      title: "Assembly Work 2",
      description: "Detailed description of assembly work 2 and its applications in mechanical design.",
      image: assembly2,
      designDetails: {
        software: "SolidWorks",
        features: "Assembly features and mates",
        applications: "Mechanical assembly applications"
      }
    },
    {
      id: "3",
      title: "Assembly Work 3",
      description: "Detailed description of assembly work 3 and its applications in mechanical design.",
      image: assembly3,
      designDetails: {
        software: "SolidWorks",
        features: "Assembly features and mates",
        applications: "Mechanical assembly applications"
      }
    },
    {
      id: "4",
      title: "Assembly Work 4",
      description: "Detailed description of assembly work 4 and its applications in mechanical design.",
      image: assembly4,
      designDetails: {
        software: "SolidWorks",
        features: "Assembly features and mates",
        applications: "Mechanical assembly applications"
      }
    }
  ];

  const assembly = assembliesData.find(a => a.id === assemblyId);

  if (!assembly) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 section-padding bg-secondary/30 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Assembly Not Found</h1>
            <Button onClick={() => navigate('/focus-areas/assemblies')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Assemblies
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 section-padding bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/focus-areas/assemblies')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Assemblies
          </Button>

          <Card className="p-8 md:p-12 border-border bg-card">
            {/* Title and Description */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {assembly.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {assembly.description}
              </p>
            </div>

            {/* Assembly Image */}
            {assembly.image && (
              <div className="mb-12">
                <div className="aspect-video bg-secondary/50 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src={assembly.image} 
                    alt={assembly.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            )}

            {/* Design Details */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                DESIGN DETAILS
              </h2>
              
              <div className="space-y-4">
                <div className="flex gap-2">
                  <span className="font-semibold">Software Used:</span>
                  <span className="text-muted-foreground">{assembly.designDetails.software}</span>
                </div>
                
                <div className="flex gap-2">
                  <span className="font-semibold">Features Applied:</span>
                  <span className="text-muted-foreground">{assembly.designDetails.features}</span>
                </div>
                
                <div className="flex gap-2">
                  <span className="font-semibold">Applications:</span>
                  <span className="text-muted-foreground">{assembly.designDetails.applications}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AssemblyDetail;
