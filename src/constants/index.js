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
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: `${baseUrl}/images/ideas.svg` },
  { text: "Concepts", imgPath: `${baseUrl}/images/concepts.svg`},
  { text: "Designs", imgPath: `${baseUrl}/images/designs.svg` },
  { text: "Code", imgPath: `${baseUrl}/images/code.svg` },
  { text: "Ideas", imgPath: `${baseUrl}/images/ideas.svg` },
  { text: "Concepts", imgPath: `${baseUrl}/images/concepts.svg` },
  { text: "Designs", imgPath: `${baseUrl}/images/designs.svg` },
  { text: "Code", imgPath: `${baseUrl}/images/code.svg` },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 25, suffix: "+", label: "Projects Contributed To"},
  { value: 10, suffix: "+", label: "Technologies Used" },
  { value: 90, suffix: "%", label: "On-Time Project Delivery" },
];

const logoIconsList = [
  {
    imgPath: `${baseUrl}/images/logos/company-logo-1.png`,
  },
  {
    imgPath: `${baseUrl}/images/logos/company-logo-2.png`,
  },
  {
    imgPath: `${baseUrl}/images/logos/company-logo-3.png`,
  },
  {
    imgPath: `${baseUrl}/images/logos/company-logo-4.png`,
  },
  {
    imgPath: `${baseUrl}/images/logos/company-logo-5.png`,
  },
  {
    imgPath: `${baseUrl}/images/logos/company-logo-6.png`,
  },
  {
    imgPath: `${baseUrl}/images/logos/company-logo-7.png`,
  },
  {
    imgPath: `${baseUrl}/images/logos/company-logo-8.png`,
  },
  {
    imgPath: `${baseUrl}/images/logos/company-logo-9.png`,
  },
  {
    imgPath: `${baseUrl}/images/logos/company-logo-10.png`,
  },
  {
    imgPath: `${baseUrl}/images/logos/company-logo-11.png`,
  },
];

const abilities = [
  {
    imgPath: `${baseUrl}/images/seo.png`,
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: `${baseUrl}/images/chat.png`,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: `${baseUrl}/images/time.png`,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: `${baseUrl}/images/logos/react.png`,
  },
  {
    name: "Python Developer",
    imgPath: `${baseUrl}/images/logos/python.svg`,
  },
  {
    name: "Backend Developer",
    imgPath: `${baseUrl}/images/logos/node.png`,
  },
  {
    name: "Interactive Developer",
    imgPath: `${baseUrl}/images/logos/three.png`,
  },
  {
    name: "Project Manager",
    imgPath: `${baseUrl}/images/logos/git.svg`,
  },
];

const techStackIcons = [
  {
    name: "Flutter",
    image: `${baseUrl}/images/logos/flutter.png`,
  },
  {
    name: "Dart",
    image: `${baseUrl}/images/logos/dart.png`,
  },
  {
    name: "Unity",
    image: `${baseUrl}/images/logos/unity.png`,
  },
  {
    name: "C#",
    image: `${baseUrl}/images/logos/c_sharp.png`,
  },
  {
    name: "Javascript",
    image: `${baseUrl}/images/logos/javascript.png`,
  },
  {
    name: "React",
    image: `${baseUrl}/images/logos/react.png`,
  },
];

const expCards = [
  {
    review:"Puneet is a key contributor to our mobile projects, bringing strong leadership, collaboration, and a user-first mindset. His ideas and initiative consistently improve the quality and impact of our work. He is a valuable part of the team.",
    imgPath: `${baseUrl}/images/vibe.png`,  
    logoPath: `${baseUrl}/images/vibe_logo.png`,
    title: "Sr. Flutter Developer",
    date: "Februaury 2024 - Present",
    responsibilities: [
      "Led the development of cross-platform mobile applications with custom UI designs and complex animations tailored to each project's requirements.",
      "Managed app architecture and navigation flow to ensure intuitive user experiences and maintainable code structure.",
      "Collaborated closely with designers, backend developers, and stakeholders to deliver robust and scalable applications",
      "Actively contributed to project planning by pitching innovative ideas and suggesting improvements to enhance app functionality and user satisfaction.",
    ],
  },
  {
    review: "Puneet played a key role in helping the team meet deadlines and deliver high-quality, user-focused apps on time. His mentorship and dedication to performance and user experience made him an invaluable asset to the team.",
    imgPath: `${baseUrl}/images/cqlsys.png`,
    logoPath: `${baseUrl}/images/logo_cqlsys.png`,
    title: "Flutter Developer",
    date: "September 2022 - Februaury 2024",
    responsibilities: [
     "Developed cross-platform applications for iOS, Android, and Web using Flutter",
      "Created high-fidelity, user-centric apps with optimized performance and smooth user experiences.",
      "Built diverse applications, including e-commerce platforms, dating apps, and business management tools.",
      "Coordinated with the product team to implement features based on feedback.",
      "Mentored junior developers and participated in code reviews to uphold development standards and team productivity.",
      "Conducted code reviews, testing, and performance optimization to ensure reliability and scalability.",
    ],
  },
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
    imgPath: `${baseUrl}/images/insta.png`,
    url:null,
  },
  {
    name: "fb",
    imgPath: `${baseUrl}/images/fb.png`,
    url:null,
  },
  {
    name: "x",
    imgPath: `${baseUrl}/images/x.png`,
    url:null,
  },
  {
    name: "linkedin",
    imgPath: `${baseUrl}/images/linkedin.png`,
    url:"https://www.linkedin.com/in/puneet-chand-296479219",
  },
  {
    name: "github",
    imgPath: `${baseUrl}/images/github.png`,
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
