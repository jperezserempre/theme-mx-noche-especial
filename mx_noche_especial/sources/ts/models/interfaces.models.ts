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