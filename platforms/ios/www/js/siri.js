//Configura o howler siri Wave
var tamanhoDaTela = window.innerWidth;

var siriWave = new SiriWave({
	container: document.getElementById('siri-container'),
    style: "ios",
    color: "#fff",
    width: tamanhoDaTela,
	height: 200,
    amplitude: 0,
    autostart: false,
    speed: 0.1,
});
