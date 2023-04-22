import * as R from 'ramda'
import { databaseNames, databaseStore } from './stores'

export const processor = (socketMessageStore) => {
    R.cond([
        [(socketMessageStore) => socketMessageStore.event === "database", onDatabase],
        [(socketMessageStore) => socketMessageStore.event === "game_data", onGameData],
    ])(socketMessageStore)
}

const onDatabase = ({ data }) => {
    databaseStore.set(data)
    let names = []
    data.forEach(function (player){
        names.push(`${player.first_name} "${player.ign}" ${player.last_name}`)
    })
    databaseNames.set(names)
}

const onGameData = ({ data }) => {
    

    // gameDataStore.set = [
    //     ...get(gameDataStore),
    //     data
    // ]//all data from from game gets stored
  
    // for(var i=0; i<data.length; i++){
    //   if (!playerNames.includes($socketMessageStore.data[i].name)){
    //       playerNames.push($socketMessageStore.data[i].name)
    //       $playerNameStore = playerNames 
    //   }
    // }//storing only new names in the series
}