var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function(create){
    // Make a request via axios to grab the HTML body from the site of your choice
axios.get("https://www.nytimes.com").then(function(response) {

    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(response.data);

    var results = [];
  
    $("article").each(function(i, element) {
      var headline = $(element)
      .find("a")
      .find("div")
      .find("h2")
      .text();
      var summary = $(element).find("div")
      .find("p").text();
      var link = $(element)
      .find("a")
      .attr("href");
    var fullLink = "https://www.nytimes.com/" + link;
      
      results.push({
        headline: headline,
        summary: summary,
        link: fullLink,
      });
    });
    create(results);
});
};

module.exports = scrape;
