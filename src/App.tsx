import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FocusAreas from "./pages/FocusAreas";
import FocusAreasParts from "./pages/FocusAreasParts";
import FocusAreasAssemblies from "./pages/FocusAreasAssemblies";
import FocusAreasSimulation from "./pages/FocusAreasSimulation";
import ProjectDetail from "./pages/ProjectDetail";
import PartDetail from "./pages/PartDetail";
import AssemblyDetail from "./pages/AssemblyDetail";
import SimulationDetail from "./pages/SimulationDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/focus-areas" element={<FocusAreas />} />
          <Route path="/focus-areas/parts" element={<FocusAreasParts />} />
          <Route path="/focus-areas/parts/:partId" element={<PartDetail />} />
          <Route path="/focus-areas/assemblies" element={<FocusAreasAssemblies />} />
          <Route path="/focus-areas/assemblies/:assemblyId" element={<AssemblyDetail />} />
          <Route path="/focus-areas/simulation" element={<FocusAreasSimulation />} />
          <Route path="/focus-areas/simulation/:simulationId" element={<SimulationDetail />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
