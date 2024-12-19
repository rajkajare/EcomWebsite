import {products} from './products.js';

let category = localStorage.getItem('category') || "womens";

export function set_category(category) {
    localStorage.setItem('category', category);
}

export function get_category() {
    if (category === 'mens') {
        return products.mens;
    } else if (category === 'womens') {
        return products.womens;
    } else {
        return products.accessories;
    }
}