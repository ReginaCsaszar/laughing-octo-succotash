var content = "0";
var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operator");
var float = false;
var i;

var display = function(chars) {
// handle content printing to display
    if (chars.length > 25) {
        info = chars.slice(-25);
    }
    else {
        info = chars;
    }
    document.getElementById("display").innerHTML = info;
}

var checkOperator = function(chars) {
// check if last char is operator
    var operatorArray = ["%", "÷", "x", "-", "+", "."];
    var lastChar = chars.slice(-1);
    if (operatorArray.indexOf(lastChar) != -1) {
        return true;
    }
    return false;
}

for (i = 0; i < numbers.length; i++) {
// handle number buttons
    numbers[i].onclick = function() {
        if (content == "0") {
            content = "";
        }
        content = content + this.innerHTML;
        if (content == "00") {
        content = "0";
        }
        display(content);
    }
}

for (i = 0; i < operators.length; i++) {
// handle operator buttons
    operators[i].onclick = function() {
        if (checkOperator(content)) {
            content = content.slice(0, -1);
        }
        content = content + this.innerHTML;
        float = false;
        display(content);
    }
}

document.getElementById("dot").onclick = function(){
// handle dot button
    if (!float) {
        if (checkOperator(content)) {
            content = content + "0";
        }
        content = content + ".";
        float = true;
    }
    display(content);
}

document.getElementById("undo").onclick = function(){
// handle CE button
    if (content.slice(-1) == ".") {
        float = false;
    }
    content = content.slice(0, -1);
    if (content == "") {
        content = "0";
    }
    display(content);
}

document.getElementById("clear").onclick = function(){
// handle C button
    content = "0";
    float = false;
    display(content);
}

document.getElementById("result").onclick = function(){
// handle = button
    if (checkOperator(content)) {
            content = content.slice(0, -1);
    }
    var result = content.replace(/x/g, '*').replace(/÷/g, '/');
    result = eval(result);
    content = String(result);
    if (!content.includes(".")) {
        float = false;
    }
    if (content == "NaN" || content == "Infinity" ) {
        content = "0";
        result = "ERROR";
        display(result);
    }
    else {
        display(content);
    }
}

// thank you for reading :)
