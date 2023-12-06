interface NavLink {
    icon: string;
    name: string;
    link: string;
}

const nav_links = [
    {
        icon: 'mdi:web',
        name: 'Projects',
        link: '/projects'
    },
    {
        icon: 'mdi:text-box',
        name: 'Resume',
        link: '/resume'
    },
    {
        icon: 'mdi:post',
        name: 'Blog',
        link: '/blog'
    },
    {
        icon: 'mdi:email-variant',
        name: 'Contact',
        link: '/contact'
    }
] as NavLink[];


export const load = async () => {
    return {
        nav_links
    }
}