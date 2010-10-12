jQuery(document).ready(function(){

    jQuery('form.ajaxify [type="submit"]').live('click',function(event){

        var form = jQuery(this).closest('form');
        var data = form.serializeArray();
        var url = form.attr('action');
        var type = form.attr('method');
        var eventSuccessName = form.find('input[name="eventSuccess"]').val();
        var eventErrorName = form.find('input[name="eventError"]').val();
        if(eventSuccessName === undefined) eventSuccessName = 'GenericSuccess';
        if(eventErrorName === undefined) eventErrorName = 'GenericError';
        
        
        var eventSuccess = new jQuery.Event(eventSuccessName);
        var eventError = new jQuery.Event(eventErrorName);

        jQuery.ajax({
           url: url,
           type:type,
           data:data,
           success: function(data){
               eventSuccess.message = data;
               form.trigger(eventSuccess);
            },
           error: function(xhr, ajaxOptions, thrownError){
                eventError.message = thrownError;
                form.trigger(eventError);
            }
        });

        event.preventDefault();
    });

});
