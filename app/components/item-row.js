import Ember from 'ember';

export default Ember.Component.extend({
  tagName:"",
  formIsOpen: false,
  actions: {
    showEditForm() {
      this.set('formIsOpen', true);
    },
    updateItem(item) {
      // Ember.$('.item');
      var params = {
        product: this.get('product'),
        price: this.get('price'),
        quantity: this.get('quantity'),
        description: this.get('description'),
        image: this.get('description'),
        soldout: this.get('soldout')
      };
      this.set('formIsOpen',false);
      this.sendAction('updateItem',item, params);
    },
    deleteItem(item) {
      if(confirm('Do you want to delete this Item?')) {
        this.sendAction('deleteItem', item);
      }
    }
  }
});
