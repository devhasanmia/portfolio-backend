export type TProject = {
    thumbnail: string;            
    title: string;                
    description: string;          
    technologies: string[];       
    liveLink?: string;            
    githubLink?: string;         
    status: "active" | "inactive";         
    contributors?: string[];      
    projectType?: "personal" | "collaborative" | "open-source";          
    featured?: boolean;
};
