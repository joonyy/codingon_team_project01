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

// left-coment 박스 호출
function showCategory(categoryId) {
  var categoryContents = document.querySelectorAll('.category-content');
  for (var i = 0; i < categoryContents.length; i++) {
      categoryContents[i].style.display = 'none';
  }

  var selectedCategory = document.getElementById(categoryId);
  if (selectedCategory) {
      selectedCategory.style.display = 'block';
  }
}
// 회원정보 
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "kdt" && password === "12") {
      // 로그인 성공 시
      document.getElementById("change-info").style.display = "block"; 
      document.getElementById("change-password").style.display = "block"; 
      alert("로그인 되었습니다.");
  } else {
      // 로그인 실패 시
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
  }
}

function changeShippingAddress() {
  var newShippingAddress = document.getElementById("new-shipping-address").value;
  alert("배송지 주소가 변경되었습니다.");
}

function changePassword() {
  var newPassword = document.getElementById("new-password").value;
  var confirmNewPassword = document.getElementById("confirm-new-password").value;
  if (newPassword === confirmNewPassword) {
      alert("비밀번호가 변경되었습니다.");
  } else {
      alert("새로운 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
  }
}
//회원 정보 종료


// 계정 탈퇴
function showConfirmation() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
}

function cancelDeletion() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

function deleteAccount() {

    alert('계정이 탈퇴되었습니다.');
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}
// 계정탈퇴종료