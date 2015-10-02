import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    update(question) {
      var params = {
        inquiry: this.get('inquiry'),
        author: this.get('author'),
        description: this.get('notes'),
        // date: this.get('date')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question,params);
    }
  }
});
