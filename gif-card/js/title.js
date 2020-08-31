$(document).ready(function(){
  Materialize.toast('Fill in your custom title <br> And play around with colors and fonts! <br> Hit the RIGHT arrow when you&#39;re ready!', 4000);
  var fontArray = ['Times New Roman', 'Arial', 'Courier', 'Garamond', 'CookieMonster', 'Digitalt', 'KCFonts', 'Headliner', 'Fashion', 'Hugs', 'PassionTea', 'Fizzo', 'CookieDough', 'Basterds', 'TimeBurner', 'Trench', 'VarianeScript'];
  var selectedFont = 'Roboto';
  $('.modal-trigger').leanModal();
  var background = localStorage.getItem('background-color');
  $('html').css('background', background);
  $('#titleTxt').keyup(function(){
    $('.bigTitle').children()[0].innerText = $(this).val();
  });
  $('.modal-trigger').click(function(){
    $('.modal-content').children('h5').remove();
    for(var i = 0; i < fontArray.length; i++){
      var a = document.createElement('a');
      $(a).addClass('collection-item');
      $(a).attr('href', '#!');
      a.innerHTML = $('.bigTitle').children()[0].innerText;
      $(a).css('font-family', fontArray[i]);
      $(a).css('font-size', '2em');
      $(a).css('color', 'black');
      $('.collection').append(a);
    }
  });
  $('.collection').on('click', 'a', function(){
    $(this).css('background-color', 'rgb(186, 186, 186)');
    $(this).prevAll().css('background-color','white');
    $(this).nextAll().css('background-color','white');
  });
  $('.modal-content').on('click', 'a', function(){
    selectedFont = $(this).css('font-family');
  });
  $('.modal-action').click(function(){
    $('.bigTitle').children()[0].style.fontFamily = selectedFont;
  });
  $('.colorSel').on('input', function(){
    $('.bigTitle').children()[0].style.color = $(this).val();
  });
  $('.one').click(function(){
    $('.bigTitle').children()[0].style.fontSize= '3rem';
  });
  $('.two').click(function(){
    $('.bigTitle').children()[0].style.fontSize= '3.56rem';
  });
  $('.three').click(function(){
    $('.bigTitle').children()[0].style.fontSize= '4.2rem';
  });
  $('.rightarr').click(function(){
    localStorage.setItem('storedTitle', $('.store').get(0).innerHTML);
  });
  $('.halp').click(function(){
    Materialize.toast('Fill in your custom title <br> And play around with colors and fonts! <br> Hit the RIGHT arrow when you&#39;re ready!', 4000);
  });
});
