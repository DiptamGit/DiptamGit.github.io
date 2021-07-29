$(document).ready(function () {

    const api_url = "https://diptam-spotify.herokuapp.com/";

    $("#search").click(function (e) {
        $.ajax({
            type: "GET",
            url: api_url,
            contentType: 'application/json',
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            success: function (response) {
                output = response;
                console.log(output)
            }
        });

    });

});


