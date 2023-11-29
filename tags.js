src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
var searchTags = [
    "HTML",
    "CSS",
    "PHP",
    "JavaScript",
    "Python",
    "Java",
    "iOS",
    "Swift",
    "React",
    "Web Design",
    "Web Development"
];

$(document).ready(function () {
    $("#searchInput").autocomplete({
        source: searchTags,
        appendTo: "#autocomplete-container", // Add an ID to the container div
        open: function(event, ui) {
            // Apply custom styles to the autocomplete dropdown
            $(".ui-autocomplete").css("background-color", "white");
            $(".ui-autocomplete").css("border", "1px solid #ccc");
        }
    });
});
$(document).ready(function () {
    
    // Initial online status
    var isOnline = true;

    // Toggle function
    function toggleOnlineStatus() {
        if (isOnline) {
            // Change to offline status
            $("#avatar").css("background-color", "grey");
        } else {
            // Change to online status
            $("#avatar").css("background-color", "green");
        }
        // Toggle status
        isOnline = !isOnline;
    }

    // Add click event listener to the avatar
    $("#avatar").on("click", function () {
        toggleOnlineStatus();
    });
    $('[data-bs-toggle="tooltip"]').tooltip();
});


