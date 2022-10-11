import { PageExist } from "../models";
export const pageExist = (params: PageExist): void => {
    const { actualPage, execute } = params
    const pageSelector = document.querySelector<HTMLElement>(actualPage);
    if (pageSelector) {
        document.addEventListener('DOMContentLoaded', () => {
            execute();
        });
    }
}