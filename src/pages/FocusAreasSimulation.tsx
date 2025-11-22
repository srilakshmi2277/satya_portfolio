import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import simulation1 from "@/assets/simulation-1.png";
import simulation2 from "@/assets/simulation-2.png";
import simulation3 from "@/assets/simulation-3.png";

const FocusAreasSimulation = () => {
  const navigate = useNavigate();

  const simulations = [
    { id: 1, title: "Simulation 1", description: "Placeholder for finite element analysis and performance validation", path: "/focus-areas/simulation/1", image: simulation1 },
    { id: 2, title: "Simulation 2", description: "Placeholder for finite element analysis and performance validation", path: "/focus-areas/simulation/2", image: simulation2 },
    { id: 3, title: "Simulation 3", description: "Placeholder for finite element analysis and performance validation", path: "/focus-areas/simulation/3", image: simulation3 },
    { id: 4, title: "Simulation 4", description: "Placeholder for finite element analysis and performance validation", path: "/focus-areas/simulation/4", image: undefined as string | undefined },
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
              Simulation <span className="gradient-text">Gallery</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Finite element analysis, motion simulation, and performance validation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {simulations.map((simulation) => (
              <Card
                key={simulation.id}
                className="group p-6 border-border bg-card hover:shadow-lg hover:border-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate(simulation.path)}
              >
                <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  {simulation.image ? (
                    <img src={simulation.image} alt={simulation.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center space-y-2">
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Image Placeholder {simulation.id}</p>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">{simulation.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {simulation.description}
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

export default FocusAreasSimulation;
