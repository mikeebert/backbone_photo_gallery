var Thumbs = Backbone.Collection.extend({
  model: Thumb,

  select: function(model) {
    if( this.selectedThumb() ) {
      this.selectedThumb().select(false);
    };
    this.selected = model;
    this.selected.select(true);
    this.trigger('thumbs:selected');
  },

  selectedThumb: function() {
    return this.selected;
  }
});
