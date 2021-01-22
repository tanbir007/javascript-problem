//https://github.com/tanbir007/javascript-problem

//this is the first problem
 function kilometerToMeter(kilo){
    var meter= kilo*1000;
    return meter;
    }
    var output = kilometerToMeter(2); 
    console.log(output);

//this is  the 2nd programm


function megaFriend(){
    var megafriend = ["rahim", "karim", "salim", "mohammad"];
    var longestword = " ";
    for (var i = 0; i < megafriend.length; i++) {
        var singleword = megafriend[i];
        if (singleword.length > longestword.length);
            longestword = singleword;          
    }
    return longestword;
}
var min=megaFriend();
console.log(min);



//this is 3rd prblm
// budgetCalculator- sorry budgetCalculator function isnt working for me.i tried my best. 
function watch(price, unit) {
   
    if (unit === 0 ) {
       unit = 0;
    }  
    return price * unit;  
  }
  function phone(price, unit) {
   
    if (unit === 0 ) {
       unit = 0;
    }  
    return price * unit;  
  }
  function laptop(price, unit) {
   
    if (unit === 0 ) {
       unit = 0;
    }  
    return price * unit;  
  }
  var total = watch(10,5);
  var total2 = phone(10,4);
  var total3 = laptop(10,3);

  var grandtotal=total+total3+total2;
  console.log(grandtotal);


//this is the last problem

  function hotelCost(days) {

    if(days<=10){
        var rent1=days*100;
        return rent1;
    }
    else if(days<=20){
        var rent2=(10*100)+(days-10)*80;
        return rent2;
    }
    else{
        var rent3=(10*100)+(10*80)+(days-20)*50;
        return rent3;
    }
  
  }
  var price=hotelCost(21);
  console.log(price);






















