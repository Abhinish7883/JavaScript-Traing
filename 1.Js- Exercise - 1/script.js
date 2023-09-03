function p1()
{
    //task -1

    let line = 5;
    let pattern = ""
    for(let i=1;i<=line;i++)
    {
        for(let j=1;j<=line;j++)
        {
            if(i==j||j==line-i+1)
            {
                pattern+=("*");
            }
            else
            {
                pattern+=(" ");
            }
        }
        pattern+="\n"
    }
    
    console.log(pattern);
}

function p2() {

    let line=4;
    let pettern = "";

for(let row=0; row<line;row++)
{
    for(let col=0; col<line; col++)
    {
        if(row==0||row==line-1||col==0||col==line-1)
        {
            pettern+="*";
        }
        else
        {
            pettern+="&ensp;";
        }
    
    }
    pettern+="<br>";
}

document.write(pettern);
       
}

function p3(){
    // task - 3

    
    let line = 5 ;
    let pattern = "";
    let half = Math.floor(line/2)
    // console.log(half)
    for(let i=1;i<=line;i++)
    {
        for(let j=1;j<=line;j++)
        {
            if(i==j+half||i+half==j||i==(line-half+1)-j||(line-i+half+1)==j)
            {
                pattern+=("*");
            }
            else
            {
                pattern+=(" ");
            }
        }
        pattern+="\n"
    }
    
    console.log(pattern);
}

function p4(){
    //task - 4

    let line = 5 ;
let pattern = "";
let half = Math.floor(line/2)
// console.log(half)
for(let i=1;i<=line;i++)
{
    for(let j=1;j<=line;j++)
    {
        if(j<=i && j<=line-i+1 )
        {
            pattern+=("*");
        }
        else
        {
            pattern+=("2");
        }
    }
    pattern+="\n"
}

console.log(pattern);
    
}

function p5()
{
    // task - 5
    
let line = 9 ;
let pattern = "";
// let half = Math.floor(line/2)+1
// console.log(half)
for(let i=1;i<=line;i++)
{

    for(let j=1;j<=line;j++)
    {
        if((i<=j && j<=(line-i+1))||(((line-i+1)<=j)&&(j<=i)))
        {
            if(i%2==0)
            {
                
                if(j%2==0)
                {
                    pattern+=(j);
                }
                else
                {
                    pattern+=(" ");
                }
            }
            else
            {
                if(j%2==0)
                {
                    pattern+=(" ");
                }
                else
                {
                    pattern+=(j);
                }   
            }
            
        }
        else
        {
            pattern+=(" ");
        }
    }
    pattern+="\n"
}

console.log(pattern);
}


