window.onload = function() {
  var color = '#'; // hexadecimal starting symbol
  var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; //Set your colors here
  color += letters[Math.floor(Math.random() * letters.length)];
 document.body.style.background = color;
}

function changeBackground() {
    var color = getRandomColor();
   document.body.style.background = color;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
