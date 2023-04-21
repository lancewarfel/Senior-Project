import { writable } from "svelte/store";

export const gameDataStore = writable([])
export const playerNameStore = writable([])
export const databaseStore = writable([{
    ign: "defaultGamer",
    first_name: "First",
    last_name: "Last",
    games_played: 0,
    goals: 0,
    shots: 0,
    assists: 0,
    saves: 0,
    demos: 0
}])

export const databaseNames = writable([])
export const indexStore = writable(-1)