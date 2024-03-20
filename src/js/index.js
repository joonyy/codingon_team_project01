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
  // main-card 내부의 요소들을 생성 및 추가합니다.
  if(nowlocation == "/codingon_team_project01/src/pages/main-page-login.html") {
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
  else if(nowlocation == "/codingon_team_project01/src/pages/main-page-logout.html") {
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

// category-page-card 갯수 만들기 시작
function createitemCard(i) {
  const itemContainer = document.querySelector(".category-box");

  // category-card 요소를 생성합니다.
  const itemCard = document.createElement('span');

  // 현재 주소 불러오기
  const nowlocation = window.location.pathname;

  if(nowlocation === "/codingon_team_project01/src/pages/category-page-login.html") {
    itemCard.innerHTML = `
    <a href="item-page-login.html">
      <li class="category-box-item" style="background-image:url(../img/shoes${i+1}.png)">
        <div class="category-box-text">
          <div class="card-price">100만원</div>
          <div class="card-name">신발이름!</div>
        </div>
      </li>
    </a>
    `;
  } 
  else if (nowlocation === "/codingon_team_project01/src/pages/category-page-logout.html") {
    itemCard.innerHTML = `
    <a href="item-page-logout.html">
      <li class="category-box-item" style="background-image:url(../img/shoes${i+1}.png)">
        <div class="category-box-text">
          <div class="card-price">100만원</div>
          <div class="card-name">신발이름!</div>
        </div>
      </li>
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
// item-page-card 갯수 만들기 끝

// 로그인 시작
function checklogin(userId, userPw) {
  for(let i=0;i<userInfo.length;i++) {
    if(userInfo[i].userid === userId && userInfo[i].userpasswd === userPw) {
      return true;
    }
  }
  return false;
}

function login() {
  const userId = document.querySelector("#login-id").value;
  const userPw = document.querySelector("#login-pw").value;

  if (checklogin(userId, userPw)) {
    window.location.href="../pages/main-page-login.html"
  } 
  
  else {
    alert("아이디 혹은 비밀번호가 잘못된거 같아요!");
  }
}

function SigninCheck(signinName, signinId, signinPw, signinPwCheck) {
  for(let i=0;i<userInfo.length;i++) {
    if(userInfo[i].userid == signinId) {
      console.log(userInfo[i].userid);
      console.log(signinId);
      return 1;
    }
    else if(signinPw != signinPwCheck) {
      return 2;
    }
    else {
      return 3;
    }
  }
}

function Signin() {
  const signinName = document.querySelector("#signin-name").value;
  const signinId = document.querySelector("#signin-id").value;
  const signinPw = document.querySelector("#signin-pw").value;
  const signinPwCheck = document.querySelector("#signin-pw-check").value;

  switch(SigninCheck(signinName, signinId, signinPw, signinPwCheck)) {
    case 1: {
      window.alert("이미 동일한 아이디를 사용중이에요...");
      break;
    }

    case 2: {
      window.alert("비밀번호를 다시 확인해주세요!");
      break;
    }

    case 3: {
      window.alert("넌 이제 내친구!");
      let newUser = {
        username: signinName,
        userid: signinId,
        userpasswd: signinPw,
      }
      userInfo.push(newUser);
      console.log(userInfo);
      SigninPopupClose();
      LoginPopupOpen();
      break;
    }
  }
}
// 로그인 종료

// 엔터시 검색 시작
document.getElementById("search-input").addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var searchInputValue = document.getElementById("search-input").value;
    if (searchInputValue.trim() !== "") { 
      var searchUrl = "./category-page-logout.html?q=" + encodeURIComponent(searchInputValue);
      window.location.href = searchUrl;
    }
  }
});
// 엔터시 검색 종료

// cart-page.js
document.querySelector('#checkAll');

checkAll.addEventListener('click', function(){
  const isChecked = checkAll.checked;

  if(isChecked){
    const checkboxes = document.querySelectorAll('.check');

    for(const checkbox of checkboxes){
      checkbox.checked=true;
    }
  }
  else{
    const checkboxes = document.querySelectorAll('.check');
    for(checkbox of checkboxes){
      checkbox.checked =false;
    }
  }
})

function count1(type) {
  const resultElement = document.getElementsByClassName('quantity-result')[0];

  let number = resultElement.innerText;
  if(type==='plus') number = parseInt(number) + 1;
  if(type==='minus') {
    if(number>0)number = parseInt(number) -1;
  }

  resultElement.innerText = number;
}
function count2(type) {
  const resultElement = document.getElementsByClassName('quantity-result')[1];

  let number = resultElement.innerText;
  if(type==='plus') number = parseInt(number) + 1;
  if(type==='minus') {
    if(number>0)number = parseInt(number) -1;
  }

  resultElement.innerText = number;
}
function count3(type) {
  const resultElement = document.getElementsByClassName('quantity-result')[2];

  let number = resultElement.innerText;
  if(type==='plus') number = parseInt(number) + 1;
  if(type==='minus') {
    if(number>0)number = parseInt(number) -1;
  }

  resultElement.innerText = number;
}