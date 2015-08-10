window.onload = function () {
  document.getElementById('button').onclick = function (){
      var myTopics = ['Baby Names', 'Shows', 'Pranks', 'Ideas', 
'Dogs', 'Cats', 'Insults', 'Comebacks', "Your Mom Jokes", "Puns", "Inspirational Quotes", "Sentences"];
      var randomValue = myTopics[Math.floor(Math.random() * myTopics.length)];
     console.log(randomValue);
     var name = document.createElement("p");
     name.appendChild(randomValue);
     document.body.appendChild(name);
  }
}