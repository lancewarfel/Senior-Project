import { writable } from "svelte/store";

//update state stores
export const timeStore = writable(0)
export const blueTeamStore = writable({})
export const orangeTeamStore = writable({})
