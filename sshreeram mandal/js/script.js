// 🌸 Falling Flowers
const flowerEmojis = ["🌸", "🌺", "🌼", "🌻", "🌷"];
const fallDuration = 60; // 🌺 flowers fall time (seconds) — change here
const flowerInterval = 250;

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.fontSize = 20 + Math.random() * 25 + "px";
  flower.style.animationDuration = 6 + Math.random() * 8 + "s";
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 15000);
}

const interval = setInterval(createFlower, flowerInterval);
setTimeout(() => clearInterval(interval), fallDuration * 1000);

// 🌼 Aarti Update System
function addUpdate() {
  const input = document.getElementById("update-input");
  const list = document.getElementById("update-list");
  const text = input.value.trim();

  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
    input.value = "";
  }
}
// 🎶 Automatic Song Play + Fallback
window.addEventListener("load", () => {
  const audio = document.getElementById("mandirSong");
  const playButton = document.getElementById("playButton");

  audio.volume = 80; // volume thoda kam rakha hai
  audio.play().then(() => {
    console.log("Audio autoplay success");
  }).catch(() => {
    // agar autoplay blocked hua to button dikhaye
    playButton.style.display = "inline-block";
  });

  playButton.addEventListener("click", () => {
    audio.play();
    playButton.style.display = "none";
  });
});
