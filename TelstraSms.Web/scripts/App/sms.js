var token = '';

function sendSms() {
    var phonenumber = $('#phone-number-input').val();
    var message = $('#message-input').val();
    var url = 'https://api.telstra.com/v1/sms/messages';
    var request = '{"to":"'+phonenumber+'","body":"'+message+'"}';

    $.ajax({
        url: url,
        type: 'post',
        data: request,
        //    {
        //    '"to"':'"' + phonenumber + '"',
        //    '"body"': '"' + message + '"'
        //},
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        dataType: 'json',
        success: function (data) {
            console.info(data);
        },
        error: function (data) {
            if (data.status == '401') {
                getToken();
            }
        }
    });
}

function getToken() {

    var CONSUMER_KEY = ""
    var CONSUMER_SECRET = ""

    var request = "client_id=" + CONSUMER_KEY + "&client_secret=" + CONSUMER_SECRET + "&grant_type=client_credentials&scope=SMS";

    var url = 'https://api.telstra.com/v1/oauth/token';

    $.ajax({
        url: url,
        type: 'post',
        data: request,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        dataType: 'json',
        success: function (data) {
            token = data.access_token;
            sendSms();
        },
        error: function (data) {
            console.info(data);
        }
    });
}