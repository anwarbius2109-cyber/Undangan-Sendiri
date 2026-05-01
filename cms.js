let portfolio = []

function addItem() {
  portfolio.push({
    id: Date.now(),
    title: title.value,
    image: image.value,
    demo: demo.value
  })

  render()
}

function render() {
  document.getElementById("list").innerHTML =
    portfolio.map(p => `
      <div class="border p-2 mt-2 rounded">
        ${p.title}
      </div>
    `).join("")
}

async function saveToGitHub() {

  const repo = "USERNAME/REPO"
  const filePath = "data/portfolio.json"

  const res = await fetch(
    `https://api.github.com/repos/${repo}/contents/${filePath}`,
    {
      headers: {
        Authorization: `token YOUR_GITHUB_TOKEN`
      }
    }
  )

  const file = await res.json()

  await fetch(
    `https://api.github.com/repos/${repo}/contents/${filePath}`,
    {
      method: "PUT",
      headers: {
        Authorization: `token YOUR_GITHUB_TOKEN`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "update portfolio",
        content: btoa(JSON.stringify(portfolio, null, 2)),
        sha: file.sha
      })
    }
  )

  alert("Saved to GitHub!")
}
