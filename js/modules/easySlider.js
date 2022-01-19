function easySlider() {
  //SLIDER First way (EASY)
  // const slides = document.querySelectorAll(".offer__slide"),
  //   current = document.querySelector("#current"),
  //   totalNum = document.querySelector("#total"),
  //   prev = document.querySelector(".offer__slider-prev"),
  //   next = document.querySelector(".offer__slider-next");
  // let slideIndex = 1;
  // show(slideIndex);
  // function show(s) {
  //   if (s > slides.length) {
  //     slideIndex = 1;
  //   }
  //   if (s < 1) {
  //     slideIndex = slide.length;
  //   }
  //   slides.forEach((item) => {
  //     item.style.cssText = "display: none";
  //   });
  //   slides[slideIndex - 1].style.display = "block";
  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //     totalNum.textContent = `0${slides.length}`;
  //   } else {
  //     current.textContent = slideIndex;
  //     totalNum.textContent = slides.length;
  //   }
  //   totalNum.textContent = slides.length;
  // }
  // function sliderPlus(s) {
  //   show((slideIndex += 1));
  // }
  // function sliderMinus(s) {
  //   show((slideIndex -= 1));
  // }
  // next.addEventListener("click", () => {
  //   sliderPlus(1);
  // });
  // prev.addEventListener("click", () => {
  //   sliderMinus(-1);
  // });
}
export default easySlider;
