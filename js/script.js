import "nodelist-foreach-polyfill";
import accordion from "./modules/accordion";
import classComponents from "./modules/classComponents";
import dataBuilder from "./modules/dataBuilder";
import easySlider from "./modules/easySlider";
import hardSlider from "./modules/hardSlider";
import loader from "./modules/loader";
import modal from "./modules/modal";
import smartForm from "./modules/smartForm";
import tabs from "./modules/tabs";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimer = setTimeout(() => openModal(".modal", modalTimer), 50000);
  accordion();
  classComponents();
  dataBuilder();
  easySlider();
  hardSlider();
  loader();
  modal("[data-modal]", ".modal", modalTimer);
  smartForm(modalTimer);
  tabs();
});
