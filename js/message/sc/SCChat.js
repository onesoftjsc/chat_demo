/**
 * Created by phamquan on 6/4/17.
 */

ibigfox.provide('chat.message.sc.SCChat');

ibigfox.require('chat.message.common.Tags');
ibigfox.require('bigfox.network.message.base.BaseMessage');

chat.message.sc.SCChat = function () {
    this.TypeMap = {
        chatItem: bigfox.core.DataTypes.OBJECT
    }

    this.name = "SCChat";
    this.service = chatTags.SC_CHAT;
}

ibigfox.inherits('chat.message.sc.SCChat', 'bigfox.network.message.base.BaseMessage');

chat.message.sc.SCChat.prototype.execute = function () {
    var message = this.chatItem.username + ": " + this.chatItem.content;
    var chatContainer = $('#chats');
    chatContainer.append( "<p>" + message +  "</p>" );
}