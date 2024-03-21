//전체선택, 전체해제 기능 구현
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
//전체선택, 전체해제 기능 마무리

//아이템 추가 구현


//카운터 기능 구현
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