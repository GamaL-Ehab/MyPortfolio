import { Component } from '@angular/core';
import { ProjectDetails } from '../project-details/project-details';
import { RouterLink } from '@angular/router';
import { IProject, IProjectDetail } from '../../core/interfaces/iproject';

@Component({
  selector: 'app-recent-projects',
  imports: [ProjectDetails, RouterLink],
  templateUrl: './recent-projects.html',
  styleUrl: './recent-projects.css',
})
export class RecentProjects {
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
    }
  ]

  details!: IProjectDetail;
  getIndex(index: number) {
    this.details = this.projects[index].details;
  }

}
