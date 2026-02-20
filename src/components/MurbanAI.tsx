import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const MURBAN_KNOWLEDGE = `
Murban Engineering is a leading engineering and NDT (Non-Destructive Testing) company operating across Africa.

SERVICES:
- General NDT: Ultrasonic Testing, Magnetic Particle Testing, Dye Penetrant Testing, Radiographic Testing, Paint & Coating Inspection, PMI Testing, Tank Calibration
- Advanced NDT: Phased Array Testing (PAUT), 3D Laser Scanning, Thermal Camera Inspection, ACFM, Floormap 3D MFL Scanning, UAV Drone Inspection
- Engineering Assessments: API 579 Fitness for Service, API 580 Risk Based Inspection, API 510 Pressure Vessel Inspection, API 570 Piping Inspection, API 653 Tank Inspection, Boiler Inspection, Lifting Equipment Certification
- Engineering & Fabrication: Detailed Engineering, Procurement, Fabrication, Construction & Erection, Specialized Welding, Surface Preparation & Paint Works

INDUSTRIES SERVED: Oil & Gas, Power Generation, Shipping & Marine, Food Processing, Rail, Renewable Energy, Storage Terminals

KEY FACTS:
- 25+ years of experience
- 1,800+ projects delivered
- 42+ expert engineers
- ISO 9001 certified
- 98% client satisfaction rate
- Operations across East Africa including Kenya (HQ), Uganda, Tanzania, Ethiopia, Rwanda, South Sudan, Somalia, DRC, Mozambique, Zambia, Malawi, Burundi, Djibouti, Eritrea, Madagascar, South Africa, Nigeria, Ghana, Senegal, Egypt

CLIENTS: TotalEnergies, KenGen, Bolloré Africa Logistics, KPC

CERTIFICATIONS: ISO 9001, API certifications, ASNT certified inspectors

CONTACT: Visit the contact page at /contact for inquiries.
`;

const findAnswer = (query: string): string => {
  const q = query.toLowerCase();

  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("good"))
    return "Hello! 👋 I'm Murban AI, your assistant for all things Murban Engineering. How can I help you today? I can tell you about our services, industries we serve, certifications, or help you get in touch with our team.";

  if (q.includes("who") && (q.includes("murban") || q.includes("you") || q.includes("company")))
    return "Murban Engineering is a leading NDT and engineering services company with 25+ years of experience, headquartered in Kenya. We've delivered over 1,800 projects across Africa with a team of 42+ expert engineers. We're ISO 9001 certified with a 98% client satisfaction rate.";

  if (q.includes("service") || q.includes("what do you do") || q.includes("offer"))
    return "We offer four main categories of services:\n\n🔍 **General NDT** – Ultrasonic, Magnetic Particle, Dye Penetrant, Radiographic Testing & more\n⚡ **Advanced NDT** – Phased Array, 3D Laser Scanning, Thermal Imaging, UAV Inspection\n📋 **Engineering Assessments** – API 579/580/510/570/653 inspections & certifications\n🔧 **Engineering & Fabrication** – Detailed engineering, procurement, fabrication, welding & construction\n\nVisit our Services page for full details!";

  if (q.includes("ndt") || q.includes("non-destructive") || q.includes("testing") || q.includes("inspection"))
    return "Our NDT services include Ultrasonic Flaw Testing (B-Scan & C-Scan), Magnetic Particle Testing, Dye Penetrant Testing, Radiographic Services, Phased Array Testing, 3D Laser Scanning, Thermal Camera Inspection, ACFM, and more. We use state-of-the-art equipment operated by ASNT-certified inspectors.";

  if (q.includes("industry") || q.includes("sector"))
    return "We serve multiple industries:\n\n🛢️ Oil & Gas\n⚡ Power Generation\n🚢 Shipping & Marine\n🍔 Food Processing\n🚂 Rail\n🌱 Renewable Energy\n🏭 Storage Terminals\n\nEach industry gets tailored inspection and engineering solutions.";

  if (q.includes("country") || q.includes("where") || q.includes("location") || q.includes("africa") || q.includes("operate"))
    return "Our headquarters is in **Kenya**, and we operate across Africa including: Uganda, Tanzania, Ethiopia, Rwanda, South Sudan, Somalia, DRC, Mozambique, Zambia, Malawi, Burundi, Djibouti, Eritrea, Madagascar, South Africa, Nigeria, Ghana, Senegal, and Egypt.";

  if (q.includes("contact") || q.includes("reach") || q.includes("email") || q.includes("phone") || q.includes("quote"))
    return "You can reach our team through our Contact page! Visit **/contact** to send us a message, request a quote, or discuss your next project. We'll get back to you promptly.";

  if (q.includes("certif") || q.includes("iso") || q.includes("api") || q.includes("standard"))
    return "Murban Engineering holds **ISO 9001** certification and maintains API certifications for pressure vessel (API 510), piping (API 570), and tank inspection (API 653). Our inspectors are ASNT-certified. Visit our Certifications page for more details.";

  if (q.includes("client") || q.includes("customer") || q.includes("partner") || q.includes("work with"))
    return "We're trusted by industry leaders including **TotalEnergies**, **KenGen**, **Bolloré Africa Logistics**, and **KPC**. Our 98% client satisfaction rate speaks to our commitment to quality delivery.";

  if (q.includes("fabricat") || q.includes("weld") || q.includes("construct") || q.includes("engineer"))
    return "Our Engineering & Fabrication services include:\n\n📐 Detailed Engineering\n📦 Procurement\n🔨 Fabrication (precision cutting, welding, assembly)\n🏗️ Construction & Erection\n⚡ Specialized Welding (TIG, MIG, SMAW, SAW)\n🎨 Surface Preparation & Paint Works";

  if (q.includes("experience") || q.includes("year") || q.includes("project") || q.includes("stat"))
    return "Here are some key stats:\n\n📅 **25+ years** of experience\n📊 **1,800+** projects delivered\n👷 **42+** expert engineers\n🏆 **ISO 9001** certified\n⭐ **98%** client satisfaction rate";

  if (q.includes("thank"))
    return "You're welcome! 😊 Feel free to reach out anytime. If you'd like to discuss a project, visit our Contact page at /contact.";

  return "I can help you with information about Murban Engineering's services, industries we serve, our certifications, locations across Africa, or how to get in touch. What would you like to know?";
};

const MurbanAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! 👋 I'm **Murban AI**. Ask me anything about Murban Engineering — our services, industries, certifications, or locations across Africa.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const answer = findAnswer(userMsg.content);
      setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
    }, 500);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Open Murban AI Chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[500px] w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-primary px-4 py-3">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary-foreground" />
              <span className="font-semibold text-primary-foreground">Murban AI</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                >
                  {msg.content.split("\n").map((line, j) => (
                    <p key={j} className={j > 0 ? "mt-1" : ""}>
                      {line.split(/(\*\*[^*]+\*\*)/).map((part, k) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <strong key={k}>{part.slice(2, -2)}</strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border px-3 py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <Button
                type="submit"
                size="icon"
                className="h-10 w-10 shrink-0 rounded-xl"
                disabled={!input.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MurbanAI;
