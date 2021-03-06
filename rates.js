var actions = require('./actions.js');
var IMAGE_PATH = "images/";
module.exports = {
  create: function(action){
    var m = tabris.create("Composite",{
      layoutData: {left:10, right:10}
    })
    var text = tabris.create("TextView",{
      layoutData: {left: 10, right: 10},
      alignment: "center",
      font: "22px sans-serif",
      text: "Оцените работу нашего сотрудника"
    }).appendTo(m);
    var rate_container = tabris.create("Composite",{
      layoutData: {left:20,right:10,top:[text,10]},
      alignment: "center"
    });
    var buttons = {};
    var button_clicked = function(widget){
      var rate = widget._props.rate;
      for (var i=0;i<5;i++){
        if (rate>=rate_container._children[i].get("rate")){
          rate_container._children[i].set("background","red");
        } else {
          rate_container._children[i].set("background","#cecece");
        }
      }
      
      //}
    }
    for (var i=1;i<=5;i++){
      var button = tabris.create("Button",{
        layoutData: {left:20+(i-1)*50,width:50},
        text: i.toString(),
        rate: i
      }).on("select",button_clicked).appendTo(rate_container)
    }
    // var s = tabris.create("Slider",{
    //   layoutData:{left:20,right:20,top:[text,10]},
    //   maximum: 5,
    //   minimum: 1,
    //   selection: 1,
    // }).appendTo(m);
    rate_container.appendTo(m);
    return m
    // var cv = tabris.create("CollectionView", {
    //     layoutData: {left: 0, top: 0, right: 0, bottom: 0},
    //     items: actions,
    //     itemHeight: 250,
    //     initializeCell: function(cell) {
    //       var imageView = tabris.create("ImageView", {
    //         layoutData: {top:0,left:0,right:0,height:200},
    //         scaleMode: 'fill'
    //       }).appendTo(cell);
    //       var logoView = tabris.create("ImageView", {
    //         layoutData: {top: 8, left:8, width: 100, height: 50},
    //       }).appendTo(cell);
    //       var actionView = tabris.create("TextView", {
    //         layoutData: {left: 0, top: [imageView, 0], right: 0,height:50},
    //         background:"#cecece",
    //         alignment: "center"
    //       }).appendTo(cell);
          
          
    //       cell.on("change:item", function(widget, action) {
    //         logoView.set("image",  {src:IMAGE_PATH+action.logo});
    //         imageView.set("image",{src:IMAGE_PATH+action.image});
    //         actionView.set("text", action.title);
    //       });
    //     }
    // }).on("select",function(target,value){
    //   // console.log(value)
    //   // console.log(actions)
    //   // console.log(Object.keys(pages))
    //   var ap = pages.actionPage(value);
    //   ap.open()  
    // });
    //cv.set('pages',pages)
    // cv.on("select", function(target, value) {
    //     console.log("selected",target, value.title);
    //     console.log(value)
    //     console.log('In select',target.pages)
    // });
    //return cv
  }
}

