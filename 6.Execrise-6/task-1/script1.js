let nodechange = '01001020';
let parentNode = "0101";

let noOfslabel = 5;
let noOfNode = [1,2,11,10,5];
let treeNodes =  [];
let everyLabelsNode = [[],[],[],[],[]];

let root = {
        id : '01',
        tag : "hello",
        domain_id :"01",
        parent_id: null,
        decription:"this is the label-0 in tree nodes"
}
everyLabelsNode[0].push(root);
treeNodes.push(root)
for(let i=0;i<4;i++)
{
    if(noOfNode[i]>noOfNode[i+1])
    {
        for(let j=0;j<noOfNode[i+1];j++)
        {
            createNode(everyLabelsNode[i][j],1,i); 
        }        
     } 
     else 
     {
        let j=0;
        for(j=0;j<everyLabelsNode[i].length;j++)
        {
          createNode(everyLabelsNode[i][j],Math.floor(noOfNode[i+1]/noOfNode[i]),i);     
        }
        if(noOfNode[i+1]%noOfNode[i]>0)
        {
            for(j=0;j<noOfNode[i+1]%noOfNode[i];j++)
            {
             createNode(everyLabelsNode[i][j],1,i);     
                
            }
        }
     }  
}
function createNode(parentNode,noOfChild,label)
{
    for(let i=0;i<noOfChild;i++)
    {
        let obj = {};
        obj.id = `${parentNode.id}${label}${i}`;
        obj.tag = "hello";
        obj.domain_id = root.id,
        obj.parent_id= parentNode.id,
        obj.decription= `this is the labelin tree nodes`;
        treeNodes.push(obj);
        everyLabelsNode[label+1].push(obj);  
    }
}
console.log(treeNodes);

// change node 
for(let i=0;i<treeNodes.length;i++)
{
    if(treeNodes[i].id===nodechange)
    {
        treeNodes[i].parent_id = '0101';
        break;
        
    }
}

console.log(treeNodes);