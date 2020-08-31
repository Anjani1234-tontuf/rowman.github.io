$(document).ready(function(){
  Materialize.toast('Select a COLOR or PATTERN! <br/> Hit the RIGHT arrow button to go to the next step!', 4500);
  $('.colors').children().each(function(){
    $(this).css('background-color', $(this).attr('class'));
  });
  $('.colors').on('click', 'div', function(){
    $('html').css('background',$(this).css('background-color'));
  });
  $('.patterns').on('click', 'img', function(){
    $('html').css('background', `url(${$(this).attr('src')}) repeat`);
    console.log($('html').css('background'));
  });
  $('.rightarr').click(function(){
    localStorage.setItem('background-color', $('html').css('background'));
  });
  $('.halp').click(function(){
      Materialize.toast('Select a COLOR or PATTERN! <br/> Hit the RIGHT arrow button to go to the next step!', 3000);
  });
});
