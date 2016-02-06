module.exports = (function(){return tabris.create("CollectionView", {
  layoutData: {left: 0, top: 0, right: 0, bottom: 0},
  items: actions,
  itemHeight: 256,
  initializeCell: function(cell) {
    var companyView = tabris.create("TextView", {
      layoutData: {top: 16, centerX: 0, width: 200, height: 200},
      background:"#cecece",
      alignment: "center"
    }).appendTo(cell);
    var actionView = tabris.create("TextView", {
      layoutData: {left: 30, top: [companyView, 16], right: 30},
      background:"green",
      alignment: "center"
    }).appendTo(cell);
    cell.set("background","red");
    cell.on("change:item", function(widget, action) {
      companyView.set("text",  action.company);
      actionView.set("text", action.title);
    });
  }
}).on("select", function(target, value) {
  console.log("selected",target, value.title);
});})
