const news = require( "./news/router.js");
const categories = require( "./categories/router.js");
const subscribers = require("./subscribers/router.js") ;
const messages = require("./messages/router.js") ;
const foods = require("./foods/router.js") ;
const votes = require("./votes/router.js") ;

module.exports = [news, categories, subscribers, messages, foods, votes];
