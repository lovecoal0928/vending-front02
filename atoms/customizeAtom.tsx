import { atom } from "recoil"
import { Drinks } from "../typings"

export const CustomizeState = atom({
    key:'CustomizeState',
    default:false
})
export const ThanksState = atom({
    key:'ThanksState',
    default:false
})
export const BottleState = atom({
    key:'BottleState',
    default:false
})
export const FadeBefore = atom({
    key:'FadeBefore',
    default:'animate-fade-out'
})
export const FadeAfter = atom({
    key:'FadeAfter',
    default:'animate-fade-in'
})

export const SelectedState = atom<Drinks | null>({
    key:'SelectedState',
    default: null
})