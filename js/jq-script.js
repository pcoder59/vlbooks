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
                len = response.length;
                for (i = 0; i < len; i++) {
                    bookid = response[i].bookid;
                    bookname = response[i].bookname;
                    author = response[i].author;
                    categories = response[i].categories;
                    category_display = "<div class='media'>" +
                        "<div class='media-left'>" +
                        "<img src='/Images/Books/" + bookid + "'>" +
                        "</div>" +
                        "<div class='media-body'>" +
                        "<a href='/Books/book.html?bookid=" + bookid + "'><h2 class='media-heading'>" + bookname + "</h2></a>" +
                        "<p>By " + author + "</p>" +
                        "<p>Categories: ";
                    for (category in categories) {
                        category_display += categories[category] + " ";
                    }
                    category_display += "</div>" +
                        "</div>";
                    $("#selectedCategory").html(category_display);
                }
                $("#cdisplay").css("display", "block");
            }
        });
    });
    $("#displayBack").on("click", function() {
        $("#cdisplay").css("display", "none");
    });
})