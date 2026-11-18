console.log("Форма запущена");

const selectedName = "Коврик";
//const quantityText = "3";
const unitValue = 310;
const extraValue = 70;
const catalog = [
    {position : 1, name : "Коврик", specs : "180 см · 1 комплект", description : "Для остановки и отдыха на природе"},
    {position : 2, name : "Фонарь", specs : "Три режима · 1 комплект", description : "Свет для вечерней прогулки"},
    {position : 3, name : "Рюкзак", specs : "30 литров · 1 комплект", description : "Для вещей и короткого маршрута"}
];

function getResult(quantityText, unitAmount, extraAmount) {
  if (quantityText.trim() === "") {
    return "Ошибка: укажите количество";
  }

  const quantity = Number(quantityText);

  if (Number.isNaN(quantity) || !Number.isFinite(quantity)) {
    return "Ошибка: введите число";
  }

  if (quantity <= 0 || !Number.isInteger(quantity)) {
    return "Ошибка: нужно положительное целое количество";
  }

  const totalAmount = quantity * unitAmount + extraAmount;
  return "Итого: " + totalAmount;
}

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const quantityText = document.querySelector("#quantity").value;
    const select = document.querySelector("#item");
    const itemName = select.options[select.selectedIndex].text;
    const message = getResult(quantityText, unitValue, extraValue);
    const result = document.querySelector("#result");
    result.textContent = itemName + ". " + message;
});