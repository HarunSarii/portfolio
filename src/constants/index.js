import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    finrota,
    inveon,
    hyperdev,
    columbia,
    giovane,
    payoto,
    threejs,
    reactTesting,
    graphql,
    jira,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front-End Developer ",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full-Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "React Testing Library",
      icon: reactTesting,
    },
    {
      name: "Graphql",
      icon: graphql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "jira",
      icon: jira,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Ecozum Information Technologies",
      icon: finrota,
      iconBg: "#383E56",
      date: "Oct 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications in the Fintech field using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Developer",
      company_name: "Inveon",
      icon: inveon,
      iconBg: "#383E56",
      date: "Feb 2022 - Aug 2022",
      points: [
        "Developing and maintaining web applications in the E-commerce field using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Hyperdev",
      icon: hyperdev,
      iconBg: "#383E56",
      date: "Aug 2022 - Present",
      points: [
        "Developing and maintaining web applications in the Automotive field using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Harun proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Ecozum",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Harun does.",
      name: "Chris Brown",
      designation: "COO",
      company: "Inveon",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Harun optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "Hyperdev",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Columbia",
      description:
        "Columbia is a premier e-commerce clothing website that offers a wide selection of fashionable apparel, accessories, and footwear. With a user-friendly interface and a diverse range of products from renowned brands, Columbia.com.tr provides a seamless and convenient online shopping experience for fashion enthusiasts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "material-ui",
          color: "pink-text-gradient",
        },
      ],
      image: columbia,
      source_code_link: "https://www.columbia.com.tr/",
    },
    {
      name: "Giovane Gentile",
      description:
        "Giovane Gentile is your destination for premium, impeccably tailored suits. Discover the epitome of style and sophistication, with a curated collection designed to elevate your wardrobe with timeless elegance. Experience seamless online shopping for the modern gentleman at Giovane Gentile.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: giovane,
      source_code_link: "https://www.giovanegentile.com/",
    },
    {
      name: "PayOto",
      description:
        "Simplifying car buying, selling, and financing. Find your perfect vehicle, connect with buyers or sellers, and explore tailored financial solutions all in one convenient online platform.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "graphql",
          color: "green-text-gradient",
        },
        {
          name: "redux-toolkit",
          color: "pink-text-gradient",
        },
      ],
      image: payoto,
      source_code_link: "https://www.payoto.com/",
    },
  ];

  const projectExplanatin = "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects myability to solve complex problems, work with different technologies, and manage projects effectively."
  
  export { services, technologies, experiences, testimonials, projects, projectExplanatin };