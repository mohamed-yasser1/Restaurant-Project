// counter

var num1=document.getElementById("count1");
var num2=document.getElementById("count2");
function animated(element,start,end,duration){
     var range=end-start;
     var current=start;
     var increment =0;
     if (end > start ){
        increment =1;
     }
     else {
        increment=-1;
     }
     var timer =setInterval(function(){
        current += increment;
        element.textContent =current
        if(current == end){
            clearInterval(timer)
        }

     },duration)
    }
    animated(num1,0,15,300)
    animated(num2,0,50,200)
    // end counter

