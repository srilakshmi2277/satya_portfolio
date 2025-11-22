import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import assembly1 from "@/assets/assembly-1.png";
import assembly2 from "@/assets/assembly-2.png";
import assembly3 from "@/assets/assembly-3.png";
import assembly4 from "@/assets/assembly-4.png";

const FocusAreasAssemblies = () => {
  const navigate = useNavigate();

  const assemblies = [
    {
      id: 1,
      title: "Assembly Work 1",
      description: "Multi-component assembly design",
      image: assembly1,
      path: "/focus-areas/assemblies/1"
    },
    {
      id: 2,
      title: "Assembly Work 2",
      description: "Placeholder for assembly design and mechanism work",
      image: assembly2,
      path: "/focus-areas/assemblies/2"
    },
    {
      id: 3,
      title: "Assembly Work 3",
      description: "Placeholder for assembly design and mechanism work",
      image: assembly3,
      path: "/focus-areas/assemblies/3"
    },
    {
      id: 4,
      title: "Assembly Work 4",
      description: "Placeholder for assembly design and mechanism work",
      image: assembly4,
      path: "/focus-areas/assemblies/4"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/focus-areas')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Focus Areas
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Assemblies <span className="gradient-text">Gallery</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Multi-component assemblies, mates and motion relationships, mechanism layouts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {assemblies.map((assembly) => (
              <Card
                key={assembly.id}
                className="p-6 border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => navigate(assembly.path)}
              >
                <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  {assembly.image ? (
                    <img 
                      src={assembly.image} 
                      alt={assembly.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center space-y-2">
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Image Placeholder {assembly.id}</p>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{assembly.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {assembly.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FocusAreasAssemblies;
