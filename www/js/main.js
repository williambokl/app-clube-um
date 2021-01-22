// Ativa o uso do menu bottom
$(document).ready(function(){
    $('ul.tabs').tabs();
    Materialize.updateTextFields();
    $('.modal').modal();
    setTimeout(function () {
        $('.openApp').attr('style', 'display: none;');
    }, 1000);
    siriWave.setAmplitude(0);
    siriWave.start();
});

//Configura waves-effect dos botoes para sair após 500 mils
$('.waves-effect').click(function () {
    setTimeout(function () {
        $('.waves-ripple').remove();
    }, 500);
});