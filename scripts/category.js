import {get_category} from '../scripts/data/categoryData.js'






function render_category_page() {
    let productGridHtml = "";
    let products = get_category();
    products.forEach((product)=>{
        productGridHtml += `
            <div class="product_container">
                <div class="box_product_thumbnail">
                    <a href="product.html">
                        <img class="product_thumbnail" src=${product.thumbnail}>
                    </a>
                </div>
                <div class="box_product_details">
                    <div class="box_product_name">
                        <p class="basic">New!</p>
                        <p class="product_name">${product.title}</p>
                    </div>
                    <div class="box_product_price">
                        <p class="basic">Rs. ${product.price}</p>
                    </div>
                </div>
            </div>
        `
    })
    document.querySelector('.products_grid').innerHTML = productGridHtml;
}

render_category_page();