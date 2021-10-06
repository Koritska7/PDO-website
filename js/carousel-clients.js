(function () {
  const slides = [
    `<img class="client-img" src="../img/kievvodocanal.svg" alt="Kievvodocanal">`,
    `<img class="client-img" src="../img/uz.png" alt="UZ">`,
    `<img class="client-img" src="../img/metalyt.png" alt="Metalyt">`,
    `<img class="client-img" src="../img/metinvest.png" alt="Metinvest">`,
    `<img class="client-img" src="../img/kte.png" alt="KTE">`,
    `<img class="client-img" src="../img/krcement.png" alt="Krcement">`,
    `<img class="client-img" src="../img/elvorti.jpg" alt="Elvorti">`,
    `<img class="client-img" src="../img/aeroc.svg" alt="Aeroc">`
  ];

  let currentSlideIdx = 0;
  function showCurrentSlide() {
      const slideContainer = document.querySelector('.carousel-clients .slider-logotypes');
      slideContainer.innerHTML = slides[currentSlideIdx] + slides[currentSlideIdx+1] + slides[currentSlideIdx+2] + slides[currentSlideIdx+3];
  } 

function nextSlide() {
  currentSlideIdx++;
  if(currentSlideIdx >= slides.length - 3) currentSlideIdx = 0;
  showCurrentSlide();
}
function prevSlide() {
  currentSlideIdx--;
  if(currentSlideIdx < 0)
  currentSlideIdx = slides.length - 4;
  showCurrentSlide();
}
//*setInterval(nextSlide, 3000);
showCurrentSlide();

document.querySelector('.btn-next').addEventListener('click', nextSlide);
document.querySelector('.btn-prev').addEventListener('click', prevSlide);
})();