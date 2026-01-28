import { Component } from '@angular/core';
import { ProjectDetails } from '../project-details/project-details';
import { RouterLink } from '@angular/router';
import { IProject, IProjectDetails } from '../../core/interfaces/iproject';

@Component({
  selector: 'app-recent-projects',
  imports: [ProjectDetails, RouterLink],
  templateUrl: './recent-projects.html',
  styleUrl: './recent-projects.css',
})
export class RecentProjects {
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
    }
  ];

  details!: IProjectDetails;
  getIndex(index: number) {
    this.details = this.projects[index].details;
  }

}
