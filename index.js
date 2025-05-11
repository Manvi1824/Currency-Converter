let api = "https://api.currencyapi.com/v3/latest?apikey=cur_live_vAX6YsmRSsKHEFwGBtUvmKDy5TY5uY0ontld6Tc5";
let amount = document.querySelector(".amount");
let fromCurrency = document.querySelector(".fromCurrency");
let toCurrency = document.querySelector(".toCurrency");
let result = document.querySelector(".result")
let button = document.querySelector(".btn")


async function getRate(api) {
    try{let rdata = await fetch(api);
        let data = await rdata.json();
        return data.data
    }
    catch{
        throw new Error("Can't find data");
        
    }
}

button.addEventListener("click",()=>{
let from = fromCurrency.value;
let to = toCurrency.value;
let amountInput = amount.value;
if (!amountInput || isNaN(amountInput)) {
    alert("Please enter a valid amount.");
    return;
}

getRate(api).then((data)=>{
    if (!data[from] || !data[to]) {
        alert("Currency not supported.");
        return;
    }
 let fromRate = data[from].value;
 let toRate = data[to].value;
 let convertedAmount = (amountInput*toRate)/fromRate;

 result.value = convertedAmount;
}).catch((err)=>{
    console.log(err.message)
});

})

