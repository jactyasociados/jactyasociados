$(document).ready(function () {
$("#remove").attr("disabled", true);


$("#clone").click(function() {
    var $new = $(".cloned-row:first").clone().insertAfter(".cloned-row:last");
    $new.find('input[type=text]').val('');
    
    
    $("#remove").attr("disabled", false);
});


    $("#remove").click(function () {
    var num = $(".cloned-row").length;
    //jAlert("num", num);
    $(".cloned-row:last").remove();       
    
    
    if (num - 1 === 1) $("#remove").attr("disabled", true);        //Remove section.
    });
});
