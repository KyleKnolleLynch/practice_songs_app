import { combineReducers } from 'redux';


const songReducer = () => {
  return [
    { title: 'Escape Through The Night', duration: '6:51' },
    { title: 'Future Noir', duration: '4:45' },
    { title: 'Sentient', duration: '5:45' },
    { title: 'Ocean Drive', duration: '4:33' }
  ];
};


const selectedSongReducer = (selectedSong=null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};


export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});