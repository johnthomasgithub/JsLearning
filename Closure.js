function john() {
  var name = "tommy";
  console.log("inside john");

  function johnny() {
    console.log("inside johnny");
  }
  return johnny;
}

var fn2 = john();
fn2();


function addX(x){
    return function addY(y){
        return x+y;
    }
}
console.log(addX(5)(5));