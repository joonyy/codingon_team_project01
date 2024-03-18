function confirmed(){
  if(document.getElementById('where').value === "") {
    alert('주소를 입력하세요!')
  };
  if(document.getElementById('who').value===""){
    alert("이름을 입력하세요!")
  };

  if(document.getElementById('where').value != "" && document.getElementById('who').value!==""){
    var ship_info = document.querySelector('.ship-info');
    var ship_confirmed_info = document.querySelector('.ship-confirmed-info');
    ship_info.style.visibility = "hidden";
    ship_info.style.display="none";
    ship_confirmed_info.style.visibility = "visible";
    ship_confirmed_info.style.display = "flex";
    const text = document.getElementById('where').value +" (으)로 선물해드릴게요 " + document.getElementById('who').value +"님!";
    const newSpan = document.createElement('span');
    newSpan.textContent=text;
    var ship_confirmed_box = document.querySelector(".ship-confirmed-box");
    ship_confirmed_box.innerHTML = ''; // 기존 내용 지우기
    ship_confirmed_box.appendChild(newSpan);
  }
}