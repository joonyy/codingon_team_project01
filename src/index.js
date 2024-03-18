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

// 메인페이지 카드 가로 스크롤로 세로스크롤 이동하기 시작
document.addEventListener("DOMContentLoaded", function() {
  var containers = document.querySelectorAll('.body-main-page-card');

  containers.forEach(function(container) {
    container.addEventListener('wheel', function(event) {
      event.preventDefault(); // 기본 스크롤 동작 방지

      var delta = event.deltaY || event.detail || event.wheelDelta;

      if (container.scrollLeft === 0 && delta < 0) {
        // 가로 스크롤이 가장 왼쪽에 있고, 스크롤 방향이 위쪽으로 이동할 때
        window.scrollBy({ top: delta, left: 0, behavior: 'smooth' });
      } else if (container.scrollLeft >= (container.scrollWidth - container.clientWidth) && delta > 0) {
        // 가로 스크롤이 가장 오른쪽에 있고, 스크롤 방향이 아래쪽으로 이동할 때
        window.scrollBy({ top: delta, left: 0, behavior: 'smooth' });
      } else {
        container.scrollLeft += (delta > 0 ? 1 : -1) * 40; // 가로 스크롤 이동
      }
    });
  });
});
// 메인페이지 카드 가로 스크롤로 세로스크롤 이동하기 끝

// 찜하기 버튼 시작
const heart = document.querySelector("#heart");
heart.addEventListener('click', function() {
  heart.classList.toggle("bi-heart-fill");
});
// 찜하기 버튼 끝

// 사이즈 선택 시작
function selectSize(size) {
  let selectedSize = document.getElementById("selectedSize");
  selectedSize.innerHTML = "size : " + size + "mm";
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
function select() {
  const moreinfo = document.querySelector(".more-info-select");
  const review = document.querySelector(".review-select");

  if(moreinfo.classList.contains("selected") === true) {
    moreinfo.classList.remove("selected");
    review.classList.add("selected");
  }
  else {
    moreinfo.classList.add("selected");
    review.classList.remove("selected");
  }
}

const button1 = document.getElementsByClassName("more-info-select")[0];
const button2 = document.getElementsByClassName("review-select")[0];

const section1 = document.querySelector(".item-details");
const section2 = document.querySelector(".review");

button1.addEventListener('click', () => {
  window.scrollBy({top: section1.getBoundingClientRect().top, behavior: 'smooth'});
});

button2.addEventListener('click', () => {
  window.scrollBy({top: section2.getBoundingClientRect().top, behavior: 'smooth'});
});
// 상세정보 리뷰 선택 끝