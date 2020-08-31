$(document).ready(function() {
 Materialize.toast('Search for GIFs and CLICK on them <br/> to add the ones you want to your message!', 4000);
 $('.halp').click(function() {
  Materialize.toast('Search for GIFs and CLICK on them <br/> to add the ones you want to your message!', 4000);
 });
 var gifArr = [];
 $('html').css('background', localStorage.getItem('background-color'));
 $('.store').append(localStorage.getItem('storedTitle'));
 $('input').keyup(function(event) {
  event.preventDefault();
  $('.heading').css('display', 'block');
  $('.popGIF').html('');
  $('.popGIF').css('display', 'block');
  var input = $('#gifSearch').val();
  gifArr = [];
  $.ajax({
   method: 'GET',
   url: `https://api.riffsy.com/v1/search?tag=${input}`,
   dataType: 'json',
   success: function(data) {
    $('.popGIF').innerHTML = '';
    var giffies = data.results;
    for (var i = 0; i < giffies.length; i++) {
     let url = giffies[i].url;
     gifArr.push(url);
    }
    fillGIF();
   },
   error: function(err) {
    console.log('SHMERROR', err);
   }
 });
 });

 function fillGIF() {
  for (var i = 0; i < gifArr.length; i++) {
   var childElem = document.createElement('img');
   childElem.src = gifArr[i];
   $('.popGIF').append(childElem);
  }
 }
 $('.popGIF').on('click', 'img', function() {
  var img = document.createElement('img');
  img.src = this.src;
  $('.giffage').append(img);
});
 $('.rightarr').click(function() {
  localStorage.setItem('giffery', $('.giffery').html());
});
});
