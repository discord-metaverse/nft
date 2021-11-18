const { Octokit, App } = require("octokit");

const octokit = new Octokit({ auth: `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` });

let res = async () => {

    const r = await octokit.request('PATCH /orgs/{org}/hooks/{hook_id}', {
        org: 'discord-metaverse',
        hook_id: 328924219,
        config: {
            url: 'https://discord.com/api/webhooks/910550552599986206/bWPcviw90q1zm8Rs84SSEmbqmO573Km6RpA4eQPq7cmhisTkuBeImLS4-Yzm_PJXnFD9/github',
            content_type: 'application/json',
            active: 'false'
        }
    })
    console.log(r)
}
res()

