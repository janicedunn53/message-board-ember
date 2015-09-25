import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id),
      answers: this.store.query('answer', {filter: {question: params.question_id}})
    });
  },

  actions: {
    saveAnswer(question, params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      question.save();
      this.transitionTo('question', params.question_id);
    }
  }
});
