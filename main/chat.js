/**
 * Created by phamquan on 6/4/17.
 */

ibigfox.basePath="../"; // basePath + 'demo/chat/js/message/common/Tags.js' sẽ ra đường dẫn tương đối của file javascript so với chat.html
ibigfox.addPath('js/message/common/Tags.js', ['chat.message.common.Tags']); // khai báo class nào ứng với file javascript nào
ibigfox.addPath('js/message/cs/CSChat.js', ['chat.message.cs.CSChat']);
ibigfox.addPath('js/message/item/ChatItem.js', ['chat.message.item.ChatItem']);
ibigfox.addPath('js/message/sc/SCChat.js', ['chat.message.sc.SCChat']);
ibigfox.resetBasePath(); // reset lại basePath

ibigfox.require('chat.message.common.Tags'); // load file javascript ứng với class chat.message.common.Tags vào hệ thống
ibigfox.require('chat.message.cs.CSChat');
ibigfox.require('chat.message.item.ChatItem');
ibigfox.require('chat.message.sc.SCChat');

ibigfox.require("BFConnect");

var chat = chat || {};

$(document).ready(function(){
    chat.bfConnect = new BFConnect($("meta[name=serverLogic]").attr("content"), 10000); // khởi tạo một BFConnect để kết nối tới Server

    chat.bfConnect.mapServiceToMessage[chatTags.CS_CHAT] = chat.message.cs.CSChat; // map giữa service và class
    chat.bfConnect.mapServiceToMessage[chatTags.SC_CHAT] = chat.message.sc.SCChat;

    chat.bfConnect.onDisconnected = function(){} // khai báo các callback function
    chat.bfConnect.onStartNewSession = function(){}

    chat.bfConnect.start(); // Bắt đầu thực hiện kết nối tới Server
});

chat.onclick = function(){
    var name = $('#name').val();
    var content = $('#content').val();
    chat.bfConnect.send(new chat.message.cs.CSChat(name, content)); // gọi hàm send của BFConnect để gửi bản tin tới Server
}