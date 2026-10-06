

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("active");
});


е

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        nav.classList.remove("active");
    });

});




const moreButtons = document.querySelectorAll(".more-button");

moreButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "Спасибо за интерес! Для получения подробной информации свяжитесь с ServicePro."
        );

    });

});




const contactButton =
    document.getElementById("contactButton");

contactButton.addEventListener("click", function () {

    alert(
        "Позвоните нам: +996 666 666 666"
    );

});