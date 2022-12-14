// selecting all inputs from HTML world

var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");


submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    if (ip && curr) {
        if (ip <= 0 || curr <= 0 || qty <= 0) {
            outputBox.innerText = "Negative values or Zero not allowed. Please enter only inputs greater than 0";
            return;
            // alert("Negative values not allowed. Please enter only inputs greater than 0");
        }
    } else {
        outputBox.innerText = "Please enter valid inputs, do not enter 0 or leave any field empty";
        return;
        //alert("Please enter inputs. Do not leave any field blank.");
    }

    if (ip > 0 && qty > 0 && curr > 0) {

        calculateProfitandLoss(ip, qty, curr);
    }

}

// calculate profit, loss, profit percentage, loss percentage

function calculateProfitandLoss(initial, quantity, current) {


    if (initial > current) {

        // loss
        var loss = ((initial - current) * quantity).toFixed(2);
        var lossPercentage = (((initial - current) * 100) / initial).toFixed(2);
        document.body.style.backgroundColor = "red";
        outputBox.innerText = `Alas! The loss is ${loss} and loss percentage is ${lossPercentage} % 🔴`;

    } else if (current > initial) {

        // profit 
        var profit = ((current - initial) * quantity).toFixed(2);
        var profitPercentage = (((current - initial) * 100) / initial);
        document.body.style.backgroundColor = "grey";
        outputBox.innerText = `Awww! The profit is ${profit} and profit percentage is ${profitPercentage.toFixed(2)} % 🟢`;

    } else {

        // rest
        outputBox.innerText = `No Pain No Gain : Raju ricks nhi lene ka re baba`;
        // console.log("Raju ricks nhi lene ka re baba")
    }

}