var registerform = document.querySelector(".registerForm");
registerform.onsubmit = function(currentconverter){
    currentconverter.preventDefault();
    var amount = document.getElementById("amount").value;
     var baseCurrency = 'ILS';
    var exchange = document.getElementById("exchange").value;
    var usdRate = 0.27;
    var jodRate = 0.19;

    var usdAmount = (amount * usdRate).toFixed(2);
    var jodAmount = (amount * jodRate).toFixed(2);
    var nisAmount = amount;
   /* console.log(usdAmount);
    console.log(jodAmount);
    console.log(nisAmount);
    document.querySelector(".result").innerHTML = usdAmount;*/
   if(exchange=="USD"){
        document.querySelector(".result").innerHTML = amount + ' ILS is approximately ' + usdAmount + ' USD ';
    }
   else if(exchange=="JOD"){
       document.querySelector(".result").innerHTML = amount + ' ILS is approximately ' + jodAmount + ' JOD.';
    }
    else{
        document.querySelector(".result").innerHTML = amount;
    }
}