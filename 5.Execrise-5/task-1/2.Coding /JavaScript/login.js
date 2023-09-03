let forms = document.getElementById("LoginForm");
let email = document.getElementById("userEmail")
let password = document.getElementById("userPassword")
let user =  document.getElementsByName("user");
//
function formCheak()
{
    if(forms.checkValidity()) {
        login();
    } 
}

function login()
{
    for(let i of user)
    {
        if(i.checked==true)
        {
            userType = i.value;
        }
    }
     let obj;
    if(userType=='Admin')
    {
        let arr = JSON.parse(localStorage.getItem(userType)); 
        console.log(arr); 
        if(arr)
        {
            arr.forEach(ele=>{
                console.log(ele);
                if(ele.Email==email.value)
                {
                    obj=ele;
                }
            })
        }
        // else{
        //     alert('User not Registered..')
        // }
        
    }
    else
    {
        let arr = JSON.parse(localStorage.getItem(userType)); 
        if(arr){
            arr.forEach(ele=>{

                if(ele.Email==email.value)
                {
                    obj=ele;
                }
            })
        }   
    }

    if(obj==null)
    {
        alert("Invalid User.");
    }
     else if(obj.password==password.value)
     {
        if(obj.user=='Admin')
        {
            console.log('Admin login');
            sessionStorage.setItem('username',email.value);
            location.replace("../html/AdminDashboard.html")
        }
        else
        {
            console.log('Student login')
            sessionStorage.setItem('username',email.value);
            location.replace("../html/StudentDashBoard.html")
        }
        
     }
     else
     {
        let error = document.getElementById('error')
        let p = document.createElement("p")
        p.textContent="Invalid Password!";
        p.style.color='red';
        error.replaceWith(p);
     }
}