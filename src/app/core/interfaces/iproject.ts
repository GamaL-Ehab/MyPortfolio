export interface IProject {
    title: string;
    image: string;
    type: string;
    shortDesc: string;
    topTechs: [string, string, string]; // Fixed-size array for topTechs
    liveDemo: string;
    date: string;
    details: IProjectDetail;
}

export interface IProjectDetail {
    title: string;
    image: string;
    type: string;
    description: string;
    topTechs: string[];
    techStack: string[];
    liveDemo: string;
    repository: string;
    date: string;
}

