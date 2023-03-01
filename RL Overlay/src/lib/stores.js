import { writable } from "svelte/store";

//update state stores
export const targetPlayerStore = writable({
    name: 0,
    score: 0,
    goals: 0,
    assists: 0,
    saves: 0,
    shots: 0,
    demos: 0,
    boost: 0,
    team: 0
})
export const timeStore = writable(0)
export const blueTeamStore = writable({})
export const orangeTeamStore = writable({})
export const playersStore = writable([])
export const overtimeStore = writable(false)
export const replayStore = writable(false)
export const headerStore = writable("Nace Starleague | Varsity Plus | Week 4")
export const blueNameStore = writable("Western Kentucky University")
export const orangeNameStore = writable("Murray State University")
export const footerStore = writable("Game 4 | Best of 5")


