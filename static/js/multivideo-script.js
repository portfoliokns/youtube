let videoIndex = 0;
let player;
var videoURLs = videoURLs;

function onYouTubeIframeAPIReady() {
  // YouTube APIが読み込まれたときにプレーヤーを呼び出す
  console.log('YouTube IFrame API is ready');
  loadVideo(videoURLs);
}

function loadVideo(videoURLs) {
  //videoID一覧を抽出
  let videoIDs = []
  for (videoURL in videoURLs) {
    videoIDs[videoURL] = videoURLs[videoURL].split("v=")[1].split("&")[0];
  }

  //プレイヤーをそれぞれ設定
  if (videoIDs) {
    for ( var i = 0; i < videoIDs.length; i++ ) {
      playerId = "player" + i
      videoId = videoIDs[i]
      player = new YT.Player(playerId, {
        height: '500',
        width: '1000',
        videoId: videoId,
        playerVars: {
          'autoplay': 1, // 自動再生を有効化
          'loop': 1, // ループ再生
        },
      });
    }
  }
}
