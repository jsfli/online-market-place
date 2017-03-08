import DS from 'ember-data';

export default DS.Model.extend({
  seller: DS.attr(),
  price: DS.attr(),
  product: DS.attr(),
  description: DS.attr(),
  sold: DS.attr(),
  dateSold: DS.attr(),
});
