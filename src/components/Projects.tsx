import { useState } from "react";
import { ExternalLink, Filter, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Branding", "Campaigns", "AI", "Typography"];

  const projects = [
    {
      id: 1,
      title: "Art Vision",
      subtitle: "Creative & Media Agency",
      category: "Branding",
      year: "2024",
      description: "Cinematic brand identity system for creative agency. 'No one creates like Art Vision' became the foundation for bold, emotion-driven visual language.",
      image: "/api/placeholder/600/400",
      tags: ["Brand Identity", "Visual System", "Creative Direction"],
      featured: true
    },
    {
      id: 2,
      title: "Qayyem",
      subtitle: "Values-based Children's Brand",
      category: "Branding",
      year: "2023",
      description: "Warm, culturally rooted identity with modular design system. Created approachable visual language that resonates with both children and parents.",
      image: "/api/placeholder/600/400",
      tags: ["Children's Brand", "Cultural Design", "Modular System"]
    },
    {
      id: 3,
      title: "3am Ibrahim",
      subtitle: "Egyptian BBQ Brand",
      category: "AI",
      year: "2024",
      description: "AI-built original character with bold Arabic typography. Pioneered AI-human collaboration in traditional brand design processes.",
      image: "/api/placeholder/600/400",
      tags: ["AI Character Design", "Arabic Typography", "F&B Branding"],
      featured: true
    },
    {
      id: 4,
      title: "Storia Campaign",
      subtitle: "GCC Market Strategy",
      category: "Campaigns",
      year: "2024",
      description: "Multi-market campaign strategy across Gulf countries. Integrated AI insights with cultural understanding for maximum impact.",
      image: "/api/placeholder/600/400",
      tags: ["Regional Campaign", "Market Strategy", "Cultural Adaptation"]
    },
    {
      id: 5,
      title: "B-Hub Platform",
      subtitle: "Booth Reservation System",
      category: "Campaigns",
      year: "2023",
      description: "Social media campaign series for event tech platform. Created engaging teaser content that drove pre-launch signups.",
      image: "/api/placeholder/600/400",
      tags: ["Social Media", "Tech Platform", "Launch Campaign"]
    },
    {
      id: 6,
      title: "Spotify Concept",
      subtitle: "Vibe Inside (GWAK)",
      category: "AI",
      year: "2024",
      description: "AI-powered mood recognition concept for music streaming. Explored intersection of emotion detection and visual identity.",
      image: "/api/placeholder/600/400",
      tags: ["AI Concept", "Music Tech", "UX Design"],
      featured: true
    },
    {
      id: 7,
      title: "Typography Collection",
      subtitle: "Experimental Letterforms",
      category: "Typography",
      year: "2024",
      description: "Series of experimental typography pieces exploring Arabic-Latin fusion and geometric forms.",
      image: "/api/placeholder/600/400",
      tags: ["Typography", "Experimental", "Cultural Fusion"]
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-glow" />
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </div>
          
          <h2 className="text-heading-xl font-bold mb-6 text-foreground">
            Projects & Case Studies
          </h2>
          
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A selection of projects showcasing strategic design thinking, 
            creative execution, and innovative problem-solving.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-secondary text-secondary-foreground scale-105"
                  : "bg-muted text-muted-foreground hover:bg-secondary/20 hover:text-secondary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card group cursor-pointer ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}

                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {project.year}
                </div>

                {/* Hover Overlay */}
                <div className="project-overlay">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                      <ArrowUpRight className="text-primary-foreground" size={24} />
                    </div>
                    <p className="text-foreground font-medium">View Case Study</p>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-secondary bg-secondary/20 px-2 py-1 rounded-md">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-heading-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm text-primary font-semibold mb-4">
                  {project.subtitle}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="flex items-center text-secondary group-hover:text-primary transition-colors duration-300">
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more work or discuss a project?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-outline">
              View Complete Portfolio
            </button>
            <button 
              className="btn-hero"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;