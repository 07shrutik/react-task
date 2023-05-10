import { atom } from "recoil";

export const todos=atom({
    key:"todos",
    default:[]
})
export const colors=atom({
    key:"colors",
    default:"blue"
})