var FrontView = Backbone.View.extend({
  template: _.template('<img src="<%= uri %>" alt="<%= alt %>" />'),
  captionTemplate: _.template('<img src="<%= uri %>" alt="<%= alt %>" /> <div id="caption"><%= caption %></div>'),

  el: $('#front'),

  initialize: function() {
    this.model.bind('thumbs:selected', this.render, this);
  },

  render: function() {
    selectedImage = this.model.selectedThumb()

    if (selectedImage.get("caption") == '') {
      $(this.el).html(this.template(selectedImage.toJSON()));
    } else {
      $(this.el).html(this.captionTemplate(selectedImage.toJSON()));
    }
  }
});

var frontview = new FrontView({ model: thumbs });
