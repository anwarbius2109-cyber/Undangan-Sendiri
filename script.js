function openInvite() {
  document.querySelector(".cover").style.display = "none";
  document.getElementById("content").style.display = "block";
  document.getElementById("music").play();
}
// NAMA TAMU
const urlParams = new URLSearchParams(window.location.search);
const guestName = urlParams.get("to");
if (guestName) {
  document.getElementById("guest").innerText = guestName;
}

  // PLAY MUSIC
  document.getElementById("music").play();
}

// TIMER
const targetDate = new Date("May 7, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = targetDate - now;

  const d = Math.floor(gap / (1000 * 60 * 60 * 24));
  const h = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const m = Math.floor((gap / (1000 * 60)) % 60);
  const s = Math.floor((gap / 1000) % 60);

  document.getElementById("timer").innerHTML =
    d + " Hari " + h + " Jam " + m + " Menit " + s + " Detik";
}, 1000);
