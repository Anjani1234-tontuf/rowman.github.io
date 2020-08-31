$(document).ready(function(){
  Materialize.toast('Enter a special message!', 4000);
  $('.halp').click(function(){
    Materialize.toast('Enter a special message!', 4000);
  });
  var background = localStorage.getItem('background-color');
  $('html').css('background', background);
  $('.store').append(localStorage.getItem('storedTitle'));
  $('.giffery').append(localStorage.getItem('giffery'));
  $('.rightarr').click(function(){
    localStorage.setItem('message', $('textarea').val());
  });
});
