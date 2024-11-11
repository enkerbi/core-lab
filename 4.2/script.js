
const ctaButton = document.querySelector('.cta-button');


ctaButton.addEventListener('click', () => {
  ctaButton.classList.add('clicked');
  

  setTimeout(() => {
    ctaButton.classList.remove('clicked');
  }, 200);
});
