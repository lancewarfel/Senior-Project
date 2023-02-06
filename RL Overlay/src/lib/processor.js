import * as R from 'ramda'
import { blueTeamStore, orangeTeamStore, timeStore } from './stores';

export const processor = (socketMessageStore) => {
    R.cond([
        [(socketMessageStore) => socketMessageStore.event === "game:update_state", onUpdateState],
    ])(socketMessageStore)
}

const onUpdateState = ({ data }) => {
    timeStore.set(data.game.time_seconds)
    blueTeamStore.set(data.game.teams[0].score)
    orangeTeamStore.set(data.game.teams[1].score)
}



