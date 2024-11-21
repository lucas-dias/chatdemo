var clientMsg = $(".client_msg_body");
var chatBotMsg = $(".chatbot_msg_body");
var btn = $("#send_btn")
var chatInput = $('#chatbot_msg')

function sendMessage() {
    msg = $('.client_input').val();
    if ($.trim(msg) == '') {
        return false;
    }
    $('<div class="client_displayed_msg">' + msg + '&nbsp;&nbsp; <i class="bi bi-menu-button-wide"></div>').appendTo($('.chat_std'));
    $('<div class="chatbot_displayed_body"><i class="bi bi-robot"></i>&nbsp;&nbsp;' + "The answer to that question is: 42." + '</div>').appendTo($('.chat_std'));
    $('.client_input').val(null);
    $('.chatbot_msg_body').val('');
}

$(".client_input button").click(function() {
    sendMessage();
});