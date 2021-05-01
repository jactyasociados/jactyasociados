$('form').on('keyup', 'input[name="item_price[]"], input[name="item_quant[]"]', function() {
    var subtotal = 0;
    $('$form').find('input').each(function() {
        var $this = $(this);
        var amount = (parseFloat($this.find('input[name="item_price[]"]').val(), 10) || 0)
        * (parseFloat($this.find('input[name="item_quant[]"]').val(), 10) || 0);
        
        subtotal += amount;
    })
   
    $('#subtotal').text(subtotal).toFixed(2);
    
})