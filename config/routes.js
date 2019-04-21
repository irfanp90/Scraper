module.exports = function(app){
    //route home handlebars
    app.get("/", function(req,res){
        res.render("home");
    });
    //route saved handlebars
    app.get("/saved", function(req,res){
        res.render("saved");
    });
}