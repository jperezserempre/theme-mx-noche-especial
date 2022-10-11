import { Toggle } from "../models";

export const toggle = (params: Toggle):void => {

    const { handler, container, toggleClass, lockBodyScroll = false } = params
    const handlerIcons = document.querySelectorAll(handler);
    const dropdownContainers = document.querySelectorAll(container);
    if (handlerIcons && dropdownContainers) {
        handlerIcons.forEach((handlerIcon, index) => {
            handlerIcon.addEventListener('click', () => {
                handlerIcon.classList.toggle(toggleClass)
                dropdownContainers[index].classList.toggle(toggleClass);
                //lock body scroll
                if (lockBodyScroll) document.body.classList.toggle('no-scroll');
            })
        })
    }
}
