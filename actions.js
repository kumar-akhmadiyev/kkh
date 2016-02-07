module.exports = [
  ["Adidas", "Скидка 20%!",1,'adidas.jpg','adidas-logo.png','Сегодня мы предлагаем новейшие кроссовки со скидкой в 30% при оплате карточкой kazkom'],
  ["Costa", "Выиграй бесплатный кофе!",2,'costa.jpg','costa-logo.png',''],
  ["kazkom", "Нам важно ваше мнение!",3,'kazkom.jpg','kazkom-logo.jpg','']
].map(function(element) {
  return {company: element[0], 
            title: element[1],
                id:element[2],
            image:element[3],
            logo:element[4],
            description:element[5]
};
});