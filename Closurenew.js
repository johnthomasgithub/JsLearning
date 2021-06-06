function fun1(x){
    return function(y){
        return x+y;
    }
}
let f = fun1(2);

console.log(f(2));
