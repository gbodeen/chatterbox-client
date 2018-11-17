var MessageView = {

  render: _.template(`
      <div class="chat" id="<%- objectId %>">
        <div class="roomname"><%- roomname %></div> 
        <div class="username"><%- username %></div>
        <div class="text"><%- text %></div>
        <div class="createdAt"><%- createdAt %></div>
      </div>
    `)
};