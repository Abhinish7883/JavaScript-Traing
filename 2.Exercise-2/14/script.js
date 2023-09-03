let arr = [  
    { id:1,name: "Edward", age: 21 },
    { id:2,name: "Sharpe", age: 12 },
    { id:3,name: "And", age: 45 },
    { id:4,name: "The", age: 12 },
    { id:5,name: "Magnetic", age: 13 },
    { id:6,name: "Zeros", age: 37 },
];
// let age = [];
// let na = [];
// for(let i in arr)
// {
//     age[i]=arr[i];
//     na[i]=arr[i];
// }

// console.log(age.sort((a, b) => a.age - b.age));

//  console.log(na.sort((a,b)=>{
//     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA > nameB) {
//       return -1;
//     }
//     if (nameA < nameB) {
//       return 1;
//     }
//     return 0;
// }));

console.log(arr);
function comp(a,b)
{
  // let a;
  if(a.age === b.age)
  {
      return(b.name.charCodeAt(0)-a.name.charCodeAt(0))
  }
  else 
  {
    return a.age - b.age;
  }

}

console.log(arr.sort(comp));