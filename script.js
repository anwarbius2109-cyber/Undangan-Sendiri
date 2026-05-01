// cek login
if(localStorage.getItem("auth") !== "true"){
  window.location.href = "login.html";
}

// ambil data
let data = JSON.parse(localStorage.getItem("portfolio")) || [];

render();

function addItem(){
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const demo = document.getElementById("demo").value;
  const category = document.getElementById("category").value;

  data.push({
    id: Date.now(),
    title,
    image,
    demo,
    category
  });

  save();
  render();
}

function render(){
  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(item => {
    list.innerHTML += `
      <div class="bg-gray-900 p-4 rounded-xl">
        <img src="${item.image}" class="rounded mb-2"/>

        <h2 class="font-bold">${item.title}</h2>
        <p class="text-sm text-gray-400">${item.category}</p>

        <a href="${item.demo}" target="_blank"
          class="text-blue-400 text-sm block mt-2">
          Preview
        </a>

        <button onclick="hapus(${item.id})"
          class="mt-3 bg-red-600 px-3 py-1 rounded">
          Delete
        </button>
      </div>
    `;
  });
}

function hapus(id){
  data = data.filter(i => i.id !== id);
  save();
  render();
}

function save(){
  localStorage.setItem("portfolio", JSON.stringify(data));
}

function logout(){
  localStorage.removeItem("auth");
  window.location.href = "login.html";
}
