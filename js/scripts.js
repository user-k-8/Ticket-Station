function setupSlider(sliderContainer) {
    const slider = sliderContainer.querySelector('.slider');
    const prevBtn = sliderContainer.querySelector('.prev-btn');
    const nextBtn = sliderContainer.querySelector('.next-btn');
    const slideItems = sliderContainer.querySelectorAll('.slide-item');
    const numVisibleItems = 3; // Change this value to display a different number of items
  
    let currentPosition = 0;
    const slideItemWidth = slideItems[0].clientWidth;
    const totalSlideWidth = slideItemWidth * slideItems.length;
  
    slider.style.width = `${totalSlideWidth}px`; // Set the slider width to accommodate all slide items
  
    function slideTo(position) {
      slider.style.transform = `translateX(${position}px)`;
    }
  
    prevBtn.addEventListener('click', () => {
      if (currentPosition === 0) {
        currentPosition = -(totalSlideWidth - numVisibleItems * slideItemWidth);
      } else {
        currentPosition += slideItemWidth;
      }
      slideTo(currentPosition);
    });
  
    nextBtn.addEventListener('click', () => {
      if (currentPosition === -(totalSlideWidth - numVisibleItems * slideItemWidth)) {
        currentPosition = 0;
      } else {
        currentPosition -= slideItemWidth;
      }
      slideTo(currentPosition);
    });
  }
  
  // Call the setupSlider function for each slider container on the page
  const sliders = document.querySelectorAll('.slider-container');
  sliders.forEach(setupSlider);