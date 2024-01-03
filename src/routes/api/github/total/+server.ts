import { json } from '@sveltejs/kit'
import { PRIVATE_GITHUB_TOKEN } from '$env/static/private'

export const GET = async () => {

    async function getContributionCount(){
        let res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${PRIVATE_GITHUB_TOKEN}`
        },
        body: JSON.stringify({
            query: `query {
                user(login: "thompsonbear") {
                  contributionsCollection {
                    contributionCalendar {
                        totalContributions
                    }
                  }
                }
              }`
        })
    })
    return res.json();
}

    const res = await getContributionCount()

    const count = res?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions;

    return count ? json(count) : json(0);
}