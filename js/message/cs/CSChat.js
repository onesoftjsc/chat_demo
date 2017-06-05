/**
 * Created by phamquan on 6/4/17.
 */
ibigfox.provide('chat.message.cs.CSChat');

ibigfox.require('chat.message.common.Tags');
ibigfox.require('bigfox.network.message.base.BaseMessage');

chat.message.cs.CSChat = function(username, content){
    this.TypeMap = {
        username: bigfox.core.DataTypes.STRING,
        content: bigfox.core.DataTypes.STRING
    };
    this.username = username;
    this.content = content;
    this.name = "CSChat";
    this.service = chatTags.CS_CHAT ;
}

ibigfox.inherits('chat.message.cs.CSChat', 'bigfox.network.message.base.BaseMessage');