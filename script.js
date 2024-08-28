$(document).ready(function(){
  $('.left-curtain').css('width', '0%');
  $('.right-curtain').css('width', '0%');

  $('.valentines-day').click(function(){
    // Rallenta l'animazione della caduta aumentando la durata a 5 secondi
    $('.envelope').css({'animation':'fall 5s linear 1', '-webkit-animation':'fall 5s linear 1'});
    // Rallenta il fadeOut aumentando il tempo a 2000ms (2 secondi)
    $('.envelope').fadeOut(2000, function() {
      
      $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
      
      // Rendi visibile la carta con una transizione più lenta
      $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
      // Aumenta la durata dell'animazione a 3000ms (3 secondi)
      $('#card').animate({'opacity': 1}, {duration: 3000, step: function(now, fx) {
        var scale = 1 + Math.sin(now * Math.PI) * 0.1; 
        $(this).css('transform', 'scale(' + scale + ')');
      }}); 
    });
  });
});

    
