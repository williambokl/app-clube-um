// Valida a conexão com a internet
document.addEventListener("offline", onOffline, false);

function checkConnection() {
    var networkState = navigator.connection.type;
 
    var states = {};
    states[Connection.NONE]     = 'No network connection';
     
    if (states[networkState] == 'No network connection'){
        Materialize.toast('Vocês está sem conexão!', 2000);
    };
};

function onOffline() {
    Materialize.toast('Vocês perdeu a conexão!', 2000);
    media.pause();
    $('#icone-radio').html('&#xE037;');
    siriWave.setAmplitude(0);
    status = 0;
    document.addEventListener("online", onOnline, false);
};

function onOnline() {
    Materialize.toast('Conectado!', 2000);
};

