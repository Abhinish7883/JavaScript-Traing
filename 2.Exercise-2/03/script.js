let arr =  [5,1,1,2,3,4,5,5,5,6,7,7,8,9];
 arr.sort();
let max_count=1;
let current_count=1;
let rev=arr[0];

for(let i=1;i<arr.length; i++)
{
    if(arr[i]==arr[i+1])
    {
        current_count++;
    }
    else
    {
        current_count=1;
    }

    if(current_count>max_count)
    {
        max_count=current_count;
        rev= arr[i+1];
    }
}
// console.log(max_count);
console.log(rev);