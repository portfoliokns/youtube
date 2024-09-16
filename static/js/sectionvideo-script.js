let player;
var button = document.getElementById('button-start');
var loopInterval

function onYouTubeIframeAPIReady() {
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

  if (!isTimeValue(start.value) || !isTimeValue(end.value)) {
    alert("入力時刻に誤りがあります。確認してください。hh:mm:ss:msの形式で数値で入力する必要があります。");
    return;
  }

  var startTime = time2seconds(start.value)
  var endTime = time2seconds(end.value)
  if (startTime >= endTime) {
    alert("開始時刻と終了時刻に誤りがあります。入力時刻が前後していないかを確認してください。");
    return;
  }

  loadVideo(url.value, startTime, endTime)
})

//ミリ病を数値に変換
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

//数値関連以外の文字列が入力されていないか確認
function isTimeValue(time) {
  const parts = time.split(':').map(Number)

  if (isNumeric(parts[0]) == false) return false
  if (isNumeric(parts[1]) == false) return false
  if (isNumeric(parts[2]) == false) return false
  if (isNumeric(parts[3]) == false) return false

  return true;
};

function isNumeric(str) {
  // 文字列が空でないことを確認し、数字のみで構成されているかチェック
  return /^\d+$/.test(str);
}