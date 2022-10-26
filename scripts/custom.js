window.onload = function() {
  Particles.init({
    selector: '.background',      
    color: ['#aa55ff', '#3535ff'],
    connectParticles: true,

    responsive: [
    { breakpoint: 768,
      options: {
        maxParticles: 25
      }
    }]
  })
};

$('.nav-link').on('click', function(event){
  if (!$('.sobre').is(':visible')) {
    event.preventDefault();
    console.log('ok');
    $('.seta').removeClass('seta_inv');
 }
})

$('.flip').hover(
  function(){
    $(this).children().addClass('fa-flip');
  },
  function(){
    $(this).children().removeClass('fa-flip');
  }
);

$('.ola').on('click', (function(){    
  $('.sobre').show(500);
}));