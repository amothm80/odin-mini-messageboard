const messagesdb = require('../models/messages')
const { format } =  require("date-fns");

const getAllMessages = async ()=>{
    const messages =  await messagesdb.getAllMessages()

    let sanitized_messages = messages.map((message)=>{
        return {text:message.text, user:message.user, added:format(message.added,'dd-MMM-yyyy @ hh:mm:ss')}
    })

    return sanitized_messages;
}

module.exports.getAllMessages = getAllMessages