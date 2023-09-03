const forms = document.getElementById("RegistrationForm")
const name1 = document.getElementById("userName");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");
const cpassword = document.getElementById("userPasswordConform") ;
const user =  document.getElementsByName("user");
console.log(name1);
function formCheak()
{
    if(forms.checkValidity()) {
        formCheakError();
    } 
}
function formCheakError()
{
    if(name1.value.trim().length<=0||email.value.trim().length<=0||password.value.trim().length<=0||cpassword.value.trim().length<=0)
    {
        alert('Empty field Available..')
    }
    else
    {
        if(password.value!=cpassword.value)
        {
            showError('error')
        }
        else
        {
            Registration()
        }
    }   
}
function Registration()
{
    let obj = {};
    obj.name = name1.value;
    obj.Email = email.value;
    obj.password = password.value;
    obj.user = findUserTypefromRadioBotton(user)
    if(obj.user=='Admin')
    {        
        storeUserInfoTolocalStorage(obj,'Admin');    
    }
    else
    {
        storeUserInfoTolocalStorage(obj,'Student');
    }
}
function showError(IdOfError)
{
    let error = document.getElementById(`${IdOfError}`)
    const p = document.createElement("p")
    p.textContent="password and conform password must be same";
    p.style.color='red';
    error.replaceWith(p);            
}
function findUserTypefromRadioBotton(user)
{
    for(let i of user)
    {
        if(i.checked==true)
        {
            return i.value;
        }
    }
}
function storeUserInfoTolocalStorage(obj,userType)
{
    let userData = [];
    let existing = JSON.parse(localStorage.getItem(`${userType}`))
        
    if(existing==null)
    {
        userData.push(obj);
        localStorage.setItem(`${userType}`,JSON.stringify(userData));
        location.replace('login.html')
    }
    else
    {
        if(existing.find(ele => ele.Email==obj.Email))
        {
            alert("The user already Exist")
        }
        else
        {
            existing.forEach(ele => userData.push(ele));   
            userData.push(obj);
            localStorage.setItem(`${userType}`,JSON.stringify(userData));
            location.replace('login.html')
        }
            
    }
}