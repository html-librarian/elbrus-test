import { Modal } from "../../UI/modal/modal";
import Swiper from "swiper";

Modal()

const swiper = new Swiper(".booking-list", {
    slidesPerView: "auto",
    spaceBetween: 8,
    centeredSlides: true,
    centeredSlidesBounds: true,
    autoHeight: true
});
