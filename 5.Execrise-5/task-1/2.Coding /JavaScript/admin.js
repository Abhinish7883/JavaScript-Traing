// let arr = JSON.parse(localStorage.getItem('AllAdd'));
// if(!arr)
// {
//     localStorage.setItem('AllAdd', JSON.stringify([]))
// }

let courses = document.getElementById("Course_detail");

let Course = [
    {
        CourseId : 'HTML',
        CourseName:'HTML'
    },
    {
        CourseId : 'CSS',
        CourseName:'CSS'
    },
    {
        CourseId : 'JS',
        CourseName:'JS'
    }
]

let userNameDetail = JSON.parse(localStorage.getItem('Admin'))
function  onload()
{
    let adminUserName = sessionStorage.getItem('username');
    userNameDetail.forEach(ele => {
        if(ele.Email==adminUserName)
        {
            obj=ele;
        }
    });
    let AdminName = document.getElementById("user");
    AdminName.textContent=obj.name;
/// render courses:

    let CoursesLS = JSON.parse(localStorage.getItem('Course'));
    console.log(CoursesLS);

    if(CoursesLS==null||CoursesLS.length==0)
    {
        Course.forEach(ele => {

            let div = document.createElement('div');
             div.setAttribute("class", "card");
            div.style.width='18rem';
    
            div.innerHTML=`<img src="../img/HTML.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 id ="${ele.CourseId}"class="card-title">${ele.CourseName}</h5>
                <div >
                <button type="button" onclick="addAll(this)"class="btn btn-success mb-2">Assign All</button>
                <button type="button" onclick="AllRemove(this)" class="btn btn-danger mb-2">REMOVE All</button>
                <button type="button" onclick = "Remove(this)" class="btn btn-danger mb-2">Remove Courses</button>
                </div>
              </div>`
              console.log('dfbretg');
    
            courses.appendChild(div);   
        })

        localStorage.setItem('Course',JSON.stringify(Course));


        
        
    }
    else
    {
        CoursesLS.forEach(ele => {

            let div = document.createElement('div');
             div.setAttribute("class", "card");
            div.style.width='18rem';
    
            div.innerHTML=`<img src="../img/HTML.jpg"  class="card-img-top" alt="...">
              <div class="card-body">
                <h5 id ="${ele.CourseId}"class="card-title">${ele.CourseName}</h5>
                <div >
                  <button type="button" onclick="addAll(this)"class="btn btn-success mb-2">Assign All</button>
                  <button type="button" onclick="AllRemove(this)" class="btn btn-danger mb-2">REMOVE All</button>
                  <button type="button" onclick = "Remove(this)" class="btn btn-danger mb-2">Remove Courses</button>
                </div>
              </div>`
    
            courses.appendChild(div);   
        })
       
    }
    
}
// for logout 
function logout()
{
    sessionStorage.removeItem('username');
    location.replace("../html/login.html")
}
// creating new courses
function CreateNewCourse()
{
    
    
    let courseName = String(prompt("Enter new Course name ","Python")).trim();
    console.log(courseName);
    if(courseName.length==0)
    {
        alert('Course name in formate')
    }
    else
    {
        let obj = {};
         
        obj.CourseId = courseName;
        obj.CourseName = courseName;
        let existing = JSON.parse(localStorage.getItem('Course'));
        
        Course.push(obj);
    
            if(existing.find(ele =>ele.CourseId==courseName))
            {
                alert('Course already in list !');
            }
            else
            {
                existing.push(obj);
                localStorage.setItem('Course',JSON.stringify(existing));

                let div = document.createElement('div');
                div.setAttribute("class", "card");
            
                div.style.width='18rem';

                div.innerHTML=`<img src="../img/HTML.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 id ="${courseName}"class="card-title">${courseName}</h5>
                    <div >
                        <button type="button" onclick="addAll(this)"class="btn btn-success mb-2">Assign All</button>
                        <button type="button" onclick="AllRemove(this)" class="btn btn-danger mb-2">REMOVE All</button>
                        <button type="button" onclick = "Remove(this)" class="btn btn-danger">Remove Courses</button>
                    </div>
                </div>`

                courses.appendChild(div);  
            }
                 
            
    }
    
        
}

// add couses to all user //

let Arr= [];
function addAll(curelement)
{
    let id = curelement.parentElement.previousElementSibling.id;
    
    let AllStudent = JSON.parse(localStorage.getItem('Student'))

    let AllAdd1 = JSON.parse(localStorage.getItem('AllAdd'))
        
    console.log(AllAdd1);
    if(AllAdd1==null)
    {
        let Arr1 = [];
        AllStudent.forEach(ele => {
            let obj = {};
            obj.id = ele.Email;
            let Arr = [];
            Arr.push(id);
            obj.courses=Arr;
            
            Arr1.push(obj)

        })
        localStorage.setItem('AllAdd', JSON.stringify(Arr1))
    }
    else{
        AllStudent.forEach(ele => {
            let flag = false;
            AllAdd1.forEach(ele1=>{
                if(ele1.id==ele.Email)
                {
                    flag=true;
                    
                    if(!(ele1.courses.includes(id)))
                    {
                        ele1.courses.push(id);
                    }
                }
    
            })
    
            if(flag==false)
            {
                    let obj = {};
                    obj.id = ele.Email;
                    let a = [];
                    a.push(id);
                    obj.courses=a;
                    AllAdd1.push(obj);
            }
    
        })
        localStorage.setItem('AllAdd', JSON.stringify(AllAdd1))
    } 
}

function AllRemove(curelement)
{
    let id = curelement.parentElement.previousElementSibling.id;
    console.log(id);
    let AllAdd1 = JSON.parse(localStorage.getItem('AllAdd'));

    AllAdd1.forEach(ele => {
        console.log(ele);
        if(ele.courses.includes(id))
        {
            let index = ele.courses.indexOf(id);
            ele.courses.splice(index,1);
        }
    })
    localStorage.setItem('AllAdd', JSON.stringify(AllAdd1))
}


function Remove(curElement)
{
    let CoursesLS = JSON.parse(localStorage.getItem('Course'));
    console.log(CoursesLS);
    let ab = curElement.parentElement.parentElement.parentElement;
    ab.remove()
     let C_Id = curElement.parentElement.parentElement.firstElementChild.id

    let a = CoursesLS.find(e => C_Id==e.CourseId)
    console.log(a);
    let index = CoursesLS.indexOf(a);
    CoursesLS.splice(index,1);
    console.log(CoursesLS);
    localStorage.setItem('Course',JSON.stringify(CoursesLS));

    /// remove that courses from AllAdd
    AllRemove(curElement);
     
}