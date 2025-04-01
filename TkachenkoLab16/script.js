// Завдання 1
const images = document.querySelectorAll(".task1 img");
images.forEach((img) => {
  img.onclick = function () {
    console.log(this.getAttribute("width"));
  };
});

// Завдання 2
const links = document.querySelectorAll(".task2 a");

function handleMouseOver() {
  this.setAttribute("title", this.getAttribute("href"));
}

function handleMouseOut() {
  this.removeAttribute("title");
}

links.forEach((link) => {
  link.addEventListener("mouseover", handleMouseOver);
  link.addEventListener("mouseout", handleMouseOut);
});

// Завдання 3
const inputs3 = document.querySelectorAll(".task3 input");
const demo = document.getElementById("demo");

inputs3.forEach((input) => {
  input.onclick = function () {
    demo.textContent = this.value || "Поле порожнє";
  };
});

// Завдання 4
const inputs4 = document.querySelectorAll(".task4 input");
const handleClick = function () {
  console.log(this.value || "Поле порожнє");
  this.removeEventListener("click", handleClick);
  this.onclick = function () {
    alert(this.value || "Поле порожнє");
  };
};

inputs4.forEach((input) => {
  input.addEventListener("click", handleClick);
});

// Завдання 5
const numbers = {
  один: 1,
  два: 2,
  три: 3,
};

const wordNumbers = {
  1: "один",
  2: "два",
  3: "три",
};

const paragraphs = document.querySelectorAll(".task5 p");
paragraphs.forEach((p) => {
  let isNumber = false;

  p.onclick = function () {
    if (!isNumber) {
      const number = numbers[this.textContent];
      this.textContent = number * number;
      isNumber = true;
    } else {
      const word = wordNumbers[Math.sqrt(this.textContent)];
      this.textContent = word;
      isNumber = false;
    }
  };
});

// Завдання 6
const colorBoxes = document.querySelectorAll(".task6 .color-box");

function paintRed() {
  this.style.backgroundColor = "red";
  this.removeEventListener("click", paintRed);
  this.addEventListener("click", paintGreen);
}

function paintGreen() {
  this.style.backgroundColor = "green";
  this.removeEventListener("click", paintGreen);
  this.addEventListener("click", paintRed);
}

colorBoxes.forEach((box) => {
  box.addEventListener("click", paintRed);
});
