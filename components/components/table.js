class Table extends BaseClass{
    
    render() {
        super.render(this.componentRenderer)
    }
    componentRenderer() {
        const table = document.createElement('table');
        tableData.forEach(data => {
            const tr = document.createElement('tr');
            const cellData = [
                {text:data.productName},
                {text:data.category},
                {id :data.productName}
            ];
            cellData.forEach(data => {
                const childElement = document.createElement('td');
                if(data.id){
                    const deleteElement = document.createElement("button")
                    deleteElement.textContent = "delete";
                    deleteElement.setAttribute("id",'ok')
                    childElement.appendChild(deleteElement);
                }else{
                    childElement.textContent = data.text;
                }
                
                tr.append(childElement);
            })
            table.append(tr)
        });
        return table;
    }

}
