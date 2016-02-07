var IMAGE_PATH = "images/";

var actions = require('./actions.js')
var pages = require('./pages.js');
var feed = require('./feed.js');

var page = pages.mainPage();
feed.create(pages).appendTo(page);

page.open();