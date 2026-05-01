const fetch = require("node-fetch");

const repo = "USERNAME/REPO";
const file = "data/portfolio.json";
const token = process.env.GITHUB_TOKEN;

async function updateGitHub(data) {
  const res = await fetch(
    `https://api.github.com/repos/${repo}/contents/${file}`,
    {
      headers: { Authorization: `token ${token}` }
    }
  );

  const json = await res.json();

  await fetch(
    `https://api.github.com/repos/${repo}/contents/${file}`,
    {
      method: "PUT",
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "update portfolio",
        content: Buffer.from(JSON.stringify(data, null, 2)).toString("base64"),
        sha: json.sha
      })
    }
  );
}

module.exports = { updateGitHub };
