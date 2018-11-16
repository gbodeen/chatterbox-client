var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    let message = {
      username: 'CornerTeam',
      text: '',
      roomname: ''
    };

    message.text = $('#message').val();
    message.roomname = $('#room-select').val();

    Parse.create(message);
    console.log('click!', message);
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};