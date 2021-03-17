const open = document.querySelectorAll('.accordion-question-container');

open.forEach(element => {
    element.addEventListener('click' ,() => {
        element.classList.toggle("active");
        element.nextElementSibling.classList.toggle("show");
    });
});