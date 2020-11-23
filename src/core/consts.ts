export const shortenMessage = (message: any) => {
  let newMessage = message;
  if (message.length > 38) {
    newMessage = message.slice(0, 38) + '. . .';
  }
  return newMessage;
};
