import DisplayCards from "@/components/ui/display-cards";
import { BuildingIcon as Building2, CompassIcon as Compass, LayersIcon as Layers } from "@/components/ui/icons";

const QuickLinks = () => {
  const cards = [
    {
      icon: <Compass className="h-4 w-4 text-sky-300" />,
      title: "About Murban Engineering",
      description: "Discover our heritage and team.",
      date: "Start with our story",
      iconClassName: "bg-sky-900",
      titleClassName: "text-sky-400",
      className:
        "[grid-area:stack] hover:-translate-y-8 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
      to: "/about",
    },
    {
      icon: <Layers className="h-4 w-4 text-purple-300" />,
      title: "Services Overview",
      description: "Review our engineering capabilities.",
      date: "Explore service lines",
      iconClassName: "bg-purple-900",
      titleClassName: "text-purple-400",
      className:
        "[grid-area:stack] translate-x-16 translate-y-8 hover:-translate-y-2 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
      to: "/services",
    },
    {
      icon: <Building2 className="h-4 w-4 text-amber-300" />,
      title: "Industry Solutions",
      description: "See how we tailor programs by sector.",
      date: "Browse solution sets",
      iconClassName: "bg-amber-900",
      titleClassName: "text-amber-400",
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
      to: "/industry-solutions",
    },
  ];

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-background px-4 py-24">
      <DisplayCards cards={cards} />
    </section>
  );
};

export default QuickLinks;
