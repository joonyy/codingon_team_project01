// 로그인 시작
var userpasswd = localStorage.getItem('userpasswd');

function checklogin(userId, userPw) {
    if(userId === localStorage.getItem('username') && userPw === localStorage.getItem('userpasswd')) {
      return true;
  }
  return false;
}

function login() {
  const userId = document.querySelector("#login-id").value;
  const userPw = document.querySelector("#login-pw").value;

  if (checklogin(userId, userPw)) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', userId);
    window.location.href="./pages/main-page-login.html";
    localStorage.setItem('userFav', JSON.stringify(userFav));
  } 
  
  else {
    alert("아이디 혹은 비밀번호가 잘못된거 같아요!");
  }
}

function SigninCheck(signinId, signinPw, signinPwCheck) {
  if(localStorage.getItem('username') == signinId) {
    return 1;
  }
  else if(signinPw != signinPwCheck) {
    return 2;
  }
  else {
    return 3;
  }
}

function Signin() {
  const signinName = document.querySelector("#signin-name").value;
  const signinId = document.querySelector("#signin-id").value;
  const signinPw = document.querySelector("#signin-pw").value;
  const signinPwCheck = document.querySelector("#signin-pw-check").value;

  switch(SigninCheck(signinId, signinPw, signinPwCheck)) {
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
      localStorage.setItem('username',signinId);
      localStorage.setItem('userpasswd',signinPw);
      SigninPopupClose();
      LoginPopupOpen();
      break;
    }
  }
}
// 로그인 종료

function isLoggedIn(){
  if(localStorage.getItem('isLoggedIn')) return true;
  return false;
}