{

  const calculateResult = (amount, currency) => {
    switch (currency) {
      case "USD":
        return 4.2337 * amount;

      case "EUR":
        return 4.6031 * amount;

      case "CHF":
        return 4.7414 * amount;

      case "GBP":
        return 5.2297 * amount;
    }
  };

  const updateResultText = (pln, amountElement) => {
    const plnElement = document.querySelector(".js-pln");

    plnElement.innerText = pln.toFixed(2);
    amountElement.value = "";
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const currencyElement = document.querySelector(".js-currency");
    const amountElement = document.querySelector(".js-amount");

    const pln = calculateResult(+amountElement.value, currencyElement.value);

    updateResultText(pln, amountElement);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  }

  init();
}
