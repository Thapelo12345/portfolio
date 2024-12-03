
$(document).ready(function(){
    
const socialMedia = $('.social-media-links')

socialMedia.hover(

function(){

if($(this).attr('id') === 'facebook-linker'){$('.linker:nth-child(1)').css('top', '4%')}
else if($(this).attr('id') === 'linkedIn-linker'){$('.linker:nth-child(2)').css('top', '4%')}
else if($(this).attr('id') === 'github-linker'){$('.linker:nth-child(3)').css('top', '4%')}  

},

function(){$('.linker').css('top', '8%')}
)
   
})