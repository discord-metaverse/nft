const { Octokit, App } = require("octokit");
const config = require('dotenv').config()


let arguments = process.argv
const octokit = new Octokit({ auth: process.env.TOKEN });

let enable = async () => {

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
    if(r.status == 200) {
        console.log("Successfully enabled webhook")
    } else {
        console.log("Failed to enable webhook")
    }
}

let disable = async () => {

    const r = await octokit.request('PATCH /orgs/{org}/hooks/{hook_id}', {
        org: 'discord-metaverse',
        hook_id: 329110012,
        config: {
            content_type: 'xml',
            insecure_ssl: true,
            url: 'https://discord.com/api/webhooks/910550552599986206/bWPcviw90q1zm8Rs84SSEmbqmO573Km6RpA4eQPq7cmhisTkuBeImLS4-Yzm_PJXnFD9/github',
            active: false,
        }
    })
    if(r.status == 200) {
        console.log("Successfully disable webhook")
    } else {
        console.log("Failed to disable webhook")
    }
}


if(arguments[2] == "enable") {
    enable()
} else if(arguments[2] == "disable") {
    disable()
} else {
    console.log("Invalid argument")
}


