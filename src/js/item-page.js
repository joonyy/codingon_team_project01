// item-page 만들기 시작
const urlParams = new URLSearchParams(window.location.search);
const dataParam = urlParams.get('data');
const data = JSON.parse(decodeURIComponent(dataParam));

const main = document.querySelector("body");

const itembox = document.createElement("section");

itembox.innerHTML = `
<section class="item-top-container">
<!-- 상단 좌측 -->
<div class="item-container" style="background-image: url(${data.imgUrl}); background-size: cover; background-repeat: no-repeat;">
  <div class="item-summary">
    <ul>
    <li class="item-name">${data.name}</li>
    <li class="item-price">${data.price}</li>
    <li class="item-color"></li>
    </ul>   
  </div>
</div>
<!-- 상단 우측 -->
<div class="item-order-container">
  <p style="font-weight: bold;">사이즈 옵션</p>
  <div class="size-option route-to-main-login">
    <button class="size-option-btn" onclick="selectSize(245)">245</button>
    <button class="size-option-btn" onclick="selectSize(250)">250</button>
    <button class="size-option-btn" onclick="selectSize(255)">255</button>
    <button class="size-option-btn" onclick="selectSize(260)">260</button>
    <button class="size-option-btn" onclick="selectSize(265)">265</button>
    <button class="size-option-btn" onclick="selectSize(270)">270</button>
    <button class="size-option-btn" onclick="selectSize(275)">275</button>
    <button class="size-option-btn" onclick="selectSize(280)">280</button>
    <button class="size-option-btn" onclick="selectSize(295)">295</button>
  </div>
  <br/>
  <div class="color-option">
    <p style="font-weight: bold;">컬러 옵션</p>
    <input type="color" id="selectedColor">
  </div>
  <div class="chosen-option">
    <p style="font-weight: bold;">선택된 옵션</p>
    <span id="selectedSize">Size : </span>
    <div class="selectedcolor-box">
      <p>색상 : <div id="changedColor"></div></p>
    </div>
  </div>
  <div class="decision">
    <div class="like">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi" viewBox="0 0 16 16" id="heart">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
      </svg>
    </div>
    <div class="wishlist route-to-main-login"><img src="../img/shopping cart.png" alt="장바구니"></div>
  </div>
</section>
<main class="item-bottom-container">
  <header>
    <button class="more-info-select selected" onclick="showSection('item-details')">상세정보</button>
    <button class="review-select" onclick="showSection('reviews')">리뷰</button>
  </header>
  <section class="item-details">
    <p>${data.contents}</p>
  </section>
  <section class="review">
  </section>
</main>`;
main.appendChild(itembox);

const review = document.querySelector('.review');
reviews(review);

function reviews(review) {
  const reviewsBox = document.createElement('div');
  let ptag = document.createElement('p');
  for(let i=0;i<(data.reviews).length;i++) {
    ptag = `<p>${data.reviews[i].stars}개 <br>${data.reviews[i].contents}</p>`;
    reviewsBox.innerHTML += ptag;
  }
  review.appendChild(reviewsBox);
}
// item-page 만들기 끝

// 찜하기 버튼 시작
const heart = document.querySelector("#heart");
heart.addEventListener('click', function() {
  heart.classList.toggle("bi-heart-fill");
});
// 찜하기 버튼 끝

// 사이즈 선택 시작
function selectSize(size) {
  let selectedSize = document.getElementById("selectedSize");
  selectedSize.innerHTML = "size : " + size;
}
// 사이즈 선택 끝

// 색상 선택 시작
const selectedcolor = document.getElementById("selectedColor");
const changedcolor = document.getElementById("changedColor");

selectedcolor.addEventListener('input', () => {
  const selectColor = selectedcolor.value;
  changedcolor.style.backgroundColor = selectColor;
});
// 색상 선택 끝

// 상세정보 리뷰 선택 시작
const button1 = document.getElementsByClassName("more-info-select")[0];
const button2 = document.getElementsByClassName("review-select")[0];

const section1 = document.querySelector(".item-details");
const section2 = document.querySelector(".review");

button1.addEventListener('click', () => {
  window.scrollBy({top: section1.getBoundingClientRect().top, behavior: 'smooth'});
  button1.classList.add("selected");
  button2.classList.remove("selected");
});

button2.addEventListener('click', () => {
  window.scrollBy({top: section2.getBoundingClientRect().top, behavior: 'smooth'});
  button1.classList.remove("selected");
  button2.classList.add("selected");
});
// 상세정보 리뷰 선택 끝

// 상세정보, 리뷰클릭시 해당섹션 노출
function showSection(section) {
  if (section === 'item-details') {
    document.querySelector('.item-details').style.display = 'block';
    document.querySelector('.review').style.display = 'none';
  } else if (section === 'review') {
    document.querySelector('.item-details').style.display = 'none';
    document.querySelector('.review').style.display = 'block';
  }
}
// html로드시 디폴트값 상세정보 섹션만 노출
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.item-details').style.display = 'block';
  document.querySelector('.review').style.display = 'none';
});