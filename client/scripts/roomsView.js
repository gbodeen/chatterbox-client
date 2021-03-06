var RoomsView = {

  $button: $('#rooms-button'),
  $select: $('#room-select'),

  initialize: function () {
    RoomsView.$button.on('click', RoomsView.addRoomClick);
    RoomsView.$select.on('change', RoomsView.selectRoom)

    // <select id="room-select">
    //     <option value="Lobby">Lobby</option>

  },

  addRoomClick: function (event) {
    let roomName = prompt('Which room?', 'a room with no moose');
    roomName = roomName.replace(/ /g, '_');
    // add a room with that name to the dropdown menu
    // also check if that room already exists
    if ($(`[value="${roomName}"]`).length === 0) {
      $('#room-select').append(`<option value="${roomName}">${roomName}</option>`);
    } else {
      console.log(`Room: ${roomName} already exists.`);
    }
    // "switch to that room" i.e. show tweets from that room
    $(`[value="${roomName}"]`).attr('selected', 'selected');
    $('.chat').remove();
  },

  selectRoom: function (event) {
    console.log('OMG IT WORKY');
    $('.chat').remove();
    // // add a room with that name to the dropdown menu
    // // also check if that room already exists
    // if ($(`[value="${roomName}"]`).length === 0) {
    //   $('#room-select').append(`<option value="${roomName}">${roomName}</option>`);
    // } else {
    //   console.log(`Room: ${roomName} already exists.`);
    // }
    // // "switch to that room" i.e. show tweets from that room
    // $(`[value="${roomName}"]`).attr('selected', 'true');
  },

  render: _.template(`
    <option value="<%- cleanRoomName %>"><%- roomname %></option>
  `)


};
