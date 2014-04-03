var Thumb = Backbone.Model.extend({
  defaults: {
    uri: '',
    state: '',
    thumb: '',
    align: '',
    caption: ''
  },

  select: function(state){
    if (state) {
      this.set('state', 'selected')
    } else {
      this.set('state', '')
    };
  }
});
