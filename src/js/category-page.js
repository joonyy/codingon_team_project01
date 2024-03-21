// main-page-card 다시 만들기 시작
const categoryBox = document.querySelector(".category-box");

const nowlocation = window.location.pathname;
const nowpage = nowlocation.split("/");

for (let i = 0; i <Data.length; i++) {
  const itemCard = document.createElement('li');

  itemCard.innerHTML = `
  <a href="${nowpage[nowpage.length - 1].includes('login') ? 'item-page-login.html' : 'item-page-logout.html'}">
    <div class="category-box-item" style="background-image:url(../img/shoes${i+1}.png)">
      <div class="category-box-text">
        <div class="card-price">${Data[i].price}깃털</div>
        <div class="card-name">${Data[i].name}</div>
      </div>
    </div>
  </a>`;
  categoryBox.appendChild(itemCard);
}
// main-page-card 다시 만들기 끝