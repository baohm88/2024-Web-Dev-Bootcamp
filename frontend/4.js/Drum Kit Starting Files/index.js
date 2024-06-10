document.addEventListener("DOMContentLoaded", () => {
  const drums = document.querySelectorAll(".drum").forEach((button) => {
    button.onclick = () => {
      const letter = button.dataset.letter;
      makeSound(letter);
      buttonAnimation(letter);
    };
  });
});

document.addEventListener("keypress", (event) => {
  makeSound(event.key)
  buttonAnimation(event.key)
})

function makeSound(letter) {
  var sound = new Audio(`sounds/${letter}.mp3`);
  sound.play();
}

function buttonAnimation(letter) {
  const activeButton = document.querySelector(`.${letter}`);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
