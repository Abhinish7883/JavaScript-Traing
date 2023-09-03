let n = prompt("Enter the value of n:", '');
let arr = [0,1,2,3,4,5,6,7,8,9];

function task1(n)
{
    let a = arr.slice(0,n);

    let b =  arr.slice(-n);

    console.log(`starting n element : ${a} and end n element of  array: ${b} `);
    
}

task1(n);