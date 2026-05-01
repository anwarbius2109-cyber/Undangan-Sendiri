fetch("./data/portfolio.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("portfolio")

    container.innerHTML = data.map(item => `
      <div class="bg-white rounded shadow overflow-hidden">

        <img src="${item.image}" class="w-full h-56 object-cover">

        <div class="p-4">
          <h3 class="font-bold text-lg">${item.title}</h3>

          <a href="${item.demo}" target="_blank"
            class="block mt-3 bg-blue-600 text-white text-center py-2 rounded">
            Preview
          </a>
        </div>

      </div>
    `).join("")
  })
