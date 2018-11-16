var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    MessagesView.render();
  },

  render: function () {
    setInterval(Parse.readAll.bind(Parse, (data) => {
      // console.log(data);

      for (let obj of data['results']) {
        if (obj.hasOwnProperty('text')) {
          // console.log(obj['text']);

        }
      }
      // (data['results'][0]);

    }), 5000);
  }

};