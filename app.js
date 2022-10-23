var buyingPrice = document.querySelector("#buying-price");

var stocksQuantity = document.querySelector("#stocks-quantity");

var sellingPrice = document.querySelector("#selling-price");

var checkBtn = document.querySelector("#chk-btn");

var resultText = document.querySelector("#result-text");

function checkProfitAndLoss() {
    
    var buyingPriceOfStocks = buyingPrice.value;
    var quantityOfStocks = stocksQuantity.value;
    var sellingPriceOfStocks = sellingPrice.value;

    var profit = Number(sellingPrice.value) - Number(buyingPrice.value);
    var totalProfit = (sellingPriceOfStocks * quantityOfStocks) - (buyingPriceOfStocks * quantityOfStocks) ;
    var profitPercentage = ((profit / buyingPrice.value) * 100).toFixed(2);

    var loss = Number(buyingPrice.value) - Number(sellingPrice.value);
    var lossPercentage = ((loss / buyingPrice.value) * 100).toFixed(2);
    var totalLoss = (buyingPriceOfStocks * quantityOfStocks) - (sellingPriceOfStocks * quantityOfStocks);

    if (Number(sellingPrice.value) > Number(buyingPrice.value)) {
        
        resultText.innerText = "The Profit Percentage is " + profitPercentage + "% " + "with a net profit of ₹" + totalProfit;
        
    }
    else if (Number(sellingPrice.value) < Number(buyingPrice.value)) {
        
        resultText.innerText = "The Loss Percentage is " + lossPercentage + "% " + "with a total loss of ₹" + totalLoss;
    }

    else if(buyingPriceOfStocks == '' || quantityOfStocks == '' || sellingPriceOfStocks == '' || buyingPriceOfStocks <= 0 || quantityOfStocks <= 0 || sellingPriceOfStocks <= 0){
        resultText.innerText = "Enter Valid Inputs"
    }

    else{
        resultText.innerText = "No loss and No Profit"
    }
}



checkBtn.addEventListener("click", checkProfitAndLoss)
