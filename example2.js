

//hoisting example
console.clear();


// console.log(num);
// num = 10;
// console.log(num);
// var num;

// the below code will happen while exwcution which means javascript will take all the declarations to the first line
// var num =undefined;
// num = 10;
// console.log(num);
// var num;
var total =10;

var sum = function(num1,num2)
{
    console.log(total);
    total = num1+num2;
    var total;
    console.log(total);
}
sum(1,2);

