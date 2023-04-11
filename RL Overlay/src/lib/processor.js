import * as R from 'ramda'
import { blueTeamStore, orangeTeamStore, overtimeStore, playersStore, replayStore, targetPlayerStore, timeStore, statEventStore, headerStore, blueNameStore, orangeNameStore, footerStore } from './stores';

export const processor = (socketMessageStore) => {
    R.cond([
        [(socketMessageStore) => socketMessageStore.event === "game:update_state", onUpdateState],
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

const onStatfeedEvent = ({ data }) => {
    statEventStore.set(data)
    // R.cond({
    //     [(data) => data.type === "Goal", onGoal],
    // }) use this later for specific events
}

const onNewMsg = ({ data }) => {
    console.log(data)
    headerStore.set(data.header)
    blueNameStore.set(data.blueName)
    orangeNameStore.set(data.orangeName)
    footerStore.set(data.footer)
}



