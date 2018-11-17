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

        let roomname = obj.roomname.replace(/\W/g, '');
        if ($(`[value="${roomname}"]`).length === 0) {
          $('#room-select').append(RoomsView.render({ roomname }));
        }

        if (roomname === $('#room-select').val() || 'allroomchat' === $('#room-select').val()) {
          if ($(`#${obj.objectId}`).length === 0) {
            $('#chats').prepend(MessageView.render(obj));
          }
        }





      }
    }), 1000);
  }

};