import { atom } from "recoil"
import { Drinks } from "../typings"

export const CustomizeState = atom({
    key:'CustomizeState',
    default:false
})
export const BottleState = atom({
    key:'BottleState',
    default:false
})

export const SelectedState = atom<Drinks | null>({
    key:'SelectedState',
    default: null
})