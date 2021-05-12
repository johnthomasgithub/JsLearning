let first = "john";
let last = "thomas";
let person ={
    firstname: first,
    lastname: last
};
// console.log(person.firstname+" "+person.lastname);

function createPerson(firstname,lastname)
{
    let name = firstname +" "+ lastname;
    return {firstname,lastname,name};
}

let p = createPerson("john","thomas");
console.log(p.firstname);
console.log(p.lastname);
console.log(p.name);