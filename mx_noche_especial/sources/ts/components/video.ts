// lazy load youtube video
export const videoRender = (event:Event, renderIn:string) => {
    // Get the video thumbnail link
    if (event.target instanceof HTMLElement) {
        const thumbnailVideo: HTMLElement | null = event.target?.closest(`[data-video-id]`);
        if (!thumbnailVideo) return;
        // Prevent the URL from redirecting users
        event.preventDefault();
        // Get the video url
        let id = thumbnailVideo.getAttribute('data-video-id');
        // // Create the player
        let player = document.createElement('div');
        player.classList.add('abi-videoRender','w-screen','aspect-[23/12]','max-w-[1062px]');
        player.innerHTML = `
                <iframe
                    load="lazy"
                    class="w-full h-full"
                    style="aspect-ratio: 125 / 50;" width="100%" height="100%"
                    src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>`;
        // Inject the player into the UI (in modal)
        const videoRenderElement = document.querySelector(renderIn);
        videoRenderElement?.replaceWith(player);
    }
}