// keypress support

var buttons = [];
buttons[96] = document.getElementById('zero');
buttons[97] = document.getElementById('one');
buttons[98] = document.getElementById('two');
buttons[99] = document.getElementById('three');
buttons[100] = document.getElementById('four');
buttons[101] = document.getElementById('five');
buttons[102] = document.getElementById('six');
buttons[103] = document.getElementById('seven');
buttons[104] = document.getElementById('eight');
buttons[105] = document.getElementById('nine');
buttons[110] = document.getElementById('decimal');
buttons[107] = document.getElementById('plus');
buttons[109] = document.getElementById('minus');
buttons[111] = document.getElementById('divide');
buttons[106] = document.getElementById('by');
buttons[13] = document.getElementById('equal');
buttons[27] = document.getElementById('clear');

window.onload = function() {
    window.onkeyup = function(event) {
        var pressed = event.which || event.keyCode;
        console.log('pressed: ' + pressed);

        buttons[pressed].click();
    };
};

function takeValue(x) {
    document.getElementById('inputwindow').value += x.value;
}

function clearInput() {
    document.getElementById('inputwindow').value = '';
}

function calculateResult() {
    var result = eval(document.getElementById('inputwindow').value);
    document.getElementById('inputwindow').value = result;
}