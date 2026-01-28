import { Component } from '@angular/core';
import { IProject, IProjectDetails } from '../../core/interfaces/iproject';
import { ProjectDetails } from '../project-details/project-details';

@Component({
  selector: 'app-projects',
  imports: [ProjectDetails],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  details!: IProjectDetails;
  getIndex(index: number) {
    this.details = this.projects[index].details;
  }

  projects: IProject[] = [
    {
      id: 1,
      title: "E-Commerce API",
      tagline: "Scalable backend API for modern e-commerce platforms",
      thumbnail: "./images/projects/ecommerceApi.jpg",
      technologies: [
        "ASP.NET Core Web API",
        "Entity Framework Core",
        "Redis"
      ],
      category: "Backend",

      details: {
        overview: {
          description:
            "A professional e-commerce backend API built with ASP.NET Core Web API following Onion Architecture and clean enterprise backend practices. The system exposes RESTful endpoints to handle products, categories, users, orders, and authentication. It emphasizes maintainability, high performance through caching, and separation of concerns using layered architecture patterns. Key backend principles such as Specification Pattern, Repository Pattern, dependency injection, and centralized error handling are applied to ensure scalable and testable backend logic. Additionally, Swagger API documentation is integrated to support easy exploration and usage of endpoints.",
          title: "E-Commerce API",
          thumbnail: "./images/projects/ecommerceApi.jpg",
          duration: "2 months",
          timeline: "2025",
          status: "Live"
        },

        role: {
          position: "Backend Developer",
          responsibilities: [
            "Architected and implemented RESTful API endpoints using ASP.NET Core",
            "Applied Onion Architecture for clear separation of concerns",
            "Used Specification and Repository design patterns to encapsulate query logic",
            "Integrated Redis caching to improve performance on high-traffic endpoints",
            "Configured JWT authentication and role-based authorization for secure access",
            "Documented API endpoints using Swagger for developer usability",
            "Designed database models and data access with Entity Framework Core"
          ]
        },

        techStack: {
          frontend: [],
          backend: [
            "ASP.NET Core Web API",
            "Entity Framework Core",
            "SQL Server",
            "JWT Authentication",
            "Specification Pattern",
            "Repository Pattern"
          ],
          deployment: [
            "Redis Caching",
            "Swagger",
            "MonsterASP"
          ]
        },

        features: [
          "RESTful API design for e-commerce operations",
          "Onion Architecture for maintainability and modularity",
          "JWT-based authentication and role-based access control",
          "Product, category, and order management endpoints",
          "Specification Pattern for flexible query logic",
          "Entity Framework Core with migrations for database access",
          "Redis caching for performance optimization",
          "Swagger UI documentation for API testing and dev support"
        ],

        challenges: [
          {
            problem: "Ensuring clean separation of concerns across backend layers",
            solution:
              "Adopted Onion Architecture, decoupling domain logic from infrastructure and presentation layers"
          },
          {
            problem: "Improving performance for frequently requested data",
            solution:
              "Integrated Redis caching to reduce database load and serve cached responses where applicable"
          }
        ],

        outcome:
          "Delivered a secure, scalable, and maintainable backend API capable of powering enterprise e-commerce platforms",

        links: {
          live: "http://storebygamal.runasp.net/swagger/index.html",
          github: "https://github.com/GamaL-Ehab/E-Commerce-API"
        }
      }
    }
    ,

    {
      id: 2,
      title: "Gym Management System",
      tagline: "Comprehensive web application for managing gym operations with role-based access",
      thumbnail: "./images/projects/gymManagementMVC.png",
      technologies: [
        "ASP.NET MVC",
        "Entity Framework Core",
        "ASP.NET Identity"
      ],
      category: "Fullstack",

      details: {
        overview: {
          description:
            "A scalable Gym Management System built using ASP.NET MVC with a clean 3-Layer Architecture (Presentation, Business Logic, Data Access). The application helps gym administrators manage members, trainers, plans, sessions, and memberships, while enforcing secure authentication and role-based authorization. It leverages ASP.NET Identity for user management and applies the Repository and Unit of Work patterns along with Dependency Injection to enforce separation of concerns and maintainable backend logic. Razor Views and Bootstrap 5 provide responsive UI interfaces.",
          title: "Gym Management System (ASP.NET MVC)",
          thumbnail: "./images/projects/gymManagementMVC.png",
          duration: "3 months",
          timeline: "2025",
          status: "Live"
        },

        role: {
          position: "Fullstack Developer",
          responsibilities: [
            "Designed and implemented the 3-layer MVC architecture",
            "Built and integrated business logic and data access layers",
            "Implemented secure authentication and role-based access using ASP.NET Identity",
            "Created Razor Views and responsive UI using Bootstrap 5",
            "Configured Dependency Injection for services and repository layers",
            "Managed database schema with Entity Framework Core migrations"
          ]
        },

        techStack: {
          frontend: [
            "ASP.NET MVC",
            "Razor Views",
            "Bootstrap 5"
          ],
          backend: [
            "C#",
            "Entity Framework Core",
            "ASP.NET Identity",
            "Repository Pattern",
            "Unit of Work"
          ],
          deployment: [
            "MonsterASP",
            "SQL Server"
          ]
        },

        features: [
          "User authentication and role-based access control",
          "Member registration and health profile management",
          "Trainer profiles and session scheduling",
          "Membership plan CRUD with activation toggling",
          "Attachment service for member photos",
          "Layered architecture with business logic separation"
        ],

        challenges: [
          {
            problem: "Maintaining clean separation of concerns between UI, logic, and data",
            solution:
              "Applied 3-Layer Architecture along with Repository and Unit of Work patterns to reduce coupling and improve maintainability"
          },
          {
            problem: "Securing sensitive gym admin features",
            solution:
              "Implemented ASP.NET Identity with role-based authorization to control access across different user types"
          }
        ],

        outcome:
          "Delivered a modular gym management web app with responsive UI and maintainable backend architecture that supports full administrative capabilities",

        links: {
          live: "http://powerfitnessgymmanagement.runasp.net",
          github: "https://github.com/GamaL-Ehab/GymManagementMVC"
        }
      }
    },

    {
      id: 3,
      title: "Ecommerce Frontend",
      tagline: "Responsive Angular ecommerce frontend application",
      thumbnail: "./images/projects/Ecommerce.png",
      technologies: [
        "Angular",
        "TypeScript",
        "SCSS"
      ],
      category: "Frontend",

      details: {
        overview: {
          description:
            "A modern ecommerce frontend application built with Angular (generated with Angular CLI). It provides a responsive and modular UI for browsing products, managing cart functionality, and navigating between pages using Angular routing. The application emphasizes component-based architecture, scalable folder structure with modules, and a clear separation of concerns for UI, business logic, and routing. Although this project focuses on frontend experience and visuals, it is designed to easily integrate with backend APIs for products, authentication, and order services. Key tools include Angular Router for navigation, Angular Forms for interactions, and SCSS for styling and layout.",
          title: "Ecommerce Frontend",
          thumbnail: "./images/projects/Ecommerce.png",
          duration: "1–2 months",
          timeline: "2025",
          status: "Live"
        },

        role: {
          position: "Frontend Developer",
          responsibilities: [
            "Built a modular Angular application using Angular CLI and TypeScript",
            "Structured components, modules, and routing for clear navigation and scalability",
            "Implemented responsive layouts using SCSS and Angular best practices",
            "Configured environment settings and builds for production deployment",
            "Prepared the app for future backend integration with API services"
          ]
        },

        techStack: {
          frontend: [
            "Angular",
            "TypeScript",
            "SCSS"
          ],
          backend: [],
          deployment: [
            "Vercel"
          ]
        },

        features: [
          "Angular routing for page navigation",
          "Responsive design for multiple device sizes",
          "Modular UI components",
          "Client-side state handling via Angular services",
          "Clean folder structure to support future backend integration"
        ],

        challenges: [
          {
            problem: "Organizing Angular modules and components for scalability",
            solution:
              "Used feature modules and clear folder structure to separate features and shared utilities"
          },
          {
            problem: "Ensuring good responsive UX across devices",
            solution:
              "Styled components using SCSS with responsive breakpoints and layout utilities"
          }
        ],

        outcome:
          "Delivered a clean and reusable Angular ecommerce frontend ready to integrate backend services",

        links: {
          live: "https://ecommerce-kohl-rho-42.vercel.app",
          github: "https://github.com/GamaL-Ehab/Ecommerce"
        }
      }
    },
    {
      id: 4,
      title: "TodoApp (Angular)",
      tagline: "Modular Todo application with task management and responsive UI",
      thumbnail: "./images/projects/TodoApp.png",
      technologies: [
        "Angular",
        "TypeScript",
        "SCSS"
      ],
      category: "Frontend",

      details: {
        overview: {
          description:
            "A task management Todo application built with Angular 20 using Angular CLI and modern frontend patterns. The app allows users to add, view, edit, and delete tasks. It employs modular components, Angular routing, and state handling through Angular services to maintain a clean and scalable structure. SCSS is used for styling with responsiveness in mind, giving users a coherent experience across devices. The app also includes environment handling and build setup optimized for a production deployment.",
          title: "TodoApp (Angular)",
          thumbnail: "./images/projects/TodoApp.png",
          duration: "1 month",
          timeline: "2025",
          status: "Live"
        },

        role: {
          position: "Frontend Developer",
          responsibilities: [
            "Developed core Angular components for task listing and task actions",
            "Configured Angular routing for navigation between views",
            "Handled UI state and task data using Angular services",
            "Styled UI using SCSS with a focus on responsive layout",
            "Prepared builds and environment configurations for streamlined deployment"
          ]
        },

        techStack: {
          frontend: [
            "Angular",
            "TypeScript",
            "SCSS"
          ],
          backend: [],
          deployment: [
            "Vercel"
          ]
        },

        features: [
          "Add, edit, and delete todo tasks",
          "Responsive UI across mobile and desktop",
          "Modular Angular components and services",
          "Angular routing for clear navigation flow",
          "Optimized production build configuration"
        ],

        challenges: [
          {
            problem: "Organizing Angular modules for clear separation of concerns",
            solution:
              "Used Angular feature modules and services to separate UI logic from core services"
          },
          {
            problem: "Ensuring consistent responsive UI across different screen sizes",
            solution:
              "Implemented SCSS with breakpoints and layout utilities for adaptability"
          }
        ],

        outcome:
          "Delivered a clean, maintainable, and responsive Angular Todo application ready for real-world usage",

        links: {
          live: "https://todo-app-three-lemon-77.vercel.app",
          github: "https://github.com/GamaL-Ehab/TodoApp"
        }
      }
    },
    {
      id: 5,
      title: "Devfolio Portfolio Website",
      tagline: "Static developer portfolio template to showcase skills and projects",
      thumbnail: "./images/projects/Devfolio.png",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript"
      ],
      category: "Frontend",

      details: {
        overview: {
          description:
            "A static portfolio website built using semantic HTML5, modern CSS3, and JavaScript to create a personal developer showcase. This template includes sections such as Home, About, Skills, Projects, and Contact, allowing developers to present their professional story and work. The responsive layout adapts to different screen sizes and can be customized easily by updating the HTML content and asset paths. The structure emphasizes clean markup, organized styling, and modular JavaScript behavior for interaction elements.",
          title: "Devfolio Portfolio Website",
          thumbnail: "./images/projects/Devfolio.png",
          duration: "1–2 weeks",
          timeline: "2025",
          status: "Live"
        },

        role: {
          position: "Frontend Developer",
          responsibilities: [
            "Constructed the portfolio structure using semantic HTML for accessibility",
            "Styled components and layout using scalable and responsive CSS3",
            "Added interactive behaviors using vanilla JavaScript",
            "Optimized images and layout for different devices",
            "Configured sections like Projects, About, and Contact for easy reuse"
          ]
        },

        techStack: {
          frontend: [
            "HTML5",
            "CSS3",
            "JavaScript"
          ],
          backend: [],
          deployment: [
            "Static Hosting (e.g., GitHub Pages)"
          ]
        },

        features: [
          "Responsive multi-section layout (Home, About, Projects, Contact)",
          "Clean and semantic HTML structure",
          "CSS-driven styling with potential for SCSS extension",
          "Vanilla JavaScript for navbar and interactive UI elements",
          "Portfolio project links and social media integration"
        ],

        challenges: [
          {
            problem: "Ensuring a polished responsive layout across devices",
            solution:
              "Applied mobile-first CSS and media queries to adjust layout on different resolutions"
          },
          {
            problem: "Keeping the site lightweight while still visually appealing",
            solution:
              "Used optimized images and minimal JavaScript to reduce load times"
          }
        ],

        outcome:
          "Delivered a clean, customizable static portfolio template showcasing professional skills and projects",

        links: {
          live: "https://YOUR_USERNAME.github.io/Devfolio",
          github: "https://github.com/GamaL-Ehab/Devfolio"
        }
      }
    },
    {
      id: 6,
      title: "Recipes App",
      tagline: "Modular Angular application for browsing and managing recipes",
      thumbnail: "./images/projects/Recipes.png",
      technologies: [
        "Angular",
        "TypeScript",
        "SCSS"
      ],
      category: "Frontend",

      details: {
        overview: {
          description:
            "A dynamic Recipes web application built using Angular (generated with Angular CLI). The app provides users with interfaces to browse, view, and potentially manage recipe entries using a modular Angular component architecture. It utilizes Angular Router for client-side navigation and services for state management, while SCSS is used to implement responsive and modern styling. Designed with scalability in mind, it supports clear separation of UI, logic, and future API service integration. The application is set up with a production-ready build configuration, facilitating deployment to static hosting platforms.",
          title: "Recipes App",
          thumbnail: "./images/projects/Recipes.png",
          duration: "1–2 months",
          timeline: "2025",
          status: "Live"
        },

        role: {
          position: "Frontend Developer",
          responsibilities: [
            "Set up the Angular application using Angular CLI and TypeScript",
            "Structured components and modules for a clear application layout",
            "Implemented routing for navigation between recipe views",
            "Styled UI using SCSS for a responsive experience",
            "Configured Angular build settings for optimized production output"
          ]
        },

        techStack: {
          frontend: [
            "Angular",
            "TypeScript",
            "SCSS"
          ],
          backend: [],
          deployment: [
            "Vercel"
          ]
        },

        features: [
          "Client-side navigation with Angular Router",
          "Modular UI components for recipes and shared views",
          "Responsive layout for desktops and mobile devices",
          "Angular services for potential state and data management",
          "Optimized build setup for production deployment"
        ],

        challenges: [
          {
            problem: "Organizing Angular components and routes for maintainability",
            solution:
              "Used modular components and feature modules to separate concerns and streamline navigation"
          },
          {
            problem: "Ensuring responsive and consistent UI styling",
            solution:
              "Applied SCSS with utility classes and media queries for adaptive layouts"
          }
        ],

        outcome:
          "Delivered a scalable and responsive Angular recipes application suitable for further enhancement and backend integration",

        links: {
          live: "https://recipes-woad.vercel.app",
          github: "https://github.com/GamaL-Ehab/Recipes"
        }
      }
    },
    {
      id: 7,
      title: "Mealify",
      tagline: "Responsive static web interface for food & meal presentation",
      thumbnail: "./images/projects/Mealify.png",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript"
      ],
      category: "Frontend",

      details: {
        overview: {
          description:
            "Mealify is a responsive static web interface designed using semantic HTML5, organized CSS3 layout, and minimal JavaScript for interaction. The project focuses on creating an elegant and engaging landing-style page that showcases food items, meals, or culinary concepts. With mobile-first responsiveness and visually appealing design patterns like flexbox and media queries, Mealify adapts seamlessly across devices. This static interface serves as a marketing or portfolio piece to present meals in a way that’s easy to navigate and visually consistent, while emphasizing modular structure and clean markup.",
          title: "Mealify",
          thumbnail: "./images/projects/Mealify.png",
          duration: "1–2 weeks",
          timeline: "2025",
          status: "Live"
        },

        role: {
          position: "Frontend Developer",
          responsibilities: [
            "Crafted responsive UI layout using semantic HTML5 structure",
            "Styled the interface with modern CSS3 and responsive design techniques",
            "Added lightweight JavaScript for UI interaction enhancements",
            "Ensured cross-device responsiveness using media queries",
            "Organized assets and typography for visual consistency"
          ]
        },

        techStack: {
          frontend: [
            "HTML5",
            "CSS3",
            "JavaScript"
          ],
          backend: [],
          deployment: [
            "Static Hosting (e.g., GitHub Pages)"
          ]
        },

        features: [
          "Responsive layout across desktop and mobile",
          "Clean semantic markup for accessibility",
          "Visual design sections for meals and food items",
          "CSS animations and hover interactions",
          "Mobile-first breakpoints and fluid grids"
        ],

        challenges: [
          {
            problem: "Ensuring consistent responsiveness across breakpoints",
            solution:
              "Used media queries and flexible layout techniques to handle layout shifts and adjustments"
          },
          {
            problem: "Maintaining visual appeal with minimal JavaScript",
            solution:
              "Leveraged pure CSS transitions and interactive styles to keep performance high"
          }
        ],

        outcome:
          "Delivered a clean, visually appealing, and fully responsive static frontend interface suitable for presenting meals and culinary content",

        links: {
          live: "https://GamaL-Ehab.github.io/Mealify",
          github: "https://github.com/GamaL-Ehab/Mealify"
        }
      }
    },
    {
      id: 8,
      title: "Bookmarker",
      tagline: "A clean and efficient CRUD application for managing web bookmarks",
      thumbnail: "./images/projects/Bookmarker.png",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap 5",
        "RegEx"
      ],
      category: "Frontend",

      details: {
        overview: {
          description: "A lightweight frontend application designed to help users organize their favorite websites. Built using vanilla JavaScript and Bootstrap, it offers a seamless interface for adding, deleting, and visiting bookmarks. The application utilizes the browser's Local Storage to ensure data persistence, allowing users to retain their bookmarks even after refreshing the page.",
          title: "Bookmarker",
          thumbnail: "./images/projects/Bookmarker.png",
          duration: "1 week",
          timeline: "2024",
          status: "Completed"
        },

        role: {
          position: "Frontend Developer",
          responsibilities: [
            "Developed the user interface using HTML5 and Bootstrap 5",
            "Implemented CRUD operations using vanilla JavaScript",
            "Created regular expressions (RegEx) for strict URL and name validation",
            "Integrated Local Storage for data persistence"
          ]
        },

        techStack: {
          frontend: [
            "HTML5",
            "CSS3",
            "Bootstrap 5",
            "JavaScript (ES6+)"
          ],
          backend: [],
          deployment: [
            "GitHub Pages"
          ]
        },

        features: [
          "Real-time input validation using Regular Expressions",
          "Add, Delete, and Visit website bookmarks",
          "Persistent data storage using Local Storage",
          "Responsive design for mobile and desktop",
          "Interactive sweet alerts for error handling"
        ],

        challenges: [
          {
            problem: "Ensuring users enter valid URL formats",
            solution: "Implemented a custom RegEx pattern to validate inputs before submission and provided visual feedback via CSS classes"
          },
          {
            problem: "Data loss upon page refresh",
            solution: "Utilized the browser's Local Storage API to save and retrieve the bookmark array dynamically"
          }
        ],

        outcome: "A fully functional and responsive bookmark manager that demonstrates core DOM manipulation and data storage concepts.",

        links: {
          live: "https://gamal-ehab.github.io/Assignment9-Bookmarker/",
          github: "https://github.com/GamaL-Ehab/Assignment9-Bookmarker"
        }
      }
    },
    {
      id: 9,
      title: "Authentication System",
      tagline: "A secure-simulated user authentication and registration flow",
      thumbnail: "./images/projects/LoginSystem.png",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap 5",
        "RegEx"
      ],
      category: "Frontend",

      details: {
        overview: {
          description: "A comprehensive frontend authentication interface that simulates a real-world login and registration flow. The system manages user sign-ups, validates credentials against stored data, and provides a protected 'Welcome' dashboard. It utilizes sophisticated validation logic and Local Storage to manage a mock user database entirely on the client side.",
          title: "Authentication System",
          thumbnail: "./images/projects/LoginSystem.png",
          duration: "1 week",
          timeline: "2024",
          status: "Completed"
        },

        role: {
          position: "Frontend Developer",
          responsibilities: [
            "Architected the login and signup logic using vanilla JavaScript",
            "Developed custom validation functions for email and password security",
            "Implemented session-like behavior to protect the home page from unauthorized access",
            "Managed complex state for user registration and duplicate account checking"
          ]
        },

        techStack: {
          frontend: [
            "HTML5",
            "CSS3",
            "Bootstrap 5",
            "JavaScript (ES6+)"
          ],
          backend: [],
          deployment: [
            "GitHub Pages"
          ]
        },

        features: [
          "User Registration with duplicate email detection",
          "Login system with credential verification",
          "Protected Home/Dashboard route via session checks",
          "Real-time form validation using Regular Expressions",
          "Auto-login functionality using persistent Local Storage",
          "Responsive design with modern UI feedback"
        ],

        challenges: [
          {
            problem: "Preventing unauthorized users from accessing the Welcome page via URL",
            solution: "Implemented a check on page load that redirects users back to the login screen if no 'active session' is found in Local Storage"
          },
          {
            problem: "Ensuring email uniqueness without a traditional backend database",
            solution: "Developed a logic flow that parses the stored user array and compares new sign-up data against existing records before allowing registration"
          }
        ],

        outcome: "A robust and secure-feeling authentication simulation that demonstrates advanced logic handling and client-side data management.",

        links: {
          live: "https://gamal-ehab.github.io/Assignment10-Login-System/",
          github: "https://github.com/GamaL-Ehab/Assignment10-Login-System"
        }
      }
    },
    {
      id: 10,
      title: "Weather Dashboard",
      tagline: "Dynamic real-time weather forecasting using asynchronous API integration",
      thumbnail: "./images/projects/Weather.png",
      technologies: [
        "HTML5",
        "JavaScript",
        "Weather API"
      ],
      category: "Frontend",

      details: {
        overview: {
          description: "A sophisticated weather application that provides real-time atmospheric data and a three-day forecast for any location worldwide. The app leverages the WeatherAPI to fetch live data asynchronously, delivering a seamless user experience. It features a 'search-as-you-type' functionality and adapts its display based on the specific weather conditions and geographic location of the user.",
          title: "Weather Dashboard",
          thumbnail: "./images/projects/Weather.png",
          duration: "1.5 weeks",
          timeline: "2024",
          status: "Completed"
        },

        role: {
          position: "Frontend Developer",
          responsibilities: [
            "Integrated the WeatherAPI using Fetch API and asynchronous JavaScript (Async/Await)",
            "Implemented dynamic search functionality that updates the UI in real-time as the user types",
            "Developed a responsive 3-day forecast layout using Bootstrap's grid system",
            "Managed data parsing for complex JSON responses to display temperature, wind speed, and weather icons"
          ]
        },

        techStack: {
          frontend: [
            "HTML5",
            "CSS3",
            "Bootstrap 5",
            "JavaScript (ES6+)",
            "AJAX/Fetch API"
          ],
          backend: [], // Purely client-side API consumption
          deployment: [
            "GitHub Pages"
          ]
        },

        features: [
          "Real-time weather data fetching for thousands of cities",
          "3-Day extended weather forecast",
          "Dynamic search functionality with immediate feedback",
          "Current location auto-detection (via Geolocation API)",
          "Detailed metrics including wind speed, direction, and humidity",
          "Custom-styled UI elements that adapt to day/night cycles"
        ],

        challenges: [
          {
            problem: "Handling the latency of API calls without freezing the user interface",
            solution: "Utilized Async/Await patterns and loading states to ensure the UI remains responsive while data is being fetched from the server."
          },
          {
            problem: "Managing API errors when a user enters a non-existent city name",
            solution: "Implemented robust error handling and input validation that prevents the application from crashing and provides user-friendly error messages."
          }
        ],

        outcome: "A high-performance, responsive weather application that demonstrates proficiency in working with third-party APIs and managing asynchronous data flows.",

        links: {
          live: "https://gamal-ehab.github.io/Assignment11-Weather/",
          github: "https://github.com/GamaL-Ehab/Assignment11-Weather"
        }
      }
    },
    {
      id: 11,
      title: "Random Quote Generator",
      tagline: "A clean and interactive interface for daily inspiration",
      thumbnail: "./images/projects/Quotes.png",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript"
      ],
      category: "Frontend",

      details: {
        overview: {
          description: "A lightweight web application designed to deliver randomized inspirational quotes to users. The project focuses on clean UI/UX principles and efficient DOM manipulation using Vanilla JavaScript. It serves as a practical implementation of array randomization logic and responsive design using the Bootstrap framework.",
          title: "Random Quote Generator",
          thumbnail: "./images/projects/Quotes.png",
          duration: "3 days",
          timeline: "2024",
          status: "Completed"
        },

        role: {
          position: "Frontend Developer",
          responsibilities: [
            "Developed randomization logic in JavaScript to fetch unique quotes from a local data set",
            "Ensured cross-browser compatibility and mobile responsiveness",
            "Managed UI state updates to refresh the display without page reloads"
          ]
        },

        techStack: {
          frontend: [
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)"
          ],
          backend: [],
          deployment: [
            "GitHub Pages"
          ]
        },

        features: [
          "Randomized quote selection via Math logic",
          "Dynamic UI updates using JavaScript DOM methods",
          "Fully responsive layout for mobile, tablet, and desktop",
          "Modern, minimalist interface with clean typography",
          "One-click interaction for generating new content"
        ],

        challenges: [
          {
            problem: "Preventing the same quote from appearing twice in a row",
            solution: "Implemented a logic check that stores the index of the previous quote and re-rolls the random number if it matches the current selection."
          },
          {
            problem: "Maintaining layout stability with varying text lengths",
            solution: "Applied CSS Flexbox and set minimum heights on the quote container to ensure the 'Generate' button remains in a consistent position."
          }
        ],

        outcome: "A smooth and user-friendly tool that demonstrates foundational JavaScript skills and effective use of CSS frameworks for rapid UI development.",

        links: {
          live: "https://gamal-ehab.github.io/Assignment8-Quote/",
          github: "https://github.com/GamaL-Ehab/Assignment8-Quote"
        }
      }
    },
    {
      id: 12,
      title: "Daniels Portfolio",
      tagline: "A high-end, responsive personal portfolio template with modern UI effects",
      thumbnail: "./images/projects/Daniels.png",
      technologies: [
        "HTML5",
        "Bootstrap 5",
        "FontAwesome"
      ],
      category: "Frontend",

      details: {
        overview: {
          description: "Daniels is a professional-grade, single-page responsive portfolio designed for freelancers and creatives. The project showcases advanced CSS styling, Bootstrap's grid system, and JavaScript-driven interactivity. It features a sleek hero section with a typewriter effect, a filterable work gallery, and a clean, minimalist aesthetic that emphasizes content readability and smooth navigation.",
          title: "Daniels Portfolio",
          thumbnail: "./images/projects/Daniels.png",
          duration: "1 week",
          timeline: "2024",
          status: "Completed"
        },

        role: {
          position: "Frontend Developer",
          responsibilities: [
            "Architected the responsive layout using the Bootstrap 5 container system",
            "Developed a custom 'Typewriter' effect using JavaScript to enhance the hero section",
            "Implemented a dynamic 'ScrollSpy' feature for the navigation bar",
            "Optimized images and assets for fast loading and cross-browser performance"
          ]
        },

        techStack: {
          frontend: [
            "HTML5",
            "CSS3 (Custom Media Queries)",
            "Bootstrap 5",
            "JavaScript (ES6+)",
            "FontAwesome Icons"
          ],
          backend: [],
          deployment: [
            "GitHub Pages"
          ]
        },

        features: [
          "Fully responsive design for all screen sizes (Mobile, Tablet, Desktop)",
          "Interactive Navigation with active-link tracking (ScrollSpy)",
          "Animated 'Typed' header effect for job titles",
          "Comprehensive sections: About, Services, Portfolio, Testimonials, and Contact",
          "CSS Hover effects and smooth transition animations",
          "Counter statistics section for professional milestones"
        ],

        challenges: [
          {
            problem: "Achieving a smooth background-color transition on the navbar upon scrolling",
            solution: "Wrote a JavaScript window scroll listener that toggles CSS classes based on vertical offset, combined with CSS transitions for a fluid effect."
          },
          {
            problem: "Managing complex spacing and alignment across varying viewport widths",
            solution: "Utilized a combination of Bootstrap's utility classes and custom media queries to ensure the portfolio grid remains visually balanced on small devices."
          }
        ],

        outcome: "Successfully delivered a polished, modern portfolio landing page that effectively demonstrates high-level CSS proficiency and frontend layout skills.",

        links: {
          live: "https://gamal-ehab.github.io/Daniels/",
          github: "https://github.com/GamaL-Ehab/Daniels"
        }
      }
    },
    {
      id: 13,
      title: "Fokir Portfolio",
      tagline: "A creative and visually striking personal landing page",
      thumbnail: "./images/projects/Fokir.png",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript"
      ],
      category: "Frontend",

      details: {
        overview: {
          description: "Fokir is a premium personal portfolio template built with a strong focus on typography, spacing, and micro-interactions. The project emphasizes pixel-perfect frontend development, utilizing advanced CSS techniques to create complex layouts and engaging hover effects. It is designed to provide a smooth user experience across all devices while maintaining a high-end, artistic aesthetic.",
          title: "Fokir Portfolio",
          thumbnail: "./images/projects/Fokir.png",
          duration: "1 week",
          timeline: "2024",
          status: "Completed"
        },

        role: {
          position: "Frontend Developer",
          responsibilities: [
            "Transformed high-fidelity design concepts into clean, semantic HTML and CSS",
            "Developed custom CSS animations and transitions for interactive UI elements",
            "Created a fully responsive grid system without relying heavily on heavy frameworks",
            "Implemented JavaScript for dynamic navigation and scrolling behaviors"
          ]
        },

        techStack: {
          frontend: [
            "HTML5",
            "CSS3 (Advanced Flexbox/Grid)",
            "JavaScript (ES6+)",
            "FontAwesome Icons"
          ],
          backend: [],
          deployment: [
            "GitHub Pages"
          ]
        },

        features: [
          "Responsive navigation bar with smooth scroll-to-section logic",
          "Sophisticated CSS hover effects on portfolio items and social links",
          "Interactive image gallery with custom overlays",
          "Responsive typography and fluid layout design",
          "Detailed 'Services' and 'Testimonials' sections",
          "Contact section with styled form elements"
        ],

        challenges: [
          {
            problem: "Creating complex overlapping design elements while maintaining responsiveness",
            solution: "Utilized CSS relative and absolute positioning combined with Z-index management and media queries to ensure elements stack correctly on mobile."
          },
          {
            problem: "Achieving high-performance animations for a large number of UI components",
            solution: "Leveraged CSS hardware acceleration properties (like transform and opacity) instead of animating layout-heavy properties like height/width."
          }
        ],

        outcome: "A polished, artistic frontend landing page that demonstrates deep mastery of CSS layout techniques and attention to detail.",

        links: {
          live: "https://gamal-ehab.github.io/Fokir/",
          github: "https://github.com/GamaL-Ehab/Fokir"
        }
      }
    },
    {
      id: 14,
      title: "Tailwind Landing Page",
      tagline: "A utility-first approach to modern responsive web design",
      thumbnail: "./images/projects/Tailwind.png",
      technologies: [
        "HTML5",
        "Tailwind CSS",
        "JavaScript"
      ],
      category: "Frontend",

      details: {
        overview: {
          description: "A sleek and modern landing page project focused on mastering the utility-first CSS paradigm. This project explores the power of Tailwind CSS to build complex, responsive layouts directly within the HTML, eliminating the need for traditional bloated CSS files. It demonstrates high-performance styling, custom theme configurations, and fluid design transitions using only utility classes.",
          title: "Tailwind Landing Page",
          thumbnail: "./images/projects/Tailwind.png",
          duration: "1 week",
          timeline: "2024",
          status: "Completed"
        },

        role: {
          position: "Frontend Developer",
          responsibilities: [
            "Architected a mobile-first responsive layout using Tailwind's grid and flexbox utilities",
            "Configured PostCSS and Tailwind build processes for production optimization",
            "Implemented custom color palettes and spacing scales via tailwind.config.js",
            "Developed interactive UI components including navigation menus and hover-state buttons"
          ]
        },

        techStack: {
          frontend: [
            "HTML5",
            "Tailwind CSS",
            "JavaScript (ES6+)",
            "PostCSS"
          ],
          backend: [],
          deployment: [
            "GitHub Pages",
            "Vercel"
          ]
        },

        features: [
          "Utility-first styling for maximum performance and maintainability",
          "Fully responsive design utilizing Tailwind's breakpoint system",
          "Custom theme configuration for consistent branding",
          "Modern UI components with smooth hover and focus transitions",
          "Optimized production build with CSS purging to minimize file size"
        ],

        challenges: [
          {
            problem: "Adapting to the utility-first mindset versus traditional BEM/Sass structures",
            solution: "Embraced component abstraction and used the @apply directive in specific cases to keep HTML clean while maintaining the flexibility of utility classes."
          },
          {
            problem: "Managing consistent spacing and typography across different sections",
            solution: "Leveraged the tailwind.config.js file to define a global design system, ensuring uniform margins, paddings, and font sizes throughout the app."
          }
        ],

        outcome: "A high-performance, visually appealing landing page that showcases the efficiency and scalability of utility-first CSS in modern frontend workflows.",

        links: {
          live: "https://gamal-ehab.github.io/tailwind-first/",
          github: "https://github.com/GamaL-Ehab/tailwind-first"
        }
      }
    }
  ]
}
