//console.log('hello');

$(document).ready(function(){
    //console.log('hello');

    $('#slideshow .slick').slick();
        
       
    $('.welcome').on('mouseover', pleezWork);
    // console.log('butter');
        function pleezWork(){ 
        
        $('#moreText').hide();
  
        var submenu = $(this).find('#moreText');
  
        submenu.show();
  
        submenu.on('mouseleave', function(){
        $('#moreText').hide();
    });
  
  
  
}
   
});
