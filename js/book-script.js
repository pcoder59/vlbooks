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

        }
    });
})