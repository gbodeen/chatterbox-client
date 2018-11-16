var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    MessagesView.render();
  },

  render: function () {
    setInterval(Parse.readAll.bind(Parse, (data) => {

      for (let obj of data['results']) {
        if (obj.hasOwnProperty('text')) {
          $('#chats').append(MessageView.render({
            text: obj.text,
            username: obj.username
          }));
        }
      }

    }), 1000);
  }

};