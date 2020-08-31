$(document).ready(function(){
  Materialize.toast('Fill in the TO and FROM fields. <br/> Hit the RIGHT arrow button to go to the next step!', 4500);
  $('.rightarr').click(function(event){
    event.preventDefault();
    var inputs = $('.field');
    var isBlank = false;
    for(var i = 0; i < inputs.length; i++){
      if (inputs[i].value === ''){
        isBlank = true;
        break;
      }
    }
    if(isBlank === true){
      Materialize.toast('You left a field empty!', 4000);
    }else{
      localStorage.setItem('to', $('.tos').val());
      localStorage.setItem('from', $('.froms').val());
      window.location.assign('background.html');
    }
  });
  $('.halp').click(function(){
    Materialize.toast('Fill in the TO and FROM fields. Hit the right arrow button to go to the next step!', 2500);
  });
});
