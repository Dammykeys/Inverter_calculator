//Sidenav Button
(function ($) {
    $(function () {
        $('.sidenav').sidenav();
        $('.parallax').parallax();
    }); // end of document ready
})(jQuery); // end of jQuery name space


//Floating action button
$(document).ready(function () {
    $('.fixed-action-btn').floatingActionButton();
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}


//Modal
$(document).ready(function () {
    $('.modal').modal();
});


//Collapsible list
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, true);
});

$(document).ready(function () {
    $('select').formSelect();
});