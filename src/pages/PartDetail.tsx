import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Upload } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import part1 from "@/assets/part-1.png";
import part2 from "@/assets/part-2.png";
import part3 from "@/assets/part-3.png";

const PartDetail = () => {
  const navigate = useNavigate();
  const { partId } = useParams();

  const partsData: Record<string, { title: string; description: string; details: string; image?: string }> = {
    "1": {
      title: "Part Design 1",
      description: "Mechanical component design and modeling",
      details: "Detailed information about Part Design 1, including specifications, materials, and manufacturing processes.",
      image: part1
    },
    "2": {
      title: "Part Design 2",
      description: "Multi-component assembly design",
      details: "Detailed information about Part Design 2, including component relationships, mates, and motion analysis.",
      image: part2
    },
    "3": {
      title: "Part Design 3",
      description: "Mechanical component design and modeling",
      details: "Detailed information about Part Design 3, including specifications, materials, and manufacturing processes.",
      image: part3
    },
    "4": {
      title: "Part Design 4",
      description: "Mechanical component design and modeling",
      details: "Detailed information about Part Design 4, including specifications, materials, and manufacturing processes."
    }
  };

  const part = partsData[partId || "1"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/focus-areas/parts')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Parts Gallery
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {part.title}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {part.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-6 border-border bg-card">
              <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                {part.image ? (
                  <img src={part.image} alt={part.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center space-y-2">
                    <Upload className="h-16 w-16 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Main Image Placeholder</p>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Details</h2>
                <p className="text-muted-foreground">{part.details}</p>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Material: Placeholder</p>
                  <p>• Dimensions: Placeholder</p>
                  <p>• Weight: Placeholder</p>
                  <p>• Tolerance: Placeholder</p>
                </div>
              </Card>

              <Card className="p-6 border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Additional Info</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Manufacturing Process: Placeholder</p>
                  <p>• Finish: Placeholder</p>
                  <p>• Applications: Placeholder</p>
                  <p>• Standards: Placeholder</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PartDetail;
