const tableData = [
    {productName:'a', category:'a1'},
    {productName:'b', category:'a1'},
    {productName:'c', category:'a2'},
    {productName:'d', category:'a3'},
    {productName:'e', category:'a3'},
];
class BaseClass {
    constructor(id){
        this.element = document.getElementById(id);
       
    }
    render(renderFun) {
        const childElement = renderFun()
        this.element.innerHTML = '';
        this.element.append(childElement);
        console.log(childElement);
    }
    
    listenEvent(){
        console.log("okkk")
    }
}