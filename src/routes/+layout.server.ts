const nav_links: NavLink[] = [
    {
        icon: 'mdi:web',
        text: 'Projects',
        href: '#work'
    },
    {
        icon: 'mdi:text-box',
        text: 'Resume',
        href: '#resume'
    },
    {
        icon: 'mdi:email-variant',
        text: 'Contact',
        href: '#contact'
    }
];

const social_links: NavLink[] = [
    {
        icon: 'mdi:linkedin',
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/thompsonbear/'
    },
    {
        icon: 'mdi:github',
        text: 'GitHub',
        href: 'https://github.com/thompsonbear/'
    },
];

export const load = async () => {
    return {
        nav_links,
        social_links
    }
}