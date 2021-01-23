//Problem1:Program to Convert Kilometers to Meter.

function kilometerToMeter(kilometer) 
{
    
    // conversion factor
    const factor = 1000;
    // calculate meter
    var meter = kilometer * factor;
    return meter;
}

result = kilometerToMeter(10);

console.log(result); 


//problem2: program budget calculator , it takes three parameter .
//watch=$50
//mobile=$100
//Laptop=$500

function budgetCalculator(numOfWatch,numOfMobile,numOfLaptop)
{    
    // defiend mesurement
    const perPriceOfWatch = 50;
    const perPriceOfMobile = 100;
    const perPriceOfLaptop = 500;
    var total=(numOfWatch*perPriceOfWatch)+(numOfMobile*perPriceOfMobile)+(numOfLaptop*perPriceOfLaptop);
    return total;
}

 totalSum = budgetCalculator(2,2,2);
 console.log(totalSum);


 ////problem3: program hotel cost .
 //Day1-Day10 : costPerDay = 100.
//Day11-Day20 : costPerDay = 80.
//Day21-Day... : costPerDAy = 50.
//Function Take Only one parameter .
//return total cost.

function hotelCost(dayStay)
{
  var cost = 0;
  if(dayStay<=10)
  {
      cost = dayStay*100;
  }
  else if(dayStay<=20)
 {
     var firstSchema = 10*100;
     var remaining = dayStay - 10;
     var secondSchema = remaining*80;
     cost = firstSchema + secondSchema ;
 }
 else
 {
     var firstSchema = 10*100;
     var secondSchema = 10*80;
     var remaining = dayStay - 20;
     var thirdSchema = remaining*50;
     cost = firstSchema+secondSchema+thirdSchema;
 }
 return cost;

}

var totalCost = hotelCost(32);
console.log ( totalCost);



//problem 4 : program  megaFriend
//function input parameter array take friends array 
//return mega friend name .


function megaFriend(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  var word =megaFriend(["sakib","tamim","liton", "mustafiz", "jhankar mahbub vai", "mahmudullah", "miraz "]);
  console.log(word); 