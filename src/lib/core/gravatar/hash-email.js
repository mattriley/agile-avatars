const md5 = require('blueimp-md5');

module.exports = () => email => md5(email.trim().toLowerCase());

/* FOOTNOTES

Gravatar email hashing: 
https://en.gravatar.com/site/implement/hash/

*/
