
// переход на servicec-block
$(document).ready(function () {
    $("a").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top; 
    });
});
