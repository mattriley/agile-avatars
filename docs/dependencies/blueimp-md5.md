`blueimp-md5` is used to hash email addresses for use with the Gravatar service.

- [x] __Not simply chosen due to hype or popularity__\
      `blueimp-md5` is not the most widely used MD5 implementation in JavaScript. 
- [x] __No suitable built-in JavaScript alternative exists__\
      JavaScript does not feature a built-in MD5 implementation.
- [x] __Not trivial to implement with vanilla JavaScript__\
      The MD5 algorithm is non-trivial and is a well solved problem.
- [x] __No suitable built-in Node.js equivalent exists__\
      The `crypto` module supports MD5. It doesn't seem possible to extract individual algorithms from crypto. The consequence is a minified bundle size of 431.78 KB compared with 4.86 KB for `blueimp-md5` which is a significant difference.
- [x] __No alternative that more closely matches the need exists__
      According to [this issue](https://github.com/blueimp/JavaScript-MD5/issues/26), the original use case was to hash email addresses for Gravatar.
- [x] __No alternative with fewer dependencies exists__\
      `blueimp-md5` has zero dependencies. `md5` although more more widely used, has 3 dependencies.
- [x] __Widely used__\
      `blueimp-md5` is widely used at 565,584 weekly downloads. `md5` is more widely used at 2,676,589 weekly downloads.
- [x] __Usage is isolated__
- [x] __Low maintenance__
- [x] __Low likelihood of changing in a material way__
- [x] __Low impact of material change__\
      The cost of identifying and integrating an alternative MD5 implementation is low.
