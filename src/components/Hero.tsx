import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import heroImage from "../assets/asset4.png"; 
//hello this is testing push
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const projectReels = [
    {
      title: "Art Vision Agency",
      subtitle: "Creative & Media Agency Branding",
      image: "/api/placeholder/1200/800",
      type: "Branding",
    },
    {
      title: "Qayyem Brand Identity",
      subtitle: "Children's Brand Design",
      image: "/api/placeholder/1200/800",
      type: "Identity",
    },
    {
      title: "3am Ibrahim",
      subtitle: "AI-Enhanced BBQ Brand",
      image: "/api/placeholder/1200/800",
      type: "AI Creative",
    },
    {
      title: "Storia Campaign",
      subtitle: "GCC Market Strategy",
      image: "/api/placeholder/1200/800",
      type: "Campaign",
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectReels.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, projectReels.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectReels.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projectReels.length) % projectReels.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Carousel */}
      <div className="absolute inset-0">
        {projectReels.map((project, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-20" : "opacity-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-16">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
            <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-glow" />
            <span className="text-sm font-medium text-muted-foreground">Available for Projects</span>
          </div>
        </div>


        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Column - Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-display-xl md:text-[5rem] lg:text-[6rem] font-bold mb-6 leading-[0.9]">
              <span className="block text-foreground">NOT JUST</span>
              <span className="block text-primary">ANOTHER</span>
              <span className="block text-foreground">DESIGNER</span>
            </h1>

            <p className="text-heading-md text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Art Director, Brand Designer & AI Creative Strategist crafting
              <span className="text-primary font-semibold"> cinematic brand experiences</span> that
              connect emotion with strategy.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-12">
              <button
                className="btn-hero group flex items-center"
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
                <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</div>
              </button>
              <button
                className="btn-ghost"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={heroImage}
              alt="Hero visual"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Current Project Info */}
        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border max-w-md mx-auto mt-12">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-secondary bg-secondary/20 px-2 py-1 rounded-md">
              {projectReels[currentSlide].type}
            </span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Play size={16} className={isPlaying ? "opacity-50" : "opacity-100"} />
            </button>
          </div>
          <h3 className="font-semibold text-foreground mb-1">{projectReels[currentSlide].title}</h3>
          <p className="text-sm text-muted-foreground">{projectReels[currentSlide].subtitle}</p>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Progress Indicators */}
        <div className="flex gap-2">
          {projectReels.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-primary" : "bg-border hover:bg-secondary"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs rotate-90 origin-center">Scroll</span>
        <div className="w-px h-8 bg-border animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
