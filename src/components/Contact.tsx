import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rudra.h@northeastern.edu",
      link: "mailto:rudra.h@northeastern.edu",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (617) 708-6011",
      link: "tel:+16177086011",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Boston, MA",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/satyanarayanarudra/",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/satyanarayanarudra",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-border bg-card">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out through any of these platforms. I'm always interested in
                  hearing about new opportunities in mechanical engineering, robotics, and sustainable technology.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="lg"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <social.icon className="h-5 w-5" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
