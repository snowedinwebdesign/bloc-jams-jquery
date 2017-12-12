{
  //clickhandler for play/pause button
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  //clickhandler for next button
  // Use player.playState to check if a song is playing, and if not, execute a return statement. The return will terminate execution of the function if the if statement's condition is met.
  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }
    //.indexOf() to get the index of player.currentlyPlaying in album.songs, and assign it to a variable
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    //checking to see if there is a next song before it calls  player.playPause(). Fix that with an if statement that checks whether the value of  nextSongIndex is greater than or equal to the length of album.songs, and if it is, execute a return statement.
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const prevSongIndex = currentSongIndex - 1;
    if (currentSongIndex === 0) { return; }
    const prevSong = album.songs[prevSongIndex];
    player.playPause(prevSong);

  });
}
