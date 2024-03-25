//전체선택, 전체해제 기능 구현
function checkAllBoxes(){
  const checkAll = document.querySelector('#checkAll');
  const checkboxes = document.querySelectorAll('.check');
    if(checkAll.checked){//false => true로 갈 때
      for(const checkbox of checkboxes){
        checkbox.checked=true;
      }
    }
    else{
      for(checkbox of checkboxes){
        checkbox.checked =false;
      }
    }
  }
//전체선택, 전체해제 기능 마무리
//개별 선택 박스 조작 시 변동 설정

//마무리

//아이템 추가 구현
const data = JSON.parse(localStorage.data);
const tableBody = document.querySelector('.wish-list-table-body');
const storedUserFav = JSON.parse(localStorage.userFav);
const finalOrder = [];
for(let i = 0;i<storedUserFav.length; i++){
  finalOrder[i] = {
    productPrice:data[storedUserFav[i]].price,
    isIncluded:true,
    howMany : 1,
    totalPrice : 200,
  }
  const cartItems = document.createElement('tr');
    cartItems.innerHTML = 
    `<tr onchange="finalPrice()">
    <th scope="col" class="list-box-item check-item" ><input type="checkbox" class="check" id="check${i}" onclick="checkCheckbox(${i})" onchange="finalPrice()" checked></th>
    <th scope="col" class="list-box-item cart-item-image"><img src="${data[storedUserFav[i]].imgUrl}"></th>
    <th scope="col" class="list-box-item cart-item-name">${data[storedUserFav[i]].name}</th>
    <th scope="col" class="list-box-item cart-item-price" id="cart-item-price${i}">${finalOrder[i].productPrice}</th>
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
  if(type==='plus') { //plus 클릭 시
    finalOrder[index].howMany += 1;//+1
    if(finalOrder[index].howMany === 1){// 0 ==> 1로 변하면
      
    }
  }
  if(type==='minus') {
    if(finalOrder[index].howMany > 0)finalOrder[index].howMany -= 1;// -버튼을 눌렀는데
    if(finalOrder[index].howMany === 0){ //1->0이 되었을 때
      const checkbox = document.getElementById(`check${index}`);
      checkbox.checked = false;
    }
  }
document.getElementById(`quantity-result${index}`).innerText = finalOrder[index].howMany;
document.getElementById(`cart-item-price${index}`).innerText = finalOrder[index].productPrice * finalOrder[index].howMany;
}

function checkCheckbox(index){
  const checkbox = document.getElementById(`check${index}`);
  if(checkbox){//false -> true로 갈 때
    if(finalOrder[index].howMany === 0){ // 0개였다면
      finalOrder[index].howMany++; // 자동으로 count 1개추가
      document.getElementById(`quantity-result${index}`).innerText = finalOrder[index].howMany;//리렌더링
    }
  }
}

function finalPrice(){
  let productSum = 0;
  let shipSum = 0;
  let totalSum = 0;
  for(let i=0;i<finalOrder.length;i++){
    if(!finalOrder[i].isIncluded) continue;
    productSum += finalOrder[i].productPrice * finalOrder[i].howMany;
    shipSum += finalOrder[i].howMany * 200;
  }
  totalSum = productSum + shipSum;
  document.getElementById('items-price').innerText = `제품 가격 :${productSum}깃털`;
  document.getElementById('shipment-price').innerText = `배송비 :${shipSum}깃털`
  document.getElementById('total-price').innerText = `총 ${totalSum}깃털`
}
finalPrice();