// category 다시 만들기 시작
const categoryBox = document.querySelector(".category-box");

function goto(num){
  localStorage.setItem('currentItemNumber', num);
  if(localStorage.isLoggedIn) window.location.href = 'item-page-login.html';
  else window.location.href = 'item-page-logout.html';
}
for (let i = 0; i <Data.length; i++) {
  const itemCard = document.createElement('li');

  itemCard.innerHTML = `
  <span onclick="goto(${i+1})">
    <div class="category-box-item" style="background-image:url(../img/shoes${i+1}.svg)">
      <div class="category-box-text">
        <div class="card-price">${Data[i].price}깃털</div>
        <div class="card-name">${Data[i].name}</div>
      </div>
    </div>
  </span>`;
  categoryBox.appendChild(itemCard);
}
// category 다시 만들기 끝