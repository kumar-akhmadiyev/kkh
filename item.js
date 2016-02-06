
createItem = function(title){
    var cell = tabris.create("Cell");
    var label = tabris.create("TextView", {
          font: "24px",
          text: title}
        );
    return label
}

module.exports = {'createItem':createItem};