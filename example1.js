// ---------------callback-------------
// let x= function(){
//     console.log("iam inside x");
// };
// let y = function(callback){
//     console.log("iam inside y");
//     callback();
// };
// y(x);
// ------------------

// let add = function(a,b){
//     return a+b;
// };
// let mul = function(a,b){
//     return a*b;
// };

// let calc = function(num1,num2,callback){
//    return callback(num1,num2);
// };
// console.log(calc(1,2,mul));
// ---------------------

// var Arr = [{
//     num:5,
//     str:"apple"
// },{
//     num:3,
//     str:"orange"
// },{
//     num:10,
//     str:"zeplin"
// },{
//     num:20,
//     str:"banana"
// }
// ];
//  Arr.sort(function(val1,val2){
//      if(val1.num < val2.num)
//      return -1;
//      else
//      return 1;
//  });
//  console.log(Arr);
// ------------------


// var arr = [{
//     num:1
// },
// {
//     num:2
// },
// {
//     num:100
// },
// {
//     num:200
// },
// ];
// arr.sort(function(n1,n2)
// {
//     if(n1>n2)
//     return 1;
//     else
//     return -1;
// });
// console.log(arr);



// ------------promises------------

// let promise = new Promise(function(resolve,reject)
// {
//     let isClean = true;  
//     if(isClean)
//     resolve('Clean');
//     else
//     reject('not Clean');
// });

// promise.then(function(fromResolve){
//  console.log('The room is '+fromResolve);
// }).catch(function(fromReject){
//     console.log('The room is '+fromReject);
// });
//  -----------------------------


// let cleanRoom = function(){
//     return new Promise(function(resolve,reject){
//         resolve('Room Cleaned');
//     });
// };
// let cleanGarbage = function(massage){
//     return new Promise(function(resolve,reject){
//         resolve(massage +'Garbage Cleaned');
//     });
// };
// let winIceCream = function(massage){
//     return new Promise(function(resolve,reject){
//         resolve(massage +'won IceCream');
//     });
// };



// cleanRoom().then(function(fromResolve){
//     return cleanGarbage(fromResolve);
// }).then(function(fromResolve){
//     return winIceCream(fromResolve);
// }).then(function(fromResolve){
//     console.log('Work Completed'+ fromResolve);
// }).catch(function(fromReject){
//     console.log('Work not Completed');
// });

// --------------------------------------------
alert('Hello');




