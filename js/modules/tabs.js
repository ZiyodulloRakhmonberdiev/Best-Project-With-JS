function tabs() {
  // const tabs = document.querySelector(".tabheader__item"),
  //   headerParents = document.querySelector(".tabheader__items"),
  //   tabContent = document.querySelector(".tabcontent");

  // function hideTabContent() {
  //   tabContent.forEach((items) => {
  //     items.style.display = "none";
  //   });
  //   tabs.forEach((item) => {
  //     item.classList.remove("tabheader__item-active");
  //   });
  // }
  // function showTabContent(i = 0) {
  //   tabContent[i].style.display = "block";
  //   item[i].classList.add("tabheader__item-active");
  // }
  // // hideTabContent();
  // showTabContent();

  // headerParents.addEventListener("click", (event) => {
  //   if (
  //     event.target &&
  //     event.target.classList.contains("tabheader__item-active")
  //   ) {
  //     tabs.forEach((item, i) => {
  //       if (event.target == item) {
  //         hideTabContent();
  //         showTabContent(i);
  //       }
  //     });
  //   }
  // });
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".tabcontent"),
    headerParents = document.querySelector(".tabheader__items");
  function hideTabContent() {
    tabContent.forEach((items) => {
      items.style.display = "none";
    });
    tabs.forEach((items) => {
      items.classList.remove("tabheader__item_active");
    });
  }
  function showTabContent(i = 0) {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  headerParents.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (event.target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}
export default tabs;
