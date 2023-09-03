let staticArray = [
    {
        id          : "0_1",
        tag         : "Hello",
        parent_id   : null,
        domain_id   : "domain_0",
        description : "this is the label-0 in tree lik structure",
    },
    {
        id          : "1_0",
        tag         : "Hello",
        parent_id   : "0_1",
        domain_id   : "domain_0",
        description : "this is the label-1 in tree lik structure",
        children    : []
    },
    {
        id          : "1_1",
        tag         : "Hello",
        parent_id   : "0_1",
        domain_id   : "domain_0",
        description : "this is the label-1 in tree lik structure",
        children    : []
    },
    {
        id          : "2_0",
        tag         : "Hello",
        parent_id   : "1_0",
        domain_id   : "domain_0",
        description : "this is the label-2 in tree lik structure",
        children    : []
    },
    {
        id          : "2_1",
        tag         : "Hello",
        parent_id   : "1_0",
        domain_id   : "domain_0",
        description : "this is the label-2 in tree lik structure",
        children    : []
    }
    ,{
        id          : "2_2",
        tag         : "Hello",
        parent_id   : "1_1",
        domain_id   : "domain_0",
        description : "this is the label-2 in tree lik structure",
        children    : []
    }
    ,{
        id          : "2_3",
        tag         : "Hello",
        parent_id   : "1_1",
        domain_id   : "domain_0",
        description : "this is the label-2 in tree lik structure",
        children    : []
    }
]


function CreateTree(treeNode)
{
    let tree =[];

   

    treeNode.forEach( node => {
        if(node.parent_id==null)
        {
            tree.push(node);
            
        }         
    });

    tree.forEach(ele=>{
        build(treeNode,ele);
    })

    return tree;
}

function build(staticArray, node)
{
     

    staticArray.forEach((ele =>{

        if(ele.parent_id==node.id)
        {
            node.children.push(ele);
        }
    }))

    if(node.children.length>0)
        {
            node.children.forEach(ele=>{
                build(staticArray,ele);
            })
        }
        else
        {
            return node;
        }
}


console.log(CreateTree(staticArray));

