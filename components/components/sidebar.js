class SideBar extends BaseClass {
    render() {
        super.render(this.componentRenderer.bind(this));
    }

    componentRenderer() {
        console.log('c');
        const ul = document.createElement('ul');
        this.getCategoryData().forEach(category => {
            const li = document.createElement('li');
            li.innerText = category.name + ' ' + category.count;
            ul.append(li);
        });
        return ul;
    }
    getCategoryData() {
        const categories = [];
        let productCategory = new Set();
       tableData.forEach(product=>{
        productCategory.add(product.category) 
       })
       productCategory.forEach(category=>{
            let count=0;
            tableData.forEach(productCategory=>{
                if(productCategory.category==category){
                    count++; 
                }
            })
            categories.push({
                name:category,
                count:count
            })
       })
        return categories;
    }

}


