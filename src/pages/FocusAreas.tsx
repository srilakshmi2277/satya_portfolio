import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Package, Grid3x3, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FocusAreas = () => {
  const navigate = useNavigate();

  const areas = [
    {
      icon: Package,
      title: "Parts",
      description: "3D modeling of mechanical components, parametric design, and manufacturability",
      path: "/focus-areas/parts",
    },
    {
      icon: Grid3x3,
      title: "Assemblies",
      description: "Multi-component assemblies, mates and motion relationships, mechanism layouts",
      path: "/focus-areas/assemblies",
    },
    {
      icon: Activity,
      title: "Simulation",
      description: "Finite element analysis, motion simulation, and performance validation",
      path: "/focus-areas/simulation",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Focus <span className="gradient-text">Areas</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Key design and engineering areas I work on
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {areas.map((area) => (
              <Card
                key={area.title}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card cursor-pointer"
                onClick={() => navigate(area.path)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <area.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">{area.title}</h2>
                  <p className="text-muted-foreground">{area.description}</p>
                  <Button variant="default" className="mt-4">
                    View Gallery
                  </Button>
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

export default FocusAreas;
