$(document).ready(function() {
    $("#registrationForm").on("submit", function(e) {
        e.preventDefault(); // Prevent default form submission
        
        $.ajax({
            type: "POST",
            url: "submit.php",
            data: $(this).serialize(),
            success: function(response) {
                $("#result").html(response);
                $("#registrationForm")[0].reset();
            },
            error: function() {
                $("#result").html("<p style='color: red;'>Error processing your request. Please try again.</p>");
            }
        });
    });
});
