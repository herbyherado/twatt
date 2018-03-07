require('dotenv').config()
const OAuth = require('oauth')

const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.USER_TOKEN,
    process.env.USER_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  );

  module.exports = {
      tweet: (req, res) => {
          oauth.post(
          'https://api.twitter.com/1.1/statuses/update.json',
          process.env.TOKEN, //test user token 
          process.env.SECRET, //test user secret
          {status: req.body.status},             
          function (err, data){
            if (err) console.error(err);        
            res.send(data);
          });    
      },
      home_timeline: (req, res) => {
        oauth.get(
        'https://api.twitter.com/1.1/statuses/home_timeline.json',
        process.env.TOKEN, //test user token 
        process.env.SECRET, //test user secret
        function (err, data){
          if (err) console.error(err);        
          res.send(data);
        });    
    },
    search: (req, res) => {
        oauth.get(
        'https://api.twitter.com/1.1/search/tweets.json?q=' + req.params.search,
        process.env.TOKEN, //test user token 
        process.env.SECRET, //test user secret
        function (err, data){
          if (err) console.error(err);        
          res.send(data);
        });    
    },
  }
    