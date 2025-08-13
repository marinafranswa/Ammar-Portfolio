import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-glow" />
            <span className="text-sm font-medium text-primary">Get in Touch</span>
          </div>
          
          <h2 className="text-heading-xl font-bold mb-6 text-foreground">
            Let's Build Something!
          </h2>
          
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to create something extraordinary? I'm always excited to discuss new projects, 
            creative challenges, and innovative collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 border border-border">
            <h3 className="text-heading-md font-bold text-foreground mb-6">
              Start a Conversation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your company"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    <option value="branding">Brand Identity</option>
                    <option value="campaign">Marketing Campaign</option>
                    <option value="ai">AI Creative Direction</option>
                    <option value="typography">Typography Design</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-primary text-primary-foreground hover:scale-[1.02] hover:shadow-[var(--hover-lift)]"
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-card rounded-3xl p-8 border border-border">
              <h3 className="text-heading-md font-bold text-foreground mb-6">
                Direct Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">ammar@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <Phone className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+20 XXX XXX XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">GCC / Remote</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-card rounded-3xl p-8 border border-border">
              <h3 className="text-heading-sm font-bold text-foreground mb-4">
                What to Expect
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <p className="font-medium text-foreground">Quick Response</p>
                    <p className="text-sm text-muted-foreground">
                      I'll respond within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <div>
                    <p className="font-medium text-foreground">Project Discussion</p>
                    <p className="text-sm text-muted-foreground">
                      30-minute consultation call
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <p className="font-medium text-foreground">Proposal</p>
                    <p className="text-sm text-muted-foreground">
                      Detailed project proposal & timeline
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <p className="font-bold text-foreground">Currently Available</p>
              </div>
              <p className="text-muted-foreground">
                Taking on new projects for Q1 2025. 
                Book a consultation to discuss your vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;