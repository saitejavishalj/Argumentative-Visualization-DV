// var svg1 = d3.select("#chart1");
// var width = svg1.style('width').replace('px','');
// var height = svg1.style("height").replace('px','');
// console.log("Printing width",width);
// console.log("Printing height",height);

var margin = {top: 30, right: 0, bottom: 20, left: 60},
    width = 665 - margin.left - margin.right,
    height = 490 - margin.top - margin.bottom;

var data_left = [];
var data_right = [];
// console.log(margin);



document.addEventListener('DOMContentLoaded',function(){
    mapSvg = d3.select('#chart1')
      Promise.all([d3.csv('data/elections_2020.csv')]).then(function(values){
            data = values[0];
            data.forEach(d => {
            d.state_abv = d['State Abv'];
            d.vote_count = +d['Total Ballots Counted (Estimate)'].replace(/[ ,.]/g,'');
            d.vote_percentage = +d['VEP Turnout Rate'].replace(/[ ,%]/g,'');
            data_left.push({
                state_name: d['State'],
                state_abv: d['State Abv'],
                vote_count: +d['Total Ballots Counted (Estimate)'].replace(/[ ,.]/g,'')
            });
            data_right.push({
                state_name: d['State'],
                state_abv: d['State Abv'],
                vote_perc: +d['VEP Turnout Rate'].replace(/[ ,%]/g,'')
            })
          })
    // console.log(data_left);
    
    drawleft();
    drawright();
    })
})

function drawleft(){
    margin = {top: 25, right: 10, bottom: 100, left: 55}
    width = 668 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;
    console.log("Printing Data",data_left);
    var svg = d3.select("#chart1")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")
    var tooltip = d3.select("body")
    .append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("z-index", 10)
        .style("visibility", "hidden")
        .text("Simple text");

    var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(data_left.map(function(d) { return d.state_abv; }))
    .padding(0.2);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .style("text-anchor", "middle");

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 19300000])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y).tickFormat(d3.format(".0s")));

  // Bars
  svg.selectAll("bar")
    .data(data_left)
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.state_abv); })
      .attr("y", function(d) { return y(d.vote_count); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.vote_count); })
      .attr("fill", "#e77c7c")
      .on("mouseover", d => {tooltip.text(d.state_name + " : " + (d.vote_count).toFixed(0)); return tooltip.style("visibility", "visible")})
        .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
        .on("mouseout", () => tooltip.style("visibility", "hidden"));

    svg.selectAll(".text")
      .data(data_left)
      .enter()
      .append("text")
      .attr("dy", ".4em")
      .classed('text1',true)
      .attr("y", function(d) { return y(d.vote_count)-5; })
      .attr("x", function(d) { return x(d.state_abv)+5; })
      .attr("text-anchor", "middle")
      .text(function(d) { return d.state_abv; });

      svg.append("text")             
      .attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 10) + ")")
      .style("text-anchor", "middle")
      .attr('font-size','0.8em')
      .text("States in United States");

      svg.append("text")             
      .attr("transform", "translate(" + (width/2-12) + " ," + (height + margin.top + 50) + ")")
      .style("text-anchor", "middle")
      .attr('font-size','0.95em')
      .text("Left side: Visualizing the Voter's turnout by only taking the number of votes polled for each state.");

      svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2)+15)
        .attr("text-anchor", "middle")  
        .style("font-size", "19px") 
        .style("text-decoration", "underline")  
        .text("Voters' Turnout");

      svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left+8)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .attr('font-size','0.8em')
        .text("Number  of  Votes  Polled");

}

function drawright(){
    margin = {top: 25, right: 10, bottom: 100, left: 50}
    width = 668 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;
    console.log("Printing right values", data_right)
    var svg = d3.select("#chart2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")


    var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(data_right.map(function(d) { return d.state_abv; }))
    .padding(0.2);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .style("text-anchor", "middle");

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 100])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

    var tooltip = d3.select("body")
    .append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("z-index", 10)
        .style("visibility", "hidden")
        .text("Simple text");

  // Bars
  svg.selectAll("bar")
    .data(data_right)
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.state_abv); })
      .attr("y", function(d) { return y(d.vote_perc); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.vote_perc); })
      .attr("fill", "#aeccc6")
      .on("mouseover", d => {tooltip.text(d.state_name + " : " + (d.vote_perc).toFixed(1)+"%"); return tooltip.style("visibility", "visible")})
        .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
        .on("mouseout", () => tooltip.style("visibility", "hidden"));

    svg.selectAll(".text")
      .data(data_right)
      .enter()
      .append("text")
      .attr("dy", ".4em")
      .classed('text1',true)
      .attr("y", function(d) { return y(d.vote_perc)-5; })
      .attr("x", function(d) { return x(d.state_abv)+5; })
      .attr("text-anchor", "middle")
      .text(function(d) { return d.state_abv; });

      svg.append("text")             
      .attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 10) + ")")
      .style("text-anchor", "middle")
      .attr('font-size','0.85em')
      .text("States in United States");

      svg.append("text")             
      .attr("transform", "translate(" + (width/2-12) + " ," + (height + margin.top + 50) + ")")
      .style("text-anchor", "middle")
      .attr('font-size','0.95em')
      .text("Right side: Visualizing the Voter's turnout by taking the number of votes polled to the total eligible ");

      svg.append("text")             
      .attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 65) + ")")
      .style("text-anchor", "middle")
      .attr('font-size','0.95em')
      .text("population for each state."); 

      svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2)+15)
        .attr("text-anchor", "middle")  
        .style("font-size", "19px") 
        .style("text-decoration", "underline")  
        .text("Voters' Turnout");

      svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left+8)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .attr('font-size','0.8em')
        .text("Percentage  of  Votes  Polled");

}






























// d3.csv('/data/elections_2020.csv').then(data =>{
//     // console.log(data);
//     data.forEach(d=>{
//         d.state_abv = d['State Abv'];
//         d.vote_count = +d['Total Ballots Counted (Estimate)'].replace(/[ ,.]/g,'');
//         d.vote_percentage = +d['VEP Turnout Rate'].replace(/[ ,%]/g,'');
//     })
//     // console.log(data);
//     data_bar = data
//     drawleft();
//     drawright();
// });

// function drawleft(){
//     var x = d3.scaleBand()
//           .range([0, width])
//           .padding(0.1);
//     x.domain(data.map(function(d) { return d.salesperson; }));
//     var y = d3.scaleLinear()
//           .range([height, 0]);
//     var g = svg1.append('g')
//                 .attr('transform', 'translate('+margin.left+', '+margin.top+')');

// }