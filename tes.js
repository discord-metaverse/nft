const { Octokit, App } = require("octokit");

const octokit = new Octokit({ auth: `ghp_C4Wpf53AcKMpLgHeARmEU9Kf5l9gE42tb6` });

let res = async () => {

    const r = await octokit.request('PATCH /orgs/{org}/hooks/{hook_id}', {
        org: 'discord-metaverse',
        hook_id: 329110012,
        config: {
            content_type: 'json',
            insecure_ssl: true,
            url: 'https://discord.com/api/webhooks/910550552599986206/bWPcviw90q1zm8Rs84SSEmbqmO573Km6RpA4eQPq7cmhisTkuBeImLS4-Yzm_PJXnFD9/github',
            active: true,
        }
    })
    console.log(r)
}
res()

