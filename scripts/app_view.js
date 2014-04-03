var AppView = Backbone.View.extend({
  el: $('#gallery-container'),

  render: function() {
    // thumbs.fetch(images);
    _.each( thumbs.models, function(thumb) {
        $('div ul#thumbnails').append( new ThumbView({ model: thumb }).render().el )
      });
    var firstThumb = thumbs.models[0];
    thumbs.select(firstThumb);
  }
});
