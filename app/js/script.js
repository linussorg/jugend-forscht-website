overview = document.getElementById('overview');
videoThumb2021 = document.getElementById("video-21-thumb");
videoThumb2022 = document.getElementById("video-22-thumb");

document.getElementById("hero-cta").addEventListener("click", function() {
    overview.scrollIntoView({block: "start", behavior: "smooth"});
});

videoThumb2022.addEventListener('click', function() {
  var player = document.createElement('iframe-player');
  player.innerHTML = '<iframe width="' + videoThumb2022.offsetWidth.toString() + '" height="' + videoThumb2022.offsetHeight.toString() + '" src="https://www.youtube.com/embed/FxB6bDclgps?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

  videoThumb2022.parentNode.replaceChild(player, videoThumb2022);
});

videoThumb2021.addEventListener('click', function() {
  var player = document.createElement('iframe-player');
  player.innerHTML = '<iframe width="' + videoThumb2021.offsetWidth.toString() + '" height="' + videoThumb2021.offsetHeight.toString() + '" src="https://www.youtube.com/embed/UeeOzJtoOpM?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

  videoThumb2021.parentNode.replaceChild(player, videoThumb2021);
});


