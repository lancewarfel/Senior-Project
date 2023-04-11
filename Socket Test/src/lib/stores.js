import { writable } from "svelte/store";

export const messageStore = writable({
    data: {
        newMsg: "HELLO"
    },
    event: "newMsg"
})

export const headerStore = writable("Default Header")
export const blueNameStore = writable("Default Blue")
export const orangeNameStore = writable("Default Orange")
export const footerStore = writable("Default Footer")

