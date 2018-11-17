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

        let cleanRoomName = obj.roomname.replace(/\W/g, '_');
        if ($(`[value="${cleanRoomName}"]`).length === 0) {
          $('#room-select').append(RoomsView.render({
            'roomname': obj.roomname,
            'cleanRoomName': cleanRoomName
          }));
        }

        if (cleanRoomName === $('#room-select').val() || 'allroomchat' === $('#room-select').val()) {
          if ($(`#${obj.objectId}`).length === 0) {
            let $nextchat = $(MessageView.render(obj));
            //$('#chats').prepend(MessageView.render(obj));
            $('#chats').prepend($nextchat);
            $nextchat.on('click', Friends.addFriend);
          }
        }

      }



    }), 1000);
  }

};