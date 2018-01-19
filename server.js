var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();


app.get('/scrape', function(req, res){

//THIS is the page you want to scrape. Set as arry so you can scrape multiple pages
var TheUrls = ["http://www.in.gov/apps/gov/salaries/?searchPerformed=true&firstName=&lastName=&agency=ADMINISTRATION&max=25","http://www.in.gov/apps/gov/salaries/?searchPerformed=true&firstName=&lastName=&agency=ADMINISTRATION&offset=25&max=25"];

// This is where you will store the entries
var output = "";


// This is the function that loads the page you are scrapting
		function getData(x){	
			request(x, function (error, response, html) {
				// checks to make sure you connect properly
			  if (!error && response.statusCode == 200) {
				// turns the page's html into the variable $. Now you can use jquery to select what you want on the page. 
			    var $ = cheerio.load(html);	  	      	    	
			    			      		
				// THIS IS WHERE YOU WOULD USE JQUERY SELECTORS (https://www.w3schools.com/jquery/jquery_ref_selectors.asp) TO PICK THE ITEMS YOU WANT OFF THE PAGE. 	      	    		
			      	    		
				 $('.list tbody tr').each(function(i, element){					 
					$(this).find('td').each (function() {					  
					  var addme = $(this).html() + ",";
					  output += addme;
					});   	
					output +="\n"
					console.log(output);
					output = ""; 			 			 
				 })

			  }
			});	
		
			
		}


// Run through your list of URLs
	for(i=0; i<TheUrls.length; i++){
		getData(TheUrls[i]);	
	}



})

app.listen('8081')
console.log('Open your browser to http://localhost:8081/scrape');
exports = module.exports = app;
