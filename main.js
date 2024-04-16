$(document).ready(function(){
    $('header button').click(function(){
       $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        
        const EnderecoNovaImagem = $('#endereco_nova_imagem').val();

        const NovoItem = $('<li style = "display: none"></li>');
        $(`<img src="${EnderecoNovaImagem}"/>`).appendTo(NovoItem);
        $(`<div class="overlay-imagens">
                <a href="${EnderecoNovaImagem}" title="Abrir imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
            </div>
        `).appendTo(NovoItem);
        
        $(NovoItem).appendTo('ul');
        $(NovoItem).fadeIn(3000);

        $('#endereco_nova_imagem').val('')


    })

})