var gb2260 = require('gb2260');

// var revisions = gb2260.revisions();
// console.log(revisions.length);

// register revision data
gb2260.register('201410', require('gb2260/lib/201410'));
var gb = new gb2260.GB2260();

function get(value) {
  if(typeof value !== 'string' || value.length !== 18) {
    console.log('invalid value');
    return;
  }
  var localCode = value.substring(0,6);
  var division = gb.get(localCode);
  var locale = division!==null ? division.toString() : '无对应数据';
  return {
    locale: locale,
    birthday: value.substring(6,14),
    sex: value.substring(16,17)%2 === 0 ? '女' : '男'
  }
};
// console.log(get('45222319950814004X'));
// console.log(get('330722197609192116'));
// console.log(get('430421197710177894'));

exports.get = get;
