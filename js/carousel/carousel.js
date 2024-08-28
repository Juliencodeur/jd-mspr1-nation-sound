var myCarousel = document.querySelector('#customCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  wrap: true
});


carousel.to(2);  // Va à la troisième diapositive

carousel.pause();


carousel.cycle();
