$(document).ready(function () {
    $("#message1").kendoMessage();
    $("#message2").kendoMessage({ type: "error" });
    $("#message3").kendoMessage({ type: "info", message: "Here's an info message with dynamic content." });
    $("#message4").kendoMessage({ dismiss: false });
    $("#message5").kendoMessage();
    $("#message6").kendoMessage({ dismiss: false });

    $("#message5-button").click(function () {
        $("#message5").kendoMessage("options", { type: "error", message: "This is now an error message." });
    });

    $("#message6-hide").click(function () {
        $("#message6").kendoMessage("hide");
    });

    $("#message6-show").click(function () {
        $("#message6").kendoMessage("show");
    });

    $(".info-message").kendoMessage();

    $("button").addClass("k-button");

    $("fieldset").addClass("k-widget");
});
