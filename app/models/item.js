import DS from 'ember-data';

export default DS.Model.extend({
  price: DS.attr(),
  product: DS.attr(),
  description: DS.attr(),
  soldout: DS.attr(),
  quantity: DS.attr(),
  image: DS.attr()
});
