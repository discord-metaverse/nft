const { Octokit, App } = require("octokit");
const config = require('dotenv').config()


let arguments = process.argv
const octokit = new Octokit({ auth: process.env.TOKEN });

let manage_hook = async (activation, content_type) => {

    const r = await octokit.request('PATCH /orgs/{org}/hooks/{hook_id}', {
        org: process.env.ORGANIZATION,
        hook_id: process.env.HOOK_ID,
        config: {
            content_type: content_type,
            insecure_ssl: true,
            url: process.env.DISCORD_URL,
            active: activation,
        }
    })
    if (activation) {
        if(r.status == 200) {
            console.log("Successfully enabled webhook, response status : "+ r.status)
        } else {
            console.log("Failed to enable webhook, response status : "+ r.status)
        }
    } else {
        if(r.status === 200) {
            console.log("Successfully disable webhook, response status : " + r.status)
        } else {
            console.log("Failed to disable webhook, response status : "+ r.status)
        }
    }

}


if(arguments[2] === "enable") {

    manage_hook(true, "json")

} else if(arguments[2] === "disable") {

    manage_hook(false, "xml")

} else {
    console.log("Invalid argument")
}


