let str = "This is a sample string";

let input = prompt("Input position: ", '');

let inputString = prompt("Input String :-",' ');

function insert1(input=1, inputString)
{
    let a = str.slice(0,input-1) + inputString + str.slice(input-1);

    return a;
}

if(input<=0)
{
    alert("Please Enter correct position. ")
}
else
{
    console.log(insert1(input,inputString));
}

