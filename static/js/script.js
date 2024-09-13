let videoIndex = 0;
let player;
var videoURLs = videoURLs;

function onYouTubeIframeAPIReady() {
  // YouTube APIが読み込まれたときにプレーヤーを呼び出す
  console.log('YouTube IFrame API is ready');
  loadVideo(videoURLs);
}

window.addEventListener('DOMContentLoaded', function(){
  if (YT.Player) {
    //Webページが読み込まれた時にプレーヤーを呼び出す
    loadVideo(videoURLs);
  }
})

function loadVideo(videoURLs) {
  //videoID一覧を出力
  let urlString = ""
  for (videoURL of videoURLs) {
    let videoId = videoURL.split("v=")[1].split("&")[0];
    urlString += videoId + ","
  }
  urlString = urlString.slice(0, -1);

  //プレイヤーを初期化
  if (player) {
    player.destroy();
    player = null;
  }

  //動画をプレイヤーにセットする
  if (videoURLs) {
    player = new YT.Player('player', {
      height: '780',
      width: '1280',
      playerVars: {
        'playlist': urlString,
        'autoplay': 1, // 自動再生を有効化
        'loop': 1, // ループ再生
      },
    });
  } else {
    console.error('Null or Undefined videoURLs = ', videoURLs);
  }
}