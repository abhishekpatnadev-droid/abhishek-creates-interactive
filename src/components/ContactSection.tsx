import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abhishek.patna.dev@gmail.com",
      href: "mailto:abhishek.patna.dev@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7979708232",
      href: "tel:7979708232",
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Patna, Bihar, India",
      href: null,
      color: "text-secondary"
    },
    {
      icon: Calendar,
      label: "Response Time",
      value: "Within 24 hours",
      href: null,
      color: "text-primary-glow"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Project Inquiry');
    const body = encodeURIComponent(
      `Hi Abhishek,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    
    window.location.href = `mailto:abhishek.patna.dev@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client should open with the message pre-filled."
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="hero-text">Connect</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-primary rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm here to help you create exceptional 
            digital experiences. Let's discuss your project and turn your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className={`glass-card p-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass-card border-glass-border mt-2"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass-card border-glass-border mt-2"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="glass-card border-glass-border mt-2"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="glass-card border-glass-border mt-2 resize-none"
                  placeholder="Tell me about your project, timeline, and requirements..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="glass-button w-full py-6 text-lg hover:scale-[1.02] transition-all duration-300"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className={`space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new projects and opportunities. 
                Whether you're a startup looking to build your first app or an 
                established business seeking to enhance your digital presence, 
                I'm here to help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.label}
                    className="flex items-center gap-4 group"
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className={`font-medium ${info.color} hover:underline transition-colors`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className={`font-medium ${info.color}`}>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick contact actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="glass-button p-6 h-auto flex-col gap-2"
                onClick={() => window.open('tel:7979708232')}
              >
                <Phone className="h-6 w-6 text-accent" />
                <span className="text-sm">Call Now</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass-button p-6 h-auto flex-col gap-2"
                onClick={() => window.open('mailto:abhishek.patna.dev@gmail.com')}
              >
                <Mail className="h-6 w-6 text-primary" />
                <span className="text-sm">Email Direct</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;