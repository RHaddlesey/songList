import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      artist: "Kormac",
      title: "Love On The Line",
      duration: "6:13",
      url: "https://youtu.be/ZCBn0mjLWaA"
    },
    {
      artist: "Player 2",
      title: "If You Really Want Someone",
      duration: "6:12",
      url: "https://www.youtube.com/watch?v=MK25zEoaE08"
    },
    {
      artist: "OFFAIAH",
      title: "Work It Out",
      duration: "6:21",
      url: "https://www.youtube.com/watch?v=Nt26jLSE3To"
    },
    {
      artist: "Jack Back",
      title: "It Happens Sometimes - OFFAIAH Remix",
      duration: "3:10",
      url: "https://www.youtube.com/watch?v=vi0nsqwrXvU"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});



// This all works because actions and payload are set up in the actions folder
// export const selectSong = () => {
//   //Return an action - type is required
//   return {
//     type: 'SONG_SELECTED',
//     payload: song
//   };
// };