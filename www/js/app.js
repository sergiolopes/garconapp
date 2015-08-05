$('.collection')
    .on('click', '.collection-item', function(){
        var nomeProduto = this.firstChild.textContent;
        Materialize.toast(nomeProduto + ' adicionado', 1000);

        var $badge = $('.badge', this);
        if ($badge.length === 0) {
            $badge = $('<span class="badge brown-text">0</span>').appendTo(this);
        }

        $badge.text(parseInt($badge.text()) + 1);
    })
    .on('click', '.badge', function() {
        $(this).remove();
        return false;
    });

$('.modal-trigger').leanModal();

$('#confirmar').on('click', function() {
    var texto = "";

    $('.badge').parent().each(function(){
        texto += this.firstChild.textContent + ': ';
        texto += this.lastChild.textContent + ', ';
    });

    $('#resumo').empty().text(texto);
});

$('.acao-limpar').on('click', function() {
    $('#numero-mesa').val('');
    $('.badge').remove();
});
