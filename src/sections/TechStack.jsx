import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TechStack = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the standard md breakpoint in Tailwind
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Update scroll buttons visibility (only for desktop)
  const updateScrollButtonsVisibility = () => {
    if (!carouselRef.current || isMobile) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  // Initialize the scroll visibility
  useEffect(() => {
    if (!isMobile) {
      updateScrollButtonsVisibility();
    }
    window.addEventListener('resize', updateScrollButtonsVisibility);
    
    return () => {
      window.removeEventListener('resize', updateScrollButtonsVisibility);
    };
  }, [isMobile]);

  // Scroll handlers (only for desktop arrow buttons)
  const scroll = (direction) => {
    if (!carouselRef.current || isMobile) return;
    
    const scrollAmount = carouselRef.current.clientWidth * 0.75;
    const newScrollLeft = direction === 'left' 
      ? carouselRef.current.scrollLeft - scrollAmount 
      : carouselRef.current.scrollLeft + scrollAmount;
    
    carouselRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  // Touch/Mouse drag handlers (for both mobile and desktop)
  const handleDragStart = (e) => {
    setIsDragging(true);
    // Handle both mouse and touch events
    const clientX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    setStartX(clientX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    // Handle both mouse and touch events
    const clientX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const x = clientX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    if (!isMobile) {
      updateScrollButtonsVisibility();
    }
  };

  // GSAP animations
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
    
    gsap.to(".float-icon", {
      y: -10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        
        <div className="relative w-full">
          {/* Carousel Navigation - Only for non-mobile */}
          {!isMobile && (
            <div className="absolute flex justify-between inset-0 items-center z-10 pointer-events-none">
              <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`ml-2 p-2 rounded-full bg-black/30 backdrop-blur-md text-white shadow-lg pointer-events-auto transition-opacity ${!canScrollLeft ? 'opacity-0' : 'opacity-100'}`}
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`mr-2 p-2 rounded-full bg-black/30 backdrop-blur-md text-white shadow-lg pointer-events-auto transition-opacity ${!canScrollRight ? 'opacity-0' : 'opacity-100'}`}
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
          
          {/* Carousel Track - with drag support for both mobile and desktop */}
          <div 
            ref={carouselRef}
            className={`tech-grid flex gap-4 overflow-hidden whitespace-nowrap pb-4 select-none touch-none ${!isMobile ? 'scrollbar-hide' : ''}`}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            onScroll={handleScroll}
          >
            {techStackIcons.map((techStackIcon) => (
              <div
                key={techStackIcon.name}
                className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg shrink-0 w-60 m-5 select-none"
              >
                <div className="tech-card-animated-bg" />
                <div className="tech-card-content select-none">
                  <div className="tech-icon-wrapper float-icon select-none">
                    <TechIconCardExperience model={techStackIcon} />
                  </div>
                  <div className="padding-x w-full select-none">
                    <p>{techStackIcon.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator - Only for non-mobile */}
          {!isMobile && canScrollRight && (
            <div className="flex justify-center mt-4 gap-2">
              <div className="text-sm text-gray-500 animate-pulse">
                Swipe or use arrows to see more
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

