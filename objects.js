
var playlist = {
  name: 'song',
}

function updatePlaylist(playlist, artistName, songTitle) {
    return Object.assign({}, playlist, {[arttistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
