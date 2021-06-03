let n = 5;
let i=0;
let str ="";
function pattern(){
for(i=1;i<=n;i++)
{
    for(let j=1;j<=n;j++)
    {
        if(j<=n-i)
        str +=" ";
        else
        str+="* ";
    }
    str +="\n";
}
}
pattern();
console.log(str);
