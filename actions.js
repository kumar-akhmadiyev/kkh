module.exports = [
  ["Travellers", "Discount 20%",1],
  ["Angel-in-us", "Get a free coffee now",2],
].map(function(element) {
  return {company: element[0], title: element[1],id:element[2]};
});