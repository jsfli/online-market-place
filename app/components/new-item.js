import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewItem() {
      var params = {
        product: this.get('product'),
        price: parseInt(this.get('price')),
        description: this.get('description'),
        quantity: parseInt(this.get('quantity')),
        image: this.get('image'),
        soldout: false
      };
      this.sendAction('addNewItem',params);
      this.set('product',"");
      this.set('price',"");
      this.set('description',"");
      this.set('quantity',"");
      this.set('image',"");
    }
  }
});
