// 메인페이지 카드 가로 스크롤로 세로스크롤 이동하기 시작
document.addEventListener("DOMContentLoaded", function() {
  var containers = document.querySelectorAll('.body-main-page-card');

  containers.forEach(function(container) {
    container.addEventListener('wheel', function(event) {
      event.preventDefault(); // 기본 스크롤 동작 방지

      var delta = event.deltaY || event.detail || event.wheelDelta;

      if (container.scrollLeft === 0 && delta < 0) {
        // 가로 스크롤이 가장 왼쪽에 있고, 스크롤 방향이 위쪽으로 이동할 때
        window.scrollBy({ top: delta, left: 0});
      } else if (container.scrollLeft >= (container.scrollWidth - container.clientWidth) && delta > 0) {
        // 가로 스크롤이 가장 오른쪽에 있고, 스크롤 방향이 아래쪽으로 이동할 때
        window.scrollBy({ top: delta, left: 0});
      } else {
        container.scrollLeft += (delta > 0 ? 1 : -1) * 40; // 가로 스크롤 이동
      }
    });
  });
});
// 메인페이지 카드 가로 스크롤로 세로스크롤 이동하기 끝

// main-page-card 갯수 만들기 시작
// main-card를 삽입할 부모 요소를 선택합니다.
const numofcardcontainer = document.querySelectorAll(".card-container").length;
const numberOfCards = 5;

// 새로운 main-card를 만들기 위한 함수를 정의합니다.
let maincardno = 1;

for(let i=0;i<numofcardcontainer;i++) {
  for(let j=1;j<=numberOfCards;j++) {
    createMainCard(i);
    maincardno++;
  }
}

function createMainCard(i) {
  const cardContainer = document.querySelectorAll(".card-container")[i];

  // main-card 요소를 생성합니다.
  const mainCard = document.createElement('div');
  mainCard.classList.add('main-card');

  const nowlocation = window.location.pathname;
  const nowpage = nowlocation.split("/");

  // main-card 내부의 요소들을 생성 및 추가합니다.
  if(nowpage[nowpage.length - 1] === "main-page-login.html") {
    mainCard.innerHTML = ` 
    <a href="item-page-login.html">
      <img src="../img/shoes${maincardno}.png" alt="shoes${maincardno}">
    </a>
    <div class="main-card-info-box">
      <a href="item-page-login.html" class="text-btn card-text-btn">
        <div class="main-card-info main-card-info-head">
          에어포스 1
        </div>
        <div class="main-card-info main-card-info-body">
          <div class="sizes">240 245 250 255 260 265 270 275 280 285</div>
          <div class="colors">
            RED BLACK WHITE IVORY
          </div>
        </div>
        <div class="main-card-info main-card-info-footer">
          136,000깃털
        </div>
      </a>
    </div>`;
  }
  else if(nowpage[nowpage.length - 1] === "main-page-logout.html") {
    mainCard.innerHTML = `
    <a href="item-page-logout.html">
      <img src="../img/shoes${maincardno}.png" alt="shoes${maincardno}">
    </a>
    <div class="main-card-info-box">
      <a href="item-page-logout.html" class="text-btn card-text-btn">
        <div class="main-card-info main-card-info-head">
          에어포스 1
        </div>
        <div class="main-card-info main-card-info-body">
          <div class="sizes">240 245 250 255 260 265 270 275 280 285</div>
          <div class="colors">
            RED BLACK WHITE IVORY
          </div>
        </div>
        <div class="main-card-info main-card-info-footer">
          136,000깃털
        </div>
      </a>
    </div>`;
  }  
  cardContainer.appendChild(mainCard);
}
// main-page-card 갯수 만들기 끝