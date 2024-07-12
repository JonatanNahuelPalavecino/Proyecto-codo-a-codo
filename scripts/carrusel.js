const splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 1,
    focus  : 'center',
    autoplay: true,
});
  
splide.mount();



const splide2 = new Splide( '.another-splide', {
    type   : 'loop',
    perPage: 1,
    focus  : 'center',
    autoplay: true,
    arrows: false,
    speed: 1000,
    interval: 7000
});
  
splide2.mount();

