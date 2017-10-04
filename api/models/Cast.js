/**
 * Cast.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: {
      type: 'string',
      minLength: 2
    },
    lastName: {
      type: 'string',
      minLength: 2
    },
    email: {
      type: 'string',
      minLength: 2
    },
    title: {
      type: 'string',
      minLength: 2
    },
    // toJSON: function() {
    //   var obj = this.toObject();
    //   obj.start_date = obj.start_date.slice(0,-14);
    //   return obj;
    //   }
    },
    // autoPK: false
  };
