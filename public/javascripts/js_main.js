/**
 * Created by BillJoshua on 7/24/2016.
 */

$(function(){

    $.ajax({
        type: 'GET',
        url: 'http://billadona-test.apigee.net/summer2016',
        success: function(data){
            console.log('succes', data);
        }
    })

});