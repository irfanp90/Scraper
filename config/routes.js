var scrape =require("../scripts/scrape");

var headlinesController = require("../controllers/headlines")
var notesController = require("../controllers/notes")




module.exports = function(app){
    //route home handlebars
    app.get("/", function(req,res){
        res.render("home");
    });
    //route saved handlebars
    app.get("/saved", function(req,res){
        res.render("saved");
    });
    app. get("/api/fetch", function (req,res){
            headlinesController.fetch(function(err,docs){
            if (!docs || docs.insertedCount === 0){
                res.json({
                    message: "No new article"
                })
            }  
            else{
                res.json({
                    message: "Added" + docs.insertedCount + "new article"
                })
            } 
            });
    });
    app. get("/api/headlines", function (req,res){
        var query = {};
        if (req.query.saved){
            query = req. query;
        }
    headlinesController.get(query, function (data){
        res.json(data);
    });
});

}