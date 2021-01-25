/*==== Preloader Js ====*/
$(document).ready(function () {
    $(".preloader").delay(350).fadeOut(1000, "linear");
    $(".preloader_status").fadeOut(1000, "linear");
});

/*==== Cursore Js ====*/
let mouseCursor = document.querySelector(".cursor");
let navLink = document.querySelectorAll("a");

window.addEventListener('mousemove', cursor);

function cursor(e) {
    document.querySelector(".cursor").style.top = e.pageY + 'px';
    document.querySelector(".cursor").style.left = e.pageX + 'px';
}
navLink.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link_grow");
    });

    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link_grow");
    });
});
/*==== Skill Bar Js ====*/
var lang = {
    "photograpy": "80%",
    "graphics": "70%",
    "webdesign": "95%",
    "development": "70%",
    "seo": "50%",
    "marketing": "60%",
};
var multiply = 4;

$.each(lang, function (language, pourcent) {

    var delay = 700;

    setTimeout(function () {
        $('#' + language + '-pourcent').html(pourcent);
    }, delay * multiply);

    multiply++;

});




/*==== Counter Js ====*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 700
    });
});



$(document).ready(function () {

    /*==== Nav_link Active Js ====*/
    $('.my_nav_link').click(function () {
        $('.my_nav_link').removeClass("active");
        $(this).addClass("active");
    });

    $("a").click(function () {
        $(".my_navbar").removeClass("my_navmobile_show")
        $(".bar_2").toggleClass("d-none")
        $(".bar_1").toggleClass("bar_1_rotated")
        $(".bar_3").toggleClass("bar_3_rotated")
    })
    $(".nav_toggle").click(function () {
        $(".my_navbar").toggleClass("my_navmobile_show")
        $(".bar_2").toggleClass("d-none")
        $(".bar_1").toggleClass("bar_1_rotated")
        $(".bar_3").toggleClass("bar_3_rotated")
    });
});

$(document).ready(function () {
    $('.image-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });
});