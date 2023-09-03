let inputString = prompt("Enter number: ", "");
console.log(inputString);
let arr1=[];
for(let i = 1;i<=inputString.length;i++)
{
    if(i%3==0)
    {
        arr1.unshift(inputString.at(-i));
        arr1.unshift(",");
    }
    else{
        arr1.unshift(inputString.at(-i));
    }
    // console.log(inputString.at(-i));
}
if(arr1.length%4==0)
{
    arr1.shift();
}

console.log(arr1.join(''));