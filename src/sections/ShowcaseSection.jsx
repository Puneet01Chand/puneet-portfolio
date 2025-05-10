import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const pageRefs = useRef([]);
  const containerRef = useRef(null);

  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  const pages = [
    {
      content: (
        <div id="work" ref={sectionRef} className="app-showcase">
          <div className="w-full">
            <div className="showcaselayout">
              <div ref={rydeRef} className="first-project-wrapper">
                <div className="image-wrapper">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/project_ready_golf.png`}
                    alt="Ready golf App"
                  />  
                </div>
                <div className="text-content">
                  <h2>
                    Ready Golf – Book tee times, shop gear, and connect with
                    pros, all in one app.
                  </h2>
                  <p className="text-white-50 md:text-xl">
                    Built with Flutter for both iOS and Android, Ready Golf
                    delivers a fast, user-friendly experience
                  </p>
                </div>
              </div>

              <div className="project-list-wrapper overflow-hidden">
                <div className="project" ref={libraryRef}>
                  <div className="image-wrapper bg-[#FFEFDB]">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/project_vibe_marketing.png`}
                      alt="Library Management Platform"
                    />
                  </div>
                  <h2>Project Planning & Progress Platform</h2>
                </div>

                <div className="project" ref={ycDirectoryRef}>
                  <div className="image-wrapper bg-[#FFE7EB]">
                    <img src={`${process.env.PUBLIC_URL}/images/project_ogle_it.png`} alt="YC Directory App" />
                  </div>
                  <h2>On-Demand Services & Appointment Platform</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="py-12 px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">This is Page 2 content.</h2>
          <p className="text-gray-600">More flexible layout on this page.</p>
        </div>
      ),
    },
    {
      content: (
        <div className="py-12 px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">You're viewing Page 3.</h2>
          <p className="text-gray-600">Final page with some different height.</p>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const el = pageRefs.current[pageIndex];
    if (!el) return;

    gsap.fromTo(
      el,
      { autoAlpha: 0, x: 100 },
      { duration: 0.5, autoAlpha: 1, x: 0 }
    );
  }, [pageIndex]);

  const handleChange = (dir) => {
    const nextIndex = pageIndex + dir;
    if (nextIndex < 0 || nextIndex >= pages.length) return;

    const current = pageRefs.current[pageIndex];
    gsap.to(current, {
      duration: 0.3,
      autoAlpha: 0,
      x: dir > 0 ? -100 : 100,
      onComplete: () => {
        setPageIndex(nextIndex);
      },
    });
  };

  // Swipe detection
  useEffect(() => {
    let startX = 0;
    const threshold = 50;

    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      const deltaX = startX - endX;
      if (deltaX > threshold) handleChange(1); // swipe left
      if (deltaX < -threshold) handleChange(-1); // swipe right
    };

    const onMouseDown = (e) => {
      startX = e.clientX;
      window.addEventListener("mouseup", onMouseUp);
    };

    const onMouseUp = (e) => {
      const deltaX = startX - e.clientX;
      if (deltaX > threshold) handleChange(1);
      if (deltaX < -threshold) handleChange(-1);
      window.removeEventListener("mouseup", onMouseUp);
    };

    const el = containerRef.current;
    el.addEventListener("touchstart", onTouchStart);
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("mousedown", onMouseDown);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [pageIndex]);

  useGSAP(() => {
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];
    cards.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative w-full max-w mx-3.5 mt-10">
      <div
        ref={containerRef}
        className="relative transition-all duration-500"
      >
        {pages.map((page, i) => (
          <div
            key={i}
            ref={(el) => (pageRefs.current[i] = el)}
            className={`transition-opacity duration-500 ${
              i === pageIndex ? "block" : "hidden"
            }`}
          >
            {page.content}
          </div>
        ))}
      </div>
      {/* <div className="flex justify-between items-center mt-6 px-2">
        <button
          onClick={() => handleChange(-1)}
          disabled={pageIndex === 0}
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-30"
        >
          <ChevronLeft size={28} />
        </button>
        <span className="text-lg font-medium">
          {pageIndex + 1} / {pages.length}
        </span>
        <button
          onClick={() => handleChange(1)}
          disabled={pageIndex === pages.length - 1}
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-30"
        >
          <ChevronRight size={28} />
        </button>
      </div> */}
    </div>
  );
};

export default AppShowcase;
