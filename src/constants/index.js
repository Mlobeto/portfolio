import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    material,
    turbo,
    henry,
    carrent,
    jobit,
    tripguide,
    threejs,
    tresd,
   
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React  Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Postgress",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
   
    {
      name: "MaterialUi",
      icon: material,
    }
   

  ];
  
  const experiences = [
    {
      title: "3D",
      company_name: "TurboSquid",
      icon: turbo,
      iconBg: "#383E56",
      date: "March 2015 - April 2023",
      points: [
        "I modeled architectural elements in 3D for different architecture studios using 3DsMax and Vray",
        "Collaborated with the team of architects to create accurate and realistic visual representations of the designs",
        "I participated in the process of review and continuous improvement of the models to guarantee the quality and accuracy of the models",
        "I am a creator of object models published on the TurboSquid platform, with models sold and downloaded all over the world.",
      ],
    },
    {
      title: "Full Stack  Developer",
      company_name: "Henry",
      icon: henry,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - May 2023",
      points: [
        "At Henry I acquired skills in technologies such as JavaScript, React, Node.js, etc.",
         "Participated in hands-on fullstack development projects", 
         "including building functional web apps from scratch and collaborating in agile teams",
      ],
    },
   
  ];
  
  const projects = [
    {
      name: "Promanitas",
      description:
        "Market Place of express services for home solutions. includes qualification contracting and payment platform",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Postgress",
          color: "green-text-gradient",
        },
        {
          name: "MaterialUi",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ProManitas/",
    },
    {
      name: "PI Dogs",
      description:
        "Web application that allows you to search for information about dog breeds, organize by size, weight, temperament.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJs",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Mlobeto/PI-Dogs",
    },
    {
      name: "3D",
      description:
        "Some of my published 3D models, only objects, works in architecture belong to the studios. ",
      tags: [
        {
          name: "3dsMax",
          color: "blue-text-gradient",
        },
        {
          name: "VRay",
          color: "green-text-gradient",
        },
        {
          name: "Photoshop",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.turbosquid.com/es/Search/Artists/ModeladoMas3D",
    },
  ];
  
  export { services, technologies, experiences,  projects };