# jQuery Kendo Message

A simple jQuery plugin that displays info and error messages.

[![Build status](https://rummellwebsolutions.visualstudio.com/kendo.message/_apis/build/status/kendo.message-CI)](https://rummellwebsolutions.visualstudio.com/kendo.message/_build/latest?definitionId=1)

You can install with npm:

    > npm i kendo.message

## Usage

### Options
All options are optional.

| option | values | default | description |
|--------|--------|---------|-------------|
| message  | any text or html | inner html of the matched element | the message |
| type     | info, error | info | the type of message |
| dismiss  | true, false | true | if true, "Click to dismiss" is appended to the message and clicking it will hide the message |

### Methods

| method | arguments | description |
|--------|-----------|-------------|
| show | none | shows the message |
| hide | none | hides the message |
| options | options | changes the options |
| destroy | none | restores the matched element to the state it was in before the message plugin was applied |

### Examples

    <script type="text/javascript">
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
    </script>
    <div id="message1">Here's an info message.</div>
    <div id="message2">Here's an error message.</div>
    <div id="message3"></div>
    <div id="message4">Here's an info message without dismiss.</div>
    <div>
        <div id="message5">Click the following button to change this to an error.</div>
        <button id="message5-button">Change to Error</button>
    </div>
    <div>
        <div id="message6">Click the following buttons to show or hide.</div>
        <button id="message6-hide">Hide</button>
        <button id="message6-show">Show</button>
    </div>

[Demo](https://unpkg.com/kendo.message/demo/index.html)
