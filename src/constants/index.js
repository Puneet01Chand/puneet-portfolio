const baseUrl = "./puneet-portfolio/";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "./images/ideas.svg" },
  { text: "Concepts", imgPath: "./images/concepts.svg"},
  { text: "Designs", imgPath: "./images/designs.svg" },
  { text: "Code", imgPath: "./images/code.svg" },
  { text: "Ideas", imgPath: "./images/ideas.svg" },
  { text: "Concepts", imgPath: "./images/concepts.svg" },
  { text: "Designs", imgPath: "./images/designs.svg" },
  { text: "Code", imgPath: "./images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 25, suffix: "+", label: "Projects Contributed To"},
  { value: 10, suffix: "+", label: "Technologies Used" },
  { value: 90, suffix: "%", label: "On-Time Project Delivery" },
];

const logoIconsList = [
  // {
  //   imgPath: "./images/logos/company-logo-1.png",
  // },
  {
    imgPath: "./images/logos/company-logo-2.png",
  },
  // {
  //   imgPath: "./images/logos/company-logo-3.png",
  // },
  {
    imgPath: "./images/logos/company-logo-4.png",
  },
  {
    imgPath: "./images/logos/company-logo-5.png",
  },
  {
    imgPath: "./images/logos/company-logo-6.png",
  },
  // {
  //   imgPath: "./images/logos/company-logo-7.png",
  // },
  {
    imgPath: "./images/logos/company-logo-8.png",
  },
  // {
  //   imgPath: "./images/logos/company-logo-9.png",
  // },
  // {
  //   imgPath: "./images/logos/company-logo-10.png",
  // },
  // {
  //   imgPath: "./images/logos/company-logo-11.png",
  // },
  {
    imgPath: "./images/logos/company-logo-12.png",
  },
  {
    imgPath: "./images/logos/company-logo-13.png",
  },
  {
    imgPath: "./images/logos/company-logo-14.png",
  },
  {
    imgPath: "./images/logos/company-logo-15.png",
  },
  {
    imgPath: "./images/logos/company-logo-16.png",
  },
  {
    imgPath: "./images/logos/company-logo-17.png",
  },
  {
    imgPath: "./images/logos/company-logo-18.png",
  },
  {
    imgPath: "./images/logos/company-logo-19.png",
  },
  {
    imgPath: "./images/logos/company-logo-20.png",
  },
  {
    imgPath: "./images/logos/company-logo-21.png",
  },
];

const abilities = [
  {
    imgPath: "./images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "./images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "./images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "./images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "./images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "./images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "./images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "./images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Flutter",
    image: "./images/logos/flutter.png",
  },
  {
    name: "Dart",
    image: "./images/logos/dart.png",
  },
  {
    name: "Unity",
    image: "./images/logos/unity.png",
  },
  {
    name: "C#",
    image: "./images/logos/c_sharp.png",
  },
  {
    name: "Javascript",
    image: "./images/logos/javascript.png",
  },
  {
    name: "React",
    image: "./images/logos/react.png",
  },
];

const expCards = [
  {
    summary:
      "Leading high-impact AI-driven mobile application development while working directly with C-suite leadership. Responsible for architecting scalable systems using Clean Architecture and advanced state management, building complex data visualization components, and ensuring secure enterprise-level document workflows.",
    imgPath: "./images/d2ai_logo.jpeg",
    logoPath: "./images/d2ai.png",
    title: "Senior Flutter Developer",
    date: "August 2025 – Present",
    responsibilities: [
      "Collaborate with C-suite stakeholders to define product strategy and technical roadmap.",
      "Architect Flutter apps using Clean Architecture, BLoC, Riverpod, AutoRoute, and Repository Pattern.",
      "Develop custom interactive charts and data visualizations for analytics dashboards.",
      "Implement secure document workflows using pre-signed URLs.",
      "Design and maintain robust error-handling architecture using dartz Either."
    ]
  },

  {
    summary:
      "Served as the senior developer responsible for defining mobile architecture, implementing secure payment systems, and delivering reusable component libraries. Played a key role in shaping development standards, improving scalability, and optimizing performance across marketing applications.",
    imgPath: "./images/vibe.png",
    logoPath: "./images/vibe_logo.png",
    title: "Senior Flutter Developer",
    date: "February 2024 – July 2025",
    responsibilities: [
      "Led development and established architecture standards for mobile projects.",
      "Integrated PayFast, RazorPay, and Stripe payment gateways.",
      "Built reusable UI libraries, including image/video pickers and animation widgets.",
      "Developed modular API layers with clear data and domain separation.",
      "Implemented REST and SOAP API integrations with XML handling.",
      "Architected scalable state management using BLoC and GetX."
    ]
  },

  {
    summary:
      "Developed cross-platform applications across Android, iOS, and Web while consistently solving complex problems and improving project performance. Implemented Google Maps features, optimized GetX state management, and enhanced user experience with responsive UI improvements.",
    imgPath: "./images/cqlsys.png",
    logoPath: "./images/logo_cqlsys.png",
    title: "Flutter Developer",
    date: "September 2022 – February 2024",
    responsibilities: [
      "Developed applications for Android, iOS, and Web with consistent UI/UX.",
      "Integrated Google Maps API for 8+ location-based apps, increasing engagement by 25%.",
      "Optimized GetX state management with custom performance patterns.",
      "Implemented real-time communication features using Socket.IO and Firebase.",
      "Improved UI/UX with responsive layouts and performance optimization.",
      "Served as the primary problem solver for challenging technical issues."
    ]
  }
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "./images/insta.png",
    url:null,
  },
  {
    name: "fb",
    imgPath: "./images/fb.png",
    url:null,
  },
  {
    name: "x",
    imgPath: "./images/x.png",
    url:null,
  },
  {
    name: "linkedin",
    imgPath: "./images/linkedin.png",
    url:"https://www.linkedin.com/in/puneet-chand-296479219",
  },
  {
    name: "github",
    imgPath: "./images/github.png",
    url:"https://github.com/Puneet01Chand",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
