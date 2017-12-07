{
  //insert album title into #album-title element
  $('#album-title').text(album.title);
  //adds the src attribute to img tag so cover loads
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  //insert artist name into .artist element
  $('.artist').text(album.artist);
  //insert release info into #release-info element
  $('#release-info').text(album.releaseInfo);

}
