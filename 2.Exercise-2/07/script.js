let date  = prompt("date:","")



let a = [];

if (date.includes("-"))

    a = (date.split('-'));

else if (date.includes("/"))

    a = (date.split('/'));

else

    a = (date.split(' '));





let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


console.log(month[(+a[1])-1]);

 