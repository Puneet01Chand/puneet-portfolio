import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ExternalLink, Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcaseScroll = () => {
  const sectionsRef = useRef([]);
  const [playingVideo, setPlayingVideo] = useState({});

  const projects = [
    {
      thumbnail: "./images/tbn_cosmic_thrust.png",
      videoUrl: "https://youtu.be/KFRuaTdn7PM",
      title: "Cosmic Thrust",
      subtitle: "One rocket Endless space Don't hit the walls",
      description:
        "A physics-driven 3D space game built in Unity, featuring a fully controllable rocket navigating through a dynamic sci-fi environment. The player uses boost thrust and directional inputs to maneuver the ship while avoiding obstacles placed throughout the scene.",
      isVideo: true,
    },
    {
      thumbnail: "./images/tbn_royal_rush.png",
      videoUrl: "https://youtu.be/Q9jezkWbNug",
      title: "Royal Rush",
      subtitle: "A royal dash against time",
      description:"Royal Rush is an endless runner where the king dashes through a castle pathway, collecting coins while dodging dynamic, physics-driven obstacles. The player can shift lanes, grab speed-boosting apples, and extend time through checkpoints to push their score higher. The game uses procedurally generated 10×10 platform tiles, randomized obstacle spawning, and controlled physics interactions to deliver a seamless infinite world illusion. With optimized post-processing, lighting tweaks, and smooth animation handling, the experience feels fast, responsive, and visually polished.",
      isVideo: true,
    },
    {
      image: "./images/didit.png",
      title: "DidIt",
      subtitle: "Create personalised memorabilia for all your fitness journeys",
      description:
        "From completing your first Half Marathon to a Full IronMan, DidIt helps athletes capture their fitness journey by tracking workouts, monitoring progress, and preserving meaningful milestones along the way. Built with Flutter for a smooth cross-platform experience and a Node.js backend powered by MongoDB and AWS to ensure fast, reliable, and scalable performance.",
      link: "https://apps.apple.com/in/app/didit-app/id6478201495",
      isVideo: false,
    },
    {
      image: "./images/game_elevate.png",
      title: "Game Elevate",
      subtitle:
        "The all-in-one platform for managing competitive basketball clubs",
      description:
        "Designed for basketball communities, GameElevate streamlines operations for club owners while keeping players and parents connected and organized. It centralizes registration, team management, tournament creation, communication, and real-time updates—all in one intuitive platform. Built with Flutter for a seamless cross-platform experience and powered by a Node.js backend with MySQL and AWS for secure, scalable, and reliable performance.",
      link: "https://play.google.com/store/apps/details?id=com.d2ai.gameElevateCoach",
      isVideo: false,
    },
    {
      image: "./images/ge_leagues.png",
      title: "GE Leagues",
      subtitle: "Real-time schedules, scores, and standings for every team",
      description:
        "GameElevate Leagues brings your basketball world to your fingertips with instant access to team schedules, live scores, and real-time standings. No more searching through emails or spreadsheets—the app keeps players, coaches, and fans updated at all times. Built with Flutter for a smooth cross-platform experience and powered by the GameElevate backend on Node.js, MySQL, and AWS to ensure fast, reliable, and scalable performance.",
      link: "https://play.google.com/store/apps/details?id=com.gameelevate.leagues",
      isVideo: false,
    },
    {
      image: "./images/project_ready_golf.png",
      title: "Ready Golf",
      subtitle: "Book tee times, shop gear, and connect with pros",
      description:
        "Built with Flutter for both iOS and Android, Ready Golf delivers a fast, user-friendly experience for golfers to book tee times, purchase equipment, and connect with golf professionals.",
      link: "#",
      isVideo: false,
    },
    {
      image: "./images/project_vibe_marketing.png",
      title: "Vibe Marketing",
      subtitle: "Streamline your workflow and boost productivity",
      description:
        "A comprehensive project management solution that helps teams collaborate effectively, track progress, and deliver projects on time with intuitive planning tools.",
      link: "#",
    },
    {
      image: "./images/project_ogle_it.png",
      title: "Ogle It",
      subtitle: "Connect service providers with customers instantly",
      description:
        "Revolutionary appointment and service booking platform that makes scheduling seamless for both service providers and customers with real-time availability.",
      link: "#",
    },
  ];

  // Helper function to extract YouTube video ID and convert to embed URL
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    
    // Handle different YouTube URL formats
    let videoId = null;
    
    // Format: https://www.youtube.com/watch?v=VIDEO_ID
    if (url.includes("youtube.com/watch?v=")) {
      videoId = url.split("v=")[1]?.split("&")[0];
    }
    // Format: https://youtu.be/VIDEO_ID
    else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    }
    // Format: https://www.youtube.com/embed/VIDEO_ID
    else if (url.includes("youtube.com/embed/")) {
      videoId = url.split("embed/")[1]?.split("?")[0];
    }
    
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }
    
    return null;
  };

  const handlePlayVideo = (index) => {
    setPlayingVideo((prev) => ({ ...prev, [index]: true }));
  };

  const stopVideo = (index) => {
    setPlayingVideo((prev) => ({ ...prev, [index]: false }));
  };

  // Section animations
  useGSAP(() => {
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      const media = section.querySelector(".project-media");
      const content = section.querySelector(".project-content");

      // Parallax effect for sections
      gsap.fromTo(
        section,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // Media animation
      gsap.fromTo(
        media,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // Content animation
      gsap.fromTo(
        content,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // ScrollTrigger to stop video when section leaves viewport
      if (projects[index]?.isVideo) {
        ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          onLeave: () => stopVideo(index),
          onLeaveBack: () => stopVideo(index),
        });
      }
    });
  });

  return (
    <div id="work" className="relative bg-transparent">
      {/* Showcase Container */}
      <div className="showcase-container">
        {projects.map((project, index) => (
          <section
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="project-section min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-20 py-12 md:py-20"
          >
            <div className="max-w-7xl w-full">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {/* Media (Image or Video) */}
                <div className="project-media w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    {project.isVideo ? (
                      // YouTube Video Player with Thumbnail
                      <div className="relative aspect-video bg-black">
                        {!playingVideo[index] ? (
                          // Thumbnail with Play Button
                          <div className="relative w-full h-full group cursor-pointer"
                               onClick={() => handlePlayVideo(index)}>
                            <img
                              src={project.thumbnail}
                              alt={`${project.title} thumbnail`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src =
                                  "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=675&fit=crop";
                              }}
                            />
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
                            
                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-2xl">
                                <Play size={40} className="fill-blue-600 text-blue-600 ml-1" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          // YouTube Embed Player
                          <iframe
                            src={getYouTubeEmbedUrl(project.videoUrl)}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={project.title}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
                      </div>
                    ) : (
                      // Image Display
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto object-cover"
                          onError={(e) => {
                            e.target.src =
                              "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="project-content w-full lg:w-1/2 space-y-6 text-white">
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      View Live Project
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AppShowcaseScroll;