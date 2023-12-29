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

const contact_links: NavLink[] = [
    {
        icon: 'mdi:email-variant',
        text: 'tbear@thompsonbear.com',
        href: 'mailto:tbear@thompsonbear.com'
    },
    {
        icon: 'mdi:phone',
        text: '+1 (440) 679-1480',
        href: 'tel:+14406791480'
    },
];

export const load = async () => {
    return {
        nav_links,
        social_links,
        contact_links
    }
}