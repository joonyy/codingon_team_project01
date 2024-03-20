let Data = [];

//신발 객체 틀을 생성하는 함수
const shoes = function(imgNum, name, price, contents, reviews){
  this.imgUrl = (`../img/shoes${imgNum}.png`);
  this.name = name;
  this.price = price;
  this.contents = contents;
  this.reviews = reviews;
};
for(let i=1;i<=20;i++){
Data[i-1] = new shoes(i);
}