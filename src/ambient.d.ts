interface NavLink {
    icon: string;
    text: string;
    href: string;
}

interface Point {
    x: number;
    y: number;
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