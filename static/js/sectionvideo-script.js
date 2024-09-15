let player;
var button = document.getElementById('button-start');
var loopInterval

function onYouTubeIframeAPIReady() {
  // YouTube APIが読み込まれたときにプレーヤーを呼び出す
  console.log('YouTube IFrame API is ready');
}

function loadVideo(videoURL, startTime, endTime) {
  //videoIDを出力
  let videoId = videoURL.split("v=")[1].split("&")[0];

  //プレイヤーを初期化
  if (player) {
    player.destroy();
    player = null;
  }

  //インターバルを初期化
  clearInterval(loopInterval);

  //動画をプレイヤーにセットする
  if (videoId) {
    player = new YT.Player('player', {
      height: '780',
      width: '1280',
      videoId: videoId,
      playerVars: {
        'autoplay': 1, // 自動再生を有効化
        'loop': 0, // ループ再生
      },
      events: {
        'onReady': function(event) {
          event.target.seekTo(startTime);
          event.target.playVideo();
        },
        'onStateChange': function(event) {
          if (event.data == YT.PlayerState.PLAYING) {
            clearInterval(loopInterval);
            loopInterval = setInterval(function() {
              var currentTime = player.getCurrentTime();
              if (currentTime >= endTime | currentTime < startTime) {
                player.seekTo(startTime);
              }
            },100)  
          } else {
            clearInterval(loopInterval);
          }
        }
      }
    });
  } else {
    console.error('Null or Undefined videoId = ', videoId);
  }
}

button.addEventListener('click', function() {
  var url = document.getElementById('url-sectionvideo');
  var start = document.getElementById('start-time');
  var end = document.getElementById('end-time');
  var startTime = time2seconds(start.value)
  var endTime = time2seconds(end.value)
  loadVideo(url.value, startTime, endTime)
})

function time2seconds(time) {
  const parts = time.split(':').map(Number)
  let seconds = 0;

  // 秒数へ変換
  if (parts.length === 4) {
    seconds += parts[0] * 3600; // 時間を秒に変換
    seconds += parts[1] * 60;   // 分を秒に変換
    seconds += parts[2];        // 秒
    seconds += parts[3] / 100;  // ミリ秒
  }

  return seconds
}