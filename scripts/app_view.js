var AppView = Backbone.View.extend({
  el: $('#gallery-container'),

  render: function(thumbs) {
    _.each( thumbs.models, function(thumb) {
        thumbView = new ThumbView({ model: thumb });
        $('div ul#thumbnails').append( thumbView.render().el )
      });
    var firstThumb = thumbs.models[0];
    thumbs.select(firstThumb);
  }
});
