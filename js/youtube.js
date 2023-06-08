  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
function onYouTubePlayerAPIReady() {

      new YT.Player('player', {
      videoId: 'pBk4NYhWNMM',
      playerVars: {
        autoplay: true,
        loop:true,
        playList:"pBk4NYhWNMM",
      },
      events: {
        onReady: function(event){
            event.target.mute();
        }
      }
    });
  }
  