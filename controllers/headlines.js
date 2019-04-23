var scrape = require("../scripts/scrape");
var toMakeDate = require("../scripts/date");

var Headline = require("../models");

module.exports = {
    fetch: function (cb){
        scrape(function(data){
            for (var i = 0; i < data.length; i++) {
                data[i].date = toMakeDate();
                data[i].saved = false;
            }
            Headline.collection.insertMany(data, {ordered: false}, function(err,docs){
                cb(err,docs);
            })
        })
    },
    delete: function(query,cb) {
        Headline.remove(query,cb);
    },
    get:function(query,cb) {
        Headline.find(query).sort({_id:-1}).exec(function(err,doc){
            cb(doc);
        });
    },
    update: function(query,cb) {
        Headline.update({_id:query._id},{
            $set: query
        }, {}, cb);
    }
}