const nav_links: NavLink[] = [
	{
		icon: 'mdi:web',
		text: 'Projects',
		href: '#work'
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
	}
];

const contact_links: NavLink[] = [
	{
		icon: 'mdi:email-variant',
		text: 'thompsonbear21@gmail.com',
		href: 'mailto:thompsonbear21@gmail.com'
	},
	{
		icon: 'mdi:phone',
		text: '+1 (440) 679-1480',
		href: 'tel:+14406791480'
	}
];

const projects: Project[] = [
	{
		title: 'Thompson Bear Portfolio',
		description: 'You are here!',
		tags: ['Svelte', 'SvelteKit', 'TailwindCSS', 'Vercel'],
		href: 'https://thompsonbear.com',
		github: 'https://github.com/thompsonbear/portfolio',
		image_url: '/images/projects/portfolio/thompsonbear.png'
	},
	{
		title: 'Auction Koi',
		description: 'A Japanese koi auction website for Select Koi in Sevierville, TN.',
		tags: ['Svelte', 'SvelteKit', 'TailwindCSS', 'Supabase', 'Stripe', 'Vercel'],
		href: 'https://auctionkoi.com',
		image_url: '/images/projects/auctionkoi/auctionkoi.png'
	},
	{
		title: 'Dainichi USA',
		description:
			'A Japanese koi auction website for one of the most prestigious koi farms in the world.',
		tags: ['Svelte', 'SvelteKit', 'TailwindCSS', 'Supabase', 'Stripe', 'Vercel'],
		href: 'https://dainichiusa.com',
		image_url: '/images/projects/dainichiusa/dainichiusa.png'
	}
];

export const load = async ({ fetch }) => {
	async function getContributions() {
		const res = await fetch('/api/github');

		return !res.ok ? [] : res.json();
	}

	async function getContributionTotal() {
		const res = await fetch('/api/github/total');

		return !res.ok ? 0 : res.json();
	}

	return {
		nav_links,
		social_links,
		contact_links,
		projects,
		contributions: getContributions(),
		contribution_total: getContributionTotal()
	};
};
