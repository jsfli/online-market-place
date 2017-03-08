import DS from 'ember-data';

export default DS.Model.extend({
  itemRating: DS.attr(),
  itemFeedback: DS.attr(),
  timeStamp: DS.attr(),
});
