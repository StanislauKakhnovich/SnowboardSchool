$('document').ready(function() {

 /* if ($('.min_width_600px').is(':visible')) {
    $('.picture').click(function() 
    {
      if ($(this).hasClass('click1')) 
      {
        $(this).css({
            'transform': 'scale(1.2)',
            'position': 'absolute', 
            'left': '15vw', 
            'top': '20vh',
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

  if ($('.max_width_599px').is(':visible')) {
    $('.picture').click(function() 
    {
      if ($(this).hasClass('click1')) 
      {
        $(this).css({
            'transform': 'scale(1.0)',
            'position': 'relative', 
            'left': '0', 
            'top': '0',
            'z-index': '1'
            
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
*/
if(window.matchMedia('(min-width: 600px)').matches) 
{
  $('.picture').click(function() 
    {
      if ($(this).hasClass('click1')) 
      {
        $(this).css({
            'transform': 'scale(1.2)',
            'position': 'absolute', 
            'left': '15vw', 
            'top': '20vh',
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

