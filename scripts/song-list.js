{
  // itrate though album.songs. Song holds song and index holds array index.
  album.songs.forEach( (song, index) => {
    //create song element. Wrap the variables in the template literal with the place holder expression ${}. Index is n+1 to avoid 0 song number from array.
    song.element = $(`
       <tr>
         <td>
         <button>
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
         </td>
         <td>${song.title}</td>
         <td>${song.duration}</td>
        </tr>
     `);
     // make song element clickable so we can play and pause wnen clicked. player object has a .playPause() method. All we need to do is pass this method a song object inside a click event handler.
     song.element.on('click', event => {
       player.playPause(song);
     });
    // use append method to append song.element to #song-list
     $('#song-list').append(song.element);
   });
}
