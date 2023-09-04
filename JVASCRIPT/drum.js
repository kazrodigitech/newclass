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
        case"b":
        var tom1 = new Audio("")
        console.log(tom1)
        break; 
        case "two" :
            var tone2 = new Audio("sound/tom-2.mp3");
                tone2.play(); 
                console.log(tone2)
                break; 
    }
  })
}