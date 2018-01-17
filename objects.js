
var playlist = {
  NERD: 'ESP',
  Kendrick: 'DNA',
}

function updatePlaylist(playlist, artistName, songTitle) {
    playlist.assign({}, artistName, songTitle);
    return playlist;
}
