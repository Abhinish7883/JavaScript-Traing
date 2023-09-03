
let Inputfield = document.getElementById("inputField");
let tbl = document.createElement("table")

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

let AddBtn = document.getElementById("Add-btn");

AddBtn.addEventListener('click',addItem);

function Delete(curelement)
{
    curelement.parentElement.remove()
}

function edit(curelement)
{
    console.log(curelement);
    const a = curelement.parentElement.children;

    // console.log(a);
    // the value current element goes to input field.

    firstName.value  = a[0].value;
    lastName.value = a[1].value;
    // create update button
    let update = document.createElement("button");
    update.textContent = "Update";
    Inputfield.replaceChild(update,AddBtn);
    ///event on update button
    update.addEventListener("click", ()=>{
        a[0].value = firstName.value;
        a[1].value = lastName.value;
        Inputfield.replaceChild(AddBtn,update);

        firstName.value = "";
        lastName.value = "";

    });
}

function addItem(event)
{
    if(firstName.value.trim().length==0 ||lastName.value.trim().length==0 )
    {
        return alert("please Enter both value");
    }
    let tableRow = document.createElement("tr");
    // tableRow.setAttribute("margin","10px")
    tableRow.innerHTML = `<input type="text" value="${firstName.value}" disabled ><input type="text" value="${lastName.value}" disabled>
     <button class="btn btn-success" onclick="edit(this)">Edit</button> <button type = "button" class="btn btn-danger"onclick="Delete(this)">Delete</button>`

    tbl.appendChild(tableRow)
 
    firstName.value="";
    lastName.value="";

}

const addTableDiv = document.getElementById("addItemTable");

addTableDiv.appendChild(tbl);
tbl.setAttribute("border","2");

// console.log(addTableDiv.children);