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
const finalOrder = [];
for(let i = 0;i<storedUserFav.length; i++){
  finalOrder[i] = {
    isIncluded:true,
    howMany : 1,
    totalPrice : 200,
  }
  const cartItems = document.createElement('tr');
    cartItems.innerHTML = 
    `<tr>
    <th scope="col" class="list-box-item check-item" ><input type="checkbox" class="check" id="check${i}" onclick="isChecked(${i})"></th>
    <th scope="col" class="list-box-item cart-item-image"><img src="${data[storedUserFav[i]].imgUrl}"></th>
    <th scope="col" class="list-box-item cart-item-name">${data[storedUserFav[i]].name}</th>
    <th scope="col" class="list-box-item cart-item-price">${data[storedUserFav[i]].price}</th>
    <th scope="col" class="list-box-item"><div class="item-quantity-counter">
      <input type="button" class="calc-btn" onclick="count('minus',${i})" value="-"/>
      <div class="quantity-result" id="quantity-result${i}">${finalOrder[i].howMany}</div>
      <input type="button" class="calc-btn" onclick="count('plus',${i})" value="+"/>
    </div></th>
    <th scope="col" class="list-box-item cart-item-ship-price">200</th>
    </tr>`;
    tableBody.appendChild(cartItems);
}

//카운터 기능 구현
function count(type, index) {
  if(type==='plus') finalOrder[index].howMany +=1;
  if(type==='minus') {
    if(finalOrder[index].howMany > 0)finalOrder[index].howMany -= 1;// -버튼을 눌렀는데
    if(finalOrder[index].howMany === 0){ //1->0이 되었을 때
      const checkbox = document.getElementById(`check${index}`);
      checkbox.checked = false;
    }
  }
document.getElementById(`quantity-result${index}`).innerText = finalOrder[index].howMany;
}

function isChecked(index){
  const checkbox = document.getElementById(`check${index}`);
  if(checkbox){//false -> true로 갈 때
    if(finalOrder[index].howMany === 0){ // 0개였다면
      finalOrder[index].howMany++; // 자동으로 count 1개추가
      document.getElementById(`quantity-result${index}`).innerText = finalOrder[index].howMany;//리렌더링
    }
  }
}