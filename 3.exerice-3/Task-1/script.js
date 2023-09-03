 
// let email = prompt("Please Enter your E-mail id:", "");

// // Q.1
// function emailValidation(email)
// {
//     let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     if(emailRegex.test(email))
//     {
//         // alert("valid e-mail");
//         emailAuthentication(email);
//     }
//     else{
//         alert("Invalid e-mail! ");
//     }
// }

// emailValidation(email);

// // Q.2

// function emailAuthentication(email)
// {
//     let arr = email.split("@");

//     let b=arr[0].slice(2,arr[0].length-1)
//     let c  = "";
//     for(let i of b)
//     {
//         c+=i.replace(i,"*");
//     }
//     // console.log(c)
//     let a=arr[0].replace(b,c) ; 
//     // console.log(a);

//     alert(a+"@"+arr[1])
// }

// Q.3

// let a = prompt("text:-","");

// let pattern = a.replace(/<\/?[^>]+(>|$)/g, "");

// console.log(pattern);


// Q.4

let row =  +prompt("row:","");
let col = +prompt("colom:","")

function generateTable() {
    
    const tbl = document.createElement("table");
        // creating all cells
    for (let i = 0; i < row; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < col; j++) {

        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      tbl.appendChild(row);
    }
  
     
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "2");
}

generateTable(row, col);