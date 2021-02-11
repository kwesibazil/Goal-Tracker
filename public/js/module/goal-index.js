let prevScroll = window.pageYOffset;
const modal = document.getElementById("modal");
const sideNav = document.getElementById("sideNav");
const toggleBtn = document.getElementById("toggler-icon");


toggleBtn.addEventListener('click', () => {
  addClass(sideNav, toggleBtn.getAttribute("data-bs-relatedTarget"))
});


function addClass(element, target){
  modal.classList.add("modal-visible");
  element.classList.add(target)
}

modal.addEventListener('click', (e) => {
  if(e.target == modal){
    if (sideNav.classList.contains("sideNav-visible"))
      sideNav.classList.remove("sideNav-visible");

    modal.classList.remove("modal-visible");
  }
});

