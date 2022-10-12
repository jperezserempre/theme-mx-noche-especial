import { toggle } from "../utils";

//general scripts for all pages
document.addEventListener('DOMContentLoaded', () => {

    /* sticky close */
    toggle({
        handler: '.abi-sticky--close',
        container: '.abi-sticky',
        toggleClass: 'hidden',
    });
})
