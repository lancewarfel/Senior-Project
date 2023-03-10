import { writable } from "svelte/store";

//update state stores
export const targetPlayerStore = writable({
    name: "Default",
    score: 0,
    goals: 0,
    assists: 0,
    saves: 0,
    shots: 0,
    demos: 0,
    boost: 0,
    team: 0
})
export const timeStore = writable(300)
export const blueTeamStore = writable(0)
export const orangeTeamStore = writable(0)
export const playersStore = writable([
    {
        team: 0,
        name: "defaultBlue",
        boost: 75
    },
    {
        team: 1,
        name: "defaultOrange",
        boost: 75
    }
])
export const overtimeStore = writable(false)
export const replayStore = writable(false)
export const headerStore = writable("Nace Starleague | Varsity Plus | Week 4")
export const blueNameStore = writable("Western Kentucky University")
export const orangeNameStore = writable("Murray State University")
export const footerStore = writable("Game 4 | Best of 5")


