// Variables
const slider = document.querySelector('.slider');
const sliderImages = [...document.querySelectorAll(".slider-img")];
const sliderItems = [...document.querySelectorAll(".slider-item")];

// Index of current slider image
let currentSliderImg = 1;
let sliderIntervalID;

// Slider items clic event listener
sliderItems.map((item) => {
    item.addEventListener("click", handleClick);
});

function handleClick(e) {
    stopSlider(sliderIntervalID);
    currentSliderImg = e.target.getAttribute("data-index");
    changeCurrentItem(currentSliderImg);
    changeSliderImage(currentSliderImg);
    sliderIntervalID = startSlider();
}

// Change the current item
function changeCurrentItem(index) {
    sliderItems.map((item) => {
        item.classList.remove("current");
        if(item.getAttribute('data-index') === index.toString()) {
            item.classList.add("current");
        }
    });
}

// Display in full screen the image whose index is passed as parameter
function changeSliderImage(index) {
    sliderImages.map((img) => {
        if (img.getAttribute("data-index") === index.toString()) {
            img.classList.add("current");
        } else {
            img.classList.remove("current");
        }
    });
}

// currentSliderImg incrementer
function switchItem() {
    currentSliderImg++;
    if (currentSliderImg > 3) {
        currentSliderImg = 1;
    }

    changeCurrentItem(currentSliderImg);
    changeSliderImage(currentSliderImg);
}

// Start the slider
function startSlider() {
    return setInterval(switchItem, 4000);
}

// Stop the slider
function stopSlider(id) {
    clearInterval(id);
}

// Launch slider
sliderIntervalID = startSlider();