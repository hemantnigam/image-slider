var imageWidth = 110;
var imageMargin = 10;
var count = 3;
var totalSlide = 0;
let totalImageCount = document.querySelectorAll(".image").length;
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

function arrowLeftCb(e) {
  const slide = count * (imageWidth + imageMargin);
  totalSlide = totalSlide + slide;
  if (totalSlide >= 0) {
    totalSlide = 0;
  }
  document.querySelector(
    ".slider"
  ).style.transform = `translateX(${totalSlide}px)`;
}

function rightArrowCb(e) {
  const slide = count * (imageWidth + imageMargin);
  totalSlide = totalSlide - slide;
  let maxSlideWidth = -(totalImageCount - count) * (imageWidth + imageMargin);
  if (totalSlide <= maxSlideWidth) {
    totalSlide = maxSlideWidth;
  }
  document.querySelector(
    ".slider"
  ).style.transform = `translateX(${totalSlide}px)`;
}

const initializeField = (viewportImage) => {
  viewportImage = Math.min(viewportImage, totalImageCount)
  count = viewportImage;
  totalSlide = 0
  document.querySelector(
    ".slider"
  ).style.transform = `translateX(${totalSlide}px)`;
  document.querySelector("input").value = count;

  document.querySelector(".container").style.width = `${
    count * (imageWidth + imageMargin) - imageMargin
  }px`;

  document
    .querySelectorAll(".image")
    .forEach((item) => (item.style.minWidth = `${imageWidth}px`));
  document
    .querySelectorAll(".image")
    .forEach((item) => (item.style.marginRight = `${imageMargin}px`));

  arrowLeft.removeEventListener("click", arrowLeftCb);
  arrowLeft.addEventListener("click", arrowLeftCb);

  arrowRight.removeEventListener("click", rightArrowCb);
  arrowRight.addEventListener("click", rightArrowCb);
};
initializeField(count);

document.querySelector("input").addEventListener("change", (e) => {
  initializeField(e.target.value);
});
