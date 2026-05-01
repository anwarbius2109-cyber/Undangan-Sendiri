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
