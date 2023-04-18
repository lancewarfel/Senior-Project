import * as R from 'ramda'
import { newSocket } from './socket';
import { blueTeamStore, 
    orangeTeamStore, 
    overtimeStore, 
    playersStore, 
    replayStore, 
    targetPlayerStore, 
    timeStore, 
    statEventStore, 
    headerStore, 
    blueNameStore, 
    orangeNameStore, 
    footerStore, 
    blueSeriesStore, 
    orangeSeriesStore, 
    seriesLengthStore,
    playerDataStore} from './stores';
import { get } from 'svelte/store';

export const processor = (socketMessageStore) => {
    R.cond([
        [(socketMessageStore) => socketMessageStore.event === "game:update_state", onUpdateState],
        [(socketMessageStore) => socketMessageStore.event === "game:goal_scored", onGoalScored],
        [(socketMessageStore) => socketMessageStore.event === "game:match_ended", onMatchEnded],
        [(socketMessageStore) => socketMessageStore.event === "game:statfeed_event", onStatfeedEvent],
        [(socketMessageStore) => socketMessageStore.event === "game:update_data", onNewMsg],
    ])(socketMessageStore)
}

const onUpdateState = ({ data }) => {
    targetPlayerStore.set(data.players[data.game.target])
    timeStore.set(data.game.time_seconds)
    blueTeamStore.set(data.game.teams[0].score)
    orangeTeamStore.set(data.game.teams[1].score)
    playersStore.set(Object.values(data.players))
    overtimeStore.set(data.game.isOT)
    replayStore.set(data.game.isReplay)
}

const onGoalScored = ({ data }) => {
    playerDataStore.set(get(playersStore))
}

const onMatchEnded = ({ data }) => {
    newSocket.send(JSON.stringify({
        receiver: "Overlay Manager",
        data: get(playerDataStore)
    }))
    console.log("SENT DATA YURR")
}

const onStatfeedEvent = ({ data }) => {
    statEventStore.set(data)
    // R.cond({
    //     [(data) => data.type === "Goal", onGoal],
    // }) use this later for specific events
}

const onNewMsg = ({ data }) => {
    headerStore.set(data.header)
    blueNameStore.set(data.blueName)
    blueSeriesStore.set(data.blueScore)
    orangeNameStore.set(data.orangeName)
    orangeSeriesStore.set(data.orangeScore)
    let gameNum  = data.gameNum
    if(data.gameNum > data.seriesLength) gameNum-- 
    footerStore.set(`Game ${gameNum} | Best of ${data.seriesLength}`)
    seriesLengthStore.set(data.seriesLength)
}



