let arr = [1,2,3,];
let arr1 = [3,4,5];

let InterSection =  arr.filter(function(data)
{
    return arr1.includes(data);
})

let difference = arr.filter(function(data)
{
    if(arr1.includes(data)==false)
    {
        return data
    }
})

let concat = arr.concat(arr1);
let union = [...new Set(concat)]

console.log(InterSection);
console.log(difference);
console.log(union);