const game = document.querySelector("canvas");
const intro = document.querySelector(".intro");
const startBtn = document.querySelector("button");
const audio = document.querySelector("audio");

const greenDragon = document.querySelector(".green");
const blueDragon = document.querySelector(".blue");

audio.volume = 0.05;

document.addEventListener("keyup", (e) => {
	if (e.key === "Backspace") {
		window.location.reload();
	}
});

startBtn.onclick = () => {
	intro.classList.add("div-out");
	setTimeout(() => {
		intro.classList.add("hidden");
	}, 3000);
	game.classList.remove("hidden");

	App.init();
};

if (!App.isGame) {
	greenDragon.classList.remove("hidden");
	blueDragon.classList.remove("hidden");
}
