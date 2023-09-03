let static_array = [  {name:  "Jack" , age : 23}, {name:  "Sam" , age : 12},  {name:  "Max" , age : 20} ];
let Delete =[];
let Insert = [];
let deleteIndex = 2;
let InsertIndex = 3;

for(let i in static_array)
{
    Delete[i]=static_array[i];
    Insert[i]=static_array[i];
}

Delete.splice(deleteIndex,1);
console.log(Delete);

// console.log(static_array);
// let insert = static_array;
Insert.splice(InsertIndex,0,{name:"Denial",age:56});
console.log(Insert);