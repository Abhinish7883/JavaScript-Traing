let arr=[{

    Name:  'Ravindra',
  
    Sports: ['Chess', 'Cricket'],
  
    },
    
  {
    Name: 'Ravi',
  
    Sports: ['Cricket', 'Football'],
  
  },
  
  {
  
    Name:'Rishabh',
  
    Sports: ['Table-Tennis', 'Football'],
  
  },]

  let arr1 =[];

  for(let i of arr)
  {
     for(let j of i.Sports)
     {
        if(!arr1.includes(j))
        {
            arr1.push(j);
        }
     }
  }

  let brr = [];

for(let j of arr1)
{
  let obj = {};
  let a=[];
  for(let i of arr)
  {
    if(i.Sports.includes(j))
    {
       a.push(i.Name); 
    }
  }
  obj[j]=a;

  brr.push(obj);
}
console.log(brr);
