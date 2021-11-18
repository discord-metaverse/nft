const { Octokit, App } = require("octokit");

const octokit = new Octokit({ auth: `ghp_aeTbzFPTt65ZYAeyyGOTqkGSQUyL4DPkha` });

let res = async () => {

    const r = await octokit.request('GET /orgs/{org}/hooks/{hook_id}', {
        org: 'discord-metaverse',
        hook_id: 328924219,

    })
    console.log(r)
}
res()
//config: {
//             insecure_ssl: 'null',
//             url: 'https://discord.com/api/webhooks/910550552599986206/bWPcviw90q1zm8Rs84SSEmbqmO573Km6RpA4eQPq7cmhisTkuBeImLS4-Yzm_PJXnFD9/github',
//             content_type: 'application/json',
//             active: 'true'
//         }
