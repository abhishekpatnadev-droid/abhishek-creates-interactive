import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Monitor, Mail } from "lucide-react";

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Limra Convent School App",
      description: "Complete school management mobile application for Limra Convent featuring student test results, notices, upcoming tests, recent results, and school activities. Streamlines communication between teachers, students, and parents.",
      type: "mobile", 
      tech: ["React Native", "Firebase", "Node.js", "MongoDB"],
      image: "🏛️",
      highlights: ["Live in Production", "500+ Students", "Real-time Updates"]
    },
    {
      title: "EduPortal Web Platform",
      description: "Modern web platform for educational institutions featuring course management, online assessments, and student analytics dashboard with beautiful UI/UX design.",
      type: "web", 
      tech: ["React.js", "TypeScript", "Tailwind CSS", "AWS"],
      image: "📚",
      highlights: ["Multi-tenant Architecture", "Real-time Analytics", "Mobile Responsive"]
    },
    {
      title: "Student Assessment System",
      description: "Digital assessment platform that enables teachers to create, distribute, and grade tests online. Includes automated grading, detailed analytics, and performance tracking.",
      type: "web",
      tech: ["Next.js", "PostgreSQL", "Stripe", "Docker"],
      image: "✏️",
      highlights: ["10,000+ Tests Taken", "Automated Grading", "Performance Analytics"]
    },
    {
      title: "Campus Connect App",
      description: "Social networking app designed specifically for educational campuses, enabling students and faculty to connect, share resources, and collaborate on projects.",
      type: "mobile",
      tech: ["React Native", "GraphQL", "Redis", "Socket.io"],
      image: "🤝",
      highlights: ["Real-time Messaging", "File Sharing", "Event Management"]
    }
  ];

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="hero-text">Portfolio</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-primary rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects showcasing innovative solutions in educational technology 
            and beyond. Each project represents a commitment to excellence and user-centric design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`glass-card p-8 hover-lift group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              {/* Project header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{project.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {project.type === 'mobile' ? (
                        <Smartphone className="h-4 w-4 text-accent" />
                      ) : (
                        <Monitor className="h-4 w-4 text-primary" />
                      )}
                      <span className="text-sm text-muted-foreground capitalize">
                        {project.type} Application
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="glass-card text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="glass-card p-2 rounded text-center">
                      <span className="text-xs text-accent font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="pt-4 border-t border-glass-border">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="glass-button w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Interested? Let's Talk
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground mb-6">
            Interested in working together? Let's create something amazing!
          </p>
          <Button 
            size="lg" 
            className="glass-button px-8 py-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;