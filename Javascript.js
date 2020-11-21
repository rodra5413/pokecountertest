

$('.add').click(function () {
    $(this).prev().val(+$(this).prev().val() + 1);
    
        // Loop through all input's and re-calculate the total
    var total = 0;
    $('input.qty').each(function(){
        total += parseInt(this.value);
    });
    
    // Update the total
    $('#total').val(total);
    
});