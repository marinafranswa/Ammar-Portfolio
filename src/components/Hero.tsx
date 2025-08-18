import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heroImage from "../assets/Asset4.png";
import Glossier1 from "../assets/Glossier1.jpg";
import Nothing1 from "../assets/Nothing1.jpg";
import Nothing2 from "../assets/Nothing 2 copy.jpg";
import Subway1 from "../assets/subwayc3.jpg";
import Glossier2 from "../assets/Glossier 2.jpg";
import Subway2 from "../assets/subway c v3.jpg";



const Hero = () => {
  const posts = [
    { id: 1, image: Glossier1, caption: "Launching our new campaign 🚀" },
    { id: 2, image: Nothing1, caption: "Client spotlight ✨" },
    { id: 3, image: Subway1, caption: "Creative process in action 🎨" },
    { id: 4, image: Nothing2, caption: "Client spotlight ✨" },
    { id: 5, image: Glossier2, caption: "Client spotlight ✨" },
    { id: 6, image: Subway2, caption: "Client spotlight ✨" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Intro */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-16">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
            <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-glow" />
            <span className="text-sm font-medium text-muted-foreground">
              Available for Projects
            </span>
          </div>
        </div>

        {/* Two-column */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-display-xl md:text-[5rem] lg:text-[6rem] font-bold mb-6 leading-[0.9]">
              <span className="block text-foreground">NOT JUST</span>
              <span className="block text-primary">ANOTHER</span>
              <span className="block text-foreground">DESIGNER</span>
            </h1>

            <p className="text-heading-md text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Art Director, Brand Designer & AI Creative Strategist crafting
              <span className="text-primary font-semibold">
                {" "}
                cinematic brand experiences
              </span>{" "}
              that connect emotion with strategy.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-12">
              <button
                className="btn-hero group flex items-center"
                onClick={() =>
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
                <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  →
                </div>
              </button>
              <button
                className="btn-ghost"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={heroImage}
              alt="Hero visual"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Social Posts Slider */}
      <div className="relative max-w-6xl mx-auto px-6 py-16 w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Latest Social Posts
        </h2>

<Swiper
  effect={"coverflow"}
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={3}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={{ clickable: true }}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
  modules={[EffectCoverflow, Pagination, Navigation]}
  className="mySwiper"
>
  {posts.map((post) => (
    <SwiperSlide key={post.id}>
      <div className="slide-card">
        <img src={post.image} alt={post.caption} />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

{/* Custom arrows */}
<button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white z-10">
  <ChevronLeft size={28} />
</button>
<button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white z-10">
  <ChevronRight size={28} />
</button>
      </div>
    </section>
  );
};

export default Hero;