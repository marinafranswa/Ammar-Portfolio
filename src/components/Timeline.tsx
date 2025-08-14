import { useState } from "react";
import { MapPin, Calendar, Users, Trophy, Layers } from "lucide-react";

const Timeline = () => {
  const [activeNode, setActiveNode] = useState(3); // Current position (Storia)

  const milestones = [
    {
      year: "2016",
      title: "Jr Graphic Designer",
      company: "Freelance",
      description: "Started journey in graphic design, building foundational skills in visual communication and client relations.",
      location: "Remote",
      type: "Individual",
      icon: <Calendar className="w-4 h-4" />
    },
    {
      year: "2017",
      title: "Co-founder",
      company: "The 12 Studio",
      description: "Co-founded creative studio, developing brand identities and establishing design processes for diverse clients.",
      location: "Egypt",
      type: "Leadership",
      icon: <Trophy className="w-4 h-4" />
    },
    {
      year: "2020",
      title: "Sr Graphic Designer",
      company: "Honesty Chemicals",
      description: "Led visual communication for industrial brand, creating cohesive design systems and marketing materials.",
      location: "Egypt",
      type: "Corporate",
      icon: <Layers className="w-4 h-4" />
    },
    {
      year: "2024",
      title: "Art Director",
      company: "Storia",
      description: "Leading creative teams and AI-powered direction strategies across GCC markets, pioneering new creative processes.",
      location: "GCC",
      type: "Innovation",
      icon: <Users className="w-4 h-4" />,
      current: true
    }
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-secondary/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
            <span className="text-sm font-medium text-secondary">Career Journey</span>
          </div>
          
          <h2 className="text-heading-xl font-bold mb-6 text-foreground">
            Timeline of Experience
          </h2>
          
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Eight years of growth, from freelance beginnings to leading creative innovation 
            in the digital age.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border transform -translate-y-1/2" />
            
            {/* Timeline Nodes */}
            <div className="flex justify-between items-center relative">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Node */}
                  <button
                    onClick={() => setActiveNode(index)}
                    className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 relative z-10 ${
                      milestone.current
                        ? "bg-primary border-primary text-primary-foreground animate-pulse-glow"
                        : activeNode === index
                        ? "bg-secondary border-secondary text-secondary-foreground scale-110"
                        : "bg-background border-border text-muted-foreground hover:border-secondary hover:scale-105"
                    }`}
                  >
                    {milestone.current && (
                      <div className="absolute -top-2 -right-2 w-10 h-6 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-primary-foreground">Now</span>
                      </div>
                    )}
                    {milestone.icon}
                  </button>
                  
                  {/* Year Label */}
                  <div className={`mt-4 text-sm font-bold transition-colors duration-300 ${
                    activeNode === index ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {milestone.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Milestone Details */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-card rounded-3xl p-8 border border-border">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      milestones[activeNode].current
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary/20 text-secondary"
                    }`}>
                      {milestones[activeNode].type}
                    </span>
                    {milestones[activeNode].current && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground animate-pulse">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-heading-md font-bold text-foreground mb-2">
                    {milestones[activeNode].title}
                  </h3>
                  <div className="text-primary font-semibold mb-4">
                    {milestones[activeNode].company}
                  </div>
                </div>
                
                <div className="text-right text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 mb-1">
                    <MapPin className="w-3 h-3" />
                    {milestones[activeNode].location}
                  </div>
                  <div>{milestones[activeNode].year}</div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {milestones[activeNode].description}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center ${
                  milestone.current
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-secondary border-secondary text-secondary-foreground"
                }`}>
                  {milestone.icon}
                </div>
                {index < milestones.length - 1 && (
                  <div className="w-px h-16 bg-border mt-4" />
                )}
              </div>
              
              <div className="flex-1 pb-8">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-primary">{milestone.year}</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      milestone.current
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary/20 text-secondary"
                    }`}>
                      {milestone.type}
                    </span>
                    {milestone.current && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                        Now
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-foreground mb-1">
                    {milestone.title}
                  </h3>
                  <div className="text-primary font-semibold mb-3">
                    {milestone.company}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {milestone.description}
                  </p>
                  
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3 mr-1" />
                    {milestone.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;