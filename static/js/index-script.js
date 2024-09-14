document.getElementById('button').addEventListener('click', function() {
  event.preventDefault();

  var inputs = document.querySelectorAll('.url-input');
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