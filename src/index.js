console.log("working");

const container = document.querySelector(".card-container");
container.addEventListener("wheel", (event) => {
  if(event.deltaY != 0) {
    event.preventDefault();
    container.scrollLeft += event.deltaY;
  }
});

console.log("working");

function elheight() {
  let el = document.querySelector(this);
  elheight = el.offsetHeight;
  return elheight;
}