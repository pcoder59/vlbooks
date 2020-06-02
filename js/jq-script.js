$(document).ready(function() {
    $(".card").hover(function() {
        $(this).css("box-shadow", "5px 10px");
        $(this).css("cursor", "pointer")
    }, function() {
        $(this).css("box-shadow", "None");
    });
    $(".card").on("click", function() {
        category = $(this).text();
        alert(category);
    });
})