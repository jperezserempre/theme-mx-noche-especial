/* interface for pages */
export interface Pages {
    home:string
}

/* interface for toggle params */
export interface Toggle{
    handler: string,
    container: string,
    toggleClass: string,
    lockBodyScroll?: boolean,
}
/* interface for pageExist params */
export interface PageExist {
    actualPage: string,
    execute: () => void
}
/* interface for videoRender params */
type dataAttribute = string;
export interface VideoRender {
    event: Event, 
    renderIn: string, 
    dataId: dataAttribute
}