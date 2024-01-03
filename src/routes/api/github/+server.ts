import { json } from '@sveltejs/kit'
import { PRIVATE_GITHUB_TOKEN } from '$env/static/private'

function getContributionLevelNum(contributionLevel: string){
    switch(contributionLevel){
        case 'NONE':
            return 0;
        case 'FIRST_QUARTILE':
            return 1;
        case 'SECOND_QUARTILE':
            return 2;
        case 'THIRD_QUARTILE':
            return 3;
        case 'FOURTH_QUARTILE':
            return 4;
        default:
            return 0;
    }
}

export const GET = async () => {
    let contributions: Contribution[][] = [];

    async function getContributions(){
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
                      weeks {
                        contributionDays {
                          contributionCount
                          date
                          weekday
                          contributionLevel
                        }
                      }
                    }
                  }
                }
              }`
        })
    })
    return res.json();
}

    const res = await getContributions()

    if(!res?.data) { // Fallback
        let id = 0;
        for(let x = 0; x < 54; x++) {
            let week: Contribution[] = [];
            for(let y = 0; y < 7; y++) {
                week.push({
                    level: 1,
                    id: `${id}`,
                    count: 0,
                })
                id++;
            }
            contributions.push(week)
        }
    } else { // Mutate data from api
        const weeks = res.data.user.contributionsCollection.contributionCalendar.weeks;

        for(let week of weeks){
            let weekContributions: Contribution[] = [];
            for(let day of week.contributionDays){
                weekContributions.push({
                    level: getContributionLevelNum(day.contributionLevel),
                    count: day.contributionCount,
                    id: day.date,
                    date: day.date,
                })
            }
            contributions.push(weekContributions);
        }
    }

    return json(contributions);
}