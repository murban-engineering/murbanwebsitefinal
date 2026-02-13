import { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import contactHero from "@/assets/contact-hero.jpg";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
  "image/jpg",
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

const Contact = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    "NDT Inspection Services",
    "API 653 Tank Inspection",
    "API 510 Pressure Vessel",
    "API 570 Piping Inspection",
    "Phased Array Testing",
    "3D Laser Scanning",
    "UAV Inspection",
    "Engineering & Fabrication",
    "Tank Calibration",
    "General Inquiry",
    "Other",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, serviceType: value }));
    if (errors.serviceType) {
      setErrors(prev => ({ ...prev, serviceType: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        setErrors(prev => ({ ...prev, file: "File size must be less than 10MB" }));
        return;
      }
      // Validate file type
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        setErrors(prev => ({ ...prev, file: "Please upload PDF, Word document, or image files only" }));
        return;
      }
      setSelectedFile(file);
      setErrors(prev => ({ ...prev, file: "" }));
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
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
      setFormData({ name: "", email: "", phone: "", serviceType: "", message: "" });
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
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
      details: "P. O. Box 99215, Off-Airport Road Port Reiz, Mombasa, Coast 80107, KE",
    },
  ];

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Gradient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      </div>
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={contactHero}
            alt="Industrial storage facility"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 backdrop-blur-md border border-border animate-fade-in">
            <span className="text-sm font-medium text-primary">Home - Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 text-foreground animate-fade-in leading-tight">
            CONTACT US
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground animate-fade-in">
            Get in Touch
          </h2>
          <p className="text-2xl md:text-3xl font-medium mb-4 text-muted-foreground animate-fade-in">
            Do You Have Any Questions?
          </p>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground animate-fade-in">
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
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
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
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
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
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select value={formData.serviceType} onValueChange={handleSelectChange}>
                      <SelectTrigger className={errors.serviceType ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.serviceType && (
                      <p className="text-destructive text-sm mt-1">{errors.serviceType}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="file">Attach File (Optional)</Label>
                    <div className="mt-2">
                      <input
                        ref={fileInputRef}
                        id="file"
                        type="file"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      {!selectedFile ? (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full"
                        >
                          Upload Document or Image
                        </Button>
                      ) : (
                        <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{selectedFile.name}</span>
                            <span className="text-xs text-muted-foreground">
                              ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={handleRemoveFile}
                          >
                            Remove
                          </Button>
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, Word, or images up to 10MB
                      </p>
                      {errors.file && (
                        <p className="text-destructive text-sm mt-1">{errors.file}</p>
                      )}
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Google Map */}
            <Card className="animate-fade-in border-border/50 shadow-xl overflow-hidden">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="w-full flex-1 min-h-[500px]">
                  <iframe
                    title="Murban Engineering Office Location - Mombasa, Kenya"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082584!2d39.5942!3d-4.0435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e78ec02c15%3A0x3b46b3c6a9bd771b!2sPort%20Reitz%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "500px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-4 bg-card border-t border-border">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      <p className="text-sm text-muted-foreground font-medium">
                        Off-Airport Road, Port Reitz, Mombasa, Kenya
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Port+Reitz+Mombasa+Kenya"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
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
