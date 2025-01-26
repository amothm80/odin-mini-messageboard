const messagesdb = require("./messages");

test("display all messages", () => {
  const test_messages = [
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
  return expect(Promise.resolve(messagesdb.getAllMessages())).resolves.toEqual(
    test_messages
  );
  //   expect(getAllMessages()).toEqual(test_messages);
});

test("get message by id 2", () => {
  const message_id2 = {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: "2025-01-26T08:25:33.509Z",
  };
  return expect(Promise.resolve(messagesdb.getMessageById(2))).resolves.toEqual(
    message_id2
  );
});

test("add new message", () => {
  messagesdb.addMessage("hello everyone", "ahmed");
  const new_message = {
    id: 3,
    text: "hello everyone",
    user: "ahmed",
  };
  return expect(Promise.resolve(messagesdb.getMessageById(3))).resolves.toEqual(expect.objectContaining(new_message))
});
