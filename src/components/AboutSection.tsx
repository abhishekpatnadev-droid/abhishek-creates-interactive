import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Lightbulb, Users } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const expertise = [
    {
      icon: GraduationCap,
      title: "Education Focus",
      description: "Specialized in creating impactful educational technology solutions for schools and institutions."
    },
    {
      icon: Code,
      title: "Full-Stack Development", 
      description: "Proficient in both mobile app and web development using modern technologies."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about creating user-centric solutions that solve real-world problems."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Committed to delivering projects that exceed expectations and drive results."
    }
  ];

  const skills = [
    "React Native", "React.js", "Node.js", "MongoDB", 
    "TypeScript", "Tailwind CSS", "Firebase", "AWS",
    "UI/UX Design", "Mobile Development", "Web Development"
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="hero-text">Me</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-primary rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with a strong focus on educational technology. 
            My journey in development has been driven by the desire to create meaningful 
            solutions that enhance learning experiences and empower institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal story */}
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Card className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold text-accent mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a new developer with years of hands-on experience, I've dedicated myself to 
                mastering the art of creating digital solutions that make a real impact. 
                My specialization in educational technology stems from my belief that 
                technology should serve to enhance learning and make education more accessible.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From mobile apps that streamline school operations to web platforms that 
                connect students with resources, I bring creativity, technical expertise, 
                and a deep understanding of user needs to every project.
              </p>
            </Card>
          </div>

          {/* Skills cloud */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill}
                  variant="secondary" 
                  className="glass-card px-4 py-2 text-sm font-medium hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <Card 
              key={item.title}
              className={`glass-card p-6 text-center hover-lift transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${800 + index * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;