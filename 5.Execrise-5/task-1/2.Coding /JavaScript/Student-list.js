let AllStudent = JSON.parse(localStorage.getItem('Student'));
let AllCourse = JSON.parse(localStorage.getItem('Course'));
let Student = document.getElementById("Student-list-Id");

let allAdd = JSON.parse(localStorage.getItem('AllAdd'));

function load() {
    let id = 0;
    if(AllStudent){
        AllStudent.forEach(ele1 => {

            Student.innerHTML += `
            
            <div class="accordion" id="accordion${id}">
                <div class="card">
                    <div class="card-header">
                        
                            <button class="btn btn-link" id = ${ele1.Email} type="button" data-toggle="collapse" data-target="#collapse${id}" ">
                                ${ele1.name}
                            </button>
                    
                    </div>
    
                    <div id="collapse${id}"  class="collapse" data-parent="#accordion${id}">
                        <div class="card-body">
                            <table class ="table${id}" id="table${id}" border="1" style="width:50%">`
             
                                    AllCourse.forEach(ele =>{
                                        let a = 
                                            `<tr id="tr${id}">
                                                <td id = ${ele.CourseId}>${ele.CourseName}</td>
                                                <td id="td">`
                                                    const cur = allAdd.find((e) => {
                                                        return e.id == ele1.Email;
                                                    })
                                                    if (cur) 
                                                    {
                                                        if (cur.courses.includes(ele.CourseId)) 
                                                        {
                                                            a += `<button type="button" id = "Remove" onclick = "Remove(this)" class="btn btn-danger">Remove</button>`;
                                                        }
                                                        else 
                                                        {
                                                             a += `<button type="button" id = "Add" onclick = "Add(this)" class="btn btn-success">Add</button>`;
                                                        }
                                                    }
                                                    else 
                                                    {
                                                        a += '<button type="button" id = "Add" onclick = "Add(this)" class="btn btn-success">Add</button>';
                                                    }
                                                a +=`</td> 
                                            </tr>`
    
                            document.getElementById(`table${id}`).innerHTML += a;
                        });
                        `</table>
                    </div>
                </div>
            </div>
        </div>`;
    
            id++;
             
        });

    }
    else{

        Student.innerHTML='No Student Available.....'
    }
    
}


function Add(curElement)
{
    let courseId = curElement.parentElement.previousElementSibling.id
    let studentId = curElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.id;
    let allAdd = JSON.parse(localStorage.getItem('AllAdd'));
    let obj = allAdd.find(e => {
        return e.id==studentId;
    });
    console.log(obj)
    if(obj)
    {
        if(!(obj.courses.includes(courseId)))
        {
            console.log(obj.courses);
         obj.courses.push(courseId);
        }
        console.log(allAdd);
        localStorage.setItem('AllAdd', JSON.stringify(allAdd))
    }
    else{

        console.log('ok');
        let arr = [];
        let obj ={};
        obj.id = studentId;
        let brr = []
        brr.push(courseId)
        obj.courses=brr;
        arr.push(obj);
        localStorage.setItem('AllAdd', JSON.stringify(arr));

    }


    // Create  Remove button
    let a = curElement.parentElement;
    let remove =  document.createElement("button");
    remove.setAttribute('type',"button")
    remove.setAttribute('class','btn btn-danger')
    remove.setAttribute('id',"Remove")
    remove.setAttribute('onclick','Remove(this)')
    
    remove.textContent = "Remove";
    a.replaceChild(remove,curElement);
     
    // remove.addEventListener("click", ()=>{

    //     Remove(remove);
    // })
    
}    

function Remove(curElement)
{
    let allAdd = JSON.parse(localStorage.getItem('AllAdd'));
    console.log(curElement);
    let courseId = curElement.parentElement.previousElementSibling.id
    let studentId= curElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.id;
    console.log(studentId);
    console.log(courseId);
    console.log(allAdd)
    let obj = allAdd.find(e => {
        return e.id==studentId;
    });
    console.log(obj);
    if((obj.courses.includes(courseId)))
    {
        console.log(obj);
        let index = obj.courses.indexOf(courseId);
        obj.courses.splice(index,1);
    }
     
    localStorage.setItem('AllAdd', JSON.stringify(allAdd))   
    
    let a = curElement.parentElement;
    let add =  document.createElement("button");
    add.setAttribute('type',"button")
    add.setAttribute('class','btn btn-success')
    add.setAttribute('id',"Add")
    add.setAttribute('onclick','Add(this)')
    
    add.textContent = "Add";
    a.replaceChild(add,curElement);
     
}