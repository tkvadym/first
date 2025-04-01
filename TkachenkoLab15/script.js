// Завдання 1: Виведення чисел від -100 до 100
window.onload = function () {
  // Виконуємо перше завдання при завантаженні сторінки
  let result1 = document.getElementById("result1");
  let num = -100;
  let numbers = [];

  while (num <= 100) {
    numbers.push(num);
    num++;
  }
  result1.textContent = numbers.join(", ");

  // Виконуємо друге завдання при завантаженні сторінки
  let result2 = document.getElementById("result2");
  let evenNumbers = [];
  let i = 0;

  do {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
    i++;
  } while (i <= 100);
  result2.textContent = evenNumbers.join(", ");

  // Виконуємо третє завдання при завантаженні сторінки
  let result3 = document.getElementById("result3");
  let b = 1000;
  let count = 0;
  let res;

  while (b >= 5) {
    b = b / 3;
    count++;
  }
  res = b;

  result3.innerHTML = `Результат (res): ${res.toFixed(
    2
  )}<br>Кількість ітерацій (count): ${count}`;
};

// Завдання 4: Конвертер сантиметрів у дюйми
function convertToInches() {
  const cm = document.getElementById("centimeters").value;
  if (cm) {
    const inches = (cm / 2.54).toFixed(2);
    alert(`${cm} см = ${inches} дюймів`);
  } else {
    alert("Будь ласка, введіть значення в сантиметрах");
  }
}

// Завдання 5: Визначення дня тижня
function getDayOfWeek() {
  const dayNum = prompt("Введіть число від 1 до 31:");
  const result5 = document.getElementById("result5");

  if (dayNum && !isNaN(dayNum) && dayNum >= 1 && dayNum <= 31) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const date = new Date(currentYear, currentMonth, dayNum);
    const days = [
      "Неділя",
      "Понеділок",
      "Вівторок",
      "Середа",
      "Четвер",
      "П'ятниця",
      "Субота",
    ];

    result5.textContent = `${dayNum} число - це ${days[date.getDay()]}`;
  } else {
    result5.textContent = "Будь ласка, введіть коректне число від 1 до 31";
  }
}
