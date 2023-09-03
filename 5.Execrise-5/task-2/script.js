
function searchName(){

    const nameListArray=['Ashish Shah',"Rashmin Chhatrala","Yash Dubey","Prakash Jain","Yashraj Singh","Viraj Sinha","Rajesh Kumar","Mahesh Marwadi","Suresh Sahni","Amar Vilas","Virdas Singhania","Rajeshwari Bindra","Birendra Bhalerao","Virendra Bhupati","Bhupendra Singh","Bhuvam Bam","Shri Raj","Prashant Kamle","Kamlesh Tomar","Risabh Khare","Rishi Kohli","Kunwar Kharwanda","Kartik Koli","Komal Jain","Kartikey Pandey"];
    const inputBoxValue = document.getElementById('inputBox').value.trim();
     
    const  tableInHtml = document.getElementById('table')
    let table = document.createElement('table');
    table.setAttribute('id','table');
    if(inputBoxValue.length>1)
    {
        nameListArray.forEach(name => {
            // let pattern = /(?i)ash/gm;
            let pattern = new RegExp (inputBoxValue,"gi")
            if(name.match(pattern))
            {
                let splitedNameValue = name.split(pattern);
                let newName= splitedNameValue[0]+`<span class="nameListColor">${inputBoxValue}</span>`+splitedNameValue[1];
                let row = document.createElement('tr');
                row.innerHTML=`<td>${newName}</td>`;
                table.appendChild(row)
            }
        })
        tableInHtml.replaceWith(table);
    }
    else
    {
        tableInHtml.replaceWith(table);
    }
    
}

 