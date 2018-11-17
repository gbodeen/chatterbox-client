



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

let badmessage = {
    username: 'username',
    text: soGood,
    roomname: 'lobby'
};

Parse.create(badmessage2);