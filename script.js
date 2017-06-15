
//document.getElementById("neg")
//document.getElementById("dot")
//document.getElementById("result")

var content = "0";
var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operator");
var i;

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
        document.getElementById("display").innerHTML = content;
    }
}

for (i = 0; i < operators.length; i++) {
    operators[i].onclick = function() {
        if (content != "0") {
            content = removeLastOperator(content);
            content = content + this.innerHTML;
        }
        document.getElementById("display").innerHTML = content;
    }
}

document.getElementById("clear").onclick = function(){
    content = "0";
    document.getElementById("display").innerHTML = content;
}