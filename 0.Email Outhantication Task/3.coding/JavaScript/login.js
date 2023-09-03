function login(){
    console.log("ok");
    let oauth2EndPoint ="https://accounts.google.com/o/oauth2/v2/auth";
    
    let form = document.createElement('form');
    form.setAttribute('method',"GET");
    form.setAttribute("action",oauth2EndPoint);

    let paramerter = {
         
        "response_type":"token",
        "client_id":'453094089891-sm12dhv461o0ntphe65vjn7henncgfil.apps.googleusercontent.com',
        "redirect_uri":"http://127.0.0.1:5501/2.%20JavaScripts/0.Email%20Outhantication%20Task/3.coding/html/Home.html",
        "scope":"https://www.googleapis.com/auth/userinfo.profile  https://www.googleapis.com/auth/userinfo.email",
        'state':"pass-through-value",
        'include_granted_scopes':"true"
    }

    for(let a in paramerter)
    {
        let input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute('name', a)
        input.setAttribute("value",paramerter[a]);
        form.appendChild(input);
    }
    document.body.appendChild(form);
    form.submit();

}