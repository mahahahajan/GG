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
 'Insults', 'Comebacks', 'Your Mom Jokes', 'Puns', 'Inspirational Quotes', 'Songs'];
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
      var myShows = ['Psych', 'How I Met Your Mother', 'Mr.Robot', 'Silicon Valley', 'Arrow', 'Flash', 'Agents of SHIELD', 'Goldbergs', 'Blackish', 'The Fosters'];
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
    //Comebacks
    if(randomValue == "Comebacks"){
      var myComebacks = ['We got a problem? Solve it', 'Too bad', 'No one cares', 'I could eat alphabet soup and crap out something better than that', 'Were you born near a freeway? Cause thats where most accidents happen', 'Congrats, you smarter than a rock', 'Oh no, you have hurt my feelings.', 'Takes one to know one'];
      var randomComeback = myComebacks[Math.floor(Math.random() * myComebacks.length)];
     console.log(randomComeback);
     generate.innerHTML = randomComeback;
    }
    //Your Mom Jokes
    if(randomValue == "Your Mom Jokes"){
      var myUrMomJokes = ['Yo momma is so fat, I took a picture of her last Christmas and it still printing.', 'Yo momma is so fat when she got on the scale it said, "I need your weight not your phone number."', 'Yo momma is so fat that when she went to the beach a whale swam up and sang, "We are family, even though you"re fatter than me."', 'Yo mamma is so ugly when she tried to join an ugly contest they said, "Sorry, no professionals."', 'Yo momma so fat and old when God said', '"Let there be light," he asked your mother to move out of the way.'];
      var randomMomJoke = myUrMomJokes[Math.floor(Math.random() * myUrMomJokes.length)];
     console.log(randomMomJoke);
     generate.innerHTML = randomMomJoke;
    }
    //Puns
    if(randomValue == "Puns"){
      var myPuns = ['Orange you glad...', 'Lettuce go....', 'What do you call a alligator in a vest? An investigator', 'I"m emotionally constipated. I haven"t given a shit in days.', 'I can"t believe I got fired from the calendar factory. All I did was take a day off.', 'How did I escape Iraq? Iran.', 'What was Forrest Gumps email password? "1forrest1"', 'Why was Cinderella thrown off the basketball team? She ran away from the ball.', 'For Sale: Parachute. Only used once, never opened.'];
      var randomPun = myPuns[Math.floor(Math.random() * myPuns.length)];
     console.log(randomPun);
     generate.innerHTML = randomPun;
    }
    //Quotes
    if(randomValue == "Inspirational Quotes"){
      var myQuotes = ['Just Do It', 'Don"t let your dreams be dreams', 'Don"t do tomorrow what you can do today', 'Try to be a rainbow in someone cloud.', 'Don"t Stop Believing', 'Live in the Hall of Fame', 'Success is 10 percent inspiration and 90 percent perspiration.', 'Build your own dreams, or someone else will hire you to build theirs', 'The best revenge is massive success.'];
      var randomQuote = myQuotes[Math.floor(Math.random() * myQuotes.length)];
     console.log(randomQuote);
     generate.innerHTML = randomQuote;
    }
    //Songs
    //Insults
    if(randomValue == "Songs"){
      var mySongs = ['Stand By Me', 'Count on me', 'Grenade', 'The A Team', 'Thinking out Loud', 'Demons', 'Warriors', 'Radioactive', 'Centuries', 'Immortals'];
      var randomSong = mySongs[Math.floor(Math.random() * mySongs.length)];
     console.log(randomSong);
     generate.innerHTML = randomSong;
    }
  }
}
