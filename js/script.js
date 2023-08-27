let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let plnElement = document.querySelector(".js-pln");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +amountElement.value;
  let currency = currencyElement.value;
  let pln;

  switch (currency) {
    case "USD":
      pln = 4.2337 * amount;
      break;

    case "EUR":
      pln = 4.6031 * amount
      break;

    case "CHF":
      pln = 4.7414 * amount
      break;

    case "GBP":
      pln = 5.2297 * amount
      break;
  }
  plnElement.innerText = pln.toFixed(2);
});
