function sumOne(a,b)
{
    return a+b;
}

var myA = [5,4];
console.log(sumOne(...myA));

function sumTwo(a, b,...args){
    console.log(args);
   let sum = 0;
   let multi = a*b;
      for(const arg of args)
   {
       sum += arg;
   }
   return [sum, multi];
}
console.log(sumTwo(2,3,1,1,1));