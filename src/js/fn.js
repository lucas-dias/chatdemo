var clientMsg = $("#client_displayed_msg");
var chatBotMsg = $("#chatbot_msg");
var btn = $("#send_btn")
var clientInput = $('#client_input').val();
var chatInput = $('#chatbot_msg').val();


if (clientInput == ''){
    clientMsg.css("display", "block")
} else {
    clientMsg.css("display", "hidden")
}

if (chatInput == ''){
    chatInput.css("display", "block")
} else {
    chatInput.css("display", "hidden")
}

const inputParse = function(){
    clientMsg.append('<div class="client_displayed_msg">'+ clientInput +'</div>')
}
window.addEventListener('click', inputParse)
