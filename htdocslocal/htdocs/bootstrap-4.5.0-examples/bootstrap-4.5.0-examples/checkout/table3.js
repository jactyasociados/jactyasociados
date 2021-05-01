$('form').on('keyup','input[name="item_price[]"], input[name="item_quant[]"]', function() {
    var total = 0;
    var subtotal = 0;
    var taxvalue = 0;
    //var tax = parseInt($('form').find('#tax').val(), 10) || 0;
    //alert (tax);
    $('form').find('input').each(function() {
        var $this = $(this);
        var amount = (parseFloat($this.find('input[name="item_price[]"]').val(), 10) || 0)
        * (parseFloat($this.find('input[name="item_quant[]"]').val(), 10) || 0);
        subtotal += amount;
       
    })

    $('#subtotal').text(subtotal).toFixed(2);
    //$('#taxvalue').text(taxes).toFixed(2);
    //$('#total').text(total).toFixed(2);
    
})