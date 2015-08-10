window.onload = function () {
  var myTopics = ['Baby Names', 'Shows', 'Pranks', 'Ideas',
'Dogs', 'Cats', 'Insults', 'Comebacks', "Your Mom Jokes", "Puns", "Inspirational Quotes", "Sentences", "Songs"];
  var randomValue = myTopics[Math.floor(Math.random() * myTopics.length)];
 console.log(randomValue);
 var name = document.createElement("p");
 name.innerHTML = randomValue;
 document.body.appendChild(name);

  document.getElementById('button').onclick = function (){
    if(randomValue == "Baby Names"){
      var myNames = ['Alex', 'Jamie', 'Marvin', 'Hurricane', 'Barney', 'Ted', 'Lily', 'Robin', 'Marshall'];
      var randomName = myNames[Math.floor(Math.random() * myNames.length)];
     console.log(randomName);
     name.innerHTML = randomName;
    }
  }
}
