const myCursor = document.getElementById("cursor")
console.log(myCursor)
window.addEventListener("mousemove", function(e) {
    const x = e.pageX
    const y = e.pageY
    myCursor.style.width = '80px'
    console.log(myCursor.style.width)
    myCursor.style.transform = `translate(${x - 80/2}px, ${y - 80/2}px)`;
    console.log(e)
})