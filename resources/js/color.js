$( document ).ready(function() {

  var h = $( window ).height();
  $('.titre').css('margin', h/3+'px 0px '+h/6+'px 0px');

  function chapitre (el) {
    var bodyColor = document.body.className;
    if(el.dataset.color && el.dataset.color!=bodyColor){
      $('body').toggleClass('black white');
    }
  }

  ScrollReveal().reveal('.chapitre', { reset : true, afterReveal: chapitre });
  /*

  function img (el) {
    if(el.dataset.img){
      $('.memoire').css("background-image","url('img/"+el.dataset.img+".png')");
    }
  }

  ScrollReveal().reveal('.text', { reset : true, afterReveal: img });

  */

});