import { PUBLIC_HOST_URL } from '$env/static/public';

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
	}
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
	}
];

const projects: Project[] = [
	{
		title: 'Thompson Bear Portfolio',
		description: 'You are here!',
		tags: ['Svelte', 'SvelteKit', 'TailwindCSS', 'Vercel'],
		href: 'https://thompsonbear.com',
		github: 'https://github.com/thompsonbear/portfolio'
	},
	{
		title: 'Auction Koi',
		description: 'A Japanese koi auction website for Select Koi in Sevierville, TN.',
		tags: ['Svelte', 'SvelteKit', 'TailwindCSS', 'Supabase', 'Stripe', 'Vercel'],
		href: 'https://auctionkoi.com'
	},
	{
		title: 'Dainichi USA',
		description:
			'A Japanese koi auction website for one of the most prestigious koi farms in the world.',
		tags: ['Svelte', 'SvelteKit', 'TailwindCSS', 'Supabase', 'Stripe', 'Vercel'],
		href: 'https://dainichiusa.com'
	}
];

const experience: Experience[] = [
	{
		organization: 'Select Koi',
		title: 'Web Developer/IT Manager',
		start_date: '2023-01-15',
		description:
			'Own, develop, and deploy auction websites dainchiusa.com and auctionkoi.com for Japanese koi fish. Establish IT systems, overhaul networking, workstations, and inventory systems.',
		location: 'Sevierville, TN'
	},
	{
		organization: 'Cornerstone IT',
		title: 'Network Engineer',
		start_date: '2022-03-01',
		description:
			'Resolved escalated tickets and completed assigned network and cloud projects. Specialized in Microsoft Azure and SonicWALL firewalls.',
		location: 'Sevierville, TN (Remote)',
		end_date: '2022-12-15'
	}
];

export const load = async () => {
	async function getContributions() {
		// generate random contributions for the last year
		let endpoint = new URL('/api/github', PUBLIC_HOST_URL);
		const res = await fetch(endpoint);

		return !res.ok ? [] : res.json();
	}

	async function getContributionTotal() {
		// generate random contributions for the last year
		let endpoint = new URL('/api/github/total', PUBLIC_HOST_URL);
		const res = await fetch(endpoint);

		return !res.ok ? 0 : res.json();
	}

	return {
		nav_links,
		social_links,
		contact_links,
		projects,
		experience,
		contributions: getContributions(),
		contribution_total: getContributionTotal()
	};
};
