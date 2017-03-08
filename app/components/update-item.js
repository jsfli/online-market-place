import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateItem(item){
      var params = {
        product: this.get('product'),
        price: this.get('price'),
        quantity: this.get('quantity'),
        description: this.get('description'),
        image: this.get('description'),
      }
    }
  }
});
