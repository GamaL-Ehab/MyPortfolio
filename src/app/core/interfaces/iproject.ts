export interface IProject {
    id: number
    title: string
    tagline: string
    thumbnail: string
    technologies: string[]
    category: string
    details: IProjectDetails
}

export interface IProjectDetails {
    overview: Overview
    role: Role
    techStack: any
    features: string[]
    challenges: Challenge[]
    outcome: string
    links: Links
}

export interface Overview {
    description: string
    title: string
    thumbnail: string
    duration: string
    timeline: string
    status: string
}

export interface Role {
    position: string
    responsibilities: string[]
}

export interface TechStack {
    frontend: string[]
    backend: any[]
    deployment: string[]
}

export interface Challenge {
    problem: string
    solution: string
}

export interface Links {
    live: string
    github: string
}

