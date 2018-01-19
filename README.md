Basic-Indiana-scraper
================

Simple web scraper template. It scrapes http://www.in.gov/itp/2406.htm.  You'll need to know Jquery selectors to make this work. 


* Make sure you have node set up first. That is important. 

* Put these files into a directory. Open your terminal window to that directory. 

* Install your dependencies by running (in your terminal): `npm install`

* Open `server.js` and change what you want to. Save the file

* You shoud change the "TheUrls" array to include the URLs you want to scrape. In this case: 

http://www.in.gov/apps/gov/salaries/?searchPerformed=true&firstName=&lastName=&agency=ADMINISTRATION&max=25,

http://www.in.gov/apps/gov/salaries/?searchPerformed=true&firstName=&lastName=&agency=ADMINISTRATION&offset=25&max=25

* etc

* In your terminal run: node `server.js`

* Open your browser and navigate to `http://localhost:8081/scrape`

* Go back to your console  


##About the license

This is distributed under the MIT License, and developed by [Lucas Timmons](http://github.com/lucastimmons). [Read more about the MIT License](https://tldrlegal.com/license/mit-license).# Basic-web-scraper
