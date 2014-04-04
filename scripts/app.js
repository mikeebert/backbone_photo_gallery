var images = [
  {
   uri: 'images/chaplin.gif',
   thumb: 'images/chaplin_thumb.gif',
   alt: 'Charlie Chaplin',
   caption: 'Charlie Chaplin : are2.tumblr.com'
  },
  {
   uri: 'images/chicago.gif',
   thumb: 'images/chicago_thumb.gif',
   alt: 'Best City in the World',
   caption: 'Chicago : National Geographic'
  },
  {
   uri: 'images/bill.gif',
   thumb: 'images/bill_thumb.gif',
   alt: 'Bill Cosby',
   caption: 'Bill Cosby'
  },
  {
   uri: 'images/cute.gif',
   thumb: 'images/cute_thumb.gif',
   alt: 'Can we keep him?',
   caption: '@emergencypuppy'
  },
  {
   uri: 'images/all_stars.gif',
   thumb: 'images/all_stars_thumb.gif',
   alt: 'Coolest men on Earth',
   caption: 'Twin Peaks + David Bowie : are2.tumblr.com'
  }
]

var thumbs = new Thumbs(images);
var frontView = new FrontView({collection: thumbs});
window.App = new AppView();
window.App.render(thumbs);
