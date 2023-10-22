const counter = document.querySelector(".counter");
const loadingBarFront = document.querySelector(".loadingBarFront");

let number = 0;

const updateNumber = () => {
  counter.textContent = number + "%";
  loadingBarFront.style.width = number + "%";
  number++;

  if (number < 101) {
    setTimeout(updateNumber, 15);
  }
};

updateNumber();
