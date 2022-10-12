/** scripts for home **/

import { videoRender } from "../components";
import { pageExist } from "../helpers";
import { pages } from '../models';
import { toggle } from "../utils";

// any class in the home contains "abi-home"  
pageExist({
    actualPage: pages.home,
    execute: () => {
        /* open modal */
        toggle({
            handler: '.abi-videoBanner__preview',
            container: '#modalYoutube',
            toggleClass: 'abi-modal--active',
            lockBodyScroll: true
        })
        /* videoRender in modal */
        // Detect clicks on the video thumbnails
        const thumbnailsVideos = document.querySelectorAll('.abi-videoBanner [data-video-id]');
        const lengthOfVideos = thumbnailsVideos.length;
        const videoRenderContainer = document.querySelector('.abi-modal-video-banner__preview')
        if (lengthOfVideos) {
            for (let i = 0; i < lengthOfVideos; i++) {
                thumbnailsVideos[i].addEventListener('click', (event) => {
                    videoRender({
                        event: event,
                        renderIn:'.abi-modal-video-banner__preview',
                        dataId:'data-video-id'                        
                    });
                })
            }
        }
        /* close modal */
        toggle({
            handler: '.abi-modal__btn-close',
            container: '#modalYoutube',
            toggleClass: 'abi-modal--active',
            lockBodyScroll: true
        })
        /* when close modal */
        const modalCloseElement = document.querySelector('.abi-modal .abi-modal__btn-close')
        modalCloseElement?.addEventListener('click', () => {
            /* find if iframe is injected*/
            const iframeVideo = document.querySelector('.abi-modal .abi-videoRender');
            /* reject the player */
            setTimeout(() => {
                if (videoRenderContainer) {
                    iframeVideo?.replaceWith(videoRenderContainer);
                }
            }, 700);
            
        });
    }
})