// 메인페이지 카드 가로 스크롤로 세로스크롤 이동하기 시작
document.addEventListener("DOMContentLoaded", function() {
  var containers = document.querySelectorAll('.body-main-page-card');

  containers.forEach(function(container) {
    container.addEventListener('wheel', function(event) {
      event.preventDefault();

      var delta = event.deltaY || event.detail || event.wheelDelta;

      if (container.scrollLeft === 0 && delta < 0) {
        window.scrollBy({ top: delta, left: 0});
      } 
      else if (container.scrollLeft >= (container.scrollWidth-container.clientWidth-1) && delta > 0) {
        window.scrollBy({ top: delta, left: 0});
      } 
      else {
        container.scrollLeft += (delta > 0 ? 1 : -1) * 40;
      }
    });
  });
});
// 가로 스크롤 끝

// main-page-card 다시 만들기 시작
function goto(num){
  localStorage.setItem('currentItemNumber', num);
  if(localStorage.isLoggedIn==='true') window.location.href = './item-page-login.html';
  else {
    console.log('실행됩니다.');
    window.location.href = './pages/item-page-logout.html';
  }
}
let catnum = 0;
let countedcat = [];
function shoecat() {
  for(let i=0;i<Data.length;i++) {
    if(Data[i].cat && !countedcat.includes(Data[i].cat)) {
      catnum ++;
      countedcat.push(Data[i].cat);
    }
  }
}

shoecat();

let numberOfCards = {};
for(let i=0;i<Data.length;i++) {
  let item = Data[i];
  let category = item.cat;

  if(!numberOfCards[category]) {
    numberOfCards[category] = [];
  }
  
  numberOfCards[category].push(i);
}

const main = document.querySelector("main");

for (let i = 0; i < catnum; i++) {
  const mainCardContainer = document.createElement('section');
  mainCardContainer.classList.add('body-main-page-card');
  mainCardContainer.classList.add('main-card-container');
  
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');

  for (let j = 0; j < numberOfCards[countedcat[i]].length; j++) {
    let num = numberOfCards[countedcat[i]][j] + 1;
    const imageLink = (localStorage.isLoggedIn ==="true")?`../img/shoes${num}.svg`:`./img/shoes${num}.svg`;
    
    let cardHtml = `
      <div class="main-card" onclick="goto(${num})">
        <span>
          <img src="${imageLink}" alt="shoes${num}">
        </span>
        <div class="main-card-info-box">
          <span class="text-btn card-text-btn">
            <div class="main-card-info main-card-info-head">
              <span>${Data[num-1].name}</span>
            </div>
            <div class="main-card-info main-card-info-body">
              <div class="sizes">240 245 250 255 260 265 270 275 280 285</div>
              <div class="colors">
                RED BLACK WHITE IVORY
              </div>
            </div>
            <div class="main-card-info main-card-info-footer">
            <p>${Data[num-1].price}깃털</p>
            </div>
          </span>
        </div>
      </div>`;

    cardContainer.innerHTML += cardHtml;
  }

  mainCardContainer.appendChild(cardContainer);
  main.appendChild(mainCardContainer);
}

// main-page-card 다시 만들기 끝