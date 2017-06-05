/**
 * Created by phamquan on 6/4/17.
 */

ibigfox.basePath="../../../";
ibigfox.addPath('demo/chat/js/message/common/Tags.js', ['chat.message.common.Tags']);
ibigfox.addPath('demo/chat/js/message/cs/CSChat.js', ['chat.message.cs.CSChat']);
ibigfox.addPath('demo/chat/js/message/item/ChatItem.js', ['chat.message.item.ChatItem']);
ibigfox.addPath('demo/chat/js/message/sc/SCChat.js', ['chat.message.sc.SCChat']);
ibigfox.resetBasePath();

ibigfox.require('chat.message.common.Tags');
ibigfox.require('chat.message.cs.CSChat');
ibigfox.require('chat.message.item.ChatItem');
ibigfox.require('chat.message.sc.SCChat');

ibigfox.require("BFConnect");

var chat = chat || {};

$(document).ready(function(){
    chat.bfConnect = new BFConnect($("meta[name=serverLogic]").attr("content"), 10000);

    chat.bfConnect.mapServiceToMessage[chatTags.CS_CHAT] = chat.message.cs.CSChat;
    chat.bfConnect.mapServiceToMessage[chatTags.SC_CHAT] = chat.message.sc.SCChat;

    chat.bfConnect.onDisconnected = function(){}
    chat.bfConnect.onStartNewSession = function(){}

    chat.bfConnect.start();
});

chat.onclick = function(){
    var name = $('#name').val();
    var content = $('#content').val();
    chat.bfConnect.send(new chat.message.cs.CSChat(name, content));
}