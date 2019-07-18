var header = $("#heading");
console.log("File loaded");
header.css('color','red');
header.css('background','black');
var list1 = $(".list");
console.log(list1.text());
list1.css('background','cyan');

var button = $("#btn");
button.on('click',Function(){
    console.log("clicked");

)};

var inputText = $("#inp");
var output = $("#output");
console.log(output);
inputText.on('Keyup', function(){
    var value = $(this).val();
    output.html(value);
)};
