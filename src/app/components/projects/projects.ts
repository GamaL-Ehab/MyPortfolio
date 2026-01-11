import { Component } from '@angular/core';
import { IProject, IProjectDetail } from '../../core/interfaces/iproject';
import { ProjectDetails } from '../project-details/project-details';

@Component({
  selector: 'app-projects',
  imports: [ProjectDetails],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  details!: IProjectDetail;
  getIndex(index: number) {
    this.details = this.projects[index].details;
  }

  projects: IProject[] = [
    {
      title: "E-Commerce RESTful API",
      image: "./images/projects/ecommerceApi.jpg",
      type: "Backend",
      shortDesc: "A scalable backend built with .NET 8, implementing Clean Architecture, JWT authentication, and the Repository Pattern.",
      topTechs: [".NET 8", "Entity Framework Core", "Redis"],
      liveDemo: "",
      date: "2024-11-10",
      details: {
        title: "Advanced E-Commerce Backend System",
        image: "./images/projects/ecommerceApi.jpg",
        type: "Enterprise REST API",
        description: "A professional-grade API designed for high performance and maintainability. It utilizes Clean Architecture (Onion Architecture) to decouple business logic from external concerns. Key features include identity management with JWT, distributed caching with Redis, payment gateway integration, and automated mapping using AutoMapper.",
        topTechs: [".NET 8", "SQL Server", "Redis"],
        techStack: [
          ".NET 8 Web API",
          "Entity Framework Core",
          "SQL Server",
          "Redis (Caching)",
          "Identity Framework (JWT)",
          "AutoMapper",
          "FluentValidation",
          "Swagger/OpenAPI"
        ],
        liveDemo: "",
        repository: "https://github.com/GamaL-Ehab/E-Commerce-API",
        date: "2024-11-10"
      }
    },
    {
      title: "Gym Management System",
      image: "./images/projects/gymManagemntMCV.png",
      type: "Full Stack",
      shortDesc: "A comprehensive MVC-based system to manage gym members, trainers, subscriptions, and facility equipment.",
      topTechs: ["ASP.NET Core MVC", "Entity Framework Core", "SQL Server"],
      liveDemo: "http://powerfitnessgymmanagement.runasp.net/",
      date: "2024-05-15",
      details: {
        title: "Gym Management MVC System",
        image: "./images/projects/gymManagemntMCV.png",
        type: "Full-Stack CRUD Application",
        description: "A management platform built using the Model-View-Controller architecture. It streamlines gym administrative tasks such as tracking member registrations, managing subscription plans, assigning trainers, and maintaining an inventory of gym equipment. It features a secure backend with a relational database for data persistence.",
        topTechs: ["C#", "ASP.NET Core", "SQL Server"],
        techStack: [
          "ASP.NET Core MVC",
          "Entity Framework Core",
          "SQL Server",
          "LINQ",
          "Bootstrap",
          "HTML5/CSS3",
          "JavaScript"
        ],
        liveDemo: "http://powerfitnessgymmanagement.runasp.net/",
        repository: "https://github.com/GamaL-Ehab/GymManagementMVC",
        date: "2024-05-15"
      }
    },

    {
      title: "E-Commerce Angular Client",
      image: "./images/projects/Ecommerce.png",
      type: "Frontend",
      shortDesc: "A modern, responsive client-side application built with Angular to interface with the E-Commerce REST API.",
      topTechs: ["Angular", "TypeScript", "Bootstrap"],
      liveDemo: "",
      date: "2024-11-25",
      details: {
        title: "E-Commerce Frontend UI",
        image: "./images/projects/Ecommerce.png",
        type: "Single Page Application (SPA)",
        description: "The frontend layer of the e-commerce ecosystem, developed using Angular and TypeScript. It features a component-based architecture to handle product catalogs, user authentication (login/register), shopping cart state management, and checkout workflows. It uses RxJS for reactive state handling and consumes the backend API endpoints securely.",
        topTechs: ["Angular 17", "TypeScript", "RxJS"],
        techStack: [
          "Angular 17",
          "TypeScript",
          "HTML5/SCSS",
          "Bootstrap 5",
          "RxJS (Observables)",
          "Angular Routing",
          "FontAwesome",
          "ngx-toastr"
        ],
        liveDemo: "",
        repository: "https://github.com/GamaL-Ehab/Ecommerce",
        date: "2024-11-25"
      }
    },
    {
      title: "Angular Todo Application",
      image: "./images/projects/TodoApp.png",
      type: "Frontend",
      shortDesc: "A classic task management tool built with Angular, utilizing services and local storage for data persistence.",
      topTechs: ["Angular", "TypeScript", "RxJS"],
      liveDemo: "",
      date: "2024-06-12",
      details: {
        title: "Task Manager with Angular",
        image: "./images/projects/TodoApp.png",
        type: "Single Page Application (SPA)",
        description: "A structured Angular application demonstrating core framework concepts including components, services, and dependency injection. It features full CRUD capabilities for tasks, uses Angular's reactive forms (or template-driven forms) for input handling, and persists user data via LocalStorage to maintain state across page reloads.",
        topTechs: ["Angular", "TypeScript", "SCSS"],
        techStack: [
          "Angular",
          "TypeScript",
          "RxJS",
          "HTML5",
          "SCSS/CSS",
          "LocalStorage API"
        ],
        liveDemo: "",
        repository: "https://github.com/GamaL-Ehab/TodoApp",
        date: "2024-06-12"
      }
    },
    {
      title: "Devfolio Portfolio Template",
      image: "./images/projects/Devfolio.png",
      type: "Frontend",
      shortDesc: "A sleek, responsive one-page portfolio template built with Bootstrap 5 for developers and designers.",
      topTechs: ["HTML5", "CSS3", "Bootstrap 5"],
      liveDemo: "",
      date: "2024-02-10",
      details: {
        title: "Devfolio - Personal Portfolio Template",
        image: "./images/projects/Devfolio.png",
        type: "Static Web Template",
        description: "Devfolio is a modern, professional portfolio template designed to showcase personal work and technical skills. It features a clean UI with smooth scrolling, a filterable portfolio gallery, and a fully responsive layout. The project focuses on clean HTML5 structure and utilizes Bootstrap's utility classes for rapid, mobile-first development.",
        topTechs: ["Bootstrap 5", "JavaScript", "CSS3"],
        techStack: [
          "HTML5",
          "CSS3",
          "Bootstrap 5",
          "JavaScript",
          "Font Awesome",
          "Google Fonts"
        ],
        liveDemo: "",
        repository: "https://github.com/GamaL-Ehab/Devfolio",
        date: "2024-02-10"
      }
    },
    {
      title: "Recipes Discovery App",
      image: "./images/projects/Recipes.png",
      type: "Frontend",
      shortDesc: "A dynamic recipe search application built with Angular, providing detailed cooking instructions and ingredient lists.",
      topTechs: ["Angular", "TypeScript", "RxJS"],
      liveDemo: "",
      date: "2024-03-05",
      details: {
        title: "Global Recipes Explorer",
        image: "./images/projects/Recipes.png",
        type: "Single Page Application (SPA)",
        description: "An Angular-based platform that allows users to explore a wide variety of cuisines. The app integrates with a RESTful Recipes API to fetch real-time data about meal categories and specific dish details. It utilizes Angular's modular architecture, data binding, and structural directives to create a seamless, interactive user experience.",
        topTechs: ["Angular", "RxJS", "Bootstrap"],
        techStack: [
          "Angular",
          "TypeScript",
          "RxJS (Observables)",
          "HttpClient Module",
          "Angular Router",
          "Bootstrap 5",
          "CSS3"
        ],
        liveDemo: "",
        repository: "https://github.com/GamaL-Ehab/Recipes",
        date: "2024-03-05"
      }
    },
    {
      title: "Mealify Landing Page",
      image: "./images/projects/Mealify.png",
      type: "Frontend",
      shortDesc: "A modern, responsive restaurant landing page designed with advanced CSS techniques and smooth animations.",
      topTechs: ["HTML5", "CSS3", "Animate.css"],
      liveDemo: "",
      date: "2024-01-20",
      details: {
        title: "Mealify - Food & Restaurant UI",
        image: "./images/projects/Mealify.png",
        type: "Static Web Interface",
        description: "Mealify is a high-fidelity landing page project that showcases professional CSS layout skills. It features a fully responsive design, a sticky navigation menu, hover effects, and a dark mode implementation using CSS variables. The layout is optimized for all screen sizes using a mobile-first approach and pure CSS styling without heavy frameworks.",
        topTechs: ["CSS3", "HTML5", "Responsive Design"],
        techStack: [
          "HTML5",
          "CSS3 (Flexbox & Grid)",
          "CSS Variables",
          "Animate.css",
          "Google Fonts",
          "Font Awesome"
        ],
        liveDemo: "",
        repository: "https://github.com/GamaL-Ehab/Mealify",
        date: "2024-01-20"
      }
    },
    {
      title: "Bookmarker System",
      image: "./images/projects/Bookmarker.png",
      type: "Frontend",
      shortDesc: "A JavaScript-driven tool for saving and managing website bookmarks with URL validation and local persistence.",
      topTechs: ["JavaScript", "Bootstrap 5", "HTML5"],
      liveDemo: "",
      date: "2023-12-05",
      details: {
        title: "Bookmark Manager with Validation",
        image: "./images/projects/Bookmarker.png",
        type: "Vanilla JS CRUD App",
        description: "A practical web application that allows users to store their favorite website links. The app includes a custom validation system using Regular Expressions (Regex) to ensure only valid URLs are submitted. It manages state by dynamically updating the DOM and synchronizing data with the browser's LocalStorage to prevent data loss on refresh.",
        topTechs: ["Vanilla JavaScript", "Regex", "LocalStorage"],
        techStack: [
          "HTML5",
          "CSS3",
          "Bootstrap 5",
          "Vanilla JavaScript (ES6)",
          "Regular Expressions",
          "LocalStorage API"
        ],
        liveDemo: "",
        repository: "https://github.com/GamaL-Ehab/Assignment9-Bookmarker",
        date: "2023-12-05"
      }
    },
    {
      title: "Smart Login System",
      image: "./images/projects/LoginSystem.png",
      type: "Frontend",
      shortDesc: "A secure authentication interface featuring registration, login validation, and session simulation using LocalStorage.",
      topTechs: ["JavaScript", "Bootstrap 5", "HTML5"],
      liveDemo: "",
      date: "2023-12-15",
      details: {
        title: "User Authentication & Registration System",
        image: "./images/projects/LoginSystem.png",
        type: "Vanilla JS Security UI",
        description: "A functional login system that manages user accounts client-side. The application handles complex logic for verifying existing users, validating email formats via Regular Expressions, and managing 'Session' states by passing data between different HTML pages. It includes clear user feedback for incorrect credentials or empty inputs.",
        topTechs: ["Vanilla JavaScript", "Regex", "Session Management"],
        techStack: [
          "HTML5",
          "CSS3",
          "Bootstrap 5",
          "Vanilla JavaScript (ES6+)",
          "Regular Expressions (Regex)",
          "LocalStorage API"
        ],
        liveDemo: "",
        repository: "https://github.com/GamaL-Ehab/Assignment10-Login-System",
        date: "2023-12-15"
      }
    },
    {
      title: "Weather Forecast Dashboard",
      image: "./images/projects/Weather.png",
      type: "Frontend",
      shortDesc: "A real-time weather application that fetches and displays a 3-day forecast using asynchronous JavaScript and a Weather API.",
      topTechs: ["JavaScript", "Weather API", "Bootstrap 5"],
      liveDemo: "",
      date: "2024-01-05",
      details: {
        title: "Dynamic Weather Dashboard",
        image: "./images/projects/Weather.png",
        type: "API Integration Project",
        description: "A responsive weather dashboard that utilizes the Fetch API to retrieve live data. The application features a search functionality that updates the UI dynamically without page reloads. It displays current conditions, max/min temperatures, and weather icons for a three-day period, utilizing date-time manipulation to show the correct day names.",
        topTechs: ["Vanilla JavaScript", "Fetch API", "JSON Data Handling"],
        techStack: [
          "HTML5",
          "CSS3",
          "Bootstrap 5",
          "Vanilla JavaScript (ES6+)",
          "Fetch API (Async/Await)",
          "External Weather API"
        ],
        liveDemo: "",
        repository: "https://github.com/GamaL-Ehab/Assignment11-Weather",
        date: "2024-01-05"
      }
    },
    {
      title: "Random Quote Generator",
      image: "./images/projects/Quotes.png",
      type: "Frontend",
      shortDesc: "An interactive web tool that displays inspirational quotes using random selection logic and dynamic DOM updates.",
      topTechs: ["JavaScript", "Bootstrap 5", "HTML5"],
      liveDemo: "",
      date: "2023-11-28",
      details: {
        title: "Inspirational Quote Engine",
        image: "./images/projects/Quotes.png",
        type: "Vanilla JS UI Component",
        description: "A lightweight application designed to demonstrate efficient array handling and event-driven programming in JavaScript. The app maintains a curated list of authors and their quotes, using math functions to ensure a unique selection upon every button click. It features a responsive layout that adapts to different screen sizes while maintaining a minimalist aesthetic.",
        topTechs: ["Vanilla JavaScript", "Array Manipulation", "DOM Interaction"],
        techStack: [
          "HTML5",
          "CSS3",
          "Bootstrap 5",
          "Vanilla JavaScript (ES6)",
          "Event Listeners",
          "Math Object"
        ],
        liveDemo: "",
        repository: "https://github.com/GamaL-Ehab/Assignment8-Quote",
        date: "2023-11-28"
      }
    },
    {
      title: "Daniels Portfolio Template",
      image: "./images/projects/Daniels.png",
      type: "Frontend",
      shortDesc: "A sophisticated, responsive one-page portfolio template focusing on clean typography and modern CSS layouts.",
      topTechs: ["HTML5", "CSS3", "Bootstrap"],
      liveDemo: "",
      date: "2024-02-05",
      details: {
        title: "Daniels - Creative Personal Portfolio",
        image: "./images/projects/Daniels.png",
        type: "Static Web Interface",
        description: "Daniels is a professional-grade portfolio website designed for creatives. It showcases advanced CSS techniques including custom hover animations, sticky navigation, and a filterable gallery layout. The project emphasizes a 'mobile-first' philosophy, ensuring the sleek aesthetic and typography remain consistent across desktops, tablets, and smartphones.",
        topTechs: ["CSS3", "HTML5", "Responsive Design"],
        techStack: [
          "HTML5",
          "CSS3",
          "Bootstrap 5",
          "Google Fonts",
          "Font Awesome",
          "Media Queries"
        ],
        liveDemo: "",
        repository: "https://github.com/GamaL-Ehab/Daniels",
        date: "2024-02-05"
      }
    },
    {
      title: "Fokir Portfolio Template",
      image: "./images/projects/Fokir.png",
      type: "Frontend",
      shortDesc: "A stylish, responsive personal portfolio website focusing on creative layouts and smooth CSS transitions.",
      topTechs: ["HTML5", "CSS3", "Font Awesome"],
      liveDemo: "",
      date: "2024-01-15",
      details: {
        title: "Fokir - Personal & Creative Portfolio",
        image: "./images/projects/Fokir.png",
        type: "Static Web Interface",
        description: "Fokir is a multi-section portfolio landing page designed to highlight professional identity. The project showcases mastery over CSS layout techniques, including the use of pseudo-elements for decorative UI touches, custom button styling, and a fully responsive grid that adjusts for mobile devices. It features a curated selection of Google Fonts and Font Awesome icons to enhance the visual storytelling.",
        topTechs: ["CSS3", "HTML5", "Responsive Design"],
        techStack: [
          "HTML5",
          "CSS3",
          "Font Awesome",
          "Google Fonts",
          "Media Queries",
          "Custom Animations"
        ],
        liveDemo: "",
        repository: "https://github.com/GamaL-Ehab/Fokir",
        date: "2024-01-15"
      }
    },
    {
      title: "Bondi Landing Page",
      image: "./images/projects/Tailwind.png",
      type: "Frontend",
      shortDesc: "A modern creative agency landing page built with Tailwind CSS utility classes and a focus on clean, responsive UI.",
      topTechs: ["Tailwind CSS", "HTML5", "Font Awesome"],
      liveDemo: "",
      date: "2024-04-10",
      details: {
        title: "Bondi - Creative UI Design",
        image: "./images/projects/Tailwind.png",
        type: "Static Web Interface",
        description: "This project is a high-fidelity implementation of the Bondi landing page design. Developed to practice utility-first styling, it utilizes the Tailwind CSS CDN for rapid prototyping and responsive layout management. The page includes a fixed navigation bar, a hero section with a call-to-action, a multi-column services area, and a curated work gallery, all styled with precision using inline Tailwind classes.",
        topTechs: ["Tailwind CSS", "HTML5", "Responsive Web Design"],
        techStack: [
          "HTML5",
          "Tailwind Play CDN",
          "Font Awesome (Icons)",
          "Google Fonts (Roboto)",
          "Responsive Grid System"
        ],
        liveDemo: "",
        repository: "https://github.com/GamaL-Ehab/tailwind-first",
        date: "2024-04-10"
      }
    },
    // {
    //   title: "Angular Fundamentals Project",
    //   image: "https://opengraph.githubassets.com/1/GamaL-Ehab/Angular-First",
    //   type: "Frontend Web Application",
    //   shortDesc: "An introductory Angular application exploring core framework concepts like components, data binding, and modular structure.",
    //   topTechs: ["Angular", "TypeScript", "HTML5"],
    //   liveDemo: "",
    //   date: "2024-03-01",
    //   details: {
    //     title: "Angular Core Concepts Explorer",
    //     image: "https://opengraph.githubassets.com/1/GamaL-Ehab/Angular-First",
    //     type: "Single Page Application (SPA)",
    //     description: "This project serves as a foundational exploration of the Angular framework. It implements essential features such as one-way and two-way data binding, structural directives (*ngIf, *ngFor), and basic component interaction. The project demonstrates a clean separation of concerns by utilizing TypeScript for logic, HTML for templates, and CSS for component-specific styling.",
    //     topTechs: ["Angular", "TypeScript", "CSS3"],
    //     techStack: [
    //       "Angular",
    //       "TypeScript",
    //       "HTML5",
    //       "CSS3",
    //       "Angular CLI",
    //       "NPM"
    //     ],
    //     liveDemo: "",
    //     repository: "https://github.com/GamaL-Ehab/Angular-First",
    //     date: "2024-03-01"
    //   }
    // },
  ]
}
