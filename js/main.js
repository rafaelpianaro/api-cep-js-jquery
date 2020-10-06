$(document).ready(function(){
    // console.log('pagina carregada')
    $('#textCep').mask('00.000-000');
    $("#textCep").focusout(function(){
        // var field = document.getElementById('textCep')
        if($('#textCep')[0].value != ''){
            var cep = $('#textCep').val()
            cep = cep.replace('-', '')
            cep = cep.replace('.', '')
            var urlStr = 'https://viacep.com.br/ws/'+cep+'/json/'
            $.ajax({
                url: urlStr,
                type: 'get',
                dataType: 'json',
                success: function(data){
                    // console.log(data)
                    $('#textCidade').val(data.localidade)
                    $('#textEstado').val(data.uf)
                    $('#textBairro').val(data.bairro)
                    $('#textRua').val(data.logradouro)
                    $('#textComplemento').val(data.complemento)
                },
                error: function(erro){
                    console.log(erro)
                }
            })
        }
    })
})