
function clickAlertBox(){
    const alertbtn = document.getElementById('alertbtnId')
    let box1 = document.getElementById('box1');
        box1.innerHTML = `1<br> Click me First!`;
        ChangeColorInBox2()
        alertbtn.disabled=true;
}

function ChangeColorInBox2()
{
    let box2Color = ["red","blue","green"];
    let box2 = document.getElementById('box2');
        let count = 0;
        setInterval(()=>{
            box2.style=`background-color:${box2Color[count]}`;
            count++;
            if(count===3)
            {
                count = 0;
            }
        },3000)     
}

function ClickBox1()
{
    let box1 = document.getElementById('box1');
    let box3 = document.getElementById("box3");
        box3.innerHTML = `3<br> Oops something wrong?`;
        ChangeColorInBox4();
        box1.disabled=true;

}

function ChangeColorInBox4()
{
    let box4Color = ["red","blue","green","yellow","black"];
    let box4 = document.getElementById('box4');
        let count = 0;
        setInterval(()=>{            
            box4.style=`background-color:${box4Color[count]}`;
            count++;
            if(count===5)
            {
                count = 0;
            }
        },5000) ;

        document.body.addEventListener('keydown', function(event){
            const key = event.key;
            if(key=="ArrowLeft"||key=="ArrowUp"){
                box4.style=`background-color:${box4Color[count]}`;
                if(count==0)
                {
                    count=4;
                }
                else{
                    count--;
                } 
            }
            else
            {
                box4.style=`background-color:${box4Color[count]}`; 
                if(count===4)
                {
                    count=0;
                }
                else{
                    count++;
                } 
            }
             
        });    
}




