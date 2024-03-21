console.log("working");

// Signin-popup, Login-popup 페이지 보이기, 숨기기 시작
function LoginPopupOpen() {
  var LoginPopup = document.querySelector('.login-popup-background');
  LoginPopup.style.visibility = "visible";
  LoginPopup.style.opacity = '1';
}

function LoginPopupClose() {
  var LoginPopup = document.querySelector('.login-popup-background');
  LoginPopup.style.visibility = "hidden";
  LoginPopup.style.opacity = '0';
}

function SigninPopupOpen() {
  var SigninPopup = document.querySelector('.signin-popup-background');
  SigninPopup.style.visibility = "visible";
  SigninPopup.style.opacity = '1';
}

function SigninPopupClose() {
  var SigninPopup = document.querySelector('.signin-popup-background');
  SigninPopup.style.visibility = "hidden";
  SigninPopup.style.opacity = '0';
}

function SearchPopupOpen() {
  var SigninPopup = document.querySelector('.search-popup-background');
  SigninPopup.style.visibility = "visible";
  SigninPopup.style.opacity = '1';
}

function SearchPopupClose() {
  var LoginPopup = document.querySelector('.search-popup-background');
  LoginPopup.style.visibility = "hidden";
  LoginPopup.style.opacity = '0';
}
// Signin-popup, Login-popup 페이지 보이기, 숨기기 끝

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