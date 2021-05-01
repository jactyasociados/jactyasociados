$(document).ready(function() {
  var i = 0;
  $("#quantity-" + i).keyup(function() {
    upd_art(i)
  });
  $("#price-" + i).keyup(function() {
    upd_art(i)
  });


  $('#add').click(function() {
    i++;
    $('#articles').append('<tr id="row' + i + '"><td><input type="number" value=0 id="quantity-' + i + '" name="quantity[]" placeholder="quantity" class="form-control name_list" /></td> <td><input type="number" id="price-' + i + '" name="price[]" value=0  placeholder="price" class="form-control name_list" /></td> <td><input type="number" id="total-' + i + '" name="total[]" placeholder="total" class="form-control name_list" readonly /></td> <td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">X</button></td></tr>');

    $("#quantity-" + i).keyup(function() {
      upd_art(i)
    });
    $("#price-" + i).keyup(function() {
      upd_art(i)
    });


  });


  $(document).on('click', '.btn_remove', function() {
    var button_id = $(this).attr("id");
    $('#row' + button_id + '').remove();
  });

  $('#submit').click(function() {
    alert($('#add_name').serialize()); //alerts all values           
    $.ajax({
      url: "wwwdb.php",
      method: "POST",
      data: $('#add_name').serialize(),
      success: function(data) {
        $('#add_name')[0].reset();
      }
    });
  });

  function upd_art(i) {
    var qty = $('#quantity-' + i).val();
    var price = $('#price-' + i).val();
    var totNumber = (qty * price);
    
    var tot = totNumber.toFixed(2);
    //var total += tot;
    $('#total-' + i).val(tot);
  }
//$('#subtotal').text(total);


  //  setInterval(upd_art, 1000);
});i