console.log(d3)
const dataset = [25, 30, 45, 60, 100];

const svg = d3.select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 60)
  .attr("y", d => 100 - d)
  .attr("width", 50)
  .attr("height", d => d)
  .attr("fill", "teal");

// d3.select("svg")
// .append("svg")
// .attr("width", 40)
// .attr("height", 40);

// const data = [10, 20, 30, 40, 50];

// d3.select("svg")
//   .selectAll("circle")
//   .data(data)
//   .enter()
//   .append("circle")
//   .attr("cx", (d, i) => (i * 60) + 50)
//   .attr("cy", 50)
//   .attr("r", d => d)
//   .style("fill", "orange");

// d3.select("svg")
// .append("rect")
// .attr("x", 80)
// .attr("y", 80)
// .attr("width", 80)
// .attr("height", 20)
// .style("fill","red");

// d3.select("svg")
//   .append("circle")
//   .attr("cx", 50)
//   .attr("cy", 50)
//   .attr("r", 40)
//   .style("fill", "blue");

// d3.select("svg")
//   .append("circle")
//   .attr("cx", 150)
//   .attr("cy", 50)
//   .attr("r", 40)
//   .style("fill", "pink");
