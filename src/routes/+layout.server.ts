const nav_links: NavLink[] = [
    {
        icon: 'mdi:web',
        text: 'Projects',
        href: '/projects'
    },
    {
        icon: 'mdi:text-box',
        text: 'Resume',
        href: '/resume'
    },
    {
        icon: 'mdi:post',
        text: 'Blog',
        href: '/blog'
    },
    {
        icon: 'mdi:email-variant',
        text: 'Contact',
        href: '/contact'
    }
];

export const load = async () => {
    return {
        nav_links
    }
}