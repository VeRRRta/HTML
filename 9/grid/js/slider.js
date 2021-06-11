let btnPrev = document.querySelector(".slider__prev"),
    btnNext = document.querySelector(".slider__next"),
    slides = document.querySelectorAll(".slider__item");


let i = 0;

btnPrev.addEventListener("click", () => {
    slides[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = slides.length - 1;
    }

    slides[i].style.display = 'block';
});

btnNext.addEventListener("click", () => {
    slides[i].style.display = 'none';
    i++;
    if (i >= slides.length) {
        i = 0;
    }

    slides[i].style.display = 'block';
});


for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener("click", () => {
        let id = slides[i].getAttribute("id");
        localStorage.setItem("id", `${id}`);
    });
}
