let i = 0;
let j = 0;
let str = "";
let n = 5;
for(i=1;i<=n;i++)
{
    for(j=1;j<=n;j++)
    {
        if(j<i)
        str+=" ";
        else
        str+="* ";
    }
    str += "\n";
}
console.log(str);
