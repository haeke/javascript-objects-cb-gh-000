
var playlist = {
  NERD: 'ESP',
  Kendrick: 'DNA',
}

function updatePlaylist(playlist, artistName, songTitle) {
    return Object.assign(playlist, artistName, songTitle);
}
