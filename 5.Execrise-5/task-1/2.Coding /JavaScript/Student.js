let ram = document.getElementById('Courses')
let course=JSON.parse(localStorage.getItem('Course'))
let userNameDetail = JSON.parse(localStorage.getItem('Student'))
// console.log(userNameDetail);
let StudentUserName = sessionStorage.getItem('username');
function  onload()
{
   
    userNameDetail.forEach(ele => {
        if(ele.Email==StudentUserName)
        {
            obj=ele;
        }
        
    });

    let StudentName = document.getElementById("user");
    StudentName.textContent=obj.name;

    AddAll();
}
// for logout 
function logout()
{
    sessionStorage.removeItem('username');
    location.replace("../html/login.html")
}

function AddAll()
{
    let abb =JSON.parse(localStorage.getItem('AllAdd'))
    let a;
    if(abb==null)
    {
        let h3 = document.createElement('h3');
        h3.innerHTML='No Courses Assigned';
        ram.appendChild(h3);
    }
    abb.forEach(ele => {
        if(ele.id==StudentUserName)
        {
            a=ele;
        }

    })

    a.courses.forEach(ele => {
        card(ele);
    })
}
//


function card(ele)
{
    
    course.forEach(ele1 => {
        if(ele1.CourseId==ele)
        {
            let div = document.createElement('div');
            div.setAttribute("class", "card");
            div.style.width='18rem';

            div.innerHTML = `<img src="../img/HTML.jpg" class="card-img-top" alt="...">
             <div class="card-body">
                <h5 class="card-title">${ele1.CourseName}</h5>
                <div class="d-flex flex-row m">
                    <button type="button" class="btn btn-success mr-2">View course</button>
                </div>
             </div>`
    ram.appendChild(div);
        }
    })
    
}