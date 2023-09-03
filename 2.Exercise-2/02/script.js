let n = String(prompt("number : ", " "))

let ab = "";

for( let i=0; i<n.length; i++)
{
    if(n[i]%2==0 && n[i+1]%2==0)
    {
        ab+=n[i]+'-';
    }
    else{
        ab+=n[i];
    }
}

console.log(ab);