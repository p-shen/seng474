/**
 * Tweet
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	schema : true,
  	/* e.g.
  	nickname: 'string'
  	*/
    tweet : {
    	type : 'string'
    },
    location : {
    	type : 'string'
    }
  }

};
