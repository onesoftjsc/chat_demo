/**
 * Created by phamquan on 6/4/17.
 */
ibigfox.provide('chat.message.item.ChatItem');

ibigfox.require('chat.message.common.Tags');
ibigfox.require('bigfox.network.message.base.BaseMessage');

chat.message.cs.ChatItem = function(username, content){
    this.TypeMap = {
        username: bigfox.core.DataTypes.STRING,
        content: bigfox.core.DataTypes.STRING
    };
    this.username = username;
    this.content = content;
}