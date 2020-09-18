// Getting Elements from DOM
const currencyOnePicker = document.getElementById('currency-one');
const currencyTwoPicker = document.getElementById('currency-two');
const currencyOneAmount = document.getElementById('amount-one');
const currencyTwoAmount = document.getElementById('amount-two');
const flipButton = document.getElementById('flip');
const rate = document.getElementById('rate');

// Fetch exchange rate from 3rd party API and update DOM
// https://app.exchangerate-api.com

function calculate() {
    const currencyOneCode = currencyOnePicker.value;
    const currencyTwoCode = currencyTwoPicker.value;
    fetch(`https://v6.exchangerate-api.com/v6/9edf55432e8fe53827d04461/latest/${currencyOneCode}`)
        .then(res => res.json())
        .then(data => {
            // Get the exchange Rate from API Data
            const exchangeRate = data.conversion_rates[currencyTwoCode];
            // display the Conversion Rate
            rate.innerText = `1 ${currencyOneCode} = ${exchangeRate} ${currencyTwoCode}`;

            // Apply Conversion Rate and Update Amount of Currency Two
            currencyTwoAmount.value = (currencyOneAmount.value * exchangeRate).toFixed(2);


        });


}

// Flip Function for the Flip Button to reverse currency
function flip() {
    const temp = currencyOnePicker.value;
    currencyOnePicker.value = currencyTwoPicker.value;
    currencyTwoPicker.value = temp;
    calculate();

}

// Event Listeners
currencyOnePicker.addEventListener("change", calculate);
currencyTwoPicker.addEventListener("change", calculate);
currencyOneAmount.addEventListener("input", calculate);
currencyTwoAmount.addEventListener("input", calculate);
flipButton.addEventListener("click", flip);
calculate();