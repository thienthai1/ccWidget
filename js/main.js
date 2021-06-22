$(document).ready(function(){

    $('.btnSubmit').click(function() {
        var baseCurrency = $('#baseCurrency').val();
        var finalCurrency = $('#finalCurrency').val();
        var baseCurrencyPrice = $('#baseCurrencyPrice').val();
        var finalCurrencyPrice = $('#finalCurrencyPrice').val();
        var myPrice = $('#myPrice').val();

        var cal = (baseCurrencyPrice * myPrice)/finalCurrencyPrice;

        $( "#result" ).empty();
        $( "#result" ).append( cal + " " );
        $( "#baseCurrencyVal2" ).empty();
        $( "#baseCurrencyVal2" ).append( baseCurrency );

    });

    $( "#baseCurrency" ).change(function() {
        var baseCurrency = $('#baseCurrency').val();
        $( "#baseCurrencyVal" ).empty();
        $( "#baseCurrencyVal" ).append( baseCurrency );
    });

});