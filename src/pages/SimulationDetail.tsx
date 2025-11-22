import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Upload } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import simulation1 from "@/assets/simulation-1.png";
import simulation2 from "@/assets/simulation-2.png";
import simulation3 from "@/assets/simulation-3.png";

const SimulationDetail = () => {
  const navigate = useNavigate();
  const { simulationId } = useParams();

  const simulationsData: Record<string, { title: string; description: string; details: string; image?: string }> = {
    "1": {
      title: "Simulation 1",
      description: "Finite element analysis and performance validation",
      details: "Detailed information about Simulation 1, including analysis type, loading conditions, and results.",
      image: simulation1
    },
    "2": {
      title: "Simulation 2",
      description: "Motion simulation and kinematic analysis",
      details: "Detailed information about Simulation 2, including motion parameters, constraints, and results.",
      image: simulation2
    },
    "3": {
      title: "Simulation 3",
      description: "Stress analysis and optimization",
      details: "Detailed information about Simulation 3, including stress distribution, safety factors, and optimization results.",
      image: simulation3
    },
    "4": {
      title: "Simulation 4",
      description: "Thermal and flow analysis",
      details: "Detailed information about Simulation 4, including temperature distribution, heat transfer, and flow patterns."
    }
  };

  const simulation = simulationsData[simulationId || "1"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/focus-areas/simulation')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Simulation Gallery
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {simulation.title}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {simulation.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-6 border-border bg-card">
              <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                {simulation.image ? (
                  <img src={simulation.image} alt={simulation.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center space-y-2">
                    <Upload className="h-16 w-16 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Main Image Placeholder</p>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Details</h2>
                <p className="text-muted-foreground">{simulation.details}</p>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Analysis Parameters</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Analysis Type: Placeholder</p>
                  <p>• Mesh Size: Placeholder</p>
                  <p>• Solver: Placeholder</p>
                  <p>• Iterations: Placeholder</p>
                </div>
              </Card>

              <Card className="p-6 border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Results</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Max Stress: Placeholder</p>
                  <p>• Displacement: Placeholder</p>
                  <p>• Safety Factor: Placeholder</p>
                  <p>• Performance: Placeholder</p>
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

export default SimulationDetail;
