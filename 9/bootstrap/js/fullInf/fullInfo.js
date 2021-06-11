import {
    data
} from './info.js';

let productId = localStorage.getItem("id"),
    aboutProduct = document.querySelector(".about");

localStorage.removeItem("id");


data.forEach((el) => {
    if (el.id == productId) {
        aboutProduct.insertAdjacentHTML('beforeend', `
        <h2 class="about__title">${el.title}</h2>
        <div class="about__product">
            <div class="row m-0">
                <div class="col-md-10 p-0">
                    <p class="about__product_text">
                        ${el.text}
                    </p>
                </div>
                <div class="col-md-2 p-0">
                    <img src="${el.img}" alt="">
                </div>
            </div>
        </div>
        `);
    }
});