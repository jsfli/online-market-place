import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      items: this.store.findAll('item'),
      reviews: this.store.findAll('review')
    });
  },

  actions:{
    addNewItem(params) {
      var newSellItem = this.store.createRecord('item',params);
      newSellItem.save();
    },
    updateItem(item){
      item.save();
    },
    deleteItem(item) {
      item.destroyRecord();
    }
  }
});
