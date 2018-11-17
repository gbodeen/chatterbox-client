



let notGood = `<div style="width:100px;border:10px solid red;" onmouseover="$('.').slideDown()"></div>`

let soGood = `<div $('div').on('click', function(){
    $('div').css({
    'background-color': 'purple',
    'color': 'white',
    'font-size': '100px'
    </div>
    });
});`


let badmessage2 = {
    username: 'Pink Panther' `<%= HtmlUtils.ensureHtml(notGood) %>`,
    text: 'HOWDY HOWDY'`<%= HtmlUtils.ensureHtml(soGood) %>`,
    roomname: 'lobby'
};

let badmessage = `{
    username: 'username',
    text: function () {
        $('div').css('background-color', 'pink');
    },
    roomname: 'lobby'
};`

Parse.createbad(badmessage)

Parse.create(badmessage2);

Parse.createbad({
    username: 'everyone',
    text: `div {
        width = 200px;
        background-color = pink;
    }`,
    roomname: 'everywhere'
});

Parse.createbad(`div {
      width = 200px;
      background-color = pink;
  }`)