
var playlist = {
  NERD: 'ESP',
  Kendrick: 'DNA',
}

function updatePlaylist(playlist, artistName, songTitle) {
    return playlist.assign({}, artistName, songTitle);
}
