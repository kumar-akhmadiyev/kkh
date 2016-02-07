var feed = require('./feed.js')
module.exports = {
    mainPage : function(){
        var page = tabris.create("Page", {
            title: "Лента",
            topLevel: true
        });
        feed.create().appendTo(page);
        return page
    },
    actionPage: function(action){
        var page = tabris.create("Page",{
            title: action.title,
        })
        var companyView = tabris.create("TextView", {
          layoutData: {top: 16, centerX: 0, width: 200, height: 200},
          background:"#cecece",
          alignment: "center",
          text: action.company
        }).appendTo(page);
        return page
    }
}