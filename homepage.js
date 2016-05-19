
$(document).ready(function() {
    SC.initialize({
    client_id: '2c79ca06bff1ac6c428f19600e3ccdd4'
    });
    playTrack("262728479");
    
    
});

function searchTracks(mood) {
  SC.get('/tracks', {
    tags: mood,
  }).then(function(tracks) {
    console.log(tracks);
    playTrack(tracks[0].id);
  });

}

var currentSong= null;


function playTrack(trackid) {
  SC.stream('/tracks/' + trackid).then(function(player) {
    if (currentSong) {
      currentSong.pause();
    }
    currentSong= player;
    currentSong.play();
  });
  
$("#makeup").click(function(){
  $("#myModal").modal(options);
})
  
}



