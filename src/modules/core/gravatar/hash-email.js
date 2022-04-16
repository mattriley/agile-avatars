import md5 from 'blueimp-md5';

export default () => email => md5(email.trim().toLowerCase());

/* FOOTNOTES

Gravatar email hashing: 
https://en.gravatar.com/site/implement/hash/

*/
