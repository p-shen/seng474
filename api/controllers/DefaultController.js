/**
 * DefaultController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
//var OAuth = require('OAuth');
/*var twitter = require('ntwitter');

var twit = new twitter({
  consumer_key: 'sR6YYGd2FNIKpXdsxAxroA',
  consumer_secret: 'gLbWs6EF5wXkgShMBK1T09IELtRSyXvxxapkMvQirY',
  access_token_key: '128336352-P9AHonzYH94mckcqjVufqEyzykruCm8LwxTAoSCS',
  access_token_secret: 'H8SAibiCaUp49ARTrZEHtNARPwvtIVwDgY3dwIruTx96K'
});*/
var //util = require('util'),
    twitter = require('twitter');
var twitter2 = new twitter({
  consumer_key: 'sR6YYGd2FNIKpXdsxAxroA',
  consumer_secret: 'gLbWs6EF5wXkgShMBK1T09IELtRSyXvxxapkMvQirY',
  access_token_key: '128336352-P9AHonzYH94mckcqjVufqEyzykruCm8LwxTAoSCS',
  access_token_secret: 'H8SAibiCaUp49ARTrZEHtNARPwvtIVwDgY3dwIruTx96K'
});
module.exports = {
    
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to DefaultController)
   */
  _config: {},

	'index' : function(req, res){
		/*var oauth = new OAuth.OAuth(
		      'https://api.twitter.com/oauth/request_token',
		      'https://api.twitter.com/oauth/access_token',
		      'sR6YYGd2FNIKpXdsxAxroA',
		      'gLbWs6EF5wXkgShMBK1T09IELtRSyXvxxapkMvQirY',
		      '1.0A',
		      null,
		      'HMAC-SHA1'
		    );*/
						var tweets = [];
				for(j=0;j<998;j++){
					twitter2.get('https://api.twitter.com/1.1/search/tweets.json', 
						{ 
						latitude:'48.463488', 
						longitude : '-123.309799', 
						radius :'1km',
						count : 100,
						include_entities:true , 
						lang: 'en',
						q :'#'
					}, function(data) {
						console.log(data);
						if(data != undefined && data.statuses != undefined){
							for(i=0;i<data.statuses.length;i++){
								tweets.push(data.statuses[i].text);
								Tweet.create({
								  'tweet': data.statuses[i].text,
								  'location': 'BC'
								}).done(function(err, tweet) {

								  // Error handling
								  if (err) {
								    return console.log(err);

								  // The User was created successfully!
								  }
								});
								tweets.push('');
							}
						}
						//console.log(data);
					    //res.json(data);
					    //console.log(data.statuses.length);
					});
			}
					    res.json(tweets);
		}
	
};
