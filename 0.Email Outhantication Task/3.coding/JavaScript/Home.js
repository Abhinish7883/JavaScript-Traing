
function load(){
    let token = location.hash.split("&")[1].split("=")[1];

fetch("https://www.googleapis.com/oauth2/v3/userinfo",{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
   .then(data => data.json())
    .then((info) => {
            console.log(info);
            userName.textContent=info['name']
    })



}

function logout(){

    let userName = document.getElementById("userName")
    fetch("https://oauth2.googleapis.com/revoke?token="+ token,{
        method: 'POST',
        heders:{
            'content-type':'application/x-www-form-urlencoded'
        }
    })
    .then((data)=>{
        location.href ="http://127.0.0.1:5501/2.%20JavaScripts/0.Email%20Outhantication%20Task/3.coding/html/login.html" 
    })
}        