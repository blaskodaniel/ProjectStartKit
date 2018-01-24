let delayedMessage = (() => {
  var _ref = _asyncToGenerator(function* (message, delay) {
    let remainingTime = yield sleep(delay);
    console.log(message, `(remaining time: ${remainingTime})`);
  });

  return function delayedMessage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function sleep(duration) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(0);
    }, duration);
  });
}

delayedMessage("World", 400).then(() => {
  console.log('done');
});
delayedMessage("Hello", 200);