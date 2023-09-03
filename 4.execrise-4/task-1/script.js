
 
 
 setInterval(dateTime,1000);
 
 function dateTime()
 {
    let idTime  = document.getElementById('time');
    let idDate =  document.getElementById('date')
    let now = new Date();
    let currentTime = now.getHours()+":"+now.getMinutes()+":"+now.getSeconds(); 

    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    let currentDate = now.getDate()+" "+month[now.getMonth()]+" "+now.getFullYear() ;     
    idTime.textContent =  currentTime;
    idDate.textContent = currentDate;
 }


 let h = 0;
 let m = 0;
 let s = 0;
 let count=0;

let timer = false;


   document.getElementById("stop").disabled = true;
   document.getElementById("resume").disabled = true;
   document.getElementById("reset").disabled = true;


function start(){
   timer=true;
   stopWatch();
   
   document.getElementById("resume").disabled=true;
   document.getElementById("reset").disabled=false;
   document.getElementById("stop").disabled=false;
   document.getElementById("start").disabled=true;  

 }
function stop()
{
   timer = false;
   // enabled disabled
   document.getElementById("start").disabled=true;
   document.getElementById("resume").disabled=false;
}
function resume()
{
   timer=true;
   stopWatch();

}
function reset()
{
   timer= false;
   count=0
   s=0;
   m=0;
   h=0;
   document.getElementById("hour").innerHTML="00";
   document.getElementById("minute").innerHTML="00";
   document.getElementById("second").innerHTML = "00";
   document.getElementById("count").innerHTML = "00";
    
   // Enable and disable
   document.getElementById("start").disabled=false;
   document.getElementById("stop").disabled = true;
   document.getElementById("resume").disabled = true;
   document.getElementById("reset").disabled = true;


}

function stopWatch()
{
   
   if(timer==true)
   {
      count+=1;

      if(count==99)
      {
         s+=1;
         count=59;

         if(s==59)
         {
            m+=1;
            s=0;
            if(m==59)
            {
               h+=1;
               m=0;
            }
         }
      }
      document.getElementById("hour").innerHTML=h;
      document.getElementById("minute").innerHTML=m;
      document.getElementById("second").innerHTML = s;
      document.getElementById("count").innerHTML = count;

      // setTimeout("stopWatch()",10)
   }

   
}
setInterval("stopWatch()",20);