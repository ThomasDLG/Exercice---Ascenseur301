var fadeInLeft = "animated fadeInLeft fast";
var fadeOutLeft = "animated fadeOutLeft faster";
var fadeInRight = "animated fadeInRight fast";
var fadeOutRight = "animated fadeOutRight faster";
var animationend = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";  

$(function(){

$('.control-button')
               .on('click',function(event){
                                           event.preventDefault();
                                            activateCarousel(($(event.target).attr('class').indexOf('right') > -1 )?'right':'left');
                                         }
                  ); 
updateButtons($('.carousel-item.active'));
  
 var targetClass = '.carousel-container'; 
  
$(targetClass).on('change', function(event){console.log('test'); console.log($(targetClass).attr('width'));})  
  
  
  });                
                  
                 
function activateCarousel(motion)
{
   var currentItem = $('.carousel-item.active');
   var nextItem = (motion == 'right') ? currentItem.next() : currentItem.prev();

   if(nextItem.length)
   {
      var oldMotion = (motion == 'right') ? fadeOutLeft : fadeOutRight;
      var newMotion = (motion == 'right') ? fadeInRight : fadeInLeft;
   
      nextItem.addClass(newMotion).one(animationend, function(){
      nextItem.removeClass(newMotion)
      });
      
      currentItem.addClass(oldMotion)
             .one(animationend,function(){
                               currentItem.removeClass('active').removeClass(oldMotion); 
                               nextItem.addClass('active');
                               currentItem.unbind();
                               updateButtons(nextItem);
                               });
                               

      
   }
}

function updateButtons(nextItem)
{
    if(nextItem.next().length < 1){$('.control-button.right').css('visibility','hidden');} else{$('.control-button.right').css('visibility','visible');}
    if(nextItem.prev().length < 1){$('.control-button.left').css('visibility','hidden');} else{$('.control-button.left').css('visibility','visible');}

}