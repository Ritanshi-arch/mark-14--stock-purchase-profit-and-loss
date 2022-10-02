var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");
submitBtn.addEventListener('click', submitHandler)



function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {  if(initialPrice.value < 0){
  outputBox.innerText=("😑Don't insert negative value in Initial Price😑");
} 
else if (stocksQuantity.value < 0 ) {
  outputBox.innerText=("😑Don't insert negative value in Quantity of Stocks😑");
}
 else if(currentPrice.value < 0 ){
  outputBox.innerText=("😑Don't insert negative value in Current Price😑");
 }else if( initialPrice.value == 0){
  outputBox.innerText=("🤨 Don't leave value of Initial price empty 🤨")
 } else if( stocksQuantity.value == 0){
  outputBox.innerText=("🤨Don't leave value of quantity of Stock empty🤨")
 }else if( currentPrice.value == 0){
  outputBox.innerText=("🤨Don't leave value of current price empty🤨")
 }


   else  if (initial > current) {
        //loss Logic here
        var loss = (initial - current) * quantity;
        var lossPercentge = (loss / initial) * 100;

        showOutput(`🤒 Hey the loss is ${loss} and the percente is ${lossPercentge}% 🤒`);
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100; 

        showOutput(`🤩 Hey the profit is ${profit} and the percentage is ${profitPercentage}% 🤩` );

   } else {
        showOutput(`No pain no gain and no gain no pain`);
    }
      function showOutput(message) {

        outputBox.innerHTML = message;
      }
    }
