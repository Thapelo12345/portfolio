/* id="project-btn"
id="about-btn"
button id="what-i-do-btn" */

$(document).ready(function(){
    
$('#project-btn').click(()=>{
$('.footer-nav-btn').css('transform', 'scale(1)')
$('#project-btn').css('transform', 'scale(1.2)')
$('.footer-section').css('transform', 'translateX(0)')

})//end of project func

$('#about-btn').click(()=>{
$('.footer-nav-btn').css('transform', 'scale(1)')
$('#about-btn').css('transform', 'scale(1.2)')
$('.footer-section').css('transform', 'translateX(-100%)')
})//end of about func

$('#what-i-do-btn').click(()=>{
$('.footer-nav-btn').css('transform', 'scale(1)')
$('#what-i-do-btn').css('transform', 'scale(1.2)')
$('.footer-section').css('transform', 'translateX(-200%)')

})//end of what i do func

})