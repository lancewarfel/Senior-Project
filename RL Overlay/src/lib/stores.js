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
    boost: 75,
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
export const statEventStore = writable({
    event_name: null,
    main_target: {
        name: null
    }
})
export const headerStore = writable("")
export const blueNameStore = writable("")
export const blueSeriesStore = writable(0)
export const orangeNameStore = writable("")
export const orangeSeriesStore = writable(0)
export const footerStore = writable("")
export const seriesLengthStore = writable(5)
export const playerDataStore = writable([])

// Nace Starleague | Varsity Plus | Week 4
// Western Kentucky University
// Murray State University
// Game 4 | Best of 5