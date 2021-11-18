import { Octokit, App } from "octokit";

const octokit = new Octokit({ auth: `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` });


await Octokit.request('POST /orgs/{org}/hooks', {
 org: 'org',
 name: 'name',
 config: {
  url: 'url',
  content_type: 'content_type',
  secret: 'secret',
  insecure_ssl: 'insecure_ssl',
  username: 'username',
  password: 'password'
 }
})