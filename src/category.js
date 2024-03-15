let text_height = document.getElementsByClassName('category-card-text')[0];

text_height.style.height = () =>{
  return $(".category-box-item").height() - $(".category-box-item > img").height();
}
