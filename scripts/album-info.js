{
  //insert album title into #album-title element
  $('#album-title').text(album.title);
  //adds the src attribute to img tag so cover loads
  $('img#album-cover-art').attr('src', album.albumArtUrl);
}
