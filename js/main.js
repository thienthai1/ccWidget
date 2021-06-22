$(document).ready(function(){

    $.get( "./js/main.txt", function( data ) {

        $("#ccWidgetContent").append(data);

        $('.btnSubmit').click(function() {
            var baseCurrency = $('#baseCurrency').val();
            var finalCurrency = $('#finalCurrency').val();
            var baseCurrencyPrice = $('#baseCurrencyPrice').val();
            var finalCurrencyPrice = $('#finalCurrencyPrice').val();
            var myPrice = $('#myPrice').val();
    
            var cal = ((baseCurrencyPrice * myPrice)/finalCurrencyPrice).toFixed(5);
    
            $( "#result" ).empty();
            $( "#result" ).append( cal + " " );
            $( "#baseCurrencyVal2" ).empty();
            $( "#baseCurrencyVal2" ).append( finalCurrency );

            $(".ccWidget-Result").css('display','block');
    
        });
    
        $( "#baseCurrency" ).change(function() {
            var baseCurrency = $('#baseCurrency').val();
            $( "#baseCurrencyVal" ).empty();
            $( "#baseCurrencyVal" ).append( baseCurrency );
        });

    });

});