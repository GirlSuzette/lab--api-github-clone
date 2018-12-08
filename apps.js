var request = superagent;
var API_URL = "";


var img = document.querySelector(".info__photo__img");
var userName = document.querySelector(".info__userName");
var userGit = document.querySelector(".info__user-github");
var btn = document.querySelector(".info__button");
var work = document.querySelector(".info__work");
var location = document.querySelector(".info__location");
var email = document.querySelector(".info__email");
var web = document.querySelector(".info__web");

// request
//     .get(API_URL)
//     .then(function (response) {
//         var x = response.body
//     })