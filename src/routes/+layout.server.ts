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
        href: 'https://www.linkedin.com/in/thompsonbear/',
        new_tab: true
    },
    {
        icon: 'mdi:github',
        text: 'GitHub',
        href: 'https://github.com/thompsonbear/',
        new_tab: true
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

let projects: Project[] = [
    {
        title: 'Thompson Bear Portfolio',
        description: 'You are here!',
        tags: ['Svelte', 'SvelteKit', 'TailwindCSS', 'Vercel'],
        href: 'https://thompsonbear.com',
        github: 'https://github.com/thompsonbear/portfolio',
    },
    {
        title: 'Auction Koi',
        description: 'A Japanese koi auction website for Select Koi in Sevierville, TN.',
        tags: ['Svelte', 'SvelteKit', 'TailwindCSS', 'Supabase', 'Stripe', 'Vercel'],
        href: 'https://auctionkoi.com',
    },
    {
        title: 'Dainichi USA',
        description:
            'A Japanese koi auction website for one of the most prestigious koi farms in the world.',
        tags: ['Svelte', 'SvelteKit', 'TailwindCSS', 'Supabase', 'Stripe', 'Vercel'],
        href: 'https://dainichiusa.com',
    }
];

export const load = async () => {
    return {
        nav_links,
        social_links,
        contact_links,
        projects
    }
}