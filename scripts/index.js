import {set_category} from '../scripts/data/categoryData.js'

document.querySelector('.mens').addEventListener('click', ()=>{
    set_category("MEN'S");
})

document.querySelector('.womens').addEventListener('click', ()=>{
    set_category("WOMEN'S");
})

document.querySelector('.accessories').addEventListener('click', ()=>{
    set_category('ACCESSORIES');
})