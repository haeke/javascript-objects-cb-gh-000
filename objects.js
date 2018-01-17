
var playlist = {
  NERD: 'ESP',
  Kendrick: 'DNA',
}

function updatePlaylist(playlist, artistName, songTitle) {
    return playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist.artistName;
}
