// Executa o play e pause do rádio
var status = 0;

$('#controle-radio').click(playRadio);

function playAudio () {
    // Play the audio file at url
    my_media = new Media(linkAudio,
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }, 
        // status callback                 
        function (info) {
            console.log(info);
            if(info == 1) {
                $('#modal1').modal('open');
                setTimeout(function () {
                    $('#modal1').modal('close');
                }, 3000);
            }else {
                $('#modal1').modal('close');
            };
        }
    );
};

function playRadio () {
    if(status == 0){
        playAudio();
        my_media.play();
        $('#icone-radio').text('pause');
        siriWave.setAmplitude(0.5);
        status = 1;
        checkConnection();
    }else{
        my_media.pause();
        $('#icone-radio').html('&#xe037;');
        siriWave.setAmplitude(0);
        status = 0;
        checkConnection();
    };
};
