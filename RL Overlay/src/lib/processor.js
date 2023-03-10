import * as R from 'ramda'
import { blueTeamStore, orangeTeamStore, overtimeStore, playersStore, replayStore, targetPlayerStore, timeStore } from './stores';

export const processor = (socketMessageStore) => {
    R.cond([
        [(socketMessageStore) => socketMessageStore.event === "game:update_state", onUpdateState],
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



