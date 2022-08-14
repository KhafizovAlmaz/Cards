const slidesPlugin = (selectSlide = 0) => {
    const slides = document.querySelectorAll('.slide');

    slides[selectSlide].classList.add('active')
    
    for (const slide of slides) {
        slide.addEventListener('click',() => {
            clearActiveClasses()
    
            slide.classList.add('active')
        })
    }
    
    
    const clearActiveClasses = () => {
        slides.forEach((slide)=> {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin()