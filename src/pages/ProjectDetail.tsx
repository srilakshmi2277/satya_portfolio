import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


// Import project images
import gripperImage from "@/assets/gripper-project.png";
import gripperMechanismImage from "@/assets/gripper-mechanism.png";
import roboticArmMechanismImage from "@/assets/robotic-arm-mechanism.png";
import copyrolysisProcessImage from "@/assets/copyrosis-process.png";
import { Grip, Cpu, Settings, Flame } from "lucide-react";
const ProjectDetail = () => {
  const navigate = useNavigate();
  const {
    projectId
  } = useParams();
  const projectsData = [{
    id: "parallel-jaw-gripper",
    icon: Grip,
    title: "Parallel Jaw Gripper (Worm Gear)",
    description: "Complex multi-component system with precision gearing and automated mechanisms. Designed for high-efficiency industrial applications.",
    tags: ["SolidWorks", "Motion Study", "Kinematic Analysis", "CAD Modeling", "Worm-Gear Mechanism Design", "Mechanical Simulation"],
    image: gripperImage,
    mechanismImage: gripperMechanismImage,
    about: "This project involves the design and analysis of a worm-driven parallel jaw gripper developed as part of my robotics coursework. The goal was to create a compact, single-actuator mechanism capable of producing synchronized, symmetric jaw motion suitable for pick-and-place automation. The gripper uses a central worm gear system to convert rotational motor input into smooth and controlled linear jaw displacement, ensuring stability and precision during object handling.",
    mechanism: "The mechanism is built around a centrally mounted worm gear that drives two worm wheels placed on either side. When the worm rotates, both worm wheels turn in opposite directions due to the gear geometry. Each worm wheel is connected to a crank link, which converts the rotational motion into linear sliding motion of the jaws. This setup ensures that both jaws move equally and symmetrically, maintaining the object at the center during gripping. The worm-gear arrangement also provides high torque multiplication and self-locking, which prevents back-driving and allows the gripper to hold objects securely even when the motor is not powered.",
    results: ["Achieved 1-DOF synchronized jaw motion using a single worm-driven actuator", "Validated the forward kinematic model: w(θ₀) = 117 − 30.25cos(0.346θ₀)", "Obtained a total jaw travel of ~60.5 mm with smooth cosine-based displacement", "Required ~331° of worm rotation for full open-to-close motion", "Self-locking mechanism allows stable gripping without continuous motor power", "SolidWorks motion study confirmed smooth, symmetric jaw movement and accurate mechanical response"],
    demoVideo: "https://youtu.be/fEWpn729Mcw"
  }, {
    id: "robotic-arm",
    icon: Cpu,
    title: "Pick-and-Place Robotic Arm",
    description: "Designed a robotic arm mechanism used for industrial automation. Analyzed joint motion, reachability, and end-effector performance.",
    tags: ["Fusion 360", "Adams View", "SolidWorks", "Mechanism Simulation", "Kinematics", "Automation Design"],
    image: roboticArmMechanismImage,
    about: "This project focuses on the design and simulation of a pick-and-place robotic arm, capable of transferring objects from one position to another with precision. The mechanism replicates the function of industrial automation systems widely used in manufacturing, packaging, and assembly lines. The project emphasizes efficient motion coordination, joint synchronization, and load management to ensure accurate positioning.",
    mechanism: "The robotic arm consists of a two-link manipulator driven by a gear-based mechanism. The arm operates on rotational motion converted into linear displacement at the gripper end, allowing it to pick and place objects smoothly. The system was modeled and simulated using Adams and Fusion 360, enabling the visualization of joint constraints, angular displacement, and end-effector trajectory. The mechanism incorporates synchronized gear motion to achieve a stable grip and consistent path control.",
    results: ["Successfully simulated smooth pick-and-place motion with controlled gripping and release", "Verified joint synchronization and positional accuracy through motion analysis", "Demonstrated industrial applicability for repetitive handling and material transfer operations", "Enhanced understanding of mechanical linkages, motion constraints, and automation design"]
  }, {
    id: "copyrolysis-research",
    icon: Flame,
    title: "Co-Pyrolysis Research",
    description: "Studied thermal decomposition of PVC and biomass for alternative fuel production. Worked on TGA/DTG curves and kinetic modelling.",
    tags: ["MATLAB", "Thermogravimetric Analyzer (TGA/DTG)", "Excel", "Fixed-Bed Reactor", "Analytical Methods (KAS, FWO, Starink)", "Proximate & Ultimate Analysis"],
    image: copyrolysisProcessImage,
    aboutHeading: "Problem Statement",
    about: "The growing global demand for energy has created a shortage of fossil fuels, driving the need for renewable alternatives. Plastic and agricultural wastes are often discarded, leading to environmental pollution. This project focuses on converting these waste materials into renewable energy sources through pyrolysis, addressing both waste management and energy recovery challenges.",
    mechanismHeading: "Detail Information",
    mechanism: ["This project investigates the co-pyrolysis of Sapindus trifoliatus (Soapnut biomass) and PVC flex banner waste to produce bio-oil, bio-char, and biogas", "A fixed-bed reactor system was used to thermally decompose the mixed feedstock under controlled temperature and heating rates", "Proximate and ultimate analyses were conducted to determine the composition and suitability of the feedstocks", "Thermogravimetric (TGA/DTG) analysis was used to study weight loss and decomposition patterns across multiple heating rates (10–25 °C/min)", "Iso-conversional kinetic models (Kissinger, Flynn-Wall-Ozawa, and Starink) were applied to estimate activation energy and understand reaction mechanisms", "The thermodynamic parameters (ΔH, ΔS, ΔG) were evaluated to analyze the spontaneity and energy potential of the reaction", "This study provided insight into how biomass–plastic synergy enhances conversion efficiency and quality of bio-fuel, offering a sustainable pathway for energy recovery"],
    mechanismImage: copyrolysisProcessImage,
    results: ["Determined an optimal feedstock ratio of 1:1 (Soapnut : PVC) for maximum energy yield", "Established ideal pyrolysis conditions: 700 °C temperature and 10 °C/min heating rate", "Derived activation energy values for each feedstock and blend using kinetic modeling", "Calculated a calorific value of 12,947 kJ/kg for the produced bio-oil", "Demonstrated that further purification of the oil could enhance its combustion quality and energy potential"]
  }, {
    id: "bike-handlebar",
    icon: Settings,
    title: "Design & Analysis of Bike Handle Bar and Top Tree",
    description: "Modeled a carburetor in Autodesk Inventor using reverse engineering. Improved knowledge of engine flow systems and 3D component design.",
    tags: ["SolidWorks", "ANSYS Workbench", "Modal Analysis", "Static Structural Analysis", "CAD Modeling", "Finite Element Analysis (FEA)", "Material Selection"],
    about: "Motorcycle handle bars and top trees experience continuous vibration, road impacts, and structural loads. Poor design can lead to discomfort, instability, and possible mechanical failure. This project aimed to analyze the vibration behavior of the handle bar using modal analysis and to evaluate the structural strength of the top tree using static analysis, ensuring safety, stiffness, and mass optimization.",
    mechanism: "The handle bar was modeled in SolidWorks and analyzed using ANSYS Modal Analysis to determine its natural frequencies and mode shapes. Vibration frequencies were compared with engine and road excitation ranges to avoid resonance conditions. The top tree was analyzed under static loading conditions representing braking forces and road shocks. FEA was used to calculate stress distribution, deformation, and factor of safety. Material optimization was conducted using steel alloys and aluminum variants to balance strength and weight.",
    results: ["Identified the first six natural frequencies and confirmed no overlap with operational engine frequencies (avoiding resonance)", "Validated safe stress levels and minimal deformation under typical riding loads", "Confirmed a factor of safety greater than 2 for structural components under maximum expected loads", "Recommended lightweight aluminum alloy (Al 7075-T6) for the handle bar and high-strength steel for the top tree", "Enhanced understanding of vibration analysis and structural optimization for automotive applications"]
  }];
  const project = projectsData.find(p => p.id === projectId);
  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>;
  }
  const Icon = project.icon;
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 section-padding">
        <div className="max-w-7xl mx-auto">
          <Button variant="ghost" onClick={() => {
            navigate('/');
            setTimeout(() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }} className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>

          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-lg bg-primary/10 shrink-0">
                <Icon className="h-12 w-12 text-primary" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </div>
            </div>

            {/* Main Image */}
            {project.image && <Card className="overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-auto" />
              </Card>}

            {/* About Section */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">{project.aboutHeading || "About"}</h2>
              <p className="text-muted-foreground leading-relaxed">{project.about}</p>
            </Card>

            {/* Mechanism/Details Section */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">{project.mechanismHeading || "Mechanism"}</h2>
              {Array.isArray(project.mechanism) ? <ul className="space-y-3">
                  {project.mechanism.map((item, index) => <li key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>)}
                </ul> : <p className="text-muted-foreground leading-relaxed">{project.mechanism}</p>}
              {project.mechanismImage && <img src={project.mechanismImage} alt="Mechanism" className="mt-6 w-full rounded-lg" />}
            </Card>

            {/* Results Section */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Key Results</h2>
              <ul className="space-y-3">
                {project.results.map((result, index) => <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-muted-foreground leading-relaxed">{result}</span>
                  </li>)}
              </ul>
              {project.demoVideo && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Motion Video</h3>
                  <Button asChild variant="outline">
                    <a href={project.demoVideo} target="_blank" rel="noopener noreferrer" className="gap-2">
                      View Motion Study Video
                    </a>
                  </Button>
                </div>
              )}
            </Card>

          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default ProjectDetail;