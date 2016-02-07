var IMAGE_PATH = "images/";

var actions = require('./actions.js')
var pages = require('./pages.js');
var feed = require('./feed.js');


var page = pages.mainPage();
feed.create(pages).appendTo(page);

// var tabFolder = tabris.create("TabFolder",{
//     layoutData: {left: 0, top: 0, right: 0, bottom: 0},
//     paging:true
// }).appendTo(page);
// tabris.create("Tab",{
//     title: 'Лента',
// }).appendTo(tabFolder);
// tabris.create("Tab",{
//     title: 'Мои заведения',
// }).appendTo(tabFolder);

page.open();

// tabFolder.on("change:selection",function(widget,tab){
//     console.log(tab.get('title'))
// })