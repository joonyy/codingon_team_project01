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