function hardSlider() {
  //SLIDER Second way (HARD)
  const slides = document.querySelectorAll(".offer__slide"),
    current = document.querySelector("#current"),
    totalNum = document.querySelector("#total"),
    prev = document.querySelector(".offer__slider-prev"),
    next = document.querySelector(".offer__slider-next"),
    slidesWrapper = document.querySelector(".offer__slider-wrapper"),
    slidesField = document.querySelector(".offer__slider-inner"),
    slider = document.querySelector(".offer__slider"),
    width = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1,
    offset = 0;
  slider.style.position = "relative";

  if (slides.length < 10) {
    totalNum.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    totalNum.textContent = slides.length;
    current.textContent = slideIndex;
  }
  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s";
  slidesWrapper.style.overflow = "hidden";

  slides.forEach((slide) => (slide.style.width = width));

  //NAVIGATION
  const indicator = document.createElement("ol"),
    dots = [];
  indicator.classList.add("indicator");
  slider.append(indicator);
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("dot");
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicator.append(dot);
    dots.push(dot);
  }

  next.addEventListener("click", () => {
    if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.replace(/\D/g, "");
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = `${slideIndex}`;
    }
    dots.forEach((dot) => {
      dot.style.opacity = ".5";
    });
    dots[slideIndex - 1].style.opacity = 1;
  });
  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = +width.replace(/\D/g, "") * (slides.length - 1);
    } else {
      offset -= +width.replace(/\D/g, "");
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = `${slideIndex}`;
    }
    dots.forEach((dot) => {
      dot.style.opacity = "0.5";
    });
    dots[slideIndex - 1].style.opacity = 1;
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIndex = slideTo;
      offset = +width.slice(0, width.length - 2) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;
      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = `${slideIndex}`;
      }
      dots.forEach((dot) => {
        dot.style.opacity = "0.5";
      });
      dots[slideIndex - 1].style.opacity = 1;
    });
  });
}
export default hardSlider;
