const { Octokit, App } = require("octokit");

const octokit = new Octokit({ auth: `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` });

let res = async () => {

    const r = await octokit.request('PATCH /orgs/{org}/hooks/{hook_id}', {
        org: 'discord-metaverse',
        hook_id: 329110012,
        config: {
            content_type: 'json',
            insecure_ssl: false,
            url: 'https://discord.com/api/webhooks/910550552599986206/bWPcviw90q1zm8Rs84SSEmbqmO573Km6RpA4eQPq7cmhisTkuBeImLS4-Yzm_PJXnFD9/github',
            active: true,
        }
    })
    console.log(r)
}
res()

