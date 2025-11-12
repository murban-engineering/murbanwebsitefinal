import DisplayCards from "@/components/ui/display-cards";
import { Building2, Compass, Phone } from "lucide-react";

const cards = [
  {
    title: "Services",
    description: "Explore our integrated engineering and inspection expertise.",
    date: "View services",
    icon: <Compass className="h-4 w-4 text-blue-300" />,
    iconClassName: "bg-blue-800",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    title: "Industry Solutions",
    description: "See how we tailor outcomes across critical sectors.",
    date: "Discover industries",
    icon: <Building2 className="h-4 w-4 text-blue-300" />,
    iconClassName: "bg-blue-800",
    className:
      "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    title: "Contact Us",
    description: "Connect with our specialists to start your next project.",
    date: "Get in touch",
    icon: <Phone className="h-4 w-4 text-blue-300" />,
    iconClassName: "bg-blue-800",
    className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  },
];

export default function DiscoverExcellence() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.15),_transparent_55%)]" />
      <div className="relative z-10 flex flex-col items-center gap-12">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Discover Excellence</h1>
        <DisplayCards cards={cards} />
      </div>
    </section>
  );
}
