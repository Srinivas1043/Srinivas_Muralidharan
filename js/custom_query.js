var text_name;
var css_color_text;

$("#HumanBeing").hover(function() {
        text_name = $(this).text();
        $(this).text("#HumanBeing");


    },
    function() {
        $(this).text(text_name);
    });


$("#HumanBeing span").hover(function() {

        css_color_text = $(this).css("color");
        $(this).css("color", "#2a4891");
    },
    function() {
        $(this).css("color", css_color_text);
    }
)