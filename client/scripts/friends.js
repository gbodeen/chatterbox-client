var Friends = {

    initialize: function () {
        //$('.username').on('click', Friends.addFriend);
    },

    //     function(event) {
    //         $('#friendlist').append(friendplate(....))
    //     })
    // ,

    addFriend: function (event) {
        $('#friendlist').append(Friends.friendplate({
            username: event.target.innerText
        }))
    },

    friendplate: _.template(`
        <option value="<%- username %>"><%- username %></option>
    `)

};