import {get_product} from './data/singleProductData.js'

let quantity = 1;

function render_singleProduct_page() {
    let product = get_product();

    let thumbnailHtml = `<img class="product_thumbnail" src=${product.thumbnail}>`
    let smallImagesHtml = `<img class="small_images" src=${product.thumbnail}>`
    product.images.forEach((image_link)=>{
        smallImagesHtml += `
            <img class="small_images" src=${image_link}>
        `
    })

    document.querySelector('.box_small_images').innerHTML = smallImagesHtml;
    document.querySelector('.box_product_thumbnail').innerHTML = thumbnailHtml;
    document.querySelector('.component_name').innerHTML = `${product.category}`;
    document.querySelector('.js-show-quantity').innerHTML = quantity;
    document.querySelector('.product_name').innerHTML = `${product.title}`;
    document.querySelector('.product_description').innerHTML = `${product.description}`;
    document.querySelector('.small_images').classList.add('small_images_clicked');
    document.querySelector('.button_cart').classList.remove('button_sold_out');

    if (product.stock <= 0) {
        document.querySelector('.button_cart').classList.add('button_sold_out');
        document.querySelector('.button_cart').innerText = "SOLD OUT";
    }

    

    
    document.querySelectorAll('.small_images')
        .forEach((imgLink) => {
            imgLink.addEventListener('click', ()=>{
                document.querySelectorAll('.small_images')
                    .forEach((imgLink)=>{
                        imgLink.classList.remove('small_images_clicked');
                    })
                imgLink.classList.add('small_images_clicked');
                document.querySelector('.product_thumbnail').src = imgLink.src;
            })
        })
    
    document.querySelector('.js-add').addEventListener('click', ()=>{
        (quantity === 1000) ? alert('Quantity should not be grater than  1000'): quantity++; 
        document.querySelector('.js-show-quantity').innerHTML = quantity;
    })
    document.querySelector('.js-subtract').addEventListener('click', ()=>{
        (quantity === 1) ? alert('Quantity should not be less than  1'): quantity--;
        document.querySelector('.js-show-quantity').innerHTML = quantity; 
    })
}   

render_singleProduct_page();