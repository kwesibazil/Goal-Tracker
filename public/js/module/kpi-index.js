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




google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
  
  let total = 2.5

  var data = google.visualization.arrayToDataTable([
    ['kpi',  'Score', { role: "style" }, 'Target', { role: "style" }],
    ['skip', 1.5,'color: #000000;', total,'color: #000000; opacity: 0.5'],
    ['run',   2,'color: #000000;', total,'color: #000000; opacity: 0.5'],
    ['walk',   2.5,'color: #000000;', total,'color: #000000; opacity: 0.5'],
    
  ]);

  var view = new google.visualization.DataView(data);

  var options = {
    // height: 400,
    bar: { groupWidth: '55%' },
    isStacked: true,
    legend: 'none', // Hides the Legend.
    vAxis: { gridlines: { count: 4 } },

    chartArea:{
      // left:5,
      top: 15,
      bottom: 16,
      right: 5,
      width: '90%'
    }

  };


  var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
  chart.draw(view, options);
}

/*

var data = google.visualization.arrayToDataTable([
  //   [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
  //   'Friday', 'Saturday'],
  //   ['task 1', 0.5,  0,  0,  0.5,  0.0,  1,  0.5],
  //   ['task 1', 0.5,  0,  0,  0.5,  0.0,  1,  0.5],
  //   ['task 1', 0.5,  0,  0,  0.5,  0.0,  1,  0.5],
  //   ['task 1', 0.5,  0,  0,  0.5,  0.0,  1,  0.5],
  // ])

    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
     'Friday', 'Saturday' ],
    ['2010', 10, 24, 20, 32, 18, 5, ],
    ['2020', 16, 22, 23, 30, 16, 9, ],
    ['2030', 28, 19, 29, 30, 12, 13,]

    // var data = google.visualization.arrayToDataTable([
    //   ['Day', 'Goal', { role: "style" }],
    //   ['Sun',  5, 'color: #000000; opacity: 0.8'],
    //   ['Mon',  7, 'color: #000000; opacity: 0.8'],
    //   ['Tue', 15, 'color :#000000; opacity: 0.8'],
    //   ['Wed',  5, 'color: #000000; opacity: 0.8'],
    //   ['Thur', 2, 'color: #000000; opacity: 0.8'],
    //   ['Fri',  10, 'color:#000000; opacity: 0.8'],
    //   ['Sat',  5, 'color: #000000; opacity: 0.8']
    // ]);

  // ]);

*/

/*

 ['kpi', 'Sun', { role: "style" }, 'Mon', { role: "style" }, 'Tue', { role: "style" }, 'Wed', { role: "style" }, 'Thur', { role: "style" }, 'Fri', { role: "style" }, 'Sat', { role: "style" }],
    ['Kpi 1',  1,  'color: #0DABF5; opacity: 0.8',
              0.5, 'color: #F10DF5; opacity: 0.8', 
              0.5, 'color: #ED8806; opacity: 0.8', 
              0.5, 'color: #E9ED06; opacity: 0.8', 
              0.5, 'color: #1EED06; opacity: 0.8',
              0.5, 'color: #06EDE9; opacity: 0.8',  
              0.5, 'color: #ED1606; opacity: 0.8'
            
            
            ]
*/