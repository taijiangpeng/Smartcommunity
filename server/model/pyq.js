const {model} = require('mongoose');

module.exports = model('pyq', {
  openid: String,
  url : String,
  name : String,
  text : String,
  imgs : String,
  time : String,
  like : Number
})

// {
//     url : "/images/neighbor/back.png",
//     name : "五五开",
//     text : "的骄傲就是打架就打架收到就掉建设单位",
//     imgs : [
//       '/images/neighbor/back.png',
//       '/images/neighbor/back.png',
//       '/images/neighbor/back.png',
//       '/images/neighbor/back.png',
//     ],
//     time : '2020/08/09 20:03',
//     like : 8,
//     comment : 10
//   },