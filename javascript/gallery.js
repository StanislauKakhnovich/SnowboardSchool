$('document').ready(function() {

 
if(window.matchMedia('(min-width: 600px)').matches) 
{
  $('.picture').click(function() 
    {
      if ($(this).hasClass('click1')) 
      {
        $(this).css({
            'transform': 'scale(1.3)',
            'position': 'absolute', 
            'left': '15vw', 
            'top': '25vh',
            'z-index': '2'
            
        })
      } 
      else 
      {
        $(this).css({
            'transform': 'scale(1.0)',
            'position': 'relative', 
            'left': '0', 
            'top': '0',
            'z-index': '1'
        })
      }
      
      $(this).toggleClass('click1');
      return false;
    });
}
    
});

