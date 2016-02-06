var feed = require('./feed.js')
var mainPage = function(){
    var page = tabris.create("Page", {
        title: "Лента",
        topLevel: true
    });
    feed.appendTo(page);
    return page
}
module.exports = {
    mainPage : mainPage
}