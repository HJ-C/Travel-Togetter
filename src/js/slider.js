function start(){

    let propSlider = {
        slider: document.getElementById('slider')
    }
    
    
    // Slider
    let setSlide = {
        init: function () {
            setInterval(setSlide.moveSlide, 3000);
        },
    
        moveSlide: function () {
            propSlider.slider.style.transition = 'all 1s ease';
            propSlider.slider.style.marginLeft = '-100%';
    
            setTimeout(() => {
                propSlider.primerSlide = propSlider.slider.firstElementChild;
    
                propSlider.slider.appendChild(propSlider.primerSlide);
    
                propSlider.slider.style.transition = 'unset';
                propSlider.slider.style.marginLeft = 0;
            }, 1000);
        }
    }
    setSlide.init()
    }
    start()

    export default start