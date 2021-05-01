$('form').on('keyup', 'input[name="item_price[]"], input[name="item_quant[]"]', function() {
    var subtotal = 0;
    var tax = 0;
    var taxes = 0;
    var totaltaxes = 0;
    $('form').find('.row').each(function() {
        var $this = $(this);
        var amount = (parseFloat($this.find('input[name="item_price[]"]').val(), 10) || 0)
        * (parseFloat($this.find('input[name="item_quant[]"]').val(), 10) || 0);
        subtotal += amount;
        //$('input[name="amount[]"]')val(amount);
        $this.find("input[name^=amount]").val(amount.toFixed(2));
        tax = $('input[name="taxes"]').val();
        taxes = tax/100;
        totaltaxes = taxes*subtotal;
         $('#subtotal').val(subtotal.toFixed(2));
        $('#totaltax').val(totaltaxes.toFixed(2));
        $('#grandtotal').val((subtotal + totaltaxes).toFixed(2));
      
      
       
    })
    
    //çalert (totaltaxes);
    //$('.amount').val(amount.toFixed(2));
    
     
    
})