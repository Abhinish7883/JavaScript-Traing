
let Inputfield = document.getElementById("inputField");

let tbl = document.createElement("table")

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");


let selectAllCheck=document.getElementById("select-All")

let AddBtn = document.getElementById("Add-btn");

AddBtn.addEventListener('click',addItem);


function Delete(curelement)
{
    curelement.parentElement.remove()
}

function edit(curelement)
{
    const a = curelement.parentElement.children;

    // console.log(a);
    // the value current element goes to input field.

    firstName.value  = a[1].value;
    lastName.value = a[2].value;
    // create update button
    let update = document.createElement("button");
    update.textContent = "Update";
    Inputfield.replaceChild(update,AddBtn);
    ///event on update button
    update.addEventListener("click", ()=>{
        a[1].value = firstName.value;
        a[2].value = lastName.value;
        Inputfield.replaceChild(AddBtn,update);

        firstName.value = "";
        lastName.value = "";

    });
}

function addItem()
{
    if(firstName.value.trim().length==0 ||lastName.value.trim().length==0 )
    {
        return alert("please Enter both value");
    }
    let tableRow = document.createElement("tr");
    // tableRow.setAttribute("margin","10px")
    tableRow.innerHTML = `<input class="row-check" onclick="countvalue()" type="checkbox" id="select-All" name="" value="checked"> <input type="text" value="${firstName.value}" disabled ><input type="text" value="${lastName.value}" disabled>
     <button class="btn btn-success" onclick="edit(this)">Edit</button> <button type = "button" class="btn btn-danger"onclick="Delete(this)">Delete</button>`

    tbl.appendChild(tableRow)
 
    firstName.value="";
    lastName.value="";

}
// countvalue();
/////////////////////////============

function selectAll()
{
    
   
 let a = tbl.children;   
    if(selectAllCheck.checked==true)
    {
        for (const i of a) {
            let cd=i.firstChild;
                cd.checked=true;
         }
    }
    else{

        for (const i of a) {
            let cd=i.firstChild;
                cd.checked=false;

         }
    }

    countvalue();
}

function deleteAll()
{
                      
        // let b = tbl.children;
        let x = document.querySelectorAll('input[class=row-check]:checked')
        // console.log(x);
        x.forEach((e)=>{
            e.parentElement.remove();
        })
     
     countvalue();
     selectAllCheck.checked=false;
}

function countvalue()
{
     let count = document.getElementsByClassName("row-check");

    let a=0;

    for(const i of count)
    {
        if(i.checked==true)
        {
            a++;
        }
    }

        let cnt = document.getElementById("count")
        cnt.innerHTML= a;    

}
 

const cnt = document.getElementById("count");
//  
const addTableDiv = document.getElementById("addItemTable");

addTableDiv.appendChild(tbl);
tbl.setAttribute("border","2");

// console.log(addTableDiv.children);