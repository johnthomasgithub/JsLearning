// // -----------------------------
// // const car = {
// //     brand: 'Ford',
// //     model: 'Fiesta',
// //     start: function() {
// //       console.log(`Started ${this.brand} ${this.model}`)
// //     },
// //     stop: () => {
// //       console.log(`Stopped ${this.brand} ${this.model}`)
// //     }
// //   }
// //   car.start();


// var obj = {
//     count : 10,
//     doSomethingLater : function (){
//         setTimeout(function(){ // the function executes on the window scope
//             this.count++;
//             console.log(this.count);
//         }, 300);
//     }
// }
// obj.doSomethingLater();


// ---------------------



// var obj = {
//     count : 10,
//     doSomethingLater : function(){ // of course, arrow functions are not suited for methods
//         setTimeout( () => { // since the arrow function was created within the "obj", it assumes the object's "this"
//             this.count++;
//             console.log(this.count);
//         }, 300);
//     }
// }

// obj.doSomethingLater();


// ----------------------


color = "white";
color = "green";
const getColor = () => color

console.log(getColor());
