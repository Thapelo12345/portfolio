import { arr } from './project-arr.js';

var arrPos = 0
function moveElement(itemObj){
    $('#project-name').text(itemObj.title)
    $('#desktop').attr('src', itemObj.desktopUrl)
    $('#mobile').attr('src', itemObj.mobileUrl)
    $('#to-project-link').attr('href', itemObj.link)
    $('#descrip-project').text(itemObj.description)

}//end of move element func

$(document).ready(function(){
    $('#forward').click(()=>{
      
arrPos + 1 === arr.length ? arrPos = 0 : ++arrPos
 moveElement(arr[arrPos])

    })

    $('#back').click(()=>{
arrPos - 1 === -1 ? arrPos = arr.length - 1 : --arrPos
moveElement(arr[arrPos])
    })
})


