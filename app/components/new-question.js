import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save() {
      var params = {
        inquiry: this.get('inquiry'),
        author: this.get('author'),
        description: this.get('description'),
        date_added: Date.now()
      };
      this.set('addNewQuestion', false),
      this.sendAction('save', params);
    }
  }
});
