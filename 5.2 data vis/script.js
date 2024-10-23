
const data = [
    { date: '2024-01-01', streams: 5000000 },
    { date: '2024-02-01', streams: 5300000 },
    { date: '2024-03-01', streams: 4900000 },
    { date: '2024-04-01', streams: 5200000 },
    { date: '2024-05-01', streams: 5400000 },
    { date: '2024-06-01', streams: 5600000 },
    { date: '2024-07-01', streams: 6000000 },
    { date: '2024-08-01', streams: 5800000 },
    { date: '2024-09-01', streams: 6100000 },
    { date: '2024-10-01', streams: 6200000 },
  ];
  

  const margin = {top: 40, right: 30, bottom: 70, left: 60};
  const width = 800 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;
  

  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
  

  const parseTime = d3.timeParse("%Y-%m-%d");
  

  data.forEach(d => {
    d.date = parseTime(d.date);
  });
  

  const x = d3.scaleBand()
    .range([0, width])
    .domain(data.map(d => d.date))
    .padding(0.2);
  
  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.streams)])
    .range([height, 0]);
  
  // Add the x Axis
  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b %Y")))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end");
  
  // Add the y Axis
  svg.append("g")
    .call(d3.axisLeft(y));
  
  // Add tooltips
  const tooltip = d3.select("body").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0);
  

  svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.date))
    .attr("width", x.bandwidth())
    .attr("y", height) 
    .attr("height", 0) 
    .on("mouseover", function(event, d) {
      d3.select(this).transition().duration(200).style("fill", "darkorange");
      tooltip.transition().duration(200).style("opacity", .9);
      tooltip.html(`<strong>Date:</strong> ${d3.timeFormat("%B %Y")(d.date)}<br><strong>Streams:</strong> ${d.streams.toLocaleString()}`)
        .style("left", (event.pageX + 5) + "px")
        .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function(d) {
      d3.select(this).transition().duration(200).style("fill", "steelblue");
      tooltip.transition().duration(500).style("opacity", 0);
    })
    .transition() 
    .duration(1000) 
    .attr("y", d => y(d.streams)) 
    .attr("height", d => height - y(d.streams));
  

  svg.selectAll(".text")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("x", (d) => x(d.date) + x.bandwidth() / 2 )
    .attr("y", height) 
    .attr("text-anchor", "middle")
    .text(d => d.streams.toLocaleString())
    .transition()
    .duration(1000)
    .attr("y", (d) => y(d.streams) - 5); 
   