// import images
/* import Hero_person from "./assets/images/Hero/myphoto.png";
 */
import figma from "./assets/images/Skills/figma.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import htmlcss from "./assets/images/Skills/htmlcss.png";
import php from "./assets/images/Skills/php.png";
import starUML from "./assets/images/Skills/starUML.png";
import windows from "./assets/images/Skills/windows.png";
import mysql from "./assets/images/Skills/mysql.png";
import ml from "./assets/images/Skills/ml.png";
import java from "./assets/images/Skills/java.png";
import jasper from "./assets/images/Skills/jasper.png";
import angular from "./assets/images/Skills/angular.png";
import salesforce from "./assets/images/Skills/salesforce.png";

import dahleb from "./assets/images/Skills/dahleb.png";
import entv from "./assets/images/Skills/entv.png";
import freelance from "./assets/images/Skills/freelancer.png";
import icon from "./assets/images/Skills/icon.jpeg";
import insfp from "./assets/images/Skills/insfp.jpg";
import altius from "./assets/images/Skills/altius_labs_logo.jpeg";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project2 from "./assets/images/Projects/img1.png";
import project1 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img33.png";
import project22 from "./assets/images/Projects/img11.png";
import project11 from "./assets/images/Projects/img22.jpg";
import project33 from "./assets/images/Projects/img3.jpg";
import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";

/* import Hireme_person from "./assets/images/Hero/photo1.png";
import Hireme_person2 from "./assets/images/Hero/photo2.png"; */

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#education",
      icon: BiUser,
    },
    {
      link: "#experience",
      icon: BiUser,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: " Nour-Elhouda",
    LastName: " Belkacemi",
    btnText: "Hire Me",
    //image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experience in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  Education: {
    title: "Education",
    subtitle: "MY BACKGROUND",
    education_content: [
      {
        review:
          "Master 2 in Software Engineering",
        img: dahleb,
        name: "Saad Dahleb University, Blida",
      },
      {
        review:
          "Bachelor's degree in Computer system",
        img: dahleb,
        name: "Saad Dahleb University, Blida",
      },
      {
        review:
          "Introductory Certification in Graphic Design",
        img: insfp,
        name: "INSFP, Blida",
      },
    ],
  },
  Experience: {
    title: "Experience",
    subtitle: "MY EXPERIENCES",
    experience_content: [
      {
        review:
          "Full-stack Developer",
        img: altius,
        name: "Altius Labs",
      },
      {
        review:
          "Product Owner",
        img: icon,
        name: "Icon Software",
      },
      {
        review:
          "Analyst Developer",
        img: icon,
        name: "Icon Software",
      },
      {
        review:
          "Full-Stack Developer",
        img: entv,
        name: "ENTV (Nationale Television Of Algeria)",
      },
      {
        review:
          "Full-Stack Developer",
        img: freelance,
        name: "Freelance",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Html, Css, Js, Bootstrap",
        para: "",
        logo: htmlcss,
      },
      {
        name: "Node js",
        para: "",
        logo: nodejs,
      },
      {
        name: "Salesforce",
        para: "",
        logo: salesforce,
      },
      {
        name: "Angular js",
        para: "",
        logo: angular,
      },
      {
        name: "React js",
        para: "",
        logo: reactjs,
      },
      {
        name: "Java, SpringBoot",
        para: "",
        logo: java,
      },
      {
        name: "Python, Django",
        para: "",
        logo: python,
      },
      {
        name: "PostgreSQL, MongoDB, MySQL",
        para: "",
        logo: mysql,
      },
      {
        name: "Machine Learning",
        para: "",
        logo: ml,
      },
      {
        name: "PHP, Laravel",
        para: "",
        logo: php,
      },
      {
        name: "StarUML, Bonita",
        para: "",
        logo: starUML,
      },
       {
        name: "Jasper Report",
        para: "",
        logo: jasper,
      },
      {
        name: "Adobe Photoshop, Adobe Ilustrator",
        para: "",
        logo: ps,
      },
      {
        name: "Figma, Trello",
        para: "",
        logo: figma,
      },
      {
        name: "Windows, Linux, MacOS",
        para: "",
        logo: windows,
      },
      
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "",
        logo: services_logo1,
      },
      {
        title: "Data Science and Data Analyse",
        para: "",
        logo: services_logo2,
      },
      {
        title: "ui / ux Design",
        para: "",
        logo: services_logo2,
      },
      {
        title: "branding design services",
        para: "",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    //image: Hireme_person2,
    project_content: [
      {
        title: "VOD website  with a Recommender System",
        image: project1,
      },
      {
        title: "VOD website  with a Recommender System",
        image: project11,
      },
      {
        title: "School Management",
        image: project2,
      },
      {
        title: "School Management",
        image: project22,
      },
      {
        title: "Medical Practice",
        image: project3,
      },
      {
        title: "Medical Practice",
        image: project33,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“I really loved it, it’s beautiful and easy to understand at the same time. This site is perfect.”",
        img: avatar2,
        name: "Rayane",
      },
      {
        review:
          "“I really enjoyed the website, congratulations!”",
        img: avatar1,
        name: "Prosperity school's header",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    //image1: Hireme_person,
    //image2: Hireme_person2,
    para: "Software engineer with skills in programming, web development, database management, and data analysis. Passionate about new technologies and highly motivated to contribute to the development of innovative projects.",
    btnText: "Contact Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "NourelhoudaBelkacemi1@gmail.com",
        icon: GrMail,
        link: "mailto:NourelhoudaBelkacemi1@gmail.com",
      },
      {
        text: "+213 561211847",
        icon: MdCall,
        link: "https://wa.me/+213 561 211 847",
      },
      {
        text: "Belkacemi Nourelhouda",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/nour-elhouda-belkacemi-a56910210",
      },
      {
        text: "Belkacemi Nourelhouda",
        icon: BsInstagram,
        link: "https://www.instagram.com/nourhane_belkacemi/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
