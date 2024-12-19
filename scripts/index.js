import {set_category} from '../scripts/data/categoryData.js'

document.querySelector('.mens').addEventListener('click', ()=>{
    set_category('mens');
})

document.querySelector('.womens').addEventListener('click', ()=>{
    set_category('womens');
})

document.querySelector('.accessories').addEventListener('click', ()=>{
    set_category('accessories');
})