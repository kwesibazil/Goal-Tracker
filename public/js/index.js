let prevScroll = window.pageYOffset;
const modal = document.getElementById("modal");
const actionBtn = document.getElementById("action-btn");
const actionBtnSvg = actionBtn.children[0];
const sideNav = document.getElementById("sideNav");
const actionMenu = document.getElementById("actionMenu")
const toggleBtn = document.getElementById("toggler-icon");


toggleBtn.addEventListener('click', () => {
  addClass(sideNav, toggleBtn.getAttribute("data-bs-relatedTarget"))
});
actionBtn.addEventListener('click', () =>{
  addClass(actionMenu, actionBtn.getAttribute("data-bs-relatedTarget"))
})


function addClass(element, target){
  modal.classList.add("modal-visible");
  element.classList.add(target)
}

modal.addEventListener('click', (e) => {
  if(e.target == modal){
    if (sideNav.classList.contains("sideNav-visible"))
      sideNav.classList.remove("sideNav-visible");
    else
      actionMenu.classList.remove("actionMenu-visible")

    modal.classList.remove("modal-visible");
  }
});


window.addEventListener('scroll', () => {
  const currentPos = window.pageYOffset

  if(prevScroll > currentPos)
    actionBtnSvg.classList.remove("action-btn-hidden");  
  else
    actionBtnSvg.classList.add("action-btn-hidden");
  
  prevScroll = currentPos;
});


new Glider(document.querySelector('.glider'), {
  slidesToShow: 1.5,
  dots: '#dots',
  draggable: true
});



google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Day', 'Goal', { role: "style" }],
    ['Sun',  5, 'color: #000000; opacity: 0.8'],
    ['Mon',  7, 'color: #000000; opacity: 0.8'],
    ['Tue', 15, 'color :#000000; opacity: 0.8'],
    ['Wed',  5, 'color: #000000; opacity: 0.8'],
    ['Thur', 2, 'color: #000000; opacity: 0.8'],
    ['Fri',  10, 'color:#000000; opacity: 0.8'],
    ['Sat',  5, 'color: #000000; opacity: 0.8']
  ]);

  var options = {
    bar: {groupWidth: "70%"},
    chartArea:{
      // left:5,
      top: 15,
      bottom: 16,
      right: 5,
      width: '90%'
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(data, options);
}


