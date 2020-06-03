$(document).ready(function() {
    $(".card").hover(function() {
        $(this).css("box-shadow", "5px 10px");
        $(this).css("cursor", "pointer")
    }, function() {
        $(this).css("box-shadow", "None");
    });
    $(".card").on("click", function() {
        category = $(this).text();
        $.ajax({
            type: "post",
            url: "/get-category.php",
            data: {
                category: category
            },
            dataType: "JSON",
            success: function(response) {
                alert(response);
            }
        });
    });
})