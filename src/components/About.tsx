const About = () => {
  const tableOfContents = [
    { title: "Branding & Identity", count: "12 Projects" },
    { title: "Social & Commercial", count: "8 Campaigns" },
    { title: "AI × Creative Direction", count: "6 Concepts" },
    { title: "Typography", count: "15 Pieces" },
    { title: "Contact", count: "Let's Connect" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div>
            <div className="inline-flex items-center bg-secondary/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
              <span className="text-sm font-medium text-secondary">About & Philosophy</span>
            </div>
            
            <h2 className="text-heading-xl font-bold mb-8 text-foreground">
              Strategic design thinking with 
              <span className="text-primary"> emotion-led creativity</span>
            </h2>
            
            <div className="space-y-6 text-body-lg text-muted-foreground leading-relaxed">
              <p>
                I believe great design doesn't just look beautiful—it tells a story that resonates 
                deeply with people. My approach combines strategic thinking with cinematic storytelling, 
                creating brand experiences that feel both timeless and cutting-edge.
              </p>
              
              <p>
                From co-founding The 12 Studio to leading creative teams at Storia, I've spent years 
                perfecting the art of turning complex brand challenges into compelling visual narratives. 
                Today, I'm pioneering the integration of AI tools with traditional design processes, 
                opening new possibilities for creative expression.
              </p>
              
              <p className="text-primary font-semibold">
                "Every project is an opportunity to create something that didn't exist before—
                something that makes people stop, think, and feel."
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Brand Identities</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-card rounded-3xl p-8 border border-border">
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-4">
                <div className="w-4 h-4 bg-primary-foreground rounded-sm" />
              </div>
              <h3 className="text-heading-md font-bold text-foreground">Table of Content</h3>
            </div>
            
            <div className="space-y-4">
              {tableOfContents.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-background/50 hover:bg-secondary/10 transition-all duration-300 cursor-pointer group"
                  onClick={() => {
                    const sectionId = item.title.toLowerCase().replace(/[^a-z0-9]/g, '');
                    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-secondary/30 transition-colors duration-300">
                      <span className="text-sm font-bold text-secondary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.count}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
                    →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;