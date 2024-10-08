function changeColor(element) {
  const colors = ['white', 'black'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  element.style.color = randomColor;
}

const clickElements = document.querySelectorAll('.click');

clickElements.forEach(function(element) {
  element.addEventListener('click', function() {
      changeColor(element);
  });
});