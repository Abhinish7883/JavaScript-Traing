let arr = [ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ];
let input = +prompt("Enter the number: ", "")

function fillArray(arr,input)
{
    let arr2 = [];
    for( let i in arr)
    {
        if(i%input==0)
            arr2.push(arr[i]);
    }
    return arr2;
}

if(input===0)
{
    console.log(arr);
}
else{
    console.log(fillArray(arr,input));
}

