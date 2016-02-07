var feed = require('./feed.js')
var rates = require('./rates.js')
var IMAGE_PATH = "images/";
module.exports = {

    mainPage : function(){
        var page = tabris.create("Page", {
            title: "Окно",
            topLevel: true
        });
        feed.create().appendTo(page);
        return page
    },
    actionPage: function(action){
        var page = tabris.create("Page",{
            title: action.title,
        })
        var imageView = tabris.create("ImageView", {
            layoutData: {top:0,left:0,right:0},
            image: {src : IMAGE_PATH+action.image},
            scaleMode: 'fill'
        }).appendTo(page);
        var logoView = tabris.create("ImageView", {
            layoutData: {top: 8, left:8, width: 100, height: 50},
            image: {src : IMAGE_PATH+action.logo}
          }).appendTo(page);
        var description = tabris.create("TextView",{
            layoutData: {top:[imageView,8],left:8,right:8},
            text: action.description
        }).appendTo(page);
        var rate = rates.create(action);
        console.log(rate._layoutData)
        rate._layoutData.top = [description,10];
        rate.appendTo(page);
        // var companyView = tabris.create("TextView", {
        //   layoutData: {top: 16, centerX: 0, width: 200, height: 200},
        //   background:"#cecece",
        //   alignment: "center",
        //   text: action.company
        // }).appendTo(page);
        return page
    }
}