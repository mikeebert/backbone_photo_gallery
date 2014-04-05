var Thumbs = Backbone.Collection.extend({
  model: Thumb,

  select: function(model) {
    this.deselectCurrentThumb();
    model.set('select', true);
    this.selected = model;
    this.trigger('thumbs:selected');
  },

  selectedThumb: function() {
    return this.selected;
  },

  deselectCurrentThumb: function() {
    if( this.selectedThumb() ) {
      this.selectedThumb().set('select', false);
    };
  }
});
