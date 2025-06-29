require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "SyedFaizAhmed",
  "id": 89782308,
  "node_id": "MDQ6VXNlcjg5NzgyMzA4",
  "avatar_url": "https://avatars.githubusercontent.com/u/89782308?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/SyedFaizAhmed",
  "html_url": "https://github.com/SyedFaizAhmed",
  "followers_url": "https://api.github.com/users/SyedFaizAhmed/followers",
  "following_url": "https://api.github.com/users/SyedFaizAhmed/following{/other_user}",
  "gists_url": "https://api.github.com/users/SyedFaizAhmed/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/SyedFaizAhmed/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/SyedFaizAhmed/subscriptions",
  "organizations_url": "https://api.github.com/users/SyedFaizAhmed/orgs",
  "repos_url": "https://api.github.com/users/SyedFaizAhmed/repos",
  "events_url": "https://api.github.com/users/SyedFaizAhmed/events{/privacy}",
  "received_events_url": "https://api.github.com/users/SyedFaizAhmed/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-08-30T11:46:37Z",
  "updated_at": "2025-06-20T16:07:20Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter", (req, res) => {
    res.send("faizdotcom")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
