javascript:alert(JSON.parse(Array.from(document.querySelectorAll('iframe')).filter(function (item) {
  return item.getAttribute('id') != null && item.getAttribute('id').includes('player_tweet');
})[0].contentDocument.querySelector('div#playerContainer').dataset.config).video_url);