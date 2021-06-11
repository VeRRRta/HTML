import {data} from './info.js';

let productId = localStorage.getItem("id"),
    aboutProduct = document.querySelector(".about");

localStorage.removeItem("id");


data.forEach((el) => {
    if (el.id == productId) {
        aboutProduct.insertAdjacentHTML('beforeend', `
        <h2 class="about__title">${el.title}</h2>
        <div class="about__product">
            <p class="about__product_text">
                ${el.text}
            </p>
            <img src="${el.img}" alt="">
        </div>
        `);
    }
});