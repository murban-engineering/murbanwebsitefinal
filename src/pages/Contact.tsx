import { useState } from "react";
import {
  MailIcon as Mail,
  PhoneIcon as Phone,
  MapPinIcon as MapPin,
  SendIcon as Send,
} from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { DottedSurface } from "@/components/ui/dotted-surface";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate form data
      contactSchema.parse(formData);

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation error",
          description: "Please check the form for errors.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      details: "info@murban-eng.com",
      link: "mailto:info@murban-eng.com",
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "+ 254 20 265 0618",
      link: "tel:+254202650618",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Off Airport Road, Mombasa Port Reitz",
    },
  ];

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Full Page Dotted Background with Grid Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <DottedSurface className="size-full opacity-40" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      </div>
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in">
            <span className="text-sm font-medium text-white">Home - Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white animate-fade-in leading-tight">
            CONTACT US
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white animate-fade-in">
            Get in Touch
          </h2>
          <p className="text-2xl md:text-3xl font-medium mb-4 text-white/90 animate-fade-in">
            Do You Have Any Questions?
          </p>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-white animate-fade-in">
            Let's connect — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="text-center group hover:-translate-y-2 transition-all duration-300 animate-scale-in border-border/50 hover:border-primary/50 bg-gradient-card hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all shadow-md group-hover:shadow-glow">
                    <info.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-muted-foreground font-medium">{info.details}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="animate-fade-in border-border/50 bg-gradient-card shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your message (optional)"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="animate-fade-in border-border/50 shadow-xl overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full min-h-[500px] bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
                  <div className="text-center p-8 relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <MapPin className="h-10 w-10 text-primary animate-pulse-glow" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Visit Our Office</h3>
                    <p className="text-muted-foreground font-medium mb-6">
                      Off Airport Road<br />
                      Mombasa Port Reitz
                    </p>
                    <Button variant="outline" className="mt-2 shadow-md hover:shadow-lg" asChild>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
