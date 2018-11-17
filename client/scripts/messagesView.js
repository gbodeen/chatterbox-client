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
          if ($('#friendlist').val() === Friends.shortfriendname(obj) || $('#friendlist').val() === 'allfriends') {
            if ($(`#${obj.objectId}`).length === 0) {
              let $nextchat = $(MessageView.render(obj));
              //$('#chats').prepend(MessageView.render(obj));
              $('#chats').prepend($nextchat);
              if (window.friendlist.includes(obj.username)) {
                $nextchat.children('.text').addClass('friend');
              }
              $nextchat.children('.username').on('click', Friends.addFriend);
            }
          }
        }

        // if (window.friendlist.includes(obj.username)) {
        //   $('.username')
        // }
        //   if ($(''))
      }

      // $('.username')


    }), 1000);
  }

};