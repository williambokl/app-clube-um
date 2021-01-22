// Envia os recados para a api
$("#btnEnviar").click(enviaRecado);

function enviaRecado (e) {
    e.preventDefault();
    
    var nome = $('.formChat #nome').val();
    var msg = $('.formChat #mensagem').val();
    
    if(nome.length == 0) {
        Materialize.toast('Insira a nome!', 2000);
        return;
    };
    if(msg.length == 0) {
        Materialize.toast('Insira a mensagem!', 2000);
        return;
    };
    
    $(this).prop('disabled', true);
    
    const options = {
        method: 'post',
        data: { nome: nome, mensagem: msg, chave: chaveMensagem }
    };
    
    var self = this;
    
    try {
        cordova.plugin.http.sendRequest(linkMensagem, options, function(response) {
            Materialize.toast('Mensagem enviada!', 2000);
            $(self).prop('disabled', false);
            $('.formChat #nome').val('');
            $('.formChat #mensagem').val('');
        }, function(response) {
            $(self).prop('disabled', false);
            Materialize.toast('Erro ao enviar!', 2000);
        });
    } catch(e) {
        Materialize.toast('Erro ao enviar!', 2000);
        $(self).prop('disabled', false);
    };
        
};