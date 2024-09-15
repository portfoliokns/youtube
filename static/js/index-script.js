//プレイリスト視聴ボタン
document.getElementById('button-playlist').addEventListener('click', function() {
  event.preventDefault();

  var inputs = document.querySelectorAll('.url-input-playlist');
  var urls = []

  inputs.forEach(function(input) {
    var value = input.value.trim();
    if (value) {
      urls.push(value)
    }
  })

  var queryString = 'urls=' + encodeURIComponent(urls.join(','));
  console.log(queryString)
  window.location.href = '/playlist?' + queryString;
})

//マルチ視聴ボタン
document.getElementById('button-multi').addEventListener('click', function() {
  event.preventDefault();

  var inputs = document.querySelectorAll('.url-input-multi');
  var urls = []

  inputs.forEach(function(input) {
    var value = input.value.trim();
    if (value) {
      urls.push(value)
    }
  })

  var queryString = 'urls=' + encodeURIComponent(urls.join(','));
  console.log(queryString)
  window.location.href = '/multivideo?' + queryString;
})

