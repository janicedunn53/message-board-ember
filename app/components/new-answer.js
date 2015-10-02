import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer(question) {
      var params ={
        content: this.get('content'),
        author: this.get('author'),
        date_added: Date.now(),
        question: question
      };
      this.set('addNewAnswer', false),
      this.sendAction('saveAnswer', question, params);
    }
  }
});
