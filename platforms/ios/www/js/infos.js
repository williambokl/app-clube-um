// Compartilha link do app
var options = {
  message: 'Compartilhar', // not supported on some apps (Facebook, Instagram)
  url: linkIos,
  chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
}
 
var onSuccess = function(result) {
  console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
  console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
}
 
var onError = function(msg) {
  console.log("Sharing failed with message: " + msg);
};

$('#share').click(function (){
    window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
});