$(document).ready(function(){
  var background = localStorage.getItem('background-color');
  $('html').css('background', background);
  $('.store').append(localStorage.getItem('storedTitle'));
  $('.giffery').append(localStorage.getItem('giffery'));
  $('.message').text((localStorage).getItem('message'));
  $('.towhom').text(`To: ${localStorage.getItem('to')}`);
  $('.fromya').text(`From: ${localStorage.getItem('from')}`);
  Materialize.toast('Click me to see your message!',2000);
  $('.contain').on('click', function(){
    Materialize.fadeInImage('.sec');
    $('.contain').css('display','none');
    $('.sec').css('display','block');
  });
});
