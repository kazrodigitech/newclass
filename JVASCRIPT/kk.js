let currentslideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn =document.querySelector('#prevBtn');
const NextBtn =document.querySelector('#NextBtn');

function showslide(index){
    slides.forEach(slide=>{
        slide.style.display = 'none'
    })
    slides[index].style.display = 'block'
}

function Nextslide(){
    currentslideIndex = (currentslideIndex +1) % slides.length;
    showslide(currentslideIndex);
}

function prevslide(){
    currentslideIndex = (currentslideIndex -1  + slides.length ) % slides.length;
    showslide(currentslideIndex);
}
showslide(currentslideIndex) 

    
    prevBtn.addEventListener('click',prevslide)
    NextBtn.addEventListener('click',Nextslide)


