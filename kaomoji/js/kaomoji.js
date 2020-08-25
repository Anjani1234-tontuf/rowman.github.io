document.addEventListener("DOMContentLoaded",function(){
    new ClipboardJS('.kaomoji');

    tippy('.kaomoji', {
        content: 'copied!',
        trigger: 'click', 
        theme: 'light'
      })
});

//uh, fix this. 
//Need this to dynamically select element to copy without adding a mess of different html attributes. 
//find a way to use "this" in vanilla js