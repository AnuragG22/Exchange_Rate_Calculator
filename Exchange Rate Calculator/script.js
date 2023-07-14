// json objects is very similar to js objects , we bascially have key value pairs inside curly braces wxcept JSON the key and any string values and gonna have double quotes 


const currecyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currecyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch exchange rates and update the DOM 
function calculate(){   // 
    // fetch('items.json') // fetched 'items.json'
    // .then(res => res.json()) // we specify that we want it to be in 'json'
    // .then(data =>(document.body.innerHTML=data[0].text)); // we got the data back and we replace it with the body with the first item text
      


    // console.log('RAN');

    const currency_one = currecyEl_one.value;
    const currency_two = currecyEl_two.value;

    // console.log(currency_one,currency_two);

    fetch(` https://v6.exchangerate-api.com/v6/2566fb0664fd966d5ba6ca3e/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const rate = data.conversion_rates[currency_two];

        // console.log(rate);

        rateEl.innerHTML=`1 ${currency_one} = ${rate} ${currency_two}`;
   
        amountEl_two.value = (amountEl_one.value* rate).toFixed(2);
    });

    // Event Listeners :
    currecyEl_one.addEventListener('change',calculate);
    amountEl_one.addEventListener('input',calculate);
    currecyEl_two.addEventListener('change',calculate);
    amountEl_two.addEventListener('input',calculate);

    // creating or adding  the swap button functionality 
    swap.addEventListener('click',() => {
        const temp= currecyEl_one.value;
        currecyEl_one.value= currecyEl_two.value;
        currecyEl_two.value=temp;
        calculate();
    })
}


calculate();
