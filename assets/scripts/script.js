$(function() {

  $("h2").prepend('<i class="material-icons linkIcon">link</i>');
  
  $("h2").hover(function(){
    $(this).find('.linkIcon').toggle();
  });
  
});
