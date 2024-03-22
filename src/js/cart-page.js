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
const data = JSON.parse(localStorage.data);
const tableBody = document.querySelector('.wish-list-table-body');
const storedUserFav = JSON.parse(localStorage.userFav);
for(let i = 0;i<storedUserFav.length; i++){
  const cartItems = document.createElement('tr');
    cartItems.innerHTML = 
    `<tr>
    <th scope="col" class="list-box-item check-item" ><input type="checkbox" class="check"></th>
    <th scope="col" class="list-box-item cart-item-image"><img src="${data[storedUserFav[i]].imgUrl}"></th>
    <th scope="col" class="list-box-item cart-item-name">${data[storedUserFav[i]].name}</th>
    <th scope="col" class="list-box-item cart-item-price">${data[storedUserFav[i]].price}</th>
    <th scope="col" class="list-box-item"><div class="item-quantity-counter">
      <input type="button" class="calc-btn" onclick="count('minus')" value="-"/>
      <div class="quantity-result">1</div>
      <input type="button" class="calc-btn" onclick="count('plus')" value="+"/>
    </div></th>
    <th scope="col" class="list-box-item cart-item-ship-price">200</th>
    </tr>`;
    tableBody.appendChild(cartItems);
}
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