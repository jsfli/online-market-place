import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editItem(item){
      this.set('formIsOpen',true);
      this.sendAction('editItem',item,formIsOpen);
    }
  }
});
