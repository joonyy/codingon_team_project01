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
    const loginpage = window.location
    window.location.href="main-page-login.html"
  } 
  
  else {
    alert("아이디 혹은 비밀번호가 잘못된거 같아요!");
  }
}

function SigninCheck(signinId, signinPw, signinPwCheck) {
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
