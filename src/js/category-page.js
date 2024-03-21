// category-page-card 갯수 만들기 시작
function createitemCard(i) {
  const itemContainer = document.querySelector(".category-box");

  // category-card 요소를 생성합니다.
  const itemCard = document.createElement('li');

  // 현재 주소 불러오기
  const nowlocation = window.location.pathname;

  if(nowlocation.lastIndexOf("category-page-login.html")) {
    itemCard.innerHTML = `
    <a href="item-page-login.html">
      <div class="category-box-item" style="background-image:url(../img/shoes${i+1}.png)">
        <div class="category-box-text">
          <div class="card-price">100만원</div>
          <div class="card-name">신발이름!</div>
        </div>
      </div>
    </a>
    `;
  } 
  else if (nowlocation.lastIndexOf("category-page-logout.html")) {
    itemCard.innerHTML = `
    <a href="item-page-logout.html">
      <div class="category-box-item" style="background-image:url(../img/shoes${i+1}.png)">
        <div class="category-box-text">
          <div class="card-price">100만원</div>
          <div class="card-name">신발이름!</div>
        </div>
      </div>
    </a>
  `;
  }
  // 새로운 main-card를 cardContainer에 추가합니다.
  itemContainer.appendChild(itemCard);
}

// category-card 갯수 지정
const numberofcategory = 10;
for (let i = 0; i < numberofcategory; i++)   {
  createitemCard(i);
}
// category-page 갯수 만들기 끝