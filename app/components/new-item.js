import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewItem() {
      var params = {
        product: this.get('product'),
        price: parseInt(this.get('price')),
        description: this.get('description'),
        quantity: parseInt(this.get('quantity')),
        soldout: false
      };
      this.sendAction('addNewItem',params);
    }
  }
});
