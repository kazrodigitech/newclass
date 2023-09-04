var numberofdrum =document.querySelectorAll('.btn').length;
//console.log(numberofdrum)

for (let index = 0; index < numberofdrum; index++) {
   //const element =numberofdrum[index];
  // console.log(element)
  document.querySelectorAll('.btn')[index].addEventListener("click",function(){
    console.log(index)
   var buttons = this.innerhtml
   console.log(buttons)
    switch(buttons){
        case "a" :
             var tone1 = new Audio("tom-1.mp3");
             tone1.play()
             console.log(tone1)
              break;

         case "b" :
              var tone2 = new Audio("tom-2.mp3");
                  tone2.play(); 
                  break; 
          case "three" :
              var tone3 = new Audio("");
                 tone3.play();
                 break; 
         case "four" :
              var tone4 = new Audio("");
                  tone4.play();
                  break; 
         case "five" :
              var tone5 = new Audio("");
                  tone5.play();
                  break; 
           case "six" :
               var tone6 = new Audio("");
                   tone6.play();
                   break; 
          case "seven" :
               var tone7 = new Audio("");
                  tone7.play();
                  break;
            default:
              console.log(buttons);
              break;
        }


    })


    



    
       



}



























