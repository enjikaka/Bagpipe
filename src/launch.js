chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    width: 550,
    height: 550,
    frame: 'none',
    id: 'bagpipe-music',
    singleton: true,
    resizable: true
  });
});