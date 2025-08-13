import { Palette, Type, Zap, Layers, Megaphone, Target } from "lucide-react";

const Skills = () => {
  const capabilities = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Art Direction",
      description: "Leading creative vision from concept to execution with strategic brand thinking.",
      link: "#artdirection"
    },
    {
      icon: <Type className="w-6 h-6" />,
      title: "Typography & Posters",
      description: "Crafting custom letterforms and poster designs that command attention.",
      link: "#typography"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Enhanced Visuals",
      description: "Pioneering the fusion of artificial intelligence with traditional design processes.",
      link: "#ai"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Graphic Design",
      description: "Creating compelling visual systems across digital and print mediums.",
      link: "#design"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Social Media Campaigns",
      description: "Developing viral-ready content that drives engagement and brand awareness.",
      link: "#social"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Branding & Identity Design",
      description: "Building cohesive brand ecosystems that resonate with target audiences.",
      link: "#branding"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-glow" />
            <span className="text-sm font-medium text-primary">Core Capabilities</span>
          </div>
          
          <h2 className="text-heading-xl font-bold mb-6 text-foreground">
            What I Bring to the Table
          </h2>
          
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Six core areas where strategic thinking meets creative execution, 
            delivering results that exceed expectations.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="project-card p-8 group cursor-pointer relative overflow-hidden"
              onClick={() => {
                // Filter projects by capability
                const element = document.getElementById('work');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative z-10 w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/30 group-hover:scale-110 transition-all duration-300">
                <div className="text-secondary group-hover:text-primary transition-colors duration-300">
                  {capability.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-heading-sm font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {capability.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {capability.description}
                </p>
                
                <div className="flex items-center text-sm font-medium text-secondary group-hover:text-primary transition-all duration-300">
                  <span>View related work</span>
                  <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="project-overlay">
                <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center">
                  <div className="text-primary">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to see these capabilities in action?
          </p>
          <button 
            className="btn-outline"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore My Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;