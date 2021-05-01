$('table').on('keyup', 'input[name="item_price[]"], input[name="item_quant[]"]', function() {
    var total = 0;
    $('table').find('tr').each(function() {
        var $this = $(this);
        var amount = (parseFloat($this.find('input[name="item_price[]"]').val(), 10) || 0)
        * (parseFloat($this.find('input[name="item_quant[]"]').val(), 10) || 0);
        total += amount;
        var tot=total.toFixed(2);
        $('#subtotal').val(tot);
    })
    
    
})