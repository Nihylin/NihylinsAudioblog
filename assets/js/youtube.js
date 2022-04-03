// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        events: {
            'onReady': onPlayerReady
        },
        playerVars:
          {
            listType:'playlist',
            list: 'PLZjJeRyX7IofvzHnKgOIZe3ptTuR4SLan'
          }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
num = Math.floor(Math.random() * 198);

  setTimeout(() => {
  player.playVideoAt(num);
  });
}
