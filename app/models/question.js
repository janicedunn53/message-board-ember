import DS from 'ember-data';

export default DS.Model.extend({
  inquiry: DS.attr(),
  author: DS.attr(),
  description: DS.attr(),
  // date: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
