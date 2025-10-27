import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Search,
  Flame,
  Bookmark,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Importance of Regular Tank Inspection in Oil & Gas",
      excerpt: "Discover how routine tank inspections can prevent catastrophic failures and ensure compliance with industry standards.",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "Asset Integrity",
    },
    {
      title: "Understanding API 570 Piping Inspection Standards",
      excerpt: "A comprehensive guide to API 570 standards and their critical role in maintaining safe piping systems.",
      date: "2024-03-10",
      readTime: "7 min read",
      category: "Standards & Compliance",
    },
    {
      title: "Advanced NDT Techniques: Phased Array vs Traditional UT",
      excerpt: "Compare the benefits of phased array ultrasonic testing with conventional ultrasonic methods for industrial applications.",
      date: "2024-03-05",
      readTime: "6 min read",
      category: "Technology",
    },
    {
      title: "Drone Inspection: The Future of Asset Integrity",
      excerpt: "How UAV technology is revolutionizing inspection processes and improving safety in hazardous environments.",
      date: "2024-02-28",
      readTime: "4 min read",
      category: "Innovation",
    },
    {
      title: "Risk-Based Inspection (RBI) Strategies for Cost Optimization",
      excerpt: "Learn how implementing API 580 RBI can optimize your maintenance budget while maintaining safety standards.",
      date: "2024-02-20",
      readTime: "8 min read",
      category: "Best Practices",
    },
    {
      title: "Corrosion Management in African Climates",
      excerpt: "Specialized approaches to corrosion detection and prevention in tropical and coastal environments.",
      date: "2024-02-15",
      readTime: "5 min read",
      category: "Regional Insights",
    },
  ];

  const categories = ["All", "Asset Integrity", "Standards & Compliance", "Technology", "Innovation", "Best Practices", "Regional Insights"];

  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  const trendingTopics = [
    {
      title: "AI-Assisted Inspection Workflows",
      description: "How machine learning is streamlining anomaly detection across complex facilities.",
    },
    {
      title: "Decarbonising Maintenance Fleets",
      description: "Practical steps for oil & gas operators to reduce the carbon intensity of field operations.",
    },
    {
      title: "Building a Digital Twin Roadmap",
      description: "Key considerations when connecting inspection data streams into a single command centre.",
    },
  ];

  const editorialTeam = [
    { name: "AA", role: "Principal Inspector" },
    { name: "BM", role: "RBI Specialist" },
    { name: "CN", role: "Integrity Engineer" },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 left-10 h-60 w-60 rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <Badge variant="outline" className="mb-6 px-4 py-1 text-sm uppercase tracking-[0.3em] backdrop-blur">
              Murban Insights
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              The future of asset integrity, decoded for leaders of today.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Discover actionable strategies, emerging technologies, and on-the-ground perspectives shaping industrial reliability across Africa and beyond.
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-center">
            <div className="relative w-full md:w-[420px]">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-11 pr-4 h-12 rounded-full bg-background/80 backdrop-blur border-border/60" placeholder="Search stories, keywords, or technologies" />
            </div>
            <Button size="lg" className="h-12 rounded-full px-6 gap-2">
              <Sparkles className="h-4 w-4" />
              Explore curated briefs
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="rounded-full border-border/60 bg-background/60 backdrop-blur transition-all hover:-translate-y-0.5"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured & Sidebar */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.8fr,1fr]">
            {featuredPost && (
              <Card className="relative overflow-hidden border border-border/60 bg-card/80 backdrop-blur-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
                <CardContent className="relative p-10 flex h-full flex-col justify-between gap-10">
                  <div className="space-y-6">
                    <Badge className="rounded-full bg-primary/20 text-primary">Featured Analysis</Badge>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                      <span>•</span>
                      <Badge variant="secondary" className="rounded-full bg-secondary/20 text-secondary-foreground">
                        {featuredPost.category}
                      </Badge>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex -space-x-3">
                      {editorialTeam.map((member) => (
                        <Avatar key={member.name} className="border-2 border-background/80 shadow-lg">
                          <AvatarFallback>{member.name}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <Button asChild size="lg" className="rounded-full px-6">
                      <Link to="#">
                        Read strategic briefing
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            <div className="grid gap-6">
              <Card className="border border-border/60 bg-card/80 backdrop-blur">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Flame className="h-4 w-4 text-primary" />
                    Trending Topics
                  </div>
                  <CardTitle className="text-xl">Weekly intelligence briefing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {trendingTopics.map((topic) => (
                    <div key={topic.title} className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 rounded-full bg-primary/10 p-2 text-primary">
                          <Bookmark className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <p className="font-medium leading-snug">{topic.title}</p>
                          <p className="text-sm text-muted-foreground">{topic.description}</p>
                        </div>
                      </div>
                      <Separator className="bg-border/60" />
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full justify-start text-primary">
                    View all intelligence briefs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="border border-border/60 bg-card/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg">Meet the editorial desk</CardTitle>
                  <CardDescription>
                    Specialists translating inspections, data, and standards into strategic action.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {editorialTeam.map((member) => (
                    <div key={member.name} className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 p-3">
                      <Avatar>
                        <AvatarFallback>{member.name}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-serif font-semibold">Latest field notes</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Deep dives into inspections, integrity management, and technology adoption across critical assets.
              </p>
            </div>
            <Button variant="outline" className="rounded-full border-border/60">
              Download monthly briefing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <Card
                key={post.title}
                className="group relative flex h-full flex-col overflow-hidden border border-border/60 bg-card/80 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/60"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary/60 opacity-0 transition-opacity group-hover:opacity-100" />
                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <Badge variant="outline" className="rounded-full border-border/70">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-serif leading-snug transition-colors group-hover:text-primary">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button asChild variant="ghost" className="group/btn h-auto p-0 font-semibold">
                    <Link to="#">
                      Read the article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />
        <div className="relative container mx-auto px-4">
          <Card className="relative mx-auto max-w-4xl overflow-hidden border border-border/60 bg-card/90 shadow-2xl backdrop-blur">
            <div className="absolute -top-20 right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <CardContent className="relative p-10 md:p-16 text-center space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-2 text-sm font-medium">
                <Sparkles className="h-4 w-4 text-primary" />
                Join 5k+ reliability leaders
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold">
                  Stay ahead with curated intelligence.
                </h2>
                <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground">
                  Receive monthly briefings covering regulatory shifts, inspection best practices, and implementation playbooks from our field engineers.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Input
                  type="email"
                  placeholder="business.email@company.com"
                  className="h-12 rounded-full border-border/60 bg-background/80 backdrop-blur sm:w-80"
                />
                <Button size="lg" className="h-12 rounded-full px-8">
                  Subscribe now
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                We respect your inbox. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
