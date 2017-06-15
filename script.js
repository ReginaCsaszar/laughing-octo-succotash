
//document.getElementById("neg")
//document.getElementById("dot")
//document.getElementById("result")

var content = "0";
var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operator");
var i;

var display = function(info) {
    if (info.length > 25) {
        info = info.slice(-25);
    }
    document.getElementById("display").innerHTML = info;
};

var removeLastOperator = function(chars) {
    var operatorArray = ["%", "÷", "x", "-", "+"];
    var lastChar = chars.slice(-1);
    if (operatorArray.indexOf(lastChar) != -1) {
        chars = chars.slice(0, -1);
    }
    return chars;
};

for (i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function() {
        if (content === "0") {
            content = "";
        }
        content = content + this.innerHTML;
        if (content === "00") {
            content = "0";
        }
        display(content);
    }
}

for (i = 0; i < operators.length; i++) {
    operators[i].onclick = function() {
        if (content != "0") {
            content = removeLastOperator(content);
            content = content + this.innerHTML;
        }
        display(content);
    }
}

document.getElementById("clear").onclick = function(){
    content = "0";
    display(content);
}