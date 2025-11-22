const Skills = () => {
  const skillSections = [{
    category: "Design and Simulation",
    skills: "SolidWorks-CSWA Certification (3D Modeling & Viewing, Curves, Surfaces, Sheet Metal & Weldments, Sustainable Design, Tolerancing, Injection Molding), Autodesk Inventor, AutoCAD, ANSYSworkbench, Fusion 360"
  }, {
    category: "Manufacturing",
    skills: "3D Printing, CNC Machining, Welding, Casting, Prototyping, GD&T"
  }, {
    category: "Analysis",
    skills: "Thermal, Static, Modal, Fatigue, CFD Basics"
  }, {
    category: "Soft Skills",
    skills: "Design Thinking, Problem Solving, Team Collaboration, Technical Reporting"
  }, {
    category: "Programming",
    skills: "Python, MATLAB"
  }, {
    category: "Other Tools",
    skills: "MS Office"
  }];
  return <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
        </p>
        </div>

        <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 md:p-10 space-y-4 shadow-sm border border-border/50">
          {skillSections.map(section => <div key={section.category}>
              <p className="text-foreground/90 leading-relaxed text-base">
                <span className="font-semibold text-foreground">{section.category}</span> — {section.skills}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Skills;