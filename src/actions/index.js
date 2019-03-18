// Action Creator
export const selectSong = () => {
  //Return an action - type is required
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};