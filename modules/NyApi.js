var axios = require("axios");
var api = c78e74dc481c4f2bad48d4a01631a17f;

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + api;

var getFromApi = new Promise(function(resolve,reject){
    axios.get("url").then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
})



module.exports = Api;