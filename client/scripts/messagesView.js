var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    MessagesView.render();
  },

  render: function () {
    setInterval(Parse.readAll.bind(Parse, (data) => {

      for (let i = data.results.length - 1; i >= 0; i--) {
        let obj = data.results[i];
        if (!obj.hasOwnProperty('text') ||
          !obj.hasOwnProperty('username') ||
          !obj.hasOwnProperty('roomname')) {
          continue;
        }

        if (obj.roomname !== $('#room-select').val()) {
          continue;
        }


        if ($(`#${obj.objectId}`).length === 0) {
          $('#chats').prepend(MessageView.render(obj));
        }
      }
    }), 1000);
  }

};