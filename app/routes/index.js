import Ember from 'ember';

export default Ember.Route.extend({
model() {
  return Ember.RSVP.hash({
    items: this.store.findAll('item'),
    reviews: this.store.findAll('review')
  });
}
});
