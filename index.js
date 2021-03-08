//Tip calculator function
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
    //validate input
    if (billAmt === "" || serviceQual == 0 || numOfPeople == 0) {
        window.alert("Error: Values Missing");
        return;
      }
    
    //Calculate the tip
    var tipeach = (billAmt * serviceQual) / numOfPeople;
    tipeach = Math.round(tipeach * 100) / 100;
    tipeach = tipeach.toFixed(2);

   // Calculating total tip
    var totaltip = (billAmt * serviceQual)  ;
    //calculating total bill, which is sum of total bill + total tip
    var totalbill =  parseFloat(billAmt) + parseFloat(totaltip) ; 

    // calculat each person total payment, which is share of total bill + share of tip
    var billeach = (totalbill)/numOfPeople ;
    billeach = Math.round(billeach * 100)/100 ;
    billeach = billeach.toFixed(2) ;

    // this code will display summary block
    document.getElementById("Summary").style.display = "block";

    //set the fields in summary block with the values
    document.getElementById("Bill").innerHTML = billAmt;
    document.getElementById("Tip").innerHTML = totaltip;
    document.getElementById("Totalbill").innerHTML = totalbill;
    document.getElementById("Eachbill").innerHTML = billeach;
    document.getElementById("Eachtip").innerHTML = tipeach;

   
  }
  //Don't initially show tip amount
  document.getElementById("Summary").style.display = "none";
  //document.getElementById("each").style.display = "none";
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  };
  
  