interface NavLink {
    icon: string;
    text: string;
    href: string;
    new_tab?: boolean;
}

interface Contribution {
    level: 0 | 1 | 2 | 3 | 4;
    id: string;
    count: number;
    date?: string;
}

interface Project {
    title: string;
    description: string;
    tags: string[];
    href?: string;
    github?: string;
    image_url?: string;
    video_url?: string;
}

interface Point {
    x: number;
    y: number;
}

interface Experience {
    organization: string;
    title: string;
    start_date: string;
    description?: string;
    location?:string;
    end_date?: string;
}