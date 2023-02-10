import { writable } from "svelte/store";

//update state stores
export const targetPlayerStore = writable({
    name: null,
    score: null,
    goals: null,
    assists: null,
    saves: null,
    shots: null,
    demos: null,
    boost: null
})
export const timeStore = writable(0)
export const blueTeamStore = writable({})
export const orangeTeamStore = writable({})


