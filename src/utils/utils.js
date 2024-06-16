export const $ = (el , parent = document) =>{
    return document.querySelector(el)
}
export const $all = (el , parent = document) =>{
    return document.querySelectorAll(el)
}