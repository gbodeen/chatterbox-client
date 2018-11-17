var Friends = {

    initialize: function () {
        $('#friendlist').on('change', Friends.selectfriend);
        window.friendlist = [];

        //$('.username').on('click', Friends.addFriend);
    },

    //     function(event) {
    //         $('#friendlist').append(friendplate(....))
    //     })
    // ,

    addFriend: function (event) {

        $('#friendlist').append(Friends.friendplate({
            username: event.target.innerText
        }));
        let name = Friends.shortfriendname({ username: event.target.innerText });
        // console.log(name);
        window.friendlist.push(name);
        $('#friendlist').val(name);
        Friends.selectfriend();
    },

    friendplate: _.template(`
        <option value="<%- username %>"><%- username %></option>
    `),

    shortfriendname: _.template(`<%- username %>`),

    selectfriend: function (event) {
        console.log('OMG IT WORKY'); // Always watching...
        $('.chat').remove();

    }
};