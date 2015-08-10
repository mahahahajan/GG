window.onload = function () {
  var myTopics = ['Baby Names', 'Shows', 'Pranks', 'Ideas',
'Dogs', 'Cats', 'Insults', 'Comebacks', "Your Mom Jokes", "Puns", "Inspirational Quotes", "Sentences", "Songs"];
  var randomValue = myTopics[Math.floor(Math.random() * myTopics.length)];
 console.log(randomValue);
 var name = document.createElement("h1");
 name.innerHTML = randomValue;
 document.body.appendChild(name);

 var generate = document.createElement("p");

 document.body.appendChild(generate);

 //do if statements
  document.getElementById('button').onclick = function (){

    //Baby Names
    if(randomValue == "Baby Names"){
      var myNames = ['Alex', 'Jamie', 'Marvin', 'Hurricane', 'Barney', 'Ted', 'Lily', 'Robin', 'Marshall'];
      var randomName = myNames[Math.floor(Math.random() * myNames.length)];
     console.log(randomName);
     generate.innerHTML = randomName;
    }
    //Shows
    if(randomValue == "Shows"){
      var myShows = ['Psych', 'How I Met Your Mother', 'Mr.Robot', 'Silicon Valley', 'Arrow', 'Flash', 'Agents of SHIELD', 'Goldbergs', 'Blackish'];
      var randomShow = myShows[Math.floor(Math.random() * myShows.length)];
     console.log(randomShow);
     generate.innerHTML = randomShow;
    }
    //Pranks
    if(randomValue == "Pranks"){
      var myPranks = ['Psych', 'How I Met Your Mother', 'Mr.Robot', 'Silicon Valley', 'Arrow', 'Flash', 'Agents of SHIELD', 'Goldbergs', 'Blackish'];
      var randomPrank = myPranks[Math.floor(Math.random() * myPranks.length)];
     console.log(randomShow);
     generate.innerHTML = randomPrank;
    }
    //Ideas
    {
      if(randomValue == "Ideas"){
        var myIdeas = ['USB Belt', 'Wrist Keyboard', 'Chain Mail Texter', 'Text Message Game', 'Online Chat', 'Game of speed'];
        var randomIdea = myIdeas[Math.floor(Math.random() * myIdeas.length)];
       console.log(randomShow);
       generate.innerHTML = randomIdea;
      }
    }
  }
}
