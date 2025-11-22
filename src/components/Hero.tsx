import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile-photo.jpg";
const Hero = () => {
  return <section className="min-h-screen flex items-center relative overflow-hidden" style={{
    backgroundImage: `linear-gradient(rgba(210, 231, 244, 0.95), rgba(210, 231, 244, 0.95)), url(${heroBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Hema Rudra </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Master's student in Mechanical Engineering at Northeastern University.
            I specialize in CAD design, mechanism development, robotics, and renewable energy research.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="default" size="lg" className="group" asChild>
              <a href="/HEMA_Rudra.pdf" download="Satyanarayana_Rudra_Resume.pdf">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <a href="https://www.linkedin.com/in/satyanarayanarudra/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <a href="https://github.com/satyanarayanarudra" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <a href="mailto:rudra.h@northeastern.edu" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img src={profileImage} alt="Satyanarayana Rudra" className="relative rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-8 border-card shadow-2xl" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
    </section>;
};
export default Hero;