let idCounter = 2;
const getLatestId = () => ++idCounter;

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: "2025-01-26T08:25:33.509Z",
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: "2025-01-26T08:25:33.509Z",
  },
];

const getAllMessages = async () => {
  return messages;
};

const getMessageById = async (id) => {
  return messages.find((message) => message.id == id);
};

const addMessage = async (text, user) => {
  messages.push({ id: getLatestId(), text, user, added: new Date() });
};

module.exports.getAllMessages = getAllMessages;
module.exports.getMessageById = getMessageById;
module.exports.addMessage = addMessage;
// module.exports.messages = messages;
