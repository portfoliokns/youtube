let videoIndex = 0;
let player;
var videoURLs = videoURLs;
// console.log(videoURLs)

function onYouTubeIframeAPIReady() {
  // YouTube APIが読み込まれたときにプレーヤーを呼び出す
  console.log('YouTube IFrame API is ready');
  // console.log('videoIndex=', videoIndex)
  loadVideo(videoURLs);
}

function loadVideo(videoURLs) {
  // console.log(videoURLs)
  let urlString = ""
  
  for (videoURL of videoURLs) {
    // console.log("Processing URL:", videoURL); // デバッグ用ログ
    let videoId = videoURL.split("v=")[1].split("&")[0];
    // console.log("Extracted videoId:", videoId); // デバッグ用ログ
    urlString += videoId + ","
    // console.log(urlString)
  }
  urlString = urlString.slice(0, -1);
  // console.log(urlString)

  //プレイヤーを初期化
  if (player) {
    player.destroy();
    player = null;
  }

  //動画をプレイヤーにセットする
  // let videoId = url.split("v=")[1].split("&")[0]; // 動画URLからvideoIDを抽出
  // if (videoId) {
  if (videoURLs) {
    player = new YT.Player('player', {
    height: '780',
    width: '1280',
    // videoId: videoId,
    playerVars: {
        'playlist': urlString,
        'autoplay': 1, // 自動再生を有効化
        // 'controls': 1, // コントロールを表示
        'loop': 1, // ループ再生
        // 'modestbranding': 0, // YouTubeロゴを非表示
        // 'rel': 1, // 関連動画を表示しない
        // 'cc_load_policy': 1, // 字幕を自動表示
        // 'playsinline': 1 // インライン再生を有効
        // 'start': 10,  // 再生の開始位置を秒単位で指定
        // 'end': 30       // 再生の終了位置を秒単位で指定
      },
    // events: {
      // 'onStateChange': onPlayerStateChange
    // }
    });
  } else {
    console.error('Null or Undefined videoId = ', videoId);
  }
}

// function onPlayerStateChange(event) {
//   console.log('Player state changed:', event.data);
//   //動画が終了した場合の処理
//   if (event.data == YT.PlayerState.ENDED) {
//     videoIndex++;
//     if (videoIndex >= videos.length) {
//       videoIndex = 0;
//     }
//     if (videoIndex < videos.length) {
//       console.log('videoIndex=', videoIndex)
//       loadVideo(videos[videoIndex]);
//     }
//   }
// }
