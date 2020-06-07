$(document).ready(function() {
    pageurl = $(location).attr("href");
    pageurl = pageurl.split('?');
    pageurl_toparse = pageurl[1].split('=');
    bookid = pageurl_toparse[1];
    $.ajax({
        type: "POST",
        url: "get-book.php",
        data: {
            bookid: bookid
        },
        dataType: "JSON",
        success: function(response) {
            if (response == "0") {
                category_display = "<div class='alert alert-danger text-center'>" +
                    "<p>Sorry Something Went Wrong!</p>" +
                    "</div>";
                $("#selectedCategory").html(category_display);
            } else {
                len = response.length;
                for (i = 0; i < len; i++) {
                    article = response[i].article;
                    bookname = response[i].bookname;
                    author = response[i].author;
                    categories = response[i].categories;
                    publisher = response[i].publisher;
                    published = response[i].published;
                    category_display = "<div class='media'>" +
                        "<div class='media-left'>" +
                        "<img src='/vlbooks/Images/Books/" + bookid + "'>" +
                        "</div>" +
                        "<div class='media-body'>" +
                        "<h2 class='media-heading'>" + bookname + "</h2>" +
                        "<p>By " + author + "</p>" +
                        "<p>Publisher: " + publisher + "</p>" +
                        "<p>Published On: " + published + "</p>" +
                        "<p>Categories: ";
                    for (category in categories) {
                        category_display += categories[category] + " ";
                    }
                    category_display += "</div>" +
                        "</div>";
                    $("#selectedCategory").html(category_display);
                }
                display_article = "<div>";
                article = article.split("\r");
                for (i = 0; i < article.length; i++) {
                    display_article += "<p>" + article[i] + "</p>";
                }
                display_article += "</div>";
                $("#selectedCategory").append(display_article);
            }
        }
    });
})
