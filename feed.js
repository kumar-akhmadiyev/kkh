var actions = require('./actions.js');
var IMAGE_PATH = "images/";
module.exports = {
  create: function(pages){
    console.log(pages)
    //var pages = pages
    //console.log('Pages',pages)
    var cv = tabris.create("CollectionView", {
        layoutData: {left: 0, top: 0, right: 0, bottom: 0},
        items: actions,
        itemHeight: 250,
        initializeCell: function(cell) {
          var imageView = tabris.create("ImageView", {
            layoutData: {top:0,left:0,right:0,height:200},
            scaleMode: 'fill'
          }).appendTo(cell);
          var logoView = tabris.create("ImageView", {
            layoutData: {top: 8, left:8, width: 100, height: 50},
          }).appendTo(cell);
          var actionView = tabris.create("TextView", {
            layoutData: {left: 0, top: [imageView, 0], right: 0,height:50},
            background:"#cecece",
            alignment: "center"
          }).appendTo(cell);
          
          
          cell.on("change:item", function(widget, action) {
            logoView.set("image",  {src:IMAGE_PATH+action.logo});
            imageView.set("image",{src:IMAGE_PATH+action.image});
            actionView.set("text", action.title);
          });
        }
    }).on("select",function(target,value){
      // console.log(value)
      // console.log(actions)
      // console.log(Object.keys(pages))
      var ap = pages.actionPage(value);
      ap.open()  
    });
    //cv.set('pages',pages)
    // cv.on("select", function(target, value) {
    //     console.log("selected",target, value.title);
    //     console.log(value)
    //     console.log('In select',target.pages)
    // });
    return cv
  }
}

