$( "#basic_bt" ).click(function() {
    $( "#basic" ).get(0).style.display = "none"
    $( "#insured" ).get(0).style.display = "block"
});

$( "#insured_bt" ).click(function() {
    $( "#insured" ).get(0).style.display = "none"
    $( "#payment" ).get(0).style.display = "block"
});
