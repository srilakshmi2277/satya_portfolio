import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Grip, Cpu, Settings, Flame, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gripperImage from "@/assets/gripper-project.png";
import roboticArmMechanismImage from "@/assets/robotic-arm-mechanism.png";
import copyrolysisProcessImage from "@/assets/copyrosis-process.png";
const Projects = () => {
  const navigate = useNavigate();
  const projects = [{
    id: "parallel-jaw-gripper",
    icon: Grip,
    title: "Parallel Jaw Gripper (Worm Gear)",
    description: "Complex multi-component system with precision gearing and automated mechanisms. Designed for high-efficiency industrial applications.",
    tags: ["SolidWorks", "Motion Study", "Kinematic Analysis", "CAD Modeling", "Worm-Gear Mechanism Design", "Mechanical Simulation"],
    image: gripperImage,
    externalLink: null
  }, {
    id: "robotic-arm",
    icon: Cpu,
    title: "Pick-and-Place Robotic Arm",
    description: "Designed a robotic arm mechanism used for industrial automation. Analyzed joint motion, reachability, and end-effector performance.",
    tags: ["Fusion 360", "Adams View", "SolidWorks", "Mechanism Simulation", "Kinematics", "Automation Design"],
    image: roboticArmMechanismImage,
    externalLink: null
  }, {
    id: "copyrolysis-research",
    icon: Flame,
    title: "Co-Pyrolysis Research",
    description: "Studied thermal decomposition of PVC and biomass for alternative fuel production. Worked on TGA/DTG curves and kinetic modelling.",
    tags: ["MATLAB", "Thermogravimetric Analyzer (TGA/DTG)", "Excel", "Fixed-Bed Reactor", "Analytical Methods (KAS, FWO, Starink)", "Proximate & Ultimate Analysis"],
    image: copyrolysisProcessImage,
    externalLink: null
  }, {
    id: "bike-handlebar",
    icon: Settings,
    title: "Design & Analysis of Bike Handle Bar and Top Tree",
    description: "Modeled a carburetor in Autodesk Inventor using reverse engineering. Improved knowledge of engine flow systems and 3D component design.",
    tags: ["SolidWorks", "ANSYS Workbench", "Modal Analysis", "Static Structural Analysis", "CAD Modeling", "Finite Element Analysis (FEA)", "Material Selection"],
    externalLink: null
  }];
  return <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my  projects showcasing CAD design, mechanism analysis, and research work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(project => {
          const Icon = project.icon;
          return <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border bg-card">
                {project.image && <div className="relative h-64 overflow-hidden bg-secondary/30">
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                  </div>}
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>)}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="default" className="flex-1" onClick={() => navigate(`/projects/${project.id}`)}>
                      View Details
                    </Button>
                    {project.externalLink && <Button variant="outline" size="icon" asChild>
                        <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>}
                  </div>
                </div>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default Projects;