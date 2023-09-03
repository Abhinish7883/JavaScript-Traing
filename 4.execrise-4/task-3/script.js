let arr = [
    {
        firstName : "Mudit",
        lastName : "Bhaiya"
    },
    {
        firstName : "samrat",
        lastName : "jrlfkda"
    },
    {
        firstName : "jeetul",
        lastName : "sldls"
    },
    {
        firstName : "Aniket",
        lastName : "cdfjsfk"
    },
    {
        firstName : "bhavik",
        lastName : "cdjvfd"
    },
    {
        firstName : "aditya",
        lastName : "giri"
    },
    {
        firstName : "savan",
        lastName : "Bhaiya"
    },
    {
        firstName : "Ravindra",
        lastName : "Bhaiya"
    },
    {
        firstName : "Pradhuman",
        lastName : "bhaiya"
    }
]
// console.log(arr.length);

// input field div
let Inputfield = document.getElementById("inputField");

//addnitem div
const addTableDiv = document.getElementById("addItemTable");

// create table to add items:
let tbl = document.createElement("table")

//get input fields and buttons
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

let AddBtn = document.getElementById("Add-btn");// Add

let RenderBtn = document.getElementById("Render-btn");//Render


AddBtn.addEventListener('click', addItem);

function addItem(event)
{
    if(firstName.value.trim().length==0 ||lastName.value.trim().length==0 )
    {
        return alert("please Enter both value");
    }

    if(dublicate_cheak(firstName.value,lastName.value))
    {
        return alert("Already in list")
    }

    let obj = {};
    obj.firstName = firstName.value;
    obj.lastName=lastName.value;
    console.log(obj);
    arr = [...arr,obj]
    // console.log(arr.length);
    let tableRow = document.createElement("tr");
    // tableRow.setAttribute("margin","10px")
    tableRow.innerHTML = `<input type="text" value="${firstName.value}" disabled ><input type="text" value="${lastName.value}" disabled>
     <button class="btn btn-success" onclick="edit(this)">Edit</button> <button type = "button" class="btn btn-danger"onclick="Delete(this)">Delete</button>`

    tbl.appendChild(tableRow)
 
    firstName.value="";
    lastName.value="";

}

RenderBtn.addEventListener('click',render);

function render()
{
    // console.log(tbl.children) yha par dublicate value cheak karna hai.
    // for(const j of tbl.childNodes)
    // {
    for (const i of arr) {
        
    //  for()
    let tableRow = document.createElement("tr");
    // tableRow.setAttribute("margin","10px")
    tableRow.innerHTML = `<input type="text" value="${i.firstName}" disabled ><input type="text" value="${i.lastName}" disabled>
     <button class="btn btn-success" onclick="edit(this)">Edit</button> <button type = "button" class="btn btn-danger"onclick="Delete(this)">Delete</button>`

    tbl.appendChild(tableRow)
    }
    
}

function Delete(curelement)
{
    curelement.parentElement.remove()
}

function edit(curelement)
{
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

        if(dublicate_cheak(firstName.value,lastName.value))
    {
        return alert("Already in list")
    }


        a[0].value = firstName.value;
        a[1].value = lastName.value;
        Inputfield.replaceChild(AddBtn,update);

        firstName.value = "";
        lastName.value = "";

    });
}

// name dublicate cheak;
function dublicate_cheak(firstName,lastName)
{
    for (const i of arr) {
        
        if(i.firstName==firstName && i.lastName==lastName)
        {
            return true;
        }
        
    }
}

addTableDiv.appendChild(tbl);
tbl.setAttribute("border","2");


// console.log(addTableDiv.children);




