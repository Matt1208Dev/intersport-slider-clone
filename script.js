const slider = document.querySelector('.slider');
const sliderImages = [...document.querySelectorAll(".slider-img")];
const sliderItems = [...document.querySelectorAll(".slider-item")];
let currentSliderImg = 1;
let sliderIntervalID;

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

function changeCurrentItem(index) {
    sliderItems.map((item) => {
        item.classList.remove("current");
        if(item.getAttribute('data-index') === index.toString()) {
            item.classList.add("current");
        }
    });
}

function changeSliderImage(index) {
    sliderImages.map((img) => {
        if (img.getAttribute("data-index") === index.toString()) {
            img.classList.add("current");
        } else {
            img.classList.remove("current");
        }
    });
}

function switchItem() {
    currentSliderImg++;
    if (currentSliderImg > 3) {
        currentSliderImg = 1;
    }

    changeCurrentItem(currentSliderImg);
    changeSliderImage(currentSliderImg);
}

function startSlider() {
    return setInterval(switchItem, 4000);
}

function stopSlider(id) {
    clearInterval(id);
}

sliderIntervalID = startSlider();