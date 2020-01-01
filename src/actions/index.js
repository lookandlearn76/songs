// Action creator
// The below is a named export as oppposed to a default export
export const selectSong = song => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
