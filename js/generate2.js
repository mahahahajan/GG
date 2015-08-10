window.onload = function () {
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
	changeBackground();
  var myTopics = ['Baby Names', 'Shows', 'Pranks', 'Ideas',
 'Insults', 'Comebacks', "Your Mom Jokes", "Puns", "Inspirational Quotes", "Sentences", "Songs"];
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
     console.log(randomPrank);
     generate.innerHTML = randomPrank;
    }
    //Ideas
      if(randomValue == "Ideas"){
        var myIdeas = ['USB Belt', 'Wrist Keyboard', 'Chain Mail Texter', 'Text Message Game', 'Online Chat', 'Game of speed'];
        var randomIdea = myIdeas[Math.floor(Math.random() * myIdeas.length)];
       console.log(randomIdea);
       generate.innerHTML = randomIdea;
      }
    //Insults
    if(randomValue == "Insults"){
      var myInsults = ['You are dumb', 'Idiot', 'Fatty', 'Stupid', 'Shorty', 'You are such a Gary', 'Ugly', 'Loser', 'Retarded'];
      var randomInsult = myInsults[Math.floor(Math.random() * myInsults.length)];
     console.log(randomInsult);
     generate.innerHTML = randomInsult;
    }
    if(randomValue == "Insults"){
      var myInsults = ['You are dumb', 'Idiot', 'Fatty', 'Stupid', 'Shorty', 'You are such a Gary', 'Ugly', 'Loser', 'Retarded'];
      var randomInsult = myInsults[Math.floor(Math.random() * myInsults.length)];
     console.log(randomInsult);
     generate.innerHTML = randomInsult;
    }
  }
}
