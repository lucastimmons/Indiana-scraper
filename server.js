var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();


//This example will get all the questions from a Jeopardy game on j-archive.com. 
app.get('/scrape', function(req, res){

//THIS is the page you want to scrape. Set as arry so you can scrape multiple pages
var url = ['http://www.j-archive.com/showgame.php?game_id=3447'];
// This is where you will store the clues
var clues = [];
// This is where you will store the clue IDs
var clueids = [];

// This is the function that loads the page you are scrapting
function getQuestions(){	
	request(url[0], function (error, response, html) {
		// checks to make sure you connect properly
	  if (!error && response.statusCode == 200) {
		// turns the page's html into the variable $. Now you can use jquery to select what you want on the page. 
	    var $ = cheerio.load(html);	  
	    
	    // This finds all the items on the page with the class "clue_text".  
	    // Each clue has that class. The id is formatted as clue_J_COLUMN_QUESTION. So column 1, question 1 would be clue_J_1_1 and column 1 question 5 would be clue_J_1_5. The question text is stored as the text of the element. 
	      	    		
		// THIS IS WHERE YOU WOULD USE JQUERY SELECTORS (https://www.w3schools.com/jquery/jquery_ref_selectors.asp) TO PICK THE ITEMS YOU WANT OFF THE PAGE. 	      	    		
	      	    		
		 $('.clue_text').each(function(i, element){		 			 
			 // get the specifics for the clue at i. 
			 var theClueID = $(this).attr('id');
			 var theClue = $(this).text();	

			 // Push the clues to an array for storage
			 clueids.push(theClueID);
			 clues.push(theClue);	 
			 			 			 
		 })
		 // Now that all the clues are stored, time to print them. Careful where you put this. If you were to put it outside the request function it would fire before before the request function was done and you'd have no data!
		 print();
	  }
  	  
	});	

	
}


// This is the funtion that prints your clues. 
function print(){	
	// Create an object 	 	
	var thegame = {};
	// This joins our two arrats togehter into an object so that you get clueid: clue.	
	clueids.forEach((key, i) => thegame[key] = clues[i]);
		
	// Save it to a json file. 
	// Set the file name. 
    	var jsonout = "output.json";
    	// Write to file using json.stringify our object
	    	fs.writeFile(jsonout, JSON.stringify(thegame), function(err){
        	console.log('File successfully written! - Check your project directory for the output.json file');
        });
        
	// This logs the object to your console so you can see it.    
		console.log(JSON.stringify(thegame));	
	
	
}

// Start the app!
getQuestions();


})

app.listen('8081')
console.log('Open your browser to http://localhost:8081/scrape');
exports = module.exports = app;