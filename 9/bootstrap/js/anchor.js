let anchor = document.getElementById("anchor"),
    anchorLink = document.getElementById("anchor__link");


anchor.addEventListener("click", () => {
    anchorLink.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});