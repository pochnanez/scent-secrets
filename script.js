$(document).ready(function(){

    $(".accordion-header").click(function(){

        var content = $(this).next(".accordion-content");
        var symbol = $(this).find("span");

        $(".accordion-content").not(content).slideUp();
        $(".accordion-header span").not(symbol).text("+");

        content.slideToggle(200);

        symbol.text(symbol.text() === "+" ? "−" : "+");

    });

});

$(document).ready(function() {
    $("#contact-form").submit(function(e) {
        e.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let message = $("#message").val().trim();

        if(name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        $("#contact-form").hide();
        $("#form-success").fadeIn(300);
    });
});