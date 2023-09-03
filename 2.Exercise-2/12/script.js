let inputString =  String(prompt("Enter String: ", ""));
let inputLength = Number(prompt("string chop length ", ""));
let arr = [], k=0;

function string_chop(inputString,inputLength)
{
    if(inputLength<=0)
    {
        console.log(inputString); ;            
    }
    else{

        for(let i=0; i<inputString.length;i+=inputLength)
        {
            arr[k] = inputString.slice(i,i+inputLength);
            k++;
        }
    
        return arr;
    }
    
}
string_chop(inputString,inputLength)
let s = arr.join();
console.log(s);