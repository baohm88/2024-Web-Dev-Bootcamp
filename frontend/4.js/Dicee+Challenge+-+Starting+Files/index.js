document.addEventListener("DOMContentLoaded", () => {
  let randomRumber1 = Math.floor(Math.random() * 6) + 1;
  let randomRumber2 = Math.floor(Math.random() * 6) + 1;

  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");
  const title = document.querySelector("h1");

  img1.setAttribute("src", `./images/dice${randomRumber1}.png`);
  img2.setAttribute("src", `./images/dice${randomRumber2}.png`);

  if (randomRumber1 > randomRumber2) {
    title.innerHTML = "Player 1 Wins!";
  } else if (randomRumber1 < randomRumber2) {
    title.innerHTML = "Player 2 Wins!";
  } else {
    title.innerHTML = "It's a draw!";
  }
});
