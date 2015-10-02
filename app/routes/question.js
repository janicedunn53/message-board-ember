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
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question_id);
    },

    destroyAnswer(answer) {
      answer.destroyRecord().then(function() {
        question.save();
      });
      this.transitionTo('question');
    }

    // destroyQuestion(question) {
    //   var answer_deletions = question.get('answers').map(function(answer) {
    //     return answer.destroyRecord();
    //   });
    //   Ember.RSVP.all(answer_deletions)
    //     .then(function() {
    //       return question.destroyRecord();
    //     })
    //   this.transitionTo('index');
    // }
  }
});
