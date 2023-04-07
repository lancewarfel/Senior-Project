import { writable } from "svelte/store";

export const messageStore = writable({
    data: {
        newMsg: "HELLO"
    },
    event: "newMsg"
})